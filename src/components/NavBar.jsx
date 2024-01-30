import { useNavigate } from "react-router-dom"
import { Container, Grid, Button } from "@mui/material"

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <Container sx={{ marginTop: "2rem", color: "#ffffff", justifyContent: "center" }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Button onClick={() => navigate('/')} color="inherit">Home</Button>
                    <Button onClick={() => navigate('/currency')} color="inherit">Currency</Button>
                    <Button onClick={() => navigate('/bmi')} color="inherit">BMI</Button>
                    <Button onClick={() => navigate('/temperature')} color="inherit">Temperature</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Navbar
