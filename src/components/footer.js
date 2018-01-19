import { h, Component } from 'preact';
import { glamorous } from 'glamorous';

const FooterEl = glamorous.div({
  width: '100%',
  background: 'red'
})

class Footer extends Component {

	render() {
		return FooterEl
	}

}

