import { topics } from "~/utils/consts";
import Topic from "./topic";
import SidebarSection from "~/components/sidebar-section";

const Topics = () => {
  return (
    <SidebarSection more="/trends" title="İlgini çekebilecek gündemler">
      {topics.map((topic, key) => (
        <Topic key={key} item={topic} />
      ))}
    </SidebarSection>
  );
};

export default Topics;
