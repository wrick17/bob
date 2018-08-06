import React from 'react'
import ContentEditable from 'react-contenteditable'

const Text = ({ onSave, data }) => (
  <div className="block">
    <div className="input">
      <ContentEditable 
        html={data}
        tagName='div' />
    </div>
    <style jsx>{`
      .block {
        margin-bottom: 15px;
      }
      .input {
        display: flex;
        padding: 10px 15px;
        border: 1px solid #DDD;
        border-radius: 4px;
        font-size: 14px;
        word-break: break-word;
      }
    `}</style>
  </div>
);

export default Text;