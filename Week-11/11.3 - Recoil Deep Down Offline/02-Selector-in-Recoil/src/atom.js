import { atom, selector } from "recoil"; 
// Import Recoil's `atom` and `selector` for state management

// Define an atom to manage the network notifications count
export const networkAtom = atom({
    key: "networkAtom", // Unique key to identify this atom
    default: 102, // Initial value for the network notifications
});

// Define an atom to manage the jobs notifications count
export const jobsAtom = atom({
    key: "jobsAtom", // Unique key to identify this atom
    default: 0, // Initial value for the jobs notifications
});

// Define an atom to manage the general notifications count
export const notificationAtom = atom({
    key: "notificationAtom", // Unique key to identify this atom
    default: 17, // Initial value for the general notifications
});

// Define an atom to manage the messaging notifications count
export const messagingAtom = atom({
    key: "messagingAtom", // Unique key to identify this atom
    default: 10, // Initial value for the messaging notifications
});

// Selector to calculate the total notifications from all sources
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector", // Unique key to identify this selector
    get: ({ get }) => {
        // Use the `get` method to access the values of atoms
        const networkAtomCount = get(networkAtom); // Get network notifications count
        const jobsAtomCount = get(jobsAtom); // Get jobs notifications count
        const notificationAtomCount = get(notificationAtom); // Get general notifications count
        const messagingAtomCount = get(messagingAtom); // Get messaging notifications count

        // Return the total notifications count by summing all the atom values
        return (
            networkAtomCount +
            jobsAtomCount +
            notificationAtomCount +
            messagingAtomCount
        );
    },
});
