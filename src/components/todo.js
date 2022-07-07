import React from 'react';
import{VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge} from '@chakra-ui/react';
import {FaTrash} from 'react-icons/fa'


function Todo({todos, deleteTodo}) {

if(!todos.length){
    return(
        <Badge colorScheme='purple' p='5' m='6' borderRadius='lg'>Your List is Empty!!!</Badge>
    )
}

  return (
    <VStack
    divider = { <StackDivider />}
    borderColor= 'gray.100'
    borderWidth='2px'
    p='4'
    borderRadius='lg'
    w='100%'
maxW={{base:'90vw', sm: '80vw', lg: '60vw', xl:'50vw'}}
    alignItems='stretch'
   
    >

{todos.map(todo=>(
     <HStack key={todo.id} >
<Text>{todo.text} </Text>
<Spacer />
<IconButton  icon={<FaTrash />}
isRound='true' 
onClick={()=> deleteTodo(todo.id)}
/>
     </HStack>
)
    )}

    </VStack>
  )
}

export default Todo