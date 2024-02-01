import Navbar from "../components/NavBar"
import { Container, Typography, TextField } from "@mui/material"
import { useState } from "react";

const DiscountPage = () => {
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [finalPrice, setFinalPrice] = useState('');
  
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
    
    const handlePriceChange = (e) => {
        const inputValue = parseFloat(e.target.value);
        setPrice(isNaN(inputValue) ? '' : inputValue);
        const discountedPrice = !isNaN(inputValue) ? inputValue - (inputValue * discount) / 100 : '';
        setFinalPrice(discountedPrice !== '' ? discountedPrice.toFixed(2) : '');
    };

    const handleDiscountChange = (e) => {
        const inputValue = parseFloat(e.target.value);
        setDiscount(isNaN(inputValue) ? '' : inputValue);
        const discountedPrice = !isNaN(inputValue) ? price - (price * inputValue) / 100 : '';
        setFinalPrice(discountedPrice !== '' ? discountedPrice.toFixed(2) : '');
    };

    return(
        <>        
            <Navbar/>
            <Container maxWidth="md" sx={boxSyles}>
                <Typography variant='h5' sx={{marginTop: "2rem", marginBottom: "2rem"}}>Count your Flash Sale</Typography>
                <TextField
                    label="Price"
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Discount (%)"
                    type="number"
                    value={discount}
                    onChange={handleDiscountChange}
                    fullWidth
                    margin="normal"
                />
                {finalPrice !== '' && (
                    <Typography variant="h6" gutterBottom>
                        Final Price after Discount: {finalPrice}
                    </Typography>
                )}
            </Container>
        </>
    )
}

export default DiscountPage
