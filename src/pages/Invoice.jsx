import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

function Invoice() {
  const [userAddress, setUserAddress] = useState();
  const [issuedDate, setIssuedDate] = useState("");
  const { userProfile } = UserContext();

  useEffect(
    function () {
      setIssuedDate(new Date().toLocaleDateString());
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
            <span>{userAddress}</span>
          </p>
        </div>
      </figure>
    </section>
  );
}

export default Invoice;
