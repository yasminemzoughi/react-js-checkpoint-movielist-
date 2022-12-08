import React from 'react'
import { Card } from 'react-bootstrap'
import pic from "./pic.jpg"
import blackadam from './blackadam.jpg'
import dora from './dora.jpg'
import girl from './girl.jpg'
import luck from './luck.jpg'
import smile from './smile.jpg'
import thor from './thor.jpg'
import homealone from './homealone.jpg'
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
