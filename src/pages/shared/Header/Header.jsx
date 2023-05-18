import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
      return (
            <div>
                  <h3>This is Header</h3>
                  <div><Link>Home</Link>
                        <Link>all toys</Link>
                        <Link>blog</Link>
                        <Link>about</Link>
                        <Link>my toys</Link></div>
            </div>
      );
};

export default Header;