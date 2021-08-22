import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useGlobalContext } from './context';

const Buttons = () => {
  const {isLoading,page,nbPages,handlePage} = useGlobalContext();

  return (
    <Row xs="auto" className="btn-container">
    <Col >
      <Button variant="dark" size="sm" disabled={isLoading} onClick={() => handlePage('decrease')}>
        prev
      </Button>
    </Col>
    <Col>
      <p>{page + 1} of {nbPages}</p>
    </Col>
    <Col>
      <Button variant="dark" size="sm" disabled={isLoading} onClick={() => handlePage('increase')}>
        next
      </Button>
    </Col>
    </Row>
  )
}

export default Buttons;