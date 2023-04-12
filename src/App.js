import './App.css';
import CardItem from './components/CardItem';
import { Row, Container} from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const urlApi = 'http://localhost:3004/products'

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(urlApi)
      setProducts(response.data)
    }
    
    fetchData()
  }, [])
  // https://api.escuelajs.co/api/v1/products?offset=0&limit=8

  const handleFavorites = (item) => {
    setFavorites([...favorites, item])
  }

  const handleRemoveFavorites = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id)
    setFavorites(newFavorites)
  }

  return (
    <Container>
      <Button variant="outline-warning" size="lg" onClick={handleShow}>
        <BsCart/>
      </Button>
      
      <Row>
        {products.map((item) => {
         return <CardItem handleFavorites={handleFavorites} key={item.id} data={item}/>
        })}
      </Row>
        <Cart show={show} handleRemoveFavorites={handleRemoveFavorites} favorites={favorites} handleClose={handleClose}/>
    </Container>
  );
}

export default App;