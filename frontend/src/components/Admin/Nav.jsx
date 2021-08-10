import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <Link style={{ textDecoration: 'none' }} to="/create-blog-post">
          <li>New Blog Post</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;