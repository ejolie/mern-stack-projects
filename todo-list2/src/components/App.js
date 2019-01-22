import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(500).fill(0).map(
  (foo, index) => ({id: index, text: `일정 ${index}`, done: false})
);

class App extends Component {
  state = {
    input: '', // input 값
    todos: initialTodos,
  }

  // 일정 데이터 안에 들어가는 id 값과 id 값을 반환하는 메서드
  id = 1 // 렌더링되는 정보가 아니므로 state에 넣지 않고 멤버 변수로 선언
  getId = () => {
    return ++this.id;
  }

  // input 데이터 상태 감지 후 state 업데이트
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  // input 데이터 삽입
  handleInsert = () => {
    const { todos, input } = this.state;

    // 새 데이터 객체 만들기
    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ''
    });
  }

  // 데이터 수정 - to do 아이템 checkbox 토글하기
  handleToggle = (id) => {
    // id로 배열의 인덱스를 찾습니다.
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // 찾은 데이터의 done 값을 반전시킵니다.
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    // slice를 이용해 우리가 찾은 index 전후의 데이터들을 복사합니다.
    // 그리고 그 사이에는 변경된 to do 객체를 넣어 줍니다.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  // 데이터 삭제
  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // slice로 전후 데이터들을 복사하고, 우리가 찾은 index는 제외시킵니다.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }

  render() {
    const { input, todos } = this.state;
    const { 
      handleChange, 
      handleInsert, 
      handleToggle, 
      handleRemove 
    } = this;
    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </PageTemplate>
    );
  }
}

export default App;