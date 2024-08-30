import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

function Invoice() {
  const [userAddress] = useState(function () {
    return JSON.parse(sessionStorage.getItem("address"));
  });

  const { userProfile } = UserContext();

  const [issuedDate, setIssuedDate] = useState("");

  useEffect(function () {
    setIssuedDate(new Date().toLocaleDateString());
  }, []);

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center">
      <figure className="bg-white px-[3rem] py-[1.5rem] w-[50%]">
        <div className="text-[2rem]">
          <h1>{`Invoice LN-${new Date().toISOString().slice(-4)}`}</h1>
          <h3>{`Issued Date: ${issuedDate}`}</h3>
        </div>

        <div className="text-[1.8rem]">
          <p>
            <span>To:</span>
          </p>

          <p>
            <span>From: </span>
            <span>
              {userProfile.length > 0
                ? userProfile.profile.stxAddress.mainnet
                : userAddress.profile.stxAddress.mainnet}
            </span>
          </p>
        </div>
      </figure>
    </section>
  );
}

export default Invoice;
