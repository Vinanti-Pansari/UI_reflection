import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import styles from './Styles';


/* Activity Loader component for iOS and android */
export default class Spinner extends Component {
    render() {
        return (
            this.props.animating && (
                <ActivityIndicator
                    animating={this.props.animating}
                    style={styles.spinnerStyle}
                    size="large"
                    color={'green'}
                />
            )
        );
    }
}

Spinner.propTypes = {
    animating: PropTypes.bool.isRequired
};
