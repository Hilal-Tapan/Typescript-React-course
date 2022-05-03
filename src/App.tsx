import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(),todo, isDone: false}])
    setTodo("");
    }
  };

  console.log(todos);

  return <div className="App">
    <span className="heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    <TodoList todos={todos} setTodos={setTodos}/>

  </div>
};

export default App;



// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role:[number, string];

// let printName: (name: string) => never;

// type Person = {
//   name : string;
//   age?: number;
// };

// let person: Person = {
//   name: "Hilal",
// };

// let lotsOfPeople: Person[];

// let personName: unknown; 
//Unknown is more recommended instead of any

// type X = {
//   a: string; 
//   b: number;
// };

// interface Person extends X  {
//   name : string;
//   age?: number;
// };