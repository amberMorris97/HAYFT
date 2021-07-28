import React from 'react';
import moment from 'moment';
import findThreads from './helpers/findThreads';
const Comments = ({ comments }) => {
  const thread = [];
  findThreads(comments, thread);
  console.log(thread)
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.comment}</p>
          <p>{comment.author}</p>
          <p>{comment.email}</p>
          <p>{moment(comment.createdAt).format('MMMM Do YYYY')}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;