import './App.css';
import {Heading} from '@chakra-ui/react';
import Todo from './components/todo';     
import CreateTodo from './components/createTodo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from "react-icons/fa";
import {useState} from 'react'

function App() {
  //lista dei todos

  const initialTodos = [
    {
        id:1,
        text:'do homework',
    },
    {
        id:2,
        text:'go to the grocery',
    },
]
// 

const [todos, setTodos] = useState(initialTodos)

//cancella todos
function deleteTodo(id){
  const newTodo = todos.filter(todo => todo.id !== id);
  setTodos(newTodo);
}
// creare un nuovo todo

function addTodo(todo){
  setTodos([...todos,todo])
}

// cambiare in dark mode
const { colorMode, toggleColorMode } = useColorMode();

  return ( 
    <VStack p={4}>
      <IconButton 
      icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
       isRound='true' 
       size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
<Heading p ='10' 

fontWeight="extrabold" 
size='2xl'
bgGradient="linear(to-r, green.500, blue.500)"
bgClip="text"
>My Todo/React App</Heading>

<Todo todos={todos} deleteTodo= {deleteTodo} />
<CreateTodo addTodo={addTodo} />
</VStack>
  );
}

export default App;