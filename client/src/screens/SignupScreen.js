import React, {useContext} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const {state, signup} = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View style={styles.container}>
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
