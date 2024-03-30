import React from 'react';
import { Link } from 'react-router-dom';

const TaskNav = () => {
    return (
        <nav className='nav'>
            <Link  to='/'>Home</Link>
            <Link  to='/fullstack'>FullStack</Link>
            <Link  to='/datasince'>Data Since</Link>
            <Link  to='/cyberscurity'>CyberScurity</Link>
            <Link  to='/carear'>Carear</Link>
            <hr />
       </nav>
    );
};

export default TaskNav;