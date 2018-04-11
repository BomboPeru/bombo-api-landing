import { h, Component } from 'preact';
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

import { glamorous } from 'glamorous'


class ChimpcodeFooter extends Component {

  constructor (props) {
    super(props)
  }

	render() {

    const ChimpcodeBanner = glamorous.a(
      {
        color: 'red',
        textDecoration: 'none',
        fontSize: '32px'
      }
    )

	  return(
      <Footer id='footer'>
        <Container>
          <Content>
            <Columns>
              <Column>
                <p>
                  Made with<Icon hasTextColor="danger" className="fa fa-heart"></Icon>
                  by <a>Algus Dark</a>
                </p>
              </Column>
              <Column>
                <p>
                  Made with<Icon hasTextColor="danger" className="fa fa-heart"></Icon>
                  by <a>Algus Dark</a>
                </p>
              </Column>
              <Column>
                <ChimpcodeBanner href="#">Chimpcode</ChimpcodeBanner>
                <p>
                  Redes Sociales
                </p>
              </Column>
            </Columns>
            <Content isSize='small'>
              <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
              <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
            </Content>
          </Content>
        </Container>
      </Footer>
    );
  }
}


export default ChimpcodeFooter;