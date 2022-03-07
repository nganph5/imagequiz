import flowers from './data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return(
    <div>
      <Container fluid="md">
        <Row>
        {flowers.map(flower => (
        <Col key={flower.name}>
          <img src={flower.picture} alt={flower.name}/>
          <div>{flower.name}</div>
        </Col>
        ))}
        </Row>
      </Container>
    </div>

  );
}

export default Home;