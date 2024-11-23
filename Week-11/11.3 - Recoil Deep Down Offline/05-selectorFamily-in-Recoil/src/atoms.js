import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

// Create an atom family to manage a dynamic collection of todos
export const todosAtomFamily = atomFamily({
    // Unique key for the atom family
    key: "todosAtomFamily",

    // Default value for each atom in this family is defined using a selector family
    default: selectorFamily({
        // Unique key for the selector family
        key: "todoSelectorFamily",

        // `get` defines a function to fetch the todo based on its `id`
        get: (id) => async ({ get }) => {
            // Fetch the specific todo from the server using the provided `id`
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            
            // Return the fetched todo item
            return res.data.todo;
        },
    }),
});
