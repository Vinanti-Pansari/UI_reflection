import {Dimensions, StyleSheet} from 'react-native';
import Fonts from '../utility/fonts';
import Colors from '../utility/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    spinnerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: '#333',
        opacity: 0.8,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    backButtonContainer: {
        marginLeft: 10,
        width: screenWidth * 0.1,
        height: '100%',
        justifyContent: 'center',
    },
    headerRightIcon: {
        height: 28,
        width: 28,
        marginRight: 8,
        alignSelf: 'flex-end',
    },
    menuStyle: {
        height: 22,
        width: 22
    },
    inputStyle: {
        width: '80%',
        height: 50,
        color: '#000',
        paddingBottom: 10,
        paddingHorizontal: 7,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: 'transparent',
        marginVertical: 10,
        //  fontFamily: Fonts.SUB_HEADING_FONT
    },
    searchBoxView: {
        width: screenWidth * 0.95,
        height: 40,
        alignSelf: 'center',
        //   backgroundColor: Colors.TAB_BAR,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    headerSearchBox: {
        width: screenWidth * 0.7,
        height: 50,
        alignSelf: 'center',
        fontSize: 18,
        //   fontFamily: Fonts.SUB_HEADING_FONT
    },
    passwordInput: {
        width: '75%',
        height: 50,
        color: '#000',
        paddingBottom: 10,
        paddingHorizontal: 7,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'transparent',
        marginVertical: 10,
        //   fontFamily: Fonts.SUB_HEADING_FONT
    },
    background: {
        flex: 1,
        height: null,
        width: null,
    },
    button: {
        width: '100%',
        height: 45,
        borderRadius: 5,
        //   backgroundColor: Color.HEADER_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    buttonLabel: {
        fontSize: 20,
        color: '#fafafa'
    },
    actionSheet: {
        position: 'absolute',
        bottom: 0,
        width: screenWidth,
        //  backgroundColor: Color.ACTION_SHEET_COLOR,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    actionSheetTitle: {
        //  fontFamily: Fonts.HEADING_FONT,
        fontSize: 18,
        // color: Colors.HEADER_COLOR,
        padding: 8
    },
    partitionLine: {
        height: 0.6,
        width: screenWidth,
        //  backgroundColor: Color.PARTITION_LINE
    },
    partitionSpace: {
        height: 5,
        width: screenWidth,
        backgroundColor: '#fcfcfc'
    },
    rightButtonText: {
        textAlign: 'center',
        flexGrow: 1,
        // color: Colors.PLACEHOLDER_COLOR,
        // fontFamily: Fonts.SUB_HEADING_FONT,
        paddingRight: 10,
        fontSize: 16
    },
    SectionStyle: {
        width: '95%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        //  borderBottomColor: Colors.TEXT_COLOR,
        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    closedIconStyle: {
        height: 35,
        width: 35,
    },
    openIconStyle: {
        height: 25,
        width: 35,
    },
    backGround: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
    },
    enableButtonStyle: {
        backgroundColor: 'transparent',
    },
    disabledButtonStyle: {
        backgroundColor: '#ccc',
    },
    dropDownContainerStyle: {
        width: '100%',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        height: 50
    },
    dropDownInnerContainerStyle: {
        borderBottomColor: 'transparent',
        marginLeft: 10
    },
    dropDownPickerStyle: {
        borderBottomColor: 'transparent',
        borderWidth: 0,
        width: '85%',
        marginLeft: 20
    },
    labelInput: {
        color: Colors.GRAY_BORDER,
        fontFamily: Fonts.SUB_HEADING_FONT,
        fontSize: 13,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        height: screenHeight * 0.15,
        width: '100%'
    },
    input: {
        borderWidth: 0,
        fontSize: 15,
        borderBottomWidth: 1.5,
        width: '100%',
        height: 50,
        paddingLeft: 8,
        backgroundColor: '#fff',
        borderColor: Colors.GRAY_BORDER,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashImage: {
        height: screenHeight * 0.3,
        width: screenHeight * 0.
    },
    boxShadowStyle: {
        borderWidth: 1,
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        marginTop: 10,
    },
    headerStyle: {
        backgroundColor: 'transparent',
    },
    headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        color: '#000',
        fontFamily: Fonts.HEADING_FONT,
        fontSize: 20
    },
    profileHeaderStyle:{
        backgroundColor: Colors.THEME_COLOR
    },
    profileHeaderTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        color: '#fff',
        fontFamily: Fonts.HEADING_FONT,
        fontSize: 20
    }
});

export default styles;
