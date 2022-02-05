import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';


function Discuter({children}) {
    const [show, toggleShow] = useState(true);
    return (
      <>
     {!show && <Button onClick={() => toggleShow(true)}>Montre la fenetre</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">voici la fenetre</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
      </>
    )
  }
  
  export default Discuter;