import React, {useContext} from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View style={styles.container}>
                    <AuthForm
                        headerText='Sign Up for Tracker'
                        errorMessage={state.errorMessage}
                        sumbitButtonText='Sign Up'
                        onSubmit={signup}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signin')}>
                        <Spacer>
                            <Text style={styles.link}>
                                Already have an account? Sign in instead
                            </Text>
                        </Spacer>
                    </TouchableOpacity>
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
    link: {
        color: 'blue',
    },
});

export default SignupScreen;
