import { Header } from "../Header";
import { ChatContainer } from "../ChatContainer";
import { ConversationPanel } from "../ConversationPanel";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row h-screen">
        <ConversationPanel />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Layout;
