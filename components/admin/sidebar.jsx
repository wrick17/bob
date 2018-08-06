import cx from 'classnames'

const Sidebar = ({ pages, openPage, selected, content }) => {
  return (
    <div className="sidebar">
      <ul className="pages">{
        pages.map(page => (
          <li className={cx("page", { selected: selected === page })} onClick={() => openPage(page)} key={page} >{content[page].label}</li>
        ))
      }</ul>
      <style jsx>{`
        .pages {
          padding-left: 0;
        }
        .page {
          padding: 15px 15px;
          list-style: none;
          cursor: pointer;
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
