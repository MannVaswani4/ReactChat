import List from "./components/list/list"
import Chat from "./components/chat/chat"
import Detail from "./components/detail/detail"
import Login from "./components/login/Login"
import Notification from "./components/notifications/Notification"

const App = () => {
  const user = true

  return (
    <div className='container'>
      { user ? (
        <>
        <List></List>
        <Chat></Chat>
        <Detail></Detail>
        </> 
      ):(<Login/>)
    }
    <Notification/>
      
    </div>
  )
}

export default App