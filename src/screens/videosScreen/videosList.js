import React from 'react';
import VideoPlayer from 'react-native-video-player';
import {  Text, Image, TouchableOpacity, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Style from './styles';


const videoList = (props) => {
    const {
        data,
        data: {
            item:{
                thumbnail_url,
                title,
                video_url
            }
        },
    } = props;

    console.log('data', data, '\n', 'thumbnail_url', thumbnail_url);

    return (
        <View style = {Style.videoBackgroundView}>
            <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: thumbnail_url }}
                video={{ uri: video_url}}
                pauseOnPress
                fullScreenOnLongPress
                customStyles={{
                    wrapper: Style.videoWrapperStyle
                }}
                ref={r => this.player = r}

            />
        </View>
    )
};

videoList.defaultProps = {
    data: {}
};

videoList.propTypes = {
    data: PropTypes.obj,
};


export default videoList;

