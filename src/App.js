import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import TodoTitle from "./components/TodoTitle";
// import Counter from "./components/Counter";
// import TraficLight from "./components/TraficLight";

function App() {

  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    if (text.length !== 0) {
      dispatch(addTodo({ text }))
      setText('')
    }
  }


  return (
    <div className="App">
      <div className="wrapper">
        <TodoTitle />
        <InputField text={text} addTask={addTask} setText={setText} />
      </div>
      <TodoList />
      {/* <TraficLight /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
