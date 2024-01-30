import React, { useState, useEffect } from 'react';
import { TextField, Typography, Grid, Container, MenuItem } from '@mui/material';

const TemperatureConverter = () => {
  const [temperatureValue, setTemperatureValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('celsius');
  const [convertedTemperatures, setConvertedTemperatures] = useState(null);

  useEffect(() => {
    if (temperatureValue) {
      const value = parseFloat(temperatureValue);
      let convertedCelsius, convertedFahrenheit, convertedKelvin, convertedReamur;

      switch (selectedUnit) {
        case 'celsius':
          convertedCelsius = value;
          convertedFahrenheit = (value * 9 / 5) + 32;
          convertedKelvin = value + 273.15;
          convertedReamur = value * 0.8;
          break;
        case 'fahrenheit':
          convertedCelsius = (value - 32) * 5 / 9;
          convertedFahrenheit = value;
          convertedKelvin = (value - 32) * 5 / 9 + 273.15;
          convertedReamur = (value - 32) * 4 / 9;
          break;
        case 'kelvin':
          convertedCelsius = value - 273.15;
          convertedFahrenheit = (value - 273.15) * 9 / 5 + 32;
          convertedKelvin = value;
          convertedReamur = (value - 273.15) * 0.8;
          break;
        case 'reamur':
          convertedCelsius = value * 1.25;
          convertedFahrenheit = (value * 2.25) + 32;
          convertedKelvin = value * 1.25 + 273.15;
          convertedReamur = value;
          break;
        default:
          break;
      }

      setConvertedTemperatures({
        celsius: convertedCelsius.toFixed(2),
        fahrenheit: convertedFahrenheit.toFixed(2),
        kelvin: convertedKelvin.toFixed(2),
        reamur: convertedReamur.toFixed(2),
      });
    } else {
      setConvertedTemperatures(null);
    }
  }, [temperatureValue, selectedUnit]);

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Temperature"
            variant="outlined"
            fullWidth
            value={temperatureValue}
            onChange={(e) => setTemperatureValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="Unit"
            variant="outlined"
            fullWidth
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
          >
            <MenuItem value="celsius">Celsius</MenuItem>
            <MenuItem value="fahrenheit">Fahrenheit</MenuItem>
            <MenuItem value="kelvin">Kelvin</MenuItem>
            <MenuItem value="reamur">Reamur</MenuItem>
          </TextField>
        </Grid>
        {convertedTemperatures && (
          <>
            <Grid item xs={12}>
              <Typography variant="h6" align="left">
                Celsius: {convertedTemperatures.celsius}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="left">
                Fahrenheit: {convertedTemperatures.fahrenheit}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="left">
                Kelvin: {convertedTemperatures.kelvin}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="left">
                Reamur: {convertedTemperatures.reamur}
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default TemperatureConverter;
