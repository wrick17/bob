import cx from 'classnames';
import { accentColor } from '../constants';

const Button = ({ label, onClick, className, type = 'button', disabled = false }) => {
  return (
    <React.Fragment>
      <button onClick={onClick} className={className} type={type} disabled={disabled} >{label}</button>
      <style jsx>{`
        button {
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          border: 1px solid ${accentColor};
          border-radius: 4px;
          background: ${accentColor};
          padding: 8px 25px;
          color: white;
          font-size: 16px;
          outline: none;
        }
        button:active {
          box-shadow: none;
        }
        button:disabled {
          opacity: 0.8;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Button;
