import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listing = ({ props }) => {
  return (
    <>
      <Card style={{ 
      background: "lightgray", display: 'flex', width: '1000px', font: "Arial", fontSize: "20px" }}>
        <div style={{ display: 'flex' }}>
     
          <Card.Body style={{ flex: 1 }}>
            <Card.Text style={{paddingTop: "10px"}}>
              <a
                href={props.url}
                target="_blank"
              >
                {props.title}
              </a>
            </Card.Text>
            <Card.Body>
              {props.date} for {props.price}
            </Card.Body>

            
          </Card.Body>
          <Card.Img
            className='align-self-start'
            style={{ width: '150px', height: '200px' }}
            src={props.picUrl}
          />
       
        </div>
      </Card>
  
    </>
    
  );
}

export default Listing;
