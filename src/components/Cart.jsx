import React from 'react'
import { Offcanvas } from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";

const Cart = ({show, handleRemoveFavorites, handleClose, favorites}) => {
    const renderFavorites = () => {
        return favorites
          .map((item) => item.price)
          .reduce((acc, price) => acc+=price, 0)
      }

  return (
    <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Total Price: {
        favorites.length !== 0 ?
        renderFavorites() : <h3>Empty cart</h3>
        }
        </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body >
      {favorites.map((item) =>
      
      <div style={{ backgroundColor: "#d08200", padding: "20px", margin: "20px"}} >
        <img src={item.images} width="100%" height="180px" alt="" />
        <div>
          <div>
        <h3 key={item.id}>
        {item.title}
        </h3>
        <p>{item.description}</p>
        </div>
        <div>
        <BsFillTrashFill onClick={() => handleRemoveFavorites(item.id)}/>
        <p style={{ float: "right", marginRight: "20px"}}>coast: {item.price} euro</p>
        </div>
        </div>
        
       
       </div>
       )}
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default Cart