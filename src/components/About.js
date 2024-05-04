import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Series</h2>
      <User name="Food App (Function)" location="New Delhi (Function" />
      <UserClass name="Food App (Class)" location="New Delhi (Class)" />
    </div>
  );
};
export default About;
