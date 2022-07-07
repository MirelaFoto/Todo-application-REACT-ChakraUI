import React from 'react'
import {HStack, Button, Input, useToast} from '@chakra-ui/react' 
import {useState} from 'react'

function CreateTodo({addTodo}) {
const toast = useToast()

    function addOnSubmit(data){
data.preventDefault();//per non caricare la pagina on click
  if(!content) {
    toast({
        title:'You have to write something!',
        status:'error',
        duration:5000,
        isClosable:true,
    })
  }
const todo = {
   id:'',
    text: content,
};

addTodo(todo);
setContent('')

}


const [content, setContent] = useState('')

  return <form onSubmit={addOnSubmit}>
<HStack mt='6'>
<Input  variant='filled'
 placeholder='write your todo...' 
value={content} 
onChange={(v)=> setContent(v.target.value)} />
<Button colorScheme='green' px='6' type='submit'>Add Todo </Button>

</HStack>
  </form>
}

export default CreateTodo