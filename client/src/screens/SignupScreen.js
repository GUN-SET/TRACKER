import React, {useContext} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View style={styles.container}>
                    <NavigationEvents onWillFocus={clearErrorMessage} />
                    <AuthForm
                        headerText='Sign Up for Tracker'
                        errorMessage={state.errorMessage}
                        submitButtonText='Sign Up'
                        onSubmit={signup}
                    />
                    <NavLink
                        routeName='Signin'
                        text='Already have an account? Sign in instead'
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 100,
    },
});

export default SignupScreen;
