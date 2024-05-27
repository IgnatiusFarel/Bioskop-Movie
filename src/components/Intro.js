import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title"> NONTON GRATIS BUAT </div>
            <div className="title"> KAUM MENDANG MENDING</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark"> Lihat Semua Listnya </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
