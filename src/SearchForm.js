import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const {query,handleSearch} = useGlobalContext();

  return (
    <Row>
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <Col>
      <h2>Search Hacker News</h2>
      <input
        className="form-input"
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)} 
      />
      </Col>
    </form>
    </Row>
  )
}

export default SearchForm