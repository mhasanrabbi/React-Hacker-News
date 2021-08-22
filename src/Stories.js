import React from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useGlobalContext } from './context';

const Stories = () => {
  const {isLoading,hits,removeStory} = useGlobalContext();

  if(isLoading) {
    return (
      <div className="loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }
  
  return (
    <Container fluid="md">
      <Row md={1} lg={2} className="g-4 grid-container">
      {hits.map((story) => {
        const {objectID,title,num_comments,url,points,author} = story
        return(
          <Col key={objectID}>
          <Card  style={{ width: '38rem'}}>
          <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{points} points by {author} | {num_comments}{''} comments</Card.Subtitle>
          <Card.Link href={url} target="_blank">Read More</Card.Link>
          <Card.Link>
            <Button size="sm" variant="danger" onClick={() => removeStory(objectID)}>remove</Button>
          </Card.Link>
          </Card.Body>
        </Card>
        </Col>
        )
      })}
      </Row>
    </Container>
  )
}

export default Stories;