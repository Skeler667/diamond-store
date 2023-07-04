import React from 'react'
import { Offcanvas, Button } from 'react-bootstrap';
import { BsFillTrashFill, BsCheck2 } from "react-icons/bs";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Cart = ({show, handleRemoveFavorites, handleClose, favorites}) => {



  const [shew, setShow] = useState(false);


    const renderFavorites = () => {
        return favorites
          .map((item) => item.price)
          .reduce((acc, price) => acc+=price, 0)
      }

  return (
    <Offcanvas show={show} onHide={handleClose}>
        <Alert show={shew} variant="success">
        <Alert.Heading>Оформление заказа</Alert.Heading>
        <p>
          Для оформления заказа вам нужно собрать 3 миллиарда ебучих наклеек чтобы получить скидку в 1 рубль. Но сначала оплатите товар с комиссией 16⁸ процента и оформите валютную ипотеку на всех членов семьи.
        </p>
        <hr />
        <div className='d-flex justify-content-center'>
        <div className="m-1">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Отмена
          </Button>
        </div>
        <div className="m-1">
        <Button onClick={() => alert('На вас оформлен микро-кредит под 223% ежедневно')} variant="outline-danger">
            Не нажимай
          </Button>
          </div>
          </div>
      </Alert>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title style={{color:"white"}}>
        Итого: {
        favorites.length !== 0 ?
        `${renderFavorites()} руб.` : <h3>Корзина пустая</h3>
        }
        </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body >
      {favorites.map((item) =>
      
      <div key={item.id} style={{ backgroundColor: "#000218", padding: "2px", margin: "20px", color:"#0d6efd"}} >
        <img style={{marginBottom:"2%"}} src={item.images} width="100%" height="320px" alt="" />
        <div>
          <div>
        <h3 style={{margin:"2%"}} key={item.id}>
        {item.title}
        </h3>
        <p style={{margin:"2%"}}>{item.description}</p>
        </div>
        <div className='d-flex'>
          <div  className='d-flex' style={{color:"red", marginTop:"2%"}} onClick={() => handleRemoveFavorites(item.id)}>
            <p>Удалить</p>
          <BsFillTrashFill style={{fontSize:"18px"}} className='m-1'/>
          </div>
          <div className='d-flex' style={{color:"lightgreen", marginTop:"2%", marginLeft:"2%"}} onClick={() => alert('Для покупки нажмите на кнопку "Оформить"')}>
            <p>Купить</p>
          <BsCheck2 style={{fontSize:"22px"}} className='m-1'/>
          </div>
        <p style={{margin:"2%"}}>Цена: {item.price} руб.</p>
        </div>
        </div>
        
       
       </div>
       )}
    </Offcanvas.Body>
    {favorites.length !== 0 ? <Button onClick={() => setShow(true)}>Оформить</Button> : '' }
  </Offcanvas>
  
  )
}

export default Cart