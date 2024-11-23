// Importing required libraries and styles
import './App.css'; // Importing the CSS file for styling
import { RecoilRoot, useRecoilValue } from 'recoil'; // Importing RecoilRoot and useRecoilValue from Recoil
import { todosAtomFamily } from './atom'; // Importing the atom family to manage todos

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

// Component to display an individual todo item
function Todo({ id }) {
  // Fetch the todo item from the Recoil state using its ID
  const todo = useRecoilValue(todosAtomFamily(id)); 

  return (
    <>
      {/* Displaying the title and description of the todo */}
      {todo.title}
      {todo.description}
      <br /> {/* Line break for visual separation */}
    </>
  );
}

export default App; // Exporting the App component as the default export
