import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';

const CardItem = ({data, handleFavorites}) => {

const {title, description, price, id, sailed, images} = data;


  return (
    <Col>
    <Card id={id} style={{ width: '18rem', backgroundColor: sailed ? 'orange' : 'black', color: sailed ? '#393E46' : 'black'}}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: sailed ? '#393E46' : ''}}>
          {description}
        </Card.Text>
        <Card.Text className='price'>{price} btc</Card.Text>
        <Button variant="outline-dark" onClick={() => handleFavorites(data)}>Add</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default CardItem
