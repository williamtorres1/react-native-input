import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  input: {
    width: 370,
    height: 37,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: '2%',
  },
});
