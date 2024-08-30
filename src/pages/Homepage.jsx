import { AppConfig, UserSession } from "@stacks/auth";
import { showConnect } from "@stacks/connect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate("");
  const [userProfile, setUserProfile] = useState({});
  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });

  function connectWallet() {
    showConnect({
      appDetails: {
        name: "Luna",
        icon: "Luna",
      },

      onFinish: function () {
        const userData = userSession.loadUserData();
        console.log(userData);
        setUserProfile(userData);

        navigate("/invoice");
      },

      userSession,
    });
  }

  return (
    <header className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-[10rem]">Luna</h1>

      <button
        className="px-[3rem] py-[1rem] bg-gray-300 text-[2rem] rounded-[50rem] hover:translate-y-[-1rem] transition duration-700 ease-in-out delay-300"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </header>
  );
}

export default Homepage;
