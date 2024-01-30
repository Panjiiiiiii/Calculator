import BMICalculator from "../components/BMICalc"
import Navbar from "../components/NavBar"
import { Container,Typography } from "@mui/material"


const BMIpage = () => {
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
                <Typography variant='h5' sx={{marginTop: "2rem", marginBottom: "2rem"}}>Convert Your IMB Here</Typography>
                <BMICalculator/>
            </Container>
        </>
    )
}

export default BMIpage