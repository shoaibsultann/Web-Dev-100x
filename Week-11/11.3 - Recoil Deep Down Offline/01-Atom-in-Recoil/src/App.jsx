import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom'

function App() {
  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  // const [messagingAtomCount, setMessagingAtomCount ] = useRecoilState(messagingAtom); 
  // We need the value and the function to update the value
  
  return (
    <>
   
    <button>Home</button>

    <button>My Network ({networkNotificationCount >= 100 ? "99+" :networkNotificationCount})</button>
    <button>Jobs({jobsAtomCount})</button>
    <button>Messaging ({messagingAtomCount}) </button>
    <button>Notification ({notificationAtomCount})</button>
    <ButtonUpdater/>

    </>
  )
}

function ButtonUpdater() {
  const setMessagingAtomCount = useSetRecoilState(messagingAtom); 

  <button onClick={() => {
    setMessagingAtomCount(c => c + 1 );
  }}>Me</button> 
}


export default App
