import { Container, Nav, Navbar } from "react-bootstrap";

function Navi() {
  const insta = require("./problems/pics/instagram.png");
  const tele = require("./problems/pics/telegram.png");
  const yt = require("./problems/pics/youtube.png");
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/home">Practice React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/problems">Practice</Nav.Link>
            <Nav.Link href="#tutorials">Tutorials</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#instagram">
              <img
                style={{ width: "40px", height: "40px" }}
                src={insta}
                alt="insta"
              />
            </Nav.Link>
            <Nav.Link href="#telegram">
              <img
                style={{ width: "40px", height: "40px" }}
                src={tele}
                alt="tele"
              />
            </Nav.Link>
            <Nav.Link href="#youtube">
              <img
                style={{ width: "40px", height: "40px" }}
                src={yt}
                alt="yt"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
