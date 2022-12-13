import {Button, Card,CardActionArea,CardContent,Typography} from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from "./store/menu.actions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import MenuItem from "./menuItem";

const Menu = () =>{

    const dispatch = useDispatch();
    const homemenu = useSelector((state)=>state.menu.menu)
    const navigate = useNavigate();
    const totalCount = useSelector((state) => state.cart.totalCount)


    useEffect(()=>{
        dispatch(fetchMenu());},[]
    );

    return (
        <div style={{ backgroundImage: `url("https://assets.cntraveller.in/photos/632dc951969e60ec08d35e9a/3:2/w_1776,h_1184,c_limit/Food%20Shots%20by%20Madam%20Chutney.jpg")` }}>
            <center>
               <Card>
                <section style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <h4>WIWI FOOD APP</h4>
                <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => navigate('/cart')}
                    >
                    <ShoppingCartIcon />
                    Cart {totalCount}
                    </Button>
                </section>
                </Card>
                
                <br />
                <Card sx={{ maxWidth: 545, backgroundColor: 'lightblue' }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Good food, Great time
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our chefs at WiWi make delicious food selections every week, you pick, we cook and deliver.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br />
                <br />
                <div>
                    {homemenu.map((menu) =>{ 
                        return(
                        <>
                            <MenuItem menu={menu}/>
                        </>
                        )
                    })
                }
                </div>
                </center>
            </div>
        
    )
}

export default Menu;