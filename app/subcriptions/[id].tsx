import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { Text, View } from 'react-native';

const Subscriptions = () => {
    const { id } = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Subscription: {id}</Text>
    </View>
  )
}

export default Subscriptions