import React from "react";

const DisplayCard = ({ item, index }) => {
  return (
    
    <div className="display" key={index}> 
          <section>
                   <hr />
                   <img src={item.image}/>
                   <h4>{item.head}</h4>
                   <p>{item.content}</p>
                   <h5>{item.date} {item.month}</h5>
                   
          </section>
              </div>
             
  );
};

export default DisplayCard;
