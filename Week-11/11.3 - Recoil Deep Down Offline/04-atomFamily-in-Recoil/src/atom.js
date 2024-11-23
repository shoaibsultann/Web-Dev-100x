import { atomFamily } from "recoil"; // Importing Recoil's atomFamily for dynamic state management
import { TODOS } from "./todos"; // Importing the initial list of todos

// Creating an atom family to manage todos dynamically by their ID
export const todosAtomFamily = atomFamily({
  // Unique key to identify the atom family
  key: 'todosAtomFamily',

  // Default value for each atom in the family
  default: id => {
    // Find the todo item in the TODOS array with the matching ID
    return TODOS.find(x => x.id === id);
  },
});
