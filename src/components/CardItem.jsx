import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';

const CardItem = ({data, handleFavorites}) => {

const {title, description, price, id, sailed, images} = data;

  return (
    <Col>
    <Card className='border border-primary' id={id} style={{ width: '18rem', backgroundColor: sailed ? 'orange' : 'black', color: sailed ? '#393E46' : '#4e555f', marginBottom:'24px'}}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: sailed ? '#393E46' : ''}}>
          {description}
        </Card.Text>
        <Card.Text className='price'>{price} руб.</Card.Text>
        <Button variant="outline-warning" onClick={() => handleFavorites(data)}>В корзину</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default CardItem
