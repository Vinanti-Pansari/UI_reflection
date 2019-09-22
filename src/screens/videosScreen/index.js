import React, { Component } from 'react';
import {View, FlatList, Text } from 'react-native';
import Container from '../../component/Container';
import Config from '../../utility/config';
import { fetchVideoList } from '../../modules/fetchVideoList';
// import DataOptions from '../../utility/dataOptions';
import VideosList from './videosList';
// import Container from '../../components/MainContainer';
// import ProductDetailsScreen from "../productdetailsScreen";
// import { navigateToScreen } from '../../utility/handleNavigation';
// import Colors from '../../utility/colorConstant';
 import { connect } from "react-redux";
// import { productList } from '../../modules/productList';
// import Style from './style';
// import fetchProductList from "../../graphQlQuries/fetchProductList";
// import { checkNullData } from '../../utility/helper'
import { ListFooterComponentSpinner } from '../../utility/dynamicStyle';



class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoList: [],
            nextDataIsAvailable: false,
            onEndReachedPage: -1,
            flatListReady: false,
            paginationSpinner: false
        };
    }


    componentDidMount() {
        this.fetchVideoList();
    }


    componentDidUpdate(prevProps) {
        console.log('fetchVideoList', prevProps)
        const { videoListPayload } = this.props;
        console.log('videoListPayload', videoListPayload)
        if(videoListPayload !== prevProps.videoListPayload){
            this.setState({
                videoList: videoListPayload
            })
        }
    }

    /**
     * Method to get the list of videos
     */
    fetchVideoList = () => {
        const { dispatch } = this.props;
        dispatch(fetchVideoList())

    };

    updateValue = () => {
        console.log('updateValue');
    };


    _scrolled = () => {
        this.setState({
            onEndReachedPage: 0.5,
            flatListReady: true
        });
    };

    handleEndReached = () => {
        const { flatListReady, onEndReachedPage } = this.state;
        if (flatListReady && onEndReachedPage !== 0) {
            this.setState(
                { paginationSpinner: true },
                () => this.increaseSkipNumber()
            );
        }
    };



    render() {
        const { videoList , onEndReachedPage } = this.state;
        const { fetching } = this.props;
        console.log('videoList', videoList);
        return (
            <Container
                fetching = {fetching}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={videoList}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={(data, index) =>
                            <VideosList
                                data={data}
                                index={index}
                            />
                    }
                    ListFooterComponent={
                        ListFooterComponentSpinner
                    }
                    onEndReachedThreshold={onEndReachedPage}
                    onScrollEndDrag={() => this._scrolled()}
                    onEndReached={() => this.handleEndReached()}

                />
            </Container>
        );
    }
}

HomeScreen.propTypes = {
    // Props Validation
};

const mapStateToProps = state => ({
    videoListPayload: state.fetchVideoList.videoListPayload,
    fetching: state.fetchVideoList.fetching,
});

export default connect(mapStateToProps)(HomeScreen);
