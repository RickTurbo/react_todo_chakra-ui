import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { HStack } from '@chakra-ui/layout'
import React from 'react'

function AddTodo() {

function handleSubmit(e) {

}

  return <form onSubmit={handleSubmit}>
    <HStack mt='8'>
      <Input variant="filled" placeholder='learning chakraui with todo app'/>
      <Button colorScheme="pink" px='8' type='submit'>Add Todo</Button>
    </HStack>
  </form>
}

export default AddTodo
