import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ToDo() {
  const [isEditing, setIsEditing] = useState('false');

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle}></View>
      </TouchableOpacity>
      <Text style={styles.text}>Hello I'm a To Do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    text: {
      fontWeight: '600',
      fontSize: 20,
      marginVertical: 20
    },
    circle: {
      width: 30,
      hight: 30,
      borderRadius: 25,
      backgroundColor: 'red'
    }
});
