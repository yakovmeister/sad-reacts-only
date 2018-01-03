import React, { Fragment, PureComponent } from 'react'
import TopNav from './../components/TopNav'
import { renderRoutes } from "react-router-config";

const AppRoot = (props) => {
  return (
    <Fragment>
    	<TopNav />
    	{ renderRoutes(props.route.routes) }
    </Fragment>
  );
};

export default AppRoot;