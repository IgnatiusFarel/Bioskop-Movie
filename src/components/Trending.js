import { Card, Col, Container, Row } from "react-bootstrap";
import Lightyear from "../assets/Lightyear.jpg";
import AfterImage from "../assets/After.jpg";
import AgakLaenImage from "../assets/AgakLaen.jpeg";
import AvengersImage from "../assets/Avengers.jpeg";
import KravenImage from "../assets/Kraven.jpg";
import TitaneImage from "../assets/Titane.jpeg";
import USImage from "../assets/US.jpeg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br /> 
        <h1 className="text-white"> TRENDING MOVIES</h1> 
        <br /> 
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Card.Img src={Lightyear} alt="Lightyear Movies" className="movies" />
              <div className="bg-dark"> 
              <div className="p-2 m-1 text-white"> 
                <Card.Title className="text-center"> Lightyear</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. 
                </Card.Text>
                <Card.Text className="text-left"> Last Updated 3 Mins ago
            </Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Card.Img src={AfterImage} alt="After Movies" className="movies"/>
              <div className="bg-dark"> 
              <div className="p-2 m-1 text-white"> 
                <Card.Title className="text-center"> Lightyear</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. 
                </Card.Text>
                <Card.Text className="text-left"> Last Updated 3 Mins ago
            </Card.Text>
            </div>
            </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Card.Img src={AgakLaenImage} alt="AgakLaen Movies" className="movies" />
              <div className="bg-dark"> 
              <div className="p-2 m-1 text-white"> 
                <Card.Title className="text-center"> Lightyear</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. 
                </Card.Text>
                <Card.Text className="text-left"> Last Updated 3 Mins ago
            </Card.Text>
            </div>
            </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Card.Img src={USImage} alt="US Movies" className="movies" />
              <div className="bg-dark"> 
              <div className="p-2 m-1 text-white"> 
                <Card.Title className="text-center"> Lightyear</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. 
                </Card.Text>
                <Card.Text className="text-left"> Last Updated 3 Mins ago
            </Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Card.Img src={KravenImage} alt="Kraven Movies" className="movies" />
              <div className="bg-dark"> 
              <div className="p-2 m-1 text-white"> 
                <Card.Title className="text-center"> Lightyear</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. 
                </Card.Text>
                <Card.Text className="text-left"> Last Updated 3 Mins ago
            </Card.Text>
              </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Card.Img src={TitaneImage} alt="Titane Movies" className="movies" />
              <div className="bg-dark"> 
              <div className="p-2 m-1 text-white"> 
                <Card.Title className="text-center"> Lightyear</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. 
                </Card.Text>
                <Card.Text className="text-left"> Last Updated 3 Mins ago
            </Card.Text>
              </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
