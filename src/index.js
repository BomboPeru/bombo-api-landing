import { h, Component } from 'preact';
import { Router } from 'preact-router';
import './style'
import Home from './pages/home'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />

				</Router>
			</div>
		);
	}
}

export default App;
