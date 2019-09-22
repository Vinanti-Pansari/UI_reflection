import {Dimensions, StyleSheet} from 'react-native';
import Fonts from '../../utility/fonts';
import Colors from '../../utility/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 30,
        color: Colors.HEADING_COLOR,
        paddingLeft: 30,
        paddingTop: 30,
        fontFamily: Fonts.HEADING_FONT
    },
    commonMargin: {
        margin: 30,
        marginTop: 8
    },
    passwordView: {
        position: 'relative'
    },
    passwordIconView: {
        position: 'absolute',
        right: 10,
        top: 40
    },
    passwordImage: {
        height: 30,
        width: 30,
    },
    mobileView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mobileCodeView: {
        width: '20%'
    },
    mobileNumberView: {
        width: '75%'
    },
    referralBlock: {
        marginTop: 20,
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        alignItems:'center'
    },
    inputStyle:{
        width: '80%',
        color: '#000',
        fontSize: 18,
        paddingLeft: 10,
        fontFamily: Fonts.SUB_HEADING_FONT
    },
    buttonView: {
        marginTop: 30,
        borderTopLeftRadius: 20,
        width: screenWidth * 0.3,
        borderBottomLeftRadius: 20,
        backgroundColor: Colors.THEME_COLOR,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    buttonText: {
        padding: 8,
        fontSize: 15,
        color: '#fff',
        fontFamily: Fonts.SUB_HEADING_FONT
    },
    applyText:{
        textAlign: 'center',
        fontSize: 15,
        color: '#000',
        fontFamily: Fonts.TEXT_FONT
    }
});

export default styles;
