import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {connect} from 'react-redux';
import {TouchableOpacity, Image, Text, TextInput} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import VideoScreen from '../screens/videosScreen/index'
// import {checkUndefinedValues} from "../utility/helper";
import Icons from '../utility/icons';
 import Styles from '../component/Styles';
// import TabBarComponent from '../components/TabBarComponent';
import LoginScreen from '../screens/loginScreen/index';
import SignUpScreen from '../screens/signUpScreen/index';
import ProfileScreen from '../screens/profileScreen/index';
// import HomeScreen from '../screens/homeScreen/index';
// import AccountScreen from '../screens/accountScreen/index';
// import SearchScreen from '../screens/searchScreen/index';
// import ShoppingCartScreen from '../screens/shoppingcartScreen/index';
// import SettingScreen from '../screens/settingScreen/index';
// import Fonts from '../utility/fonts';
// import ForgotPasswordScreen from '../screens/forgotpasswordScreen/index'
// import ResetPassword from '../screens/resetPasswordScreen/index'
// import ProductDetailsScreen from '../screens/productdetailsScreen/index'
// import AddressBookScreen from '../screens/addressbookScreen/index'
// import ChangePasswordScreen from '../screens/changepasswordScreen/index'
// import ShippingAddressScreen from '../screens/shippingaddressScreen/index'
// import AddAddressScreen from '../screens/addnewaddressScreen/index'
// import ShippingMethodScreen from '../screens/shippingmethodScreen'
// import InboxScreen from '../screens/inboxScreen/index';
// import MessageScreen from '../screens/messageScreen/index'
// //import Icon from 'react-native-vector-icons/Ionicons';
// import Colors from '../utility/colorConstant';
// import { eventHandler } from "../modules/eventHandler";
// import { navigateToScreen } from "../utility/handleNavigation";
// import OrderHistoryScreen from "../screens/orderHistoryScreen/index";
// import SplashScreen from '../components/splash';
// import Color from '../utility/colorConstant';


const navOptions = {
    headerStyle: Styles.headerStyle,
    headerTitleStyle: Styles.headerTitleStyle,
};

const navigationOptions = ({navigation}, title) => ({
    title,
    headerLeft:
        <TouchableOpacity
            style={Styles.backButtonContainer}
            onPress={() => navigation.dispatch(NavigationActions.back())}
        >
            <Image
                source={Icons.BACK_BUTTON}
                style={Styles.menuStyle}
            />
        </TouchableOpacity>,

    headerRight:
        <Text
        />,
    ...navOptions,

});

const ProfileNavigationOption= ({navigation}, title) => ({
    title,
    headerLeft:<Text/>,
    headerRight:<TouchableOpacity>
        <Image
            source={Icons.LOGOUT}
            style={Styles.headerRightIcon}
        />
    </TouchableOpacity>,
    headerStyle: Styles.profileHeaderStyle,
    headerTitleStyle: Styles.profileHeaderTitleStyle,

});


const Video = createStackNavigator({
    VideoScreen: {
        screen: VideoScreen,
        navigationOptions: ({navigation}) => navigationOptions({navigation}, 'Video')
    }
});

const SignUp = createStackNavigator({
    VideoScreen: {
        screen: SignUpScreen,
        navigationOptions: ({navigation}) => navigationOptions({navigation}, '')
    }
});

const Profile= createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: ({navigation}) => ProfileNavigationOption({navigation}, 'Profile')
    }
});

/**
 * Tab navigation stack.
 */
const TabNavigator = createBottomTabNavigator({
    VideoScreen: {screen: Video}
}, {
    tabBarOptions: {
        showLabel: true,
        inactiveTintColor: '#ccc',
        activeTintColor: '#000',
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    showLabel: true,
    showIcon: true,
    // tabBarComponent: TabBarComponent,
    navigationOptions: {
        header: null
    }
});


/**
 * Root stack for all the screens.
 */
const AppNavigator = createStackNavigator({
    LoginScreen,
    Profile: {screen: Profile},
    SignUp: {screen: SignUp},
    TabNavigator
    // SplashScreen,
    // ,
    // TabNavigator,
    // Inbox: {screen: Inbox},
    // Message: {screen: Message},
    // ShippingMethod: {screen: ShippingMethod},
    // Products: {screen: Products},
    // ShippingAddress: {screen: ShippingAddress},
    // NewAddress: {screen: NewAddress},
    // AddressBook: {screen: AddressBook},
    // OderHistory: {screen: OderHistory},
    // AccountScreen,
    // ForgotPasswordScreen,
    // ResetPassword,
    // ChangePasswordScreen,

}, {
    headerMode: 'none',
    headerBackTitle: null,
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            //backgroundColor: Colors.DEFAULT_HEADER_COLOR,
            backgroundColor: '#ccc',
        },
    },
});

const middlewareNavigator = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const RootNavigator = createReduxContainer(AppNavigator, 'root');
const mapStateToProps = state => ({
    state: state.nav,
});
const Root = connect(mapStateToProps)(RootNavigator);
export {AppNavigator, Root, middlewareNavigator};
