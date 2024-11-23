// Import required styles and libraries
import './App.css'; // Importing CSS file for styling
import { RecoilRoot, useRecoilState } from 'recoil'; // RecoilRoot for wrapping the app and useRecoilState for managing Recoil state
import { todosAtomFamily } from './atoms'; // Importing the atom family to manage todos

// Main application component
function App() {
  return (
    <RecoilRoot>
      {/* Wrapping the app in RecoilRoot to enable Recoil state management */}
      
      {/* Rendering two Todo components with unique IDs */}
      <Todo id={1} /> 
      <Todo id={2} />
    </RecoilRoot>
  );
}

// Component to display and manage individual todo items
function Todo({ id }) {
  // Using the atom family to get and set the state of the todo with the given `id`
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {/* Displaying the title and description of the todo */}
      {todo.title}
      {todo.description}
      <br /> {/* Line break for better visual separation */}
    </>
  );
}

export default App; // Exporting the App component as the default export
