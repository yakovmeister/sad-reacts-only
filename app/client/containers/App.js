import React, { Fragment, PureComponent } from 'react'
import TopNav from './../components/TopNav'
import { renderRoutes } from "react-router-config";

const AppRoot = (props) => {
  return (
    <div>
    	<TopNav />
    	{ renderRoutes(props.route.routes) }
    </div>
  );
};

export default AppRoot;