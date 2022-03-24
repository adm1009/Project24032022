import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }:any) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <img src={image} alt={name} />
      <div>
        <div >
          <h4>{name}</h4>
          <h4 >${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </>
  );
};

export default Tour;