import React from 'react'

const Navigation = (props) => {
  const { fixed } = props
	return (
    <div className={`app-nav`}>
      <nav class={`navbar fixed-top${
        fixed 
          ? ' navbar-custom-fixed' 
          : ' navbar-custom'
      }`}>
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav nav-custom">
          <li class="nav-item">
            <a class="nav-link" href="/?page=logout"> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/?page=logout"> Contact</a>
          </li>
        </ul>
      </nav>
    </div>
	)
}

export default Navigation