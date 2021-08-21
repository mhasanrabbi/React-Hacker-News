import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useGlobalContext } from './context';

const Stories = () => {
  const {isLoading,hits} = useGlobalContext();

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
    <section>
      {hits.map((story) => {
        console.log(story);
        const {objectID,title,num_comments,url,points,author} = story
        return <article key={objectID}>
          <h4>{title}</h4>
          <p>{points} points by <span>{author} | </span>{num_comments}{''} comments</p>
          <div>
            <a href={url} target="_blank">
              read more
            </a>
            <button>remove</button>
          </div>
        </article>
      })}
    </section>
  )
}

export default Stories;