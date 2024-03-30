import getConversations from "../../components/actions/getConversations";
import getUsers from "../../components/actions/getUsers";
import Sidebar from "../../components/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} title="Messages" initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
