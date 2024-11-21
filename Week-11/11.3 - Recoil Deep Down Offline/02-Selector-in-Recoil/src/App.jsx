import { RecoilRoot, useRecoilValue } from 'recoil';
// Import `RecoilRoot` to initialize Recoil state and `useRecoilValue` to read atom/selector values
import './App.css'; 
// Import CSS for styling
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom';
// Import Recoil atoms for managing individual notification counts
import { totalNotificationSelector } from './atom';
// Import selector to compute the total notification count

function App() {
  // Main application component
  return (
    <RecoilRoot>
      {/* Initialize Recoil state with RecoilRoot */}
      <MainApp />
      {/* Render the MainApp component */}
    </RecoilRoot>
  );
}

function MainApp() {
  // Use `useRecoilValue` to access the values of atoms and selector
  const networkNotificationCount = useRecoilValue(networkAtom); // Reads the network notifications count
  const jobsAtomCount = useRecoilValue(jobsAtom); // Reads the jobs notifications count
  const notificationAtomCount = useRecoilValue(notificationAtom); // Reads the general notifications count
  const messagingAtomCount = useRecoilValue(messagingAtom); // Reads the messaging notifications count
  const totalNotificationCount = useRecoilValue(totalNotificationSelector); // Computes total notifications using selector

  return (
    <>
      {/* Render buttons with notification counts */}
      <button>Home</button>

      {/* Network button displays "99+" if notifications exceed 99 */}
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      
      {/* Jobs button */}
      <button>Jobs ({jobsAtomCount})</button>

      {/* Messaging button */}
      <button>Messaging ({messagingAtomCount})</button>

      {/* Notifications button */}
      <button>Notification ({notificationAtomCount})</button>

      {/* Total notifications under "Me" button */}
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
// Export the App component as the default export
