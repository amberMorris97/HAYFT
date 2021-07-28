const findThreads = (comments, arr) => {
  comments.forEach((comment) => {
    if (comment.replies && comment.replies.length) {
      findThreads(comment.replies, arr);
    }
    arr.push(comment);
  });
  return arr;
}

export default findThreads;