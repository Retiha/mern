import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (<div>Home
    <ul>
        <li>
            <Link to='/state'>useState</Link>
        </li>
    </ul>
    </div>
    
);    

export default home;
