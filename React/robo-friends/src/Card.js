import React from 'react';


const Card = ({ name, email, id }) => {

    return (
        
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> {/* These are tachyon values, look them up */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />            {/* the "?200x200" makes the images always appear as 200 by 200 */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;