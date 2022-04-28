import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Menu(props) {
  return(
    <Navbar variant="dark" bg="dark" expand="lg" style={{marginBottom: "40px"}}>
      <Container>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar nav" />
        <Navbar.Collapse id="basic-navbar nav">
          <Nav className="me-auto">
          {props.customer ?
          <Navbar.Text>
            Signed in as {props.customer}
            <Nav.Link href="#/logout">Log Out</Nav.Link>
          </Navbar.Text>
          
          :
          <>
          <Nav.Link href="#/register">Register</Nav.Link>
          <Nav.Link href="#/login">Login</Nav.Link>
          </>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;