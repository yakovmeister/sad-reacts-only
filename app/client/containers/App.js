import React, { Fragment, PureComponent } from 'react'
import TopNav from './../components/TopNav'
import Container from './../components/Container'
import { renderRoutes } from "react-router-config";

const AppRoot = (props) => {
  return (
    <Fragment>
    	<TopNav />
    	<Container>
	    	{ renderRoutes(props.route.routes) }
	    </Container>
    </Fragment>
  );
};

export default AppRoot;