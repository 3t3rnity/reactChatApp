import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.scss";

import ChatFeed from "./components/ChatFeed";

const App = () => (
  <ChatEngine
    height="100vh"
    projectID="9d74f005-6ed0-4c97-8058-93e75c1816fa"
    userName="Administrator"
    userSecret="123456"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  />
);
export default App;
