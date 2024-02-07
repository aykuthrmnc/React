import SidebarSection from "~/components/sidebar-section";
import UserCard from "~/components/user-card";
import { whoFollowUsers } from "~/mock";
import { useAccount } from "~/store/auth/hooks";

const WhoFollow = () => {
  const account = useAccount();

  return (
    <SidebarSection more={`/connect-people?user_id=${account.id}`} title="Kimi takip etmeli">
      {whoFollowUsers.map((item, key) => (
        <UserCard key={key} user={item} />
      ))}
    </SidebarSection>
  );
};

export default WhoFollow;
