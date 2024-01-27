import react, { useState, useEffect }from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Listing = ({props}) => {
    return ( 
        <>
        <Card style ={{borderRadius:"50px", background: "lightgray"}}>
            <Card.Body border='dark' style={{width: '18rem', }}>
                <Card.Text>
                <a href={props.url}
                     target="_blank"
                    >{props.title}</a>
                </Card.Text>
                <Card.Body>
                 {props.date} for {props.price} 
                </Card.Body>
                <Card.Img 
                style={{margin: "0"}}
                src={props.picUrl}>
                </Card.Img>

            </Card.Body>

        </Card>
        
    
        </>
    )
}

export default Listing;