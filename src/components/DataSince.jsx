import React from 'react';
import DisplayCard from './DisplayCard';

const DataSince = ({taskData}) => {
    const datasinceData= taskData.filter((item)=>item.head==='Data Science')
    return (
        <div>
            <h1>DataSince</h1>
            {datasinceData.map((item,index)=>{
              return(
                <>
                <DisplayCard item={item} index={index}/>
                </>
              )

            })}
        </div>
    );
};

export default DataSince;