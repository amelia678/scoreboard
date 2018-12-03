import React from 'react';

function Scorecard(props) {
    return (
        <div>
             <div >
                <h1>{props.id}</h1>
           <h2>
               Name:{props.name} // Treats: {props.score}
            </h2>
          
           <button onClick={()=> props.handleClick(props.id)}>Give {props.name} a treat</button>
         </div>
        </div>
    );
}

export default Scorecard;