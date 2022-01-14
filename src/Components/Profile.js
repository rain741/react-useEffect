import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Card } from "react-bootstrap";

function Profile() {
  const ambilLogin = localStorage.getItem("user");
  const dataLogin = JSON.parse(ambilLogin);
  console.log(dataLogin);

  return (
    <div>
      <Container>
        <Card>
          <Card.Header className='text-center'>
            <h3>Data Profile</h3>
          </Card.Header>
          <Card.Body>
            <Col>
              <Card.Title>Nama: {dataLogin.name}</Card.Title>
              <Card.Title>Email: {dataLogin.email}</Card.Title>
              <Card.Title>Password: {dataLogin.password}</Card.Title>
              <Card.Title>Addres: {dataLogin.address}</Card.Title>
              <Card.Title>Birthdate: {dataLogin.birthdate}</Card.Title>
              <Card.Title>Gender: {dataLogin.gender}</Card.Title>
              <Card.Title>Skills: {dataLogin.skills}</Card.Title>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Profile;
