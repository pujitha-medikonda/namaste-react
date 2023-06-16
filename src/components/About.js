import useOnline from "../utilities/useOnline";
import Header from "./Header";
import ProfileClass from "./ProfileClass";

const AboutUs = function () {
  const isOffline = useOnline();
  console.log("offline" + isOffline);
  if (!isOffline) {
    return (
      <div>
        <Header></Header>
        <p>🛑 Offline please come backLater</p>
      </div>
    );
  }
  return (
    <div>
      <Header></Header>
      <h1>Its all about us in React Web Series</h1>
      <ProfileClass />
    </div>
  );
};

export default AboutUs;
