import { Heading, VStack, IconButton, Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState,  } from "react";

import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun />:<FaMoon/>}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Box>
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
          bgClip="text"
        >
          Todo Application
        </Heading>
      </Box>

      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
