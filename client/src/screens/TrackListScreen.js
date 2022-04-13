import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const TrackListScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text style={{fontSize: 48}}>TrackListScreen</Text>
            <Button
                title='Go to Track Detail'
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
