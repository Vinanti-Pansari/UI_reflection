import React from "react";
import {ActivityIndicator, View} from 'react-native';
import Color from './colors';

export function ListFooterComponentSpinner() {
    return (
        <View style={{
            paddingVertical: 30,
            backgroundColor: 'transparent'
        }}
        >
            <ActivityIndicator color={Color.SPINNER_COLOR} size="large"/>
        </View>

    )
}

export function applyBackgroundColor(screenName) {
            if(screenName === 'profile')
                return {
                    backgroundColor: Color.THEME_COLOR,
                    flex: 1
                };
            else
                return {
                    backgroundColor: '#fff',
                    flex: 1
                };
}

export function applyStatusBarColor(screenName) {
    if (screenName === 'profile')
        return Color.THEME_COLOR;
    else
        return '#fff';
}