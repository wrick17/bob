import React from 'react'
import cx from 'classnames'

const Text = ({ onChange, data, route, type = 'text', placeholder = '' }) => (
  <div className="block">
    <div className="input">
      <input type="text" type={type} placeholder={placeholder} value={data} onChange={onChange} className={cx({ route })} />
      { route && <span>/</span> }
    </div>
    <style jsx>{`
      .block {
        margin-bottom: 15px;
        position: relative;
      }
      input {
        padding: 10px 15px;
        border: 1px solid #DDD;
        border-radius: 4px;
        font-size: 14px;
        word-break: break-word;
        width: 100%;
      }
      .route {
        padding-left: 20px;
      }
      span {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
      }
    `}</style>
  </div>
);

export default Text;