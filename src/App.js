import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import boot from "./image/boot.jpeg";
import logovsc from "./image/logovsc.jpg";
import react from "./image/react.png";
import node from "./image/node.png";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function App() {
  return (
    <>
      {/* fragmontation <>   </> */}
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">React install</Nav.Link>

            <Nav.Link href="#features">React Routs</Nav.Link>
            <Nav.Link href="#features">React Bootstrap</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="divform">
        <legend>Inscription</legend>
        <label>chemp1</label>
        <Form.Control size="lg" type="text" placeholder="nom" />
        <br></br>
        <label>chemp2</label>
        <Form.Control type="text" placeholder="prenom" />
        <br />
        <label>chemp3</label>
        <Form.Control size="sm" type="email" placeholder="@email" />

        <div className="divbtn">
          <Button variant="success">submit</Button>

          <Button variant="danger">reset</Button>
          <Button variant="danger">ignorer</Button>
        </div>
      </div>
      <div className="divform">
        <p>les outils de codage</p>
        <div className="divimg">
          <img className="classimag" src={react} alt="Logo" />
          <img className="classimag" src={node} alt="Logo" />
          <img className="classimag" src={boot} alt="Logo" />
          <img className="classimag" src={logovsc} alt="Logo" />
        </div>
      </div>

      <footer className="d-flex flex-column">
        <div className="container-fluid flex-grow-1 flex-shrink-0">
          <div className="px-lg-5">
            <div className="row py-5">
              <div className="col-lg-12 mx-auto text-white text-center">
                <h1 className="display-4">Apprendre React</h1>
                <p className="lead mb-0">
                  React-JS offre des solutions élégantes à certains des problèmes
                  les plus persistants de la programmation frontale
                </p>
                <p className="lead">
                  visiter :
                  <a
                    href="https://www.codecademy.com/learn/react-101"
                    class="text-white"
                  >
                    <u>react</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">React install</Nav.Link>

            <Nav.Link href="#features">React Routs</Nav.Link>
            <Nav.Link href="#features">React Bootstrap</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
