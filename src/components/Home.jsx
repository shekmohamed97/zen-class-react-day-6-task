import React from 'react';
import DisplayCard from './DisplayCard';
// import { NavLink } from 'react-router-dom';

const Home = ({taskData}) => {
    return (
        <div>
          <h1>Home Comp</h1>
           {taskData.map((item,index)=>{
            return(
              <>
              <DisplayCard item={item} index={index}/>
              </>
            )
           })}
        </div>
    );
};

export default Home;