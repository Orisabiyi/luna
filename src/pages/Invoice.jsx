import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

function Invoice() {
  const [userAddress, setUserAddress] = useState(function () {
    return sessionStorage.getItem("address");
  });
  const [issuedDate, setIssuedDate] = useState("");
  const { userProfile } = UserContext();

  useEffect(
    function () {
      setIssuedDate(new Date().toLocaleDateString());
      sessionStorage.setItem(
        "address",
        JSON.stringify(userProfile.profile.stxAddress.mainnet)
      );
      setUserAddress(userProfile.profile.stxAddress.mainnet);
    },
    [userProfile]
  );

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center">
      <figure className="bg-white px-[3rem] py-[1.5rem] w-[50%]">
        <div className="text-[2rem]">
          <h1>{`Invoice LN-${new Date().toISOString().slice(-4)}`}</h1>
          <h3>{`Issued Date`}</h3>
        </div>

        <div className="text-[1.8rem]">
          <p>
            <span>To:</span>
          </p>

          <p>
            <span>From:</span>
            <span>{userProfile.profile.stxAddress.mainnet}</span>
          </p>
        </div>
      </figure>
    </section>
  );
}

export default Invoice;
