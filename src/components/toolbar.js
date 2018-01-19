import { h, Component } from 'preact';
import glamorous from 'glamorous';
import { StyleSheet, css } from 'aphrodite';
import { Container, Box, Columns, Column, Notification } from 'bloomer';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <Columns isCentered>
                <Column isSize="1/3">
                    <Notification isColor="success" hasTextAlign="centered">
                        {' '}
                        isOneThird{' '}
                    </Notification>
                </Column>
                <Column isSize={{ mobile: 8 }}>
                    <Notification isColor="warning" hasTextAlign="centered">
                        {' '}
                        isSize={{ mobile: 8 }}{' '}
                    </Notification>
                </Column>
                <Column>
                    <Notification isColor="danger" hasTextAlign="centered">
                        {' '}
                        Third column{' '}
                    </Notification>
                </Column>
                <Column>
                    <Notification isColor="primary" hasTextAlign="centered">
                        {' '}
                        Fourth column{' '}
                    </Notification>
                </Column>
            </Columns>
        );
    }
}

export default Toolbar;
