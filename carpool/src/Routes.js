import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RequestRide from './pages/RequestRide';
import OfferRide from './pages/OfferRide';
import Get from './pages/Get';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
						<scene key="home" component={Home} title="Home" />
						<scene key="requestRide" component={RequestRide} title="RequestRide" />
						<scene key="offerRide" component={OfferRide} title="OfferRide" />
						<scene key="get" component={Get} title="get"/>
			    </Stack>
			 </Router>
			)
	}
}