import React from 'react'

const Navigation = (props) => {
	return (
    <div className={`app-nav`}>
      <nav className="navbar fixed-top">
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/?page=logout"><span className="fa fa-sign-out-alt"></span> Log out</a>
          </li>
        </ul>
      </nav>
    </div>
	)
}

export default Navigation