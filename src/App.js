
import './App.css';
import {Button, Form, InputGroup} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listing from './components/Listing';
import axios from 'axios'

function App() {

  const [show, setShow] = useState(false);
  const [contents, setContents] = useState([])
  const [searchTerms, setSearchTerms] = useState([]);


  const handleClick = async () => {
    setShow(true);
    
    await doSearch(searchTerms);
   
  }
  const doSearch = async (search) => {

    console.log(search)
    try {
      const url = `http://127.0.0.1:5000/search/${search}`;
   
      const response = await axios.get(url);
      setContents(response.data);
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  }
  

  
  const keyDownHandler = (event) => {
   
    if (event.key === 'Enter') {
     
      event.preventDefault(); // Prevent the default behavior of the Enter key
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  
  return (
    <div className="App">
     <h1>
        Ebay Search Comps
     </h1>

     <h3>
      An easier way to find prices on sports cards (And other items!)
     </h3>
    <br />
    <InputGroup className="mb-3"  style={{paddingRight: "100px",
                                          paddingLeft: "100px"}}>
        <Form.Control
          placeholder="Search for a card here"
          aria-label="CardName"
          aria-describedby="basic-addon2"
          size="lg"
         
          onChange={e => {
            setSearchTerms(e.target.value)
          }}
          />
        <Button variant="outline-secondary" id="button-addon1" onClick={handleClick}>  
          Search
        </Button>
      </InputGroup>
  
 
      {show && contents.data && contents.data.length > 0 && (
        contents.data.map((item) => 
        <div style={{justifyContent: "center", display: "flex"}}>
          <Listing props={item} />
        </div>
        )
        
      )}

    </div>
  );
}

export default App;
