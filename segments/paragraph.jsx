import React from 'react';

const Paragraph = ({ content}) => (
  // <p dangerouslySetInnerHTML={{ __html: content }} />
  <p>{content}</p>
);

export default Paragraph;