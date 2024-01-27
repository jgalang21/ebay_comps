
import './App.css';
import {Button, Badge, ProgressBar, Form, InputGroup} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listing from './components/Listing';
import axios from 'axios'



function App() {

  const [show, setShow] = useState(false);


  const [contents, setContents] = useState([])
  const [searchTerms, setSearchTerms] = useState([]);

  function onShow(e)  {
    // Update searchTerm only when the button is clicked
    setSearchTerms();
  
  };
  const handleClick = async () => {
    setShow(true);
    
    await doSearch(searchTerms);
   
  }
  const doSearch = async (search) => {
      try{
        const response = await axios.get(`http://127.0.0.1:5000/search/${search}`)
        setContents(response.data)
      }
      catch(error){
        console.log('Error fetching data: ', error)
      };
  }

  useEffect(() => {
    const keyDownHandler = event => {
      if(event.key === 'Enter'){
        handleClick()
      }
      document.addEventListener('keydown', keyDownHandler)
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };

    }

  }, []);
  
  return (
    <div className="App">
     <h1>
        Ebay Search Comps
     </h1>

     <h3>
      An easier way to find prices on sports cards.
     </h3>
    <br />
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search for a card here"
          aria-label="CardName"
          aria-describedby="basic-addon2"
         
          onChange={e => {
            setSearchTerms(e.currentTarget.value)
          }}
          
          

          />
        <Button variant="outline-secondary" id="button-addon1" onClick={handleClick}>  
          Search
        </Button>
      </InputGroup>
  
 
      {show && contents.data && contents.data.length > 0 && (
        contents.data.map((item) => 
        <>
          <Listing props={item}/>
        </>
        )
      )}

    </div>
  );
}

export default App;
