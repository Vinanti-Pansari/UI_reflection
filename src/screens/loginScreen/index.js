import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Input from '../../component/Input';
import Styles from './styles';
import Container from '../../component/Container';
import Icons from '../../utility/icons';
import PlaceHolder from '../../utility/placeHolder';
// import {errorHandler} from '../../modules/errorHandler';
// import {validate} from '../../utility/validator';
// import { navigateToScreen, resetStack } from '../../utility/handleNavigation';
// import { signIn } from '../../modules/signIn';
// import { checkNullData } from '../../utility/helper';
// import Constant from '../../utility/constant';


class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            showPassword: true
        };

    }

    static navigationOptions = () => ({
        header: null
    });

    componentDidUpdate(prevProps) {
        // const {
        //     signInPayload,
        //     userProfile,
        //     navigation: {dispatch}
        // } = this.props;
        // console.log(signInPayload, userProfile );
        // if (!checkNullData(signInPayload) && !checkNullData(userProfile)) {
        //     AsyncStorage.setItem(Constant.ASYNC_KEYS.USER_EMAIL, userProfile.email);
        //     AsyncStorage.setItem(Constant.ASYNC_KEYS.USER_ID, userProfile.id);
        //     resetStack('TabNavigator')
        // }
    }

    /**
     * Method to handle the text entry.
     * @param text
     * @param field
     */
    handleTextChange = (text, field) => {
        const newState = {};
        newState[field] = text;
        this.setState(newState);
    };


    /**apt_unit
     * Function to preform the login
     */


    handleLogin = () => {
        // const {email, password} = this.state;
        // const {dispatch} = this.props;
        // Keyboard.dismiss();
        // const validationError =
        //     validate('email', {email: email.trim()}) ||
        //     validate('password', { password: password.trim()});
        // if (validationError) {
        //     dispatch(errorHandler(validationError));
        // } else {
        //     // resetStack('TabNavigator');
        //     let data = {
        //         password: password.trim(),
        //         email: email.trim(),
        //     };
        //     dispatch(signIn(data))
        // }
    };


    /**
     * Method is used to show and hide the password
     */
    showHidePassword = () => {
        const {showPassword} = this.state;
        this.setState({
            showPassword: !showPassword,
        })
    };

    render() {
        const {email, password, showPassword} = this.state;
        const {fetching} = this.props;
        return (
            <Container
                screen={'login'}
                fetching={fetching}
            >
                <View style={Styles.container}>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={Styles.upperView}/>
                        <View style={[Styles.triangleCorner]}/>
                        <View style={Styles.logoView}>
                            <Image
                                source={Icons.APP_LOGO}
                                style={Styles.logonImage}
                            />
                            <Text style={Styles.headingStyle}>Login</Text>

                        </View>
                        <View style={Styles.commonMargin}>
                            <Input
                                placeholder={PlaceHolder.USERNAME}
                                value={email}
                                inputRef={el => this.email = el}
                                returnKeyType={'next'}
                                onChangeText={(text) => this.handleTextChange(text, 'email')}
                            />
                            <View style={Styles.passwordView}>
                                <Input
                                    showPassword={showPassword}
                                    placeholder={PlaceHolder.PASSWORD}
                                    value={password}
                                    inputRef={el => this.password = el}
                                    onSubmitEditing={this.handleLogin}
                                    onChangeText={(text) => this.handleTextChange(text, 'password')}
                                />
                                {
                                    password !== '' &&
                                    <TouchableOpacity
                                      style={Styles.passwordIconView}
                                      onPress={()=> this.showHidePassword()}
                                    >
                                        <Image
                                            source={showPassword? Icons.SHOW_PASSWORD: Icons.HIDE_PASSWORD}
                                            style={Styles.passwordImage}
                                        />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                        <View style={Styles.rowAlign}>
                            <Text style={Styles.linkText}>Forgot password?</Text>
                            <View style={Styles.buttonView}>
                                <Text style={Styles.buttonText}>Login</Text>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </Container>
        );
    }
}


LoginScreen.propTypes = {
    dispatch: PropTypes.object,
    fetching: PropTypes.bool,
};
LoginScreen.defaultProps = {
    dispatch: {},
    fetching: false,
};
const mapStateToProps = state => ({
    // fetching: state.signIn.fetching,
    // signInPayload: state.signIn.signInPayload,
    // userProfile: state.fetchUserProfile.userProfile
});
export default connect(mapStateToProps)(LoginScreen);
