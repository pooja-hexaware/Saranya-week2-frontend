import { Button, CardContent, Typography ,Card,CardActionArea, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Restaurant = () => {
    const navigate = useNavigate();
    const rest = useSelector((state)=>state.rest.restaurant)

    return (
      
         <>
            <Typography gutterBottom variant="h5" component="div"  color="text.primary">
                <h1>
                    <b>Restaurants List</b>
                </h1>
            </Typography><>
        <div style={{backgroudImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREArxsdwlp4Z3LKPOiIlc7g0hddxhzuP6bw&usqp=CAU")`}}>

    
                <Card sx={{ maxWidth: 500, marginLeft: 20, backgroundColor: "lightGreen" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="150"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Royal_Rajasthani_Thali_at_Suvarna_Mahal%2C_Ram_Bagh_Hotel%2C_Jaipur.jpg/1200px-Royal_Rajasthani_Thali_at_Suvarna_Mahal%2C_Ram_Bagh_Hotel%2C_Jaipur.jpg"
                            alt="green iguana" />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component="div">
                            GemX MultiCuisine Restaurant
                        </Typography>
                        <Button onClick={() => navigate("/menu")}>World's Best Restaurant</Button>
                    </CardContent>
                </Card>
            <br />
            <Card sx={{  maxWidth: 500, marginLeft: 20, backgroundColor: "lightBlue" }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREArxsdwlp4Z3LKPOiIlc7g0hddxhzuP6bw&usqp=CAU"
                    alt="green iguana"
                    />
                </CardActionArea>
                <CardMedia>
                    <Typography gutterBottom variant="h5" component="div">
                        A2B Restaurant
                    </Typography>
                    <Button onClick={() => navigate("/menu")} >We serve delicious food</Button>
                </CardMedia>
            </Card>
            </div>
            
            </>
            </>
    )
}

export default Restaurant

