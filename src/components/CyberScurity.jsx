import React from 'react';
import DisplayCard from './DisplayCard';

const CyberScurity = ({taskData}) => {
    const cyberscurityData=taskData.filter((item)=>item.head==='Cyber Security')
    return (
        <div>
            <h1>CyberScurity</h1>
            {cyberscurityData.map((item,index)=>{
               return(
                <>
                <DisplayCard item={item} index={index}/>
                </>
               )

            })}
        </div>
    );
};

export default CyberScurity;