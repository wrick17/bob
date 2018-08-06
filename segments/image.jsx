import React from 'react';

const Image = ({link}) => (
  <div>
    <img src={link} style={{ maxWidth: '100%' }} />
  </div>
);

export default Image;