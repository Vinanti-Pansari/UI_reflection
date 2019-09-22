import {Dimensions, StyleSheet} from 'react-native';
//import Fonts from '../../utility/fonts';
import Colors from '../../utility/colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    videoBackgroundView:{
        height: screenHeight * 0.33,
        margin: 10,
        width: '90%',
        backgroundColor: Colors.VIDEO_BACKGROUND_COLOR,
        borderRadius: 4,
         justifyContent: 'center'
    },
    videoWrapperStyle:{
        height: screenHeight * 0.2,
        width:  screenWidth * 0.75,
        alignSelf: 'center'
    }

});

export default styles;
