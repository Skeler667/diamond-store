import './App.css';
import CardItem from './components/CardItem';
import { Row, Container} from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Dropdown, Navbar } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import { BsCart } from "react-icons/bs";
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const urlApi = 'http://localhost:3004/products';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(urlApi)
      setProducts(response.data)
    }
    
    fetchData()
  }, [])
  // https://api.escuelajs.co/api/v1/products?offset=0&limit=8

  const handleFavorites = (item) => {
    console.log(item)
    setFavorites([...favorites, item])
  }

  const handleRemoveFavorites = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id)
    setFavorites(newFavorites)
  }

  const handleFiltrationPods = () => {
    const urlSystems = 'http://localhost:3004/products/?category=pod';
    const fetchData = async () => {
      const response = await axios.get(urlSystems)
      setProducts(response.data)
    }
    fetchData();
  }

  const handleFiltrationFluid = () => {
    const urlFluid = 'http://localhost:3004/products/?category=fluid';
    const fetchData = async () => {
      const response = await axios.get(urlFluid)
      setProducts(response.data)
    }
    fetchData();
  }

  const handleFiltrationDisposable = () => {
    const urlApi = 'http://localhost:3004/products/?category=disposable';
    const fetchData = async () => {
      const response = await axios.get(urlApi)
      setProducts(response.data)
    }
    
    fetchData()
  }

  const handleFiltrationReset = () => {
    const urlApi = 'http://localhost:3004/products';
    const fetchData = async () => {
      const response = await axios.get(urlApi)
      setProducts(response.data)
    }
    
    fetchData()
  }

  return (
    <Container>
      <Navbar className='navbar bg-black' sticky="top">
      <Stack direction="horizontal" gap={2}>
      <div className='navbar__cart m-1 p-2'> 
      <Button variant="outline-warning" size="md" onClick={handleShow}>
      <p> Корзина <BsCart/></p>
      </Button>
      </div>
      <div className='navbar__filtration m-2 p-2 ms-auto'>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant='outline-warning' id="dropdown-custom-1">Каталог</Dropdown.Toggle>
        <Dropdown.Menu className="super-colors bg-black">
          <Dropdown.Item className='dropdown__el' onClick={() => handleFiltrationPods()} eventKey="1">Под-устройства</Dropdown.Item>
          <Dropdown.Item className='dropdown__el' onClick={() => handleFiltrationDisposable()} eventKey="2">Одноразовые устрайства</Dropdown.Item>
          <Dropdown.Item className='dropdown__el' onClick={() => handleFiltrationFluid()} eventKey="3">Жижа</Dropdown.Item>
          <Dropdown.Item className='dropdown__el' onClick={() => handleFiltrationReset()} eventKey="4">Все товары</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      </Stack>
      </Navbar>

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