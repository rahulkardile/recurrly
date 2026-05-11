import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const signUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link href={"/sign-in"} > <Text>Go to Sign In</Text> </Link>
    </View>
  )
}

export default signUp