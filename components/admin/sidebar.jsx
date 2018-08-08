import cx from 'classnames'

const Sidebar = ({ pages, openPage, selected, content }) => {
  return (
    <div className="sidebar">
      <ul className="pages">{
        pages.map(page => (
          <li className={cx("page", { selected: selected === page })} onClick={() => openPage(page)} key={page} >{content[page].label}</li>
        ))
      }</ul>
      <label className={cx({ selected: selected === 'settings' })} onClick={() => openPage('settings')}>Settings</label>
      <style jsx>{`
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
          padding: 15px 15px;
          list-style: none;
          cursor: pointer;
          width: 100%;
          display: block;
        }
        .selected {
          background: #5E60FF;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
