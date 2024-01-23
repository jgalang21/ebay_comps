
import './App.css';
import {Button, Badge, ProgressBar, Form, InputGroup} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <h1>
        Ebay Search comps
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
        />
        
        <Button variant="outline-secondary" id="button-addon1">
          Search
        </Button>
      </InputGroup>


    </div>
  );
}

export default App;
