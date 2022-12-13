import { Card, Divider } from "@mui/material";
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart)
  console.log(cartItems)
            return (
              <>
                    {Object.values(cartItems).map((item) => (
                    <>
                    <div>
                    <p>
                        <strong>Item Name:</strong>{' '}
                        {
                          item.menuname
                        }
                        </p>
                        <p>
                        <strong>Quantity:</strong>{' '}
                        {
                          item.quantity
                        }
                        </p>
                        <p>
                        <strong>Amount:</strong>{' '}
                        {item.price * item.quantity}
                        </p>
                        <h4>Total Amount: {item.amount * item.quantity} </h4>
                    </div>
                    <Divider />
                    </>
                    ))}
            <Divider />

           
      </>
  );
  
};

export default Cart;
