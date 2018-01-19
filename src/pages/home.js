import { h, Component } from 'preact';
import glamorous from 'glamorous'

import GlobalStyle from '../assets/styles/global_style'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <GlobalStyle>
            Click me!
        </GlobalStyle>
    );
  }
}
