import React from 'react';

import {SafeAreaView, View, Text} from 'react-native';
import {home} from './styles';

export const Home = () => (
    <SafeAreaView style={home.container}>
        <View style={[home.container, home.test]}>
            <Text style={home.text}>Hello World!</Text>
        </View>
    </SafeAreaView>
);
