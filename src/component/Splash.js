import React, {Component} from 'react';
import Container from './Container';
import {authorization} from '../modules/authorization';

export default class SplashScreen extends Component {
    static navigationOptions = () => ({
        header: null
    });

    componentDidMount(){
        const { navigation: { dispatch }} = this.props;
        dispatch(authorization());
    }

    render() {
        return (
            <Container
                statusBarColor={'#fff'}
                fetching={false}
            >
            </Container>
        );
    }
}
