import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Home</h1>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ margin: '10px' }}>
        <Link to='/state'>useState Example</Link>
      </li>
      <li style={{ margin: '10px' }}>
        <Link to='/effect'>useEffect Example</Link>
      </li>
    </ul>
  </div>
);

export default Home;
