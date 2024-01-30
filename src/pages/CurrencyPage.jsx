import { Box, Container, Grid, Typography} from '@mui/material';
import InputAmount from '../components/InputAmount';
import SelectCountry from '../components/SelectCountry';
import SwitchCountry from '../components/SwitchCurrency';
import Navbar from '../components/NavBar';
import { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import axios from 'axios';

const Currencypage = () => {

    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
      } = useContext(CurrencyContext);
      const [resultCurrency, setResultCurrency] = useState(0)
      const codeFromCurrency = fromCurrency.split(" ")[1]
      const codeToCurrency = toCurrency.split(" ")[1]
      console.log(resultCurrency)

    useEffect(() => {
        if(firstAmount){
            axios("https://api.freecurrencyapi.com/v1/latest",{
                params: {
                    apikey: "fca_live_BD6gNOTys3bLFTGkShvlURPe4kHCz4hxSrQ8kZNC",
                    base_currency: codeFromCurrency,
                    currencies: codeToCurrency
                }
            })
            .then(response => setResultCurrency(response.data.data[codeToCurrency]))
            .catch(error => console.log(error))
        }
    }, [firstAmount])

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
                <Typography variant='h5' sx={{marginTop: "2rem", marginBottom: "2rem"}}>Stay Ahead With Accurate Conversions</Typography>
                <Grid container spacing={2}>
                    <InputAmount/>
                    <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
                    <SwitchCountry/>
                    <SelectCountry value={toCurrency} setValue={setToCurrency} label="To"/>
                </Grid>
                {firstAmount ? (
                    <Box sx={{textAlign: "left", marginTop: "1rem"}}>
                        <Typography>{firstAmount} {fromCurrency} =</Typography>
                        <Typography variant='h5' sx={{marginTop: "5px", fontWeight: "bold"}}>{resultCurrency*firstAmount} {toCurrency}</Typography>
                    </Box>
                ): ""}
            </Container>
        </>
    )
}

export default Currencypage