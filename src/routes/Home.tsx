import React from "react";
import AppTitle from "../components/AppTitle";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

const Home = () => {
  return (
    <div>
      <AppTitle />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
