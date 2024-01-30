import React, { useState } from 'react';
import { Grid, Button, TextField, Typography } from '@mui/material';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+'
  ];

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ maxWidth: '300px', margin: 'auto', marginTop: '20px' }}>
      <Grid item xs={12}>
        <TextField
          label="Expression"
          variant="outlined"
          fullWidth
          value={expression}
          disabled
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Result"
          variant="outlined"
          fullWidth
          value={result}
          disabled
        />
      </Grid>
      {buttons.map((button, index) => (
        <Grid key={index} item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick(button)}
            style={{ height: '60px' }}
          >
            {button}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Calculator;
