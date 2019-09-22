import FloatingLabel from 'react-native-floating-labels';
import { View, Image, Text } from 'react-native';
import React from 'react';
import styles from './Styles';
import Placeholder from '../utility/placeHolder';
import Icons from '../utility/icons';

const FloatingLabels = (props) => {
    const { placeholder, showPassword } = props;
    return (
        <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            password={showPassword}
            ref={props.inputRef}
            {...props}
        >
            {
                placeholder
            }
        </FloatingLabel>
    )
};
export default FloatingLabels;