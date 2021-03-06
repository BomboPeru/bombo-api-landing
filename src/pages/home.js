import { h, Component } from 'preact';
import glamorous from 'glamorous'

import 'bulma/css/bulma.css'

import GlobalStyle from '../assets/styles/global_style'

import Toolbar from '../components/toolbar'
import ChimpcodeFooter from '../components/chimpcode_footer'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <GlobalStyle>
            <Toolbar/>
            <ChimpcodeFooter/>
        </GlobalStyle>
    );
  }
}
