import { atom, selector } from "recoil"; // Importing atom and selector from Recoil for state management

// Define an atom to manage the counter state
export const counterAtom = atom({
    key: "counter", // Unique key to identify the atom
    default: 0,     // Initial value of the atom (counter starts at 0)
});

// Define a selector to derive whether the counter value is even or odd
export const evenSelector = selector({
    key: "isEvenSelector", // Unique key to identify the selector
    get: function ({ get }) { 
        const currentCount = get(counterAtom); // Access the current value of counterAtom
        const isEven = (currentCount % 2 == 0); // Check if the current value is even
        return isEven; // Return true if even, false if odd
    }
});
