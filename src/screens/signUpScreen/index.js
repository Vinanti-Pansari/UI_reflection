import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    Keyboard
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import Input from '../../component/Input';
import Styles from './styles';
import Container from '../../component/Container';
import Icons from '../../utility/icons';
import PlaceHolder from '../../utility/placeHolder';
import {validate} from "../../utility/validator";


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


    handleSignUp = () => {
        const {userName, address, code, mobileNumber, email, password } = this.state;
        Keyboard.dismiss();
        const validationError =
            validate('checkEmpty', {userName: userName.trim()}) ||
            validate('checkEmpty', {code: code.trim()}) ||
            validate('checkEmpty', {mobileNumber: mobileNumber}) ||
            validate('email', {email: email.trim()}) ||
            validate('password', { password: password.trim()}) ||
            validate('checkEmpty', {address: address.trim()});
        if (validationError) {
            alert(validationError);
        } else {

        }
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
                                keyboardType="email-address"
                                returnKeyType={'next'}
                                onChangeText={(text) => this.handleTextChange(text, 'userName')}
                            />
                            <View style={Styles.mobileView}>
                                <Input
                                    style={Styles.mobileCodeView}
                                    placeholder={PlaceHolder.CODE}
                                    value={code}
                                    keyboardType='numeric'
                                    returnKeyType={'next'}
                                    onChangeText={(text) => this.handleTextChange(text, 'code')}
                                />
                                <Input
                                    style={Styles.mobileNumberView}
                                    placeholder={PlaceHolder.MOBILE_NUMBER}
                                    value={mobileNumber}
                                    keyboardType='numeric'
                                    returnKeyType={'next'}
                                    onChangeText={(text) => this.handleTextChange(text, 'mobileNumber')}
                                />
                            </View>
                            <Input
                                placeholder={PlaceHolder.EMAIL}
                                value={email}
                                keyboardType="email-address"
                                returnKeyType={'next'}
                                onChangeText={(text) => this.handleTextChange(text, 'email')}
                            />
                            <View style={Styles.passwordView}>
                                <Input
                                    showPassword={showPassword}
                                    placeholder={PlaceHolder.PASSWORD}
                                    value={password}
                                    keyboardType="email-address"
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
                                keyboardType="email-address"
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
                                    blurOnSubmit={false}
                                    returnKeyType="next"
                                    placeholder={PlaceHolder.EMAIL}
                                    keyboardType="email-address"
                                    value={referralCode}
                                    onSubmitEditing={() => this.password.focus()}
                                    onChangeText={(text) => this.handleTextChange(text, 'referralCode')}
                                />
                                <Text style={Styles.applyText}>Apply</Text>
                            </View>
                            <TouchableOpacity
                                onPress={this.handleSignUp}
                                style={Styles.buttonView}>
                                <Text style={Styles.buttonText}>Signup</Text>
                                <Text style={Styles.buttonText}>|</Text>
                                <Text style={Styles.buttonText}>f</Text>
                            </TouchableOpacity>
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
});
export default connect(mapStateToProps)(SignUpScreen);
