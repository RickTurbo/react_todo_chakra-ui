import React from "react";
import { VStack, HStack,Text,IconButton } from "@chakra-ui/react";
import {FaTrash} from 'react-icons/fa'

function TodoList() {
  const todos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];

  return (
    <VStack>
      {todos.map((todo) => (
        <HStack kye={todo.id}>
          <Text>{todo.body}</Text>
          <IconButton icon={<FaTrash/>} isRound="true"/> 
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
