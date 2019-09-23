import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Container from '../../component/Container';
import { fetchVideoList } from '../../modules/fetchVideoList';
import VideosList from './videosList';
import { connect } from "react-redux";
import { ListFooterComponentSpinner } from '../../utility/dynamicStyle';
import PropTypes from "prop-types";



class VideoScreen extends Component {
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


    /**
     * Method to get the list of videos
     */
    fetchVideoList = () => {
        const { dispatch } = this.props;
        const { videoList } = this.state;
        const dataPayload = videoList;
        dispatch(fetchVideoList())
            .then(res =>{
                this.setState({
                    paginationSpinner: false,
                    videoList: dataPayload.concat(res)
                })
            })
    };

    /**
     * Method to handle the scroll of the list
     * @private
     */
    _scrolled = () => {
        this.setState({
            onEndReachedPage: 0.5,
            flatListReady: true
        });
    };

    /**
     * Method to handle the end reached on list view
     */
    handleEndReached = () => {
        const { flatListReady, onEndReachedPage } = this.state;
        if (flatListReady && onEndReachedPage !== 0) {
            this.setState(
                { paginationSpinner: true },
                () =>  this.fetchVideoList()
            );
        }
    };


    render() {
        const { videoList , onEndReachedPage, paginationSpinner } = this.state;
        const { fetching } = this.props;
        return (
            <Container
                fetching = {!paginationSpinner && fetching}
                screen={'videos'}
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
                        paginationSpinner &&
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

VideoScreen.propTypes = {
    dispatch: PropTypes.object,
    fetching: PropTypes.bool,
};
VideoScreen.defaultProps = {
    dispatch: {},
    fetching: false,
};
const mapStateToProps = state => ({
    videoListPayload: state.fetchVideoList.videoListPayload,
    fetching: state.fetchVideoList.fetching,
});

export default connect(mapStateToProps)(VideoScreen);
