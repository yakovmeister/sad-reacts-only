import React from 'react'

const Navigation = (props) => {
	return (
    <div className={`app-nav`}>
      <ul className={`nav`}>
        <li className={`nav-item`}>
          <a className={`nav-link`} href={`#`}>Home</a>
        </li>
      </ul>
    </div>
	)
}

export default Navigation