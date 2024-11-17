import { atom } from "recoil"; // Importing the atom function from Recoil

// Defining the counterAtom
export const counterAtom = atom({
    // The default value for this atom (initial state)
    default: 0,

    // A unique key to identify this atom (must be unique across all atoms in the app)
    key: "counter"
});
