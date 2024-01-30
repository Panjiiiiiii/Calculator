import React, { useState, useEffect } from 'react';
import { TextField, Typography, Grid, Container } from '@mui/material';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  useEffect(() => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));

      // Menentukan kategori BMI
      if (bmi < 18.5) {
        setBmiCategory('Underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setBmiCategory('Normal weight');
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setBmiCategory('Overweight');
      } else {
        setBmiCategory('Obesity');
      }
    } else {
      setBmiResult(null);
      setBmiCategory('');
    }
  }, [height, weight]);

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Height (cm)"
            variant="outlined"
            fullWidth
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Weight (kg)"
            variant="outlined"
            fullWidth
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Grid>
        {bmiResult && (
          <Grid item xs={12}>
            <Typography variant="h6" align="left">
              Your BMI: {bmiResult}
            </Typography>
            <Typography variant="h6" align="left">
              Category: {bmiCategory}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default BMICalculator;
