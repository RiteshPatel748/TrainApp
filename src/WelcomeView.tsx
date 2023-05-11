import React, {useCallback, useState} from 'react';
import Realm from 'realm';
import {useApp} from '@realm/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {COLORS} from './Colors';

export function WelcomeView(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // state values for toggable visibility of features in the UI
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [isInSignUpMode, setIsInSignUpMode] = useState(true);

  const app = useApp();

  // signIn() uses the emailPassword authentication provider to log in
  const signIn = useCallback(async () => {
    const creds = Realm.Credentials.emailPassword(email, password);
    await app.logIn(creds);
  }, [app, email, password]);

  // onPressSignIn() uses the emailPassword authentication provider to log in
  const onPressSignIn = useCallback(async () => {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert(`Failed to sign in: ${error?.message}`);
    }
  }, [signIn]);

  // onPressSignUp() registers the user and then calls signIn to log the user in
  const onPressSignUp = useCallback(async () => {
    try {
      await app.emailPasswordAuth.registerUser({email, password});
      await signIn();
    } catch (error: any) {
      Alert.alert(`Failed to sign up: ${error?.message}`);
    }
  }, [signIn, app, email, password]);

  return (
    <SafeAreaProvider>
      <View style={styles.viewWrapper}>
        <Text style={styles.title}>My Train App</Text>
        {/* <Text style={styles.subtitle}>
          Please log in or register with a Device Sync user account. This is
          separate from your Atlas Cloud login.
        </Text> */}
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCompleteType={undefined}
        />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={passwordHidden}
          rightIcon={
            <Icon
              type="material-community"
              name={passwordHidden ? 'eye-off-outline' : 'eye-outline'}
              size={12}
              color="black"
              onPress={() => setPasswordHidden(!passwordHidden)}
              tvParallaxProperties={undefined}
            />
          }
          autoCompleteType={undefined}
        />
        {isInSignUpMode ? (
          <>
            <Button
              title="Create Account"
              buttonStyle={styles.mainButton}
              onPress={onPressSignUp}
            />
            <Button
              title="Already have an account? Log In"
              type="clear"
              titleStyle={styles.secondaryButton}
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        ) : (
          <>
            <Button
              title="Log In"
              buttonStyle={styles.mainButton}
              onPress={onPressSignIn}
            />
            <Button
              title="Don't have an account? Create Account"
              type="clear"
              titleStyle={styles.secondaryButton}
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    // top:-100,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop:50,
    marginBottom:200,
  },
  subtitle: {
    fontSize: 14,
    padding: 10,
    color: 'gray',
    textAlign: 'center',
  },
  mainButton: {
    width: 350,
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    color: COLORS.primary,
  },
});
