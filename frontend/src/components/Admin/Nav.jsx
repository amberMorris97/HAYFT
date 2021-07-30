import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <Link to="/create-blog-post">
          <li>New Blog Post</li>
        </Link>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Nav;