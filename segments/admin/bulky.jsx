import React from 'react'
import ContentEditable from 'react-contenteditable'

const Bulky = ({ onChange, data }) => (
  <div className="block">
    <div className="input">
      <ContentEditable
        html={data}
        onChange={onChange}
        tagName='div' />
    </div>
    <label>* Don't put new lines and line breaks. It'll not look good I promise</label>
    <style jsx>{`
      .block {
        margin-bottom: 15px;
      }
      label {
        color: #AAA;
        font-size: 10px;
        font-weight: bold;
      }
    `}</style>
  </div>
);

export default Bulky;