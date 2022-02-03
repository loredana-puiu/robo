import React from 'react';

/* destructuring  */
/* if we dont want to use destructuring we write  const Card = (props) => */
/* and use propertis by  <h2>{props.name}</h2>*/
const Card = ( { name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s' >
            <img alt='Robots' src={`https://robohash.org/${id}?200x200`} style={{width: '200px', height: '200px'}}/>
            <div>
            {/* this is js expresion and we need to wrap it in {} */} 
                <h2>{name}</h2>
                <p>{email}</p> 
            </div>
        </div>
    );
}



export default Card
//need to return just one element