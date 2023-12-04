import React, { useEffect, useState } from 'react';
import { Button, Card, ButtonGroup, CardTitle, CardHeader, CardFooter } from 'reactstrap';
import { getUserCartByFirebaseId } from '../../modules/cartManager';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteCartItem } from '../../modules/cartManager';
import { updateCart } from '../../modules/cartManager';

const ShoppingCart = ({ user, cartItem, cart, products, product }) => {
  const [cartItems, setCartItems] = useState([])
  const firebaseUserId = user.firebaseUserId;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getUserCartByFirebaseId(firebaseUserId).then(setCartItems);
  }, [])


  const handleDelete = (cartItem) => {
    deleteCartItem(cartItem.id).then(getUserCartByFirebaseId(firebaseUserId).then(setCartItems))
  }

  const handleCheckout = () => {
    setCartItems([...cartItems])
    navigate(`/shoppingcart/checkout`, { state: { background: location } })
  };


  useEffect(() => {
    getUserCartByFirebaseId(firebaseUserId).then(setCartItems);
  }, [])

  return (
    <>
      <Card className="cart-summary">
        <CardTitle tag="h3">Shopping Cart</CardTitle>
        <hr></hr>
        <div className="col">
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} >
              <div className="box" style={{ size: "20%" }}>
                <img src={cartItem.product.productImage} alt="" />
                <br></br><h6>
                  {cartItem.product.productName}
                </h6>
                <br></br>
                <h5>{cartItem.product.name}</h5>
                Price: ${cartItem.product.price * cartItem.quantity}
                <br></br>
                Quantity: {cartItem.quantity}
                <br></br>
                <ButtonGroup>


                  <Button color="secondary" size="sm" onClick={() => handleDelete(cartItem)}>Remove Item</Button>
                </ButtonGroup>
                <hr></hr>
              </div>
            </div>
          ))}
          <CardFooter>
            <h5>Subtotal: ${cartItems.reduce((sum, cartItem) => sum + (cartItem.product.price * cartItem.quantity), 0)}</h5>
            <Button color="primary" size="sm" onClick={handleCheckout}>Proceed to Checkout</Button>

          </CardFooter>
        </div>
      </Card>
    </>
  );
};

export default ShoppingCart;
// { cartItem.product?.productImage }
{/* <Checkout cartItems={cartItems} cart={cart} cartItem={cartItem} setCartItems={setCartItems} /> */ }

export const handleTotal = (cartItems) => {
  const total = cartItems.reduce((sum, cartItem) => sum + (cartItem.product.price * cartItem.quantity), 0)
}