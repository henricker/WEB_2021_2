import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './style.css'

function MyCard() {
  return (
    <div className="card-container">
      <Card style={{ width: '20rem'}} className="card">
        <Card.Img variant="bottom" src="https://avatars.githubusercontent.com/u/69400902?v=4" width="300rem" className="my-image" />
        <Card.Body className="cardbody">
          <Card.Title className="title">Henrique Vieira</Card.Title>
          <Card.Text className="text">
            Web developer eager to learn!
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush listGroup" >
          <ListGroupItem className="item">Age: 21</ListGroupItem>
          <ListGroupItem className="item">City: Boa Viagem - CE</ListGroupItem>
          <ListGroupItem className="item">Email: henriquevieira@alu.ufc.br</ListGroupItem>
          <ListGroupItem className="item">Program: Information Systems</ListGroupItem>
          <ListGroupItem className="item">University: Federal University at Ceará</ListGroupItem>
          <ListGroupItem className="item">Campus: Quixadá - Ceará</ListGroupItem>
        </ListGroup>
        <Card.Body className="icons">
          <Card.Link className="icon" target="_blank" href="https://github.com/henricker"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="25" height="auto" alt="github"/></Card.Link>
          <Card.Link className="icon" target="_blank"  href="https://www.linkedin.com/in/henrique-vieira-406b781a7/"><img src="https://purepng.com/public/uploads/large/linkedin-icon-zls.png" width="25" height="auto" alt="linkedin"/></Card.Link>
        </Card.Body>
      </Card>
    </div>
    
  )
}

export default MyCard