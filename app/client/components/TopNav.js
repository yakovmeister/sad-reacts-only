import React from 'react'
import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Switch, Button } from "@blueprintjs/core";

const TopNav = (props) => {
	return (
		<Navbar className='pt-dark pt-fixed-top'>
			 <NavbarGroup align="right">
		        <Button className="pt-minimal" iconName="home">Home</Button>
		        <Button className="pt-minimal" iconName="document">Projects</Button>
		        <Button className="pt-minimal" iconName="document">Contact</Button>
		    </NavbarGroup>
		</Navbar>
	) 
}

export default TopNav