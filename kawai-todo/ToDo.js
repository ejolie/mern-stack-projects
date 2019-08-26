import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ToDo() {
  const [isEditing, setIsEditing] = useState('false');

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 50
  }
});
