import React from 'react';
import DisplayCard from './DisplayCard';

const Stack = ({taskData}) => {

    const fullstackData=taskData.filter((item)=>item.head==='Full Stack Development')
    return (
        <div>
            <h1>Full Stack</h1>
            {fullstackData.map((item,index)=>{
                return(
                    <>
                    <DisplayCard item={item} index={index}/>
                    </>
                )
            })}
        </div>
    );
};

export default Stack;