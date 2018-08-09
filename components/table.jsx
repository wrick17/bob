import React from 'react';

const Table = ({ links }) => (
  <div>
    <ul>
      {
        links.map(link => (
          <li>
            <a href={link.href} target="_blank" >{link.title}</a>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Table;