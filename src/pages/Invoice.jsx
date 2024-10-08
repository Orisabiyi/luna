import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { UserContext } from "../contexts/UserContext";

function Invoice() {
  const [invoiceOwner] = useState(function () {
    return JSON.parse(sessionStorage.getItem("address"));
  });
  const [services, setServices] = useState(
    sessionStorage.getItem("services")
      ? function () {
          return JSON.parse(sessionStorage.getItem("services"));
        }
      : [
          { service: "Design Landing Page", price: "1500" },
          { service: "Development with workflow", price: "1500" },
          { service: "Develop Product Mobile App", price: "1200" },
        ]
  );

  const { userProfile } = UserContext();
  const [recipient, setRecipient] = useState("Enter recipient address here");

  useEffect(
    function () {
      sessionStorage.setItem("services", JSON.stringify(services));
    },
    [services]
  );

  // Handle recipient input
  const handleRecipientChange = function (e) {
    setRecipient(e.target.value);
  };

  // Handle service input
  const handleServiceInput = function (index, field, value) {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  // Add a new service
  const handleAddService = function () {
    setServices([...services, { service: "New Service", price: "0" }]);
  };

  // Delete a service
  const handleDeleteService = function (index) {
    const newServices = services.filter(function (_, i) {
      return i !== index;
    });
    setServices(newServices);
  };

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center gap-[3rem] py-[2rem]">
      <h1 className="text-[3rem] text-white font-bold">Luna</h1>
      <figure className="bg-white px-[4rem] pt-[3rem] pb-[6rem] w-[60%] lg:w-[50%] xl:w-[40%] h-auto rounded-[1.5rem] flex flex-col gap-[2rem]">
        <div className="text-[2rem]">
          <h2 className="text-[2.75rem] font-semibold">{`INVOICE LN-${new Date()
            .toISOString()
            .slice(-4)}`}</h2>
          <h3 className="font-medium tracking-[.1rem]">{`Issued Date: ${new Date().toLocaleDateString()}`}</h3>
        </div>

        <div className="py-[2rem] border-b-[1px] border-t-[1px] border-white w-full text-[1.6rem]">
          <p className="flex items-center gap-[1rem]">
            <span>To: </span>
            <ContentEditable
              html={recipient}
              onChange={handleRecipientChange}
              className="cursor-pointer flex-1 editable-span"
              tagName="span"
            />
          </p>

          <p className="flex item-center gap-[.5rem]">
            <span>From: </span>
            <span>
              {userProfile.length > 0
                ? userProfile.profile.stxAddress.mainnet.slice(0, 25) + "....."
                : invoiceOwner.profile.stxAddress.mainnet.slice(0, 25) +
                  "....."}
            </span>
          </p>
        </div>

        <ul className="flex flex-col gap-[2rem] text-[1.8rem]">
          {services.map(function ({ service, price }, i) {
            return (
              <li
                className="flex justify-between border-b-[1px] border-gray-300 pb-[1rem]"
                key={i}
              >
                <ContentEditable
                  html={service}
                  onChange={function (e) {
                    handleServiceInput(i, "service", e.target.value);
                  }}
                  className="cursor-pointer"
                  tagName="div"
                />
                <div className="flex items-center">
                  $
                  <ContentEditable
                    html={price}
                    onChange={function (e) {
                      handleServiceInput(i, "price", e.target.value);
                    }}
                    className="cursor-pointer text-right"
                    tagName="span"
                    inputMode="numeric"
                  />
                  <button
                    onClick={function () {
                      handleDeleteService(i);
                    }}
                    className="ml-4 text-red-500"
                  >
                    &#x2715; {/* "x" delete icon */}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center text-[1.4rem]">
          <button
            onClick={handleAddService}
            className="bg-gray-500 rounded-[1rem] text-white font-bold text-center px-[1rem] py-[1rem] mb-[2rem]"
          >
            + Add New Service
          </button>
        </div>

        <div className="flex justify-between items-center text-[1.8rem]">
          <label>Payment Type</label>
          <select id="" className="outline-none">
            <option value="crowdfunding">CrowdFunding</option>
            <option value="single payment">Single Payment</option>
            <option value="group payment">Group Payment</option>
          </select>
        </div>

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
