/*function MyButton(props) {
  return(
    <button>{props.label}</button>
  );
};

export default function App() {
  return (
    <MyButton label="Mi primer botón!" />
  );
};*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function App() {
  const[anfibios, setAnfibios] = useState([]);
  
  useEffect(
    () => {
      fetch("/amphibians")
      .then(response => response.json())
      .then(data => setAnfibios(data))
      .catch(error => console.log("Error: ", error));
    }, []
  );

  return (
    <Container className='py-4'>
      <h1 className='text-center mb-4'>Lista de Anfibios</h1>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {
          anfibios.map(
            (anfibio, idx) => (
              <Col key={idx}>
                <Card>
                  
                  <Card.Body>
                    <Card.Title>{anfibio.name}</Card.Title>
                    <Card.Subtitle>{anfibio.type}</Card.Subtitle>
                    <Card.Text>{anfibio.description}</Card.Text>
                  </Card.Body>
                  <Card.Img variant='bottom' src={anfibio.img_src} />
                </Card>
              </Col>
            )
          )
        }        
      </Row>

    </Container>
  );

}

export default App;
