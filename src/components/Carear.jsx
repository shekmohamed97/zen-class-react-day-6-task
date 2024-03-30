import React from 'react';
import DisplayCard from './DisplayCard';


const Carear = ({taskData}) => {
    const carearData=taskData.filter((item)=>item.head==='Career Development')
    return (
        <div>
            <h1>Carear Development</h1>
            {carearData.map((item,index)=>{
                return(
                    <>
                     <DisplayCard item={item} index={index}/>     
                    </>
                )
            })}
        </div>
    );
};

export default Carear;