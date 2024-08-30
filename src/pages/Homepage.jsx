import { AppConfig, UserSession } from "@stacks/auth";

function Homepage() {
  const appConfig = new AppConfig();
  const userSession = new UserSession();

  return (
    <header className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-[10rem]">Luna</h1>

      <button className="px-[3rem] py-[1rem] bg-gray-300 text-[2rem] rounded-[50rem] hover:translate-y-[-1rem] transition duration-700 ease-in-out delay-300">
        Connect Wallet
      </button>
    </header>
  );
}

export default Homepage;
