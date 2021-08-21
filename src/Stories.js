import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useGlobalContext } from './context';

const Stories = () => {
  const {isLoading} = useGlobalContext();

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
    <h2>stories component</h2>
  )
}

export default Stories;