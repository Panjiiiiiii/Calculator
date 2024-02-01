import Navbar from "../components/NavBar"
import { Container, Typography, TextField, Button } from "@mui/material"
import { useState } from "react";

const InterestPage = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');
  
    const calculateMonthlyPayment = () => {
      const principal = parseFloat(loanAmount);
      const rate = parseFloat(interestRate) / 100 / 12;
      const term = parseFloat(loanTerm);
      const tax = parseFloat(taxRate) / 100;
  
      const monthlyInterest = Math.pow(1 + rate, term) * rate;
      const monthlyPayment = (principal * monthlyInterest) / (Math.pow(1 + rate, term) - 1) + (principal * tax) / term;
  
      setMonthlyPayment(monthlyPayment.toFixed(2));

    }

    const boxSyles = {
        marginTop: "10rem",
        background: "#fdfdfd",
        textAlign: "center",
        color: "#222",
        minHeight: "20rem",
        borderRadius: 2,
        padding: "4rem 2rem",
        boxShadow: "0px 8px 36px 0px rgba(0,0,0,0.1)",
        position: "relative"
    }
    return(
        <>
            <Navbar/>
            <Container maxWidth="md" sx={boxSyles}>
                <Typography variant='h5' sx={{marginTop: "2rem", marginBottom: "2rem"}}>Pay your Dwbt now</Typography>
                <TextField
                    label="Loan Amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                 <TextField
                    label="Interest Rate (%)"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Loan Term (months)"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                 <TextField
                    label="Tax Rate (%)"
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={calculateMonthlyPayment}>
                    Calculate
                </Button>
                {monthlyPayment && (
                    <Typography variant="h6" gutterBottom>
                    Monthly Payment: {monthlyPayment}
                    </Typography>
                )}
            </Container>
        </>
    )
}

export default InterestPage