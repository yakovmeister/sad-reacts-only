import React from 'react'

export default (props) => {
	return (
		<div className='not-found'>
			<div className='not-found-text-container'>
				<p className='not-found-text'>Page cannot be found</p>
				<p className='not-found-sub'>The page you are looking for does not exist.</p>
				<a href="/" className="pt-button pt-intent-primary"><span className="fas fa-caret-left"></span> Take me back home</a>
			</div>
		</div>
	)
}