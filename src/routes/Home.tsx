import React from "react";
import AddTodo from "../components/AddTodo";
import AppTitle from "../components/AppTitle";
import TodoList from "../components/TodoList";

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
