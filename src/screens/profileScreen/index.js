import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import {
    View,
    Text,
    Image
} from 'react-native';
import Placeholder from '../../utility/placeHolder';
import {connect} from 'react-redux';
import Styles from './styles';
import Container from '../../component/Container';
import PlaceHolder from '../../utility/placeHolder';
import DataOptions from '../../utility/dataOptions';
import { resetStack } from '../../utility/handleNavigation';


class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            profileData: DataOptions.USER_PROFILE
        };

    }

    componentDidMount(){
        const {navigation} = this.props;
        navigation.setParams({
            logOutPressed: this.logOutPressed,
        });
    }

    /**
     * Method to handle the logout functionality
     */
    logOutPressed = () =>{
        AsyncStorage.clear();
        resetStack('LoginScreen');
    };

    /**
     * Method to render to the profile details.
     * @param value
     * @param key
     * @returns {*}
     */
    renderDetailView = (value, key) => {
        return (
            <View style={Styles.detailView}>
                <Text style={Styles.ValueText}>
                    {value}
                </Text>
                <Text style={Styles.keyText}>
                    {key}
                </Text>
            </View>
        )
    };

    render() {
        const { profileData: { name, profileImageUrl, email, mobileNumber }} = this.state;
        const {fetching} = this.props;
        return (
            <Container
                screen={'profile'}
                fetching={fetching}
            >
                <View style={Styles.topSpacing}>
                    <View style={[Styles.profileBlock, Styles.boxShadowStyle]}>
                        <View style={Styles.imageBlock}>
                            <Image
                                source={{uri: profileImageUrl}}
                                style={Styles.imageStyle}
                            />
                        </View>
                        <View style={Styles.commonMargin}>
                            <Text style={Styles.nameTitleStyle}>{name}</Text>
                            {
                                this.renderDetailView(name, Placeholder.USERNAME)
                            }
                            {
                                this.renderDetailView(mobileNumber, PlaceHolder.MOBILE_NUMBER)
                            }
                            {
                                this.renderDetailView(email, PlaceHolder.EMAIL)
                            }
                        </View>
                        <View style={Styles.ButtonView}>
                            <Text style={Styles.buttonText}>Edit</Text>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}


ProfileScreen.propTypes = {
    fetching: PropTypes.bool,
};
ProfileScreen.defaultProps = {
    fetching: false,
};
const mapStateToProps = state => ({
});
export default connect(mapStateToProps)(ProfileScreen);
