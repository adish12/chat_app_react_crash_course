import './App.css';
import { ChatEngine } from 'react-chat-engine';
import { ConsoleSqlOutlined } from '@ant-design/icons';

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
      userName={process.env.REACT_APP_CHAT_USERNAME}
      userSecret={process.env.REACT_APP_CHAT_USER_SECRET}
    />
  );
}

export default App;
