import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RequestRide from './pages/RequestRide';
import OfferRide from './pages/OfferRide';
import GetDrivers from './pages/GetDrivers';
import DriverDetails from './pages/DriverDetails';
import GetRiders from './pages/GetRiders';
import RiderDetails from './pages/RiderDetails';

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
						<scene key="getDrivers" component={GetDrivers} title="GetDrivers" />
						<scene key="driverDetails" component={DriverDetails} title="DriverDetails" />
						<scene key="getRider" component={GetRiders} title="GetRiders"/>
						<scene key="riderDetails" component={RiderDetails} title="RiderDetails" />
			    </Stack>
			 </Router>
			)
	}
}