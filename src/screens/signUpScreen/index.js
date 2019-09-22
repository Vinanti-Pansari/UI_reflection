import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    TextInput
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


class SignUpScreen extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            address: '',
            code: '',
            mobileNumber: '',
            email: '',
            password: '',
            showPassword: true,
            referralCode: ''
        };

    }

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
        const {userName, address, code, mobileNumber, email, password, showPassword, referralCode} = this.state;
        const {fetching} = this.props;
        return (
            <Container
                screen={'signUp'}
                fetching={fetching}
            >
                <View style={Styles.container}>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={Styles.headingStyle}>Sign Up</Text>
                        <View style={Styles.commonMargin}>
                            <Input
                                placeholder={PlaceHolder.USERNAME}
                                value={userName}
                                returnKeyType={'next'}
                                onChangeText={(text) => this.handleTextChange(text, 'userName')}
                            />
                            <View style={Styles.mobileView}>
                                <Input
                                    style={Styles.mobileCodeView}
                                    placeholder={PlaceHolder.CODE}
                                    value={code}
                                    returnKeyType={'next'}
                                    onChangeText={(text) => this.handleTextChange(text, 'code')}
                                />
                                <Input
                                    style={Styles.mobileNumberView}
                                    placeholder={PlaceHolder.MOBILE_NUMBER}
                                    value={mobileNumber}
                                    returnKeyType={'next'}
                                    onChangeText={(text) => this.handleTextChange(text, 'mobileNumber')}
                                />
                            </View>
                            <Input
                                placeholder={PlaceHolder.EMAIL}
                                value={email}
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
                                        onPress={() => this.showHidePassword()}
                                    >
                                        <Image
                                            source={showPassword ? Icons.SHOW_PASSWORD : Icons.HIDE_PASSWORD}
                                            style={Styles.passwordImage}
                                        />
                                    </TouchableOpacity>
                                }
                            </View>
                            <Input
                                placeholder={PlaceHolder.ADDRESS}
                                value={address}
                                multiline={true
                                }
                                inputRef={el => this.email = el}
                                returnKeyType={'next'}
                                onChangeText={(text) => this.handleTextChange(text, 'address')}
                            />
                            <View style={Styles.referralBlock}>
                                <TextInput
                                    style={Styles.inputStyle}
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    // placeholderTextColor={Color.PLACEHOLDER_COLOR}
                                    blurOnSubmit={false}
                                    // ref={props.inputRef}
                                    returnKeyType="next"
                                    placeholder={PlaceHolder.EMAIL}
                                    keyboardType="email-address"
                                    value={email}
                                    onSubmitEditing={() => this.password.focus()}
                                    onChangeText={(text) => this.handleTextChange(text, 'referralCode')}
                                />
                                <Text style={Styles.applyText}>Apply</Text>
                            </View>
                            <View style={Styles.buttonView}>
                                <Text style={Styles.buttonText}>Signup</Text>
                                <Text style={Styles.buttonText}>|</Text>
                                <Text style={Styles.buttonText}>f</Text>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </Container>
        );
    }
}


SignUpScreen.propTypes = {
    dispatch: PropTypes.object,
    fetching: PropTypes.bool,
};
SignUpScreen.defaultProps = {
    dispatch: {},
    fetching: false,
};
const mapStateToProps = state => ({
    // fetching: state.signIn.fetching,
    // signInPayload: state.signIn.signInPayload,
    // userProfile: state.fetchUserProfile.userProfile
});
export default connect(mapStateToProps)(SignUpScreen);
