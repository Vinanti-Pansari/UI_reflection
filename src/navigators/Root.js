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
import Icons from '../utility/icons';
import Styles from '../component/Styles';
import LoginScreen from '../screens/loginScreen/index';
import SignUpScreen from '../screens/signUpScreen/index';
import ProfileScreen from '../screens/profileScreen/index';
import SplashScreen from '../component/Splash'


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

const tabNavigationOptions = ({navigation}, title) => ({
    title,
    headerLeft:<Text/>,
    headerRight:
        <Text
        />,
    ...navOptions,

});

const ProfileNavigationOption= ({navigation}, title) => ({
    title,
    headerLeft:<Text/>,
    headerRight:<TouchableOpacity
     onPress={() => navigation.state.params.logOutPressed()}
    >
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
        navigationOptions: ({navigation}) => tabNavigationOptions({navigation}, 'Video')
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
    VideoScreen: {screen: Video},
    Profile: {screen: Profile},
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
    navigationOptions: {
        header: null
    }
});


/**
 * Root stack for all the screens.
 */
const AppNavigator = createStackNavigator({
    SplashScreen,
    LoginScreen,
    SignUp: {screen: SignUp},
    TabNavigator
}, {
    headerMode: 'none',
    headerBackTitle: null,
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
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
