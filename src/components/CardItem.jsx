import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';

const CardItem = ({data, handleFavorites}) => {

const {title, description, price, id, images} = data;


  return (
    <Col>
    <Card id={id} style={{ width: '18rem', backgroundColor: 'black'}}>
      <Card.Img variant="top" src={'https://catherineasquithgallery.com/uploads/posts/2021-02/1612903211_11-p-krasnie-almazi-fon-13.png'} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>{price} btc</Card.Text>
        <Button onClick={() => handleFavorites(data)} variant="primary">Add</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default CardItem
