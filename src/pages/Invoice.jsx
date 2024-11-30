import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Invoice() {
  const [inputs, setInputs] = useState([
    [
      { id: 1, type: "text", value: "" },
      { id: 1, type: "number", value: "" },
    ],
    [
      { id: 2, type: "text", value: "" },
      { id: 2, type: "number", value: "" },
    ],
  ]);

  const handleAddInputs = function (e) {
    e.preventDefault();
    console.log(inputs.length);

    setInputs((prevInput) => [
      ...prevInput,
      [
        { id: inputs.length + 1, type: "text", value: "" },
        { id: inputs.length + 1, type: "number", value: "" },
      ],
    ]);
  };

  return (
    <main className="bg-black min-h-screen flex flex-col">
      <Navbar />

      <section className="flex items-center flex-1 p-32">
        <form className="w-3/5 h-full flex flex-col gap-6 text-4xl">
          <label htmlFor="invoice-title" className="text-gray-200">
            Title*
          </label>
          <input
            type="text"
            className="w-full p-5 outline-none rounded-lg text-3xl mb-8 bg-gray-100"
            id="invoice-title"
            required
          />

          <label htmlFor="recipient" className="text-gray-200">
            Recipient Wallet Address*
          </label>
          <input
            type="text"
            id="recipient"
            className="w-full p-5 outline-none rounded-lg text-3xl mb-8 bg-gray-100"
            required
          />

          <label htmlFor="recipient" className="text-gray-200">
            Product/Service Rendered*
          </label>
          <ul className="flex flex-col justify-between gap-8 w-full">
            {inputs.map((input, i) => (
              <li key={i} className="flex items-center justify-start gap-8">
                {input.map((item, j) => (
                  <input
                    type={item.type}
                    value={item.value}
                    key={`${i}-${j}`}
                    className="w-1/2 p-5 outline-none rounded-lg text-3xl bg-gray-100"
                  />
                ))}
              </li>
            ))}
          </ul>

          <button
            className="bg-gray-200 py-4 rounded-lg mt-2 cursor-pointer"
            onClick={handleAddInputs}
          >
            +
          </button>
        </form>

        <figure></figure>
      </section>
    </main>
  );
}
