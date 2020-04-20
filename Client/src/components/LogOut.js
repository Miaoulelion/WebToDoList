import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function LogOut(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleConfirm = () => {
        props.confirm();
        setShow(false);
    }
    return (
      <>
        <Button className="btn btn-danger" onClick={handleShow}>
            Deconnexion
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Deconnexion</Modal.Title>
          </Modal.Header>
          <Modal.Body> Voulez vous vraiment vous deconnecter ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              En fait non !
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              J'en suis sûr !
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
