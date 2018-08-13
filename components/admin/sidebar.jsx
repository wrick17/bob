import cx from 'classnames'
import { accentColor } from '../../constants';

const Sidebar = ({ pages, openPage, selected, content, site }) => {
  return (
    <div className="sidebar">
      <ul className="pages">
      <li className="name">{site}</li>
      {
        pages.map(page => (
          <li className={cx("page", { selected: selected === page })} onClick={() => openPage(page)} key={page} >{content[page].label}</li>
        ))
      }</ul>
      <label className={cx({ selected: selected === 'settings' })} onClick={() => openPage('settings')}>Settings</label>
      <style jsx>{`
        .name {
          padding: 15px;
          color: #555;
          font-weight: bold;
        }
        .sidebar {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .pages {
          padding-left: 0;
          flex: 1;
        }
        .page, label {
          padding: 15px;
          list-style: none;
          cursor: pointer;
          width: 100%;
          display: block;
        }
        .selected {
          background: ${accentColor};
          color: white;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
