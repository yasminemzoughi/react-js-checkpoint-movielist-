import React from 'react'
import { Card } from 'react-bootstrap'
import pic from "./photos/pic.jpg"
import blackadam from './photos/blackadam.jpg'
import dora from './photos/dora.jpg'
import girl from './photos/girl.jpg'
import luck from './photos/luck.jpg'
import smile from './photos/smile.jpg'
import thor from './photos/thor.jpg'
import homealone from './photos/homealone.jpg'
import './Movielist.css'
const MovieList = () => {
  return (
    <div className='movielist'>
        
          <Card style={{ width: '18rem', marginBottom: "5%" }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>black widow</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', marginBottom: "5%" }}>
      <Card.Img variant="top" src={blackadam} />
      <Card.Body>
        <Card.Title>black adam</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>
   
        
      
    <Card style={{ width: '18rem', marginBottom: "5%" }}>
      <Card.Img variant="top" src={dora} />
      <Card.Body>
        <Card.Title>dora</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', marginBottom: "5%" }}>
      <Card.Img variant="top" src={girl} />
      <Card.Body>
        <Card.Title>girl</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom: "5%" }}>
      <Card.Img variant="top" src={luck} />
      <Card.Body>
        <Card.Title>luck</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', marginBottom: "5%" }}>
      <Card.Img variant="top" src={smile} />
      <Card.Body>
        <Card.Title>smile</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom: "5%" }}>
      <Card.Img variant="top" src={thor} />
      <Card.Body>
        <Card.Title>thor</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginBottom: "5%" }}>
      <Card.Img variant="top" src={homealone} />
      <Card.Body>
        <Card.Title>home alone</Card.Title>
        <Card.Text>
     
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieList
