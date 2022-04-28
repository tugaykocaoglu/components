import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Nice post"
        imgSrc={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        comment="Shit"
        imgSrc={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        comment="Mehh.."
        imgSrc={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
