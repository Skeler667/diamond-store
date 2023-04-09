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
    <Offcanvas.Body>
      {favorites.map((item) => <h3 key={item.id}>{item.title}
      <BsFillTrashFill
       onClick={() => handleRemoveFavorites(item.id)}
       />
       </h3>)}
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default Cart