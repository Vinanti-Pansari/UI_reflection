import React, {Component} from 'react';
import { View, StatusBar, Image, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import Spinner from '../component/Spinner';
import Icons from "../utility/icons";
import Styles from '../component/Styles';
import { applyBackgroundColor, applyStatusBarColor } from '../utility/dynamicStyle';
import {connect} from "react-redux";

class Container  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBottomView: true
        }
    }

    componentDidMount() {
        console.log('enter');
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );

    }


    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    /**
     * Handle to perform operation when the keyboard is open
     * @private
     */
    _keyboardDidShow = () => {
        this.setState({
            displayBottomView: false
        });
    };

    /**
     * Handle to perform operation when the keyboard is hide
     * @private
     */
    _keyboardDidHide = () => {
        this.setState({
            displayBottomView: true
        })
    };
   render() {
        const { screen, error } = this.props;
        const { displayBottomView } = this.state;
       return (
           <View style={applyBackgroundColor(screen)}>
               <StatusBar
                   backgroundColor={applyStatusBarColor(screen)}
                   barStyle={'dark-content'}
               />
               {this.props.children}
               {
                   error &&
                   alert(error)
               }
               <Spinner animating={this.props.fetching}/>
               {
                   (screen === 'login' && displayBottomView) &&
                   <Image
                       source={Icons.LOGIN_BOTTOM_IMAGE}
                       style={Styles.bottomView}
                   />
               }
           </View>
       );
   }
};

Container.defaultProps = {
    fetching: false,
    statusBarColor: '#fff',
    barStyle: 'dark-content'
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    fetching: PropTypes.bool,
    barStyle: PropTypes.string,
};

const mapStateToProps = state => ({
    error: state.errorHandler.error,
});


export default connect(mapStateToProps)(Container);




