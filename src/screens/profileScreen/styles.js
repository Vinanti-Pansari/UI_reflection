import {Dimensions, StyleSheet} from 'react-native';
import Fonts from '../../utility/fonts';
import Colors from '../../utility/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center'
    },
    topSpacing:{
        marginTop: screenHeight * 0.12,
        flex: 1
    },
    headingStyle: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        fontFamily: Fonts.HEADING_FONT
    },
    profileBlock:{
        height: screenHeight * 0.58,
        width: screenWidth * 0.85,
        backgroundColor: Colors.PROFILE_BACKGROUND_COLOR,
        borderRadius: 10,
        alignSelf: 'center'
    },
    imageBlock:{
        position: 'absolute',
        alignSelf: 'center',
        top: -(screenHeight * 0.18)/2,
    },
    imageStyle:{
        height: screenHeight * 0.18,
        width: screenHeight * 0.18,
        borderRadius: (screenHeight * 0.18)/2,
        backgroundColor: '#ccc'
    },
    nameTitleStyle:{
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        fontFamily: Fonts.HEADING_FONT,
        paddingTop: screenHeight * 0.12
    },
    detailView:{
        width: '90%',
        alignSelf: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_BORDER,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ValueText:{
        fontSize: 15,
        color: '#000',
        fontFamily: Fonts.SUB_HEADING_FONT,
        width: '70%'
    },
    keyText:{
        textAlign: 'right',
        fontSize: 15,
        color: '#ccc',
        fontFamily: Fonts.SUB_HEADING_FONT,
        width: '30%'
    },
    commonMargin:{
        marginTop: 20,
        marginBottom: 20
    },
    ButtonView:{
        position: 'absolute',
        bottom: -(screenHeight * 0.03),
        width: screenWidth * 0.35,
        backgroundColor: '#000',
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 15,
        color: '#fff',
        padding: 10,
        fontFamily: Fonts.SUB_HEADING_FONT,
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
});

export default styles;
