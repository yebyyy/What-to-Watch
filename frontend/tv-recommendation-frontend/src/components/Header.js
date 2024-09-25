import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <nav>
        <a href="/" className="logo">TV Rec</a>
        <ul>
          <li><a href="/shows">Shows</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Log In</a></li>
          <li><a href="/signup" className="button">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;