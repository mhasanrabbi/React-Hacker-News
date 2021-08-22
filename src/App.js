import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Buttons from './Buttons';
import SearchForm from './SearchForm';
import Stories from './Stories';

const App = () => {
  return (
    <Container fluid>
      <SearchForm/>
      <Buttons/>
      <Stories/>
    </Container>
  );
}

export default App;