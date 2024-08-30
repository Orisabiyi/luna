import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import ContentEditable from "react-contenteditable";

function Invoice() {
  const [userAddress] = useState(function () {
    return JSON.parse(sessionStorage.getItem("address"));
  });
  const [issuedDate, setIssuedDate] = useState("");
  const { userProfile } = UserContext();

  // list of services
  const [services, setServices] = useState([
    {
      service: "Design Landing Page",
      price: "1500",
    },
    {
      service: "Development with workflow",
      price: "1500",
    },
    { service: "Develop Product Mobile App", price: "1200" },
  ]);

  useEffect(
    function () {
      setIssuedDate(new Date().toLocaleDateString());
      console.log(services);
    },
    [services]
  );

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center gap-[3rem] py-[2rem]">
      <h1 className="text-[3rem] text-white font-bold">Luna</h1>
      <figure className="bg-white px-[4rem] pt-[3rem] pb-[6rem] w-[60%] lg:w-[50%] xl:w-[40%] h-auto rounded-[1.5rem] flex flex-col gap-[2rem]">
        <div className="text-[2rem]">
          <h2 className="text-[2.75rem] font-semibold">{`INVOICE LN-${new Date()
            .toISOString()
            .slice(-4)}`}</h2>
          <h3 className="font-medium tracking-[.1rem]">{`Issued Date: ${issuedDate}`}</h3>
        </div>

        <div className="py-[2rem] border-b-[1px] border-t-[1px] border-white w-full text-[1.8rem]">
          <p>
            <span>To: </span>
            <span
              contentEditable="true"
              className="cursor-pointer editable-span"
            >
              El-Mubaraq Ajibola
            </span>
          </p>

          <p>
            <span>From: </span>
            <span>
              {userProfile.length > 0
                ? userProfile.profile.stxAddress.mainnet.slice(0, 25) +
                  "..........."
                : userAddress.profile.stxAddress.mainnet.slice(0, 25) +
                  "..........."}
            </span>
          </p>
        </div>

        <ul className="flex flex-col gap-[2rem] text-[1.8rem]">
          {services &&
            services.map(({ service, price }, i) => (
              <li
                className="flex justify-between border-b-[1px] border-gray-300 pb-[1rem]"
                key={i}
              >
                <span>{service}</span>
                <span>$ {price} </span>
              </li>
            ))}
        </ul>

        <div className="text-[1.8rem] flex flex-col gap-[2rem] justify-center translate-y-[1rem]">
          <p className="flex items-center justify-between">
            <span>Total Amount:</span>
            <span>$3, 250.00</span>
          </p>

          <button className="bg-gray-500 rounded-[1rem] text-white font-bold text-center py-[1rem]">
            Generate Invoice
          </button>
        </div>
      </figure>
    </section>
  );
}

export default Invoice;
