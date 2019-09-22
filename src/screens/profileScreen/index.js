import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ScrollView
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Placeholder from '../../utility/placeHolder';
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


class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            profileData: {
                name: 'Jone Doe'
            }
        };

    }


    componentDidUpdate(prevProps) {

    }

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
        const {profileData} = this.state;
        const {fetching} = this.props;
        return (
            <Container
                screen={'profile'}
                fetching={fetching}
            >
                <View style={Styles.topSpacing}>
                    <View style={[Styles.profileBlock, Styles.boxShadowStyle]}>
                        <View style={Styles.imageBlock}>
                            <View
                                style={Styles.imageStyle}
                            />
                        </View>
                        <View style={Styles.commonMargin}>
                            <Text style={Styles.nameTitleStyle}>{profileData.name}</Text>
                            {
                                this.renderDetailView('name', Placeholder.USERNAME)
                            }
                            {
                                this.renderDetailView('2346736476', PlaceHolder.MOBILE_NUMBER)
                            }
                            {
                                this.renderDetailView('vinanti.pansari@gmail.com', PlaceHolder.EMAIL)
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


// ProfileScreen.propTypes = {
//     dispatch: PropTypes.object,
//     fetching: PropTypes.bool,
// };
// ProfileScreen.defaultProps = {
//     dispatch: {},
//     fetching: false,
// };
const mapStateToProps = state => ({
    // fetching: state.signIn.fetching,
    // signInPayload: state.signIn.signInPayload,
    // userProfile: state.fetchUserProfile.userProfile
});
export default connect(mapStateToProps)(ProfileScreen);
