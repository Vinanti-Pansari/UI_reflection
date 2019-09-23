import {Dimensions, StyleSheet} from 'react-native';
import Fonts from '../../utility/fonts';
import Colors from '../../utility/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperView: {
        backgroundColor: Colors.THEME_COLOR,
        height: screenHeight * 0.15,
    },
    logoView: {
        position: 'absolute',
        top: screenHeight * 0.15 - 50
    },
    logonImage: {
        height: screenHeight * 0.22,
        width: screenHeight * 0.22,
    },
    commonMargin: {
        margin: 30,
        marginTop: 8
    },
    headingStyle: {
        fontSize: 30,
        color: Colors.HEADING_COLOR,
        paddingLeft: 30,
        paddingTop: 30,
        fontFamily: Fonts.HEADING_FONT
    },
    rowAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
    },
    linkText: {
        color: Colors.THEME_COLOR,
        fontSize: 12,
        textDecorationLine: 'underline',
        paddingTop: 10,
        fontFamily: Fonts.SUB_HEADING_FONT
    },
    buttonView: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: 100,
        backgroundColor: Colors.THEME_COLOR
    },
    buttonText: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        textAlign: 'center',
        color: '#fff',
        fontFamily: Fonts.SUB_HEADING_FONT
    },
    signUpText:{
        paddingTop: 5,
        fontSize: 15,
        textAlign: 'center',
        color: '#000',
        fontFamily: Fonts.SUB_HEADING_FONT
    },
    triangleCorner: {
        alignSelf: 'flex-end',
        width: 0,
        height: 120,
        borderRightWidth: screenWidth,
        borderBottomWidth: screenHeight * 0.25,
        backgroundColor: 'transparent',
        borderRightColor: Colors.THEME_COLOR,
        borderBottomColor: 'transparent',
    },
    triangleRight: {
        transform: [
            {rotate: '90deg'}
        ]
    },
    passwordView:{
        position: 'relative'
    },
    passwordIconView:{
        position: 'absolute',
        right: 10,
        top: 40
    },
    passwordImage:{
        height: 30,
        width: 30,
    }
});

export default styles;
