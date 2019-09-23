import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../utility/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center'
    },
    videoBackgroundView:{
        height: screenHeight * 0.33,
        margin: 10,
        width: '90%',
        backgroundColor: Colors.VIDEO_BACKGROUND_COLOR,
        borderRadius: 4,
       justifyContent: 'center',
        alignSelf: 'center',
    },
    videoWrapperStyle:{
        height: screenHeight * 0.2,
        width:  screenWidth * 0.75,
        alignSelf: 'center'
    },
    boxShadowStyle: {
        borderWidth: 1,
        borderColor: 'transparent',
        shadowColor: '#fff',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        marginTop: 10,
    },

});

export default styles;
