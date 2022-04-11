import React, {useContext} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const {state, signin} = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View style={styles.container}>
                    <AuthForm
                        headerText='Sign In for Tracker'
                        errorMessage={state.errorMessage}
                        submitButtonText='Sign In'
                        onSubmit={signin}
                    />
                    <NavLink
                        routeName='Signup'
                        text='Dont have an account? Sign Up instead'
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
