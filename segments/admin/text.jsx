import React from 'react'
import ContentEditable from 'react-contenteditable'

const Text = ({ onChange, data }) => (
  <div className="block">
    <div className="input">
      <ContentEditable 
        html={data}
        onChange={onChange}
        tagName='div' />
    </div>
    <style jsx>{`
      .block {
        margin-bottom: 15px;
      }
    `}</style>
  </div>
);

export default Text;