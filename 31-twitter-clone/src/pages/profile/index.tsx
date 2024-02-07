import { useParams } from "react-router-dom";

const Profile = () => {
  const { slug } = useParams();

  console.log(slug);

  return <div>Profile</div>;
};
export default Profile;
