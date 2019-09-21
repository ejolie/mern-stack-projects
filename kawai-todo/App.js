import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';

import ToDo from './ToDo';

const { width } = Dimensions.get('window');

export default function App() {
  const [newTodo, setNewTodo] = useState('');

  const _controlNewToDo = (text) => {
    setNewTodo(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Kawai To Do</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder={'New To Do'}
          placeholderTextColor={'#999'}
          value={newTodo}
          onChangeText={_controlNewToDo}
          returnKeyType={'done'}
          autoCorrect={false}
        />
      </View>
      <ScrollView contentContainerStyle={styles.toDos}>
        <ToDo />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 8,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        shadowOffset: {
          height: 4,
          width: 0
        }
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: 'center'
  }
});
