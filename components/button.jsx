import cx from 'classnames';

const Button = ({ label, onClick, className }) => {
  return (
    <React.Fragment>
      <button onClick={onClick} className={className} >{label}</button>
      <style jsx>{`
        button {
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          border: 1px solid #5E60FF;
          border-radius: 4px;
          background: #5E60FF;
          padding: 8px 25px;
          color: white;
          font-size: 16px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Button;
