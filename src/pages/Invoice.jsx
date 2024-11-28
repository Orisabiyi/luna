import Navbar from "../components/Navbar";

export default function Invoice() {
  return (
    <main className="bg-black h-screen flex flex-col">
      <Navbar />

      <section className="flex items-center flex-1 p-32">
        <form className="w-3/5 h-full flex flex-col gap-6 text-4xl">
          <label htmlFor="invoice-title" className="text-white">
            Title
          </label>
          <input
            type="text"
            className="w-full p-5 outline-none rounded-lg text-3xl mb-8"
            id="invoice-title"
            required
          />

          <label htmlFor="recipient" className="text-white">
            Recipient Wallet Address
          </label>
          <input
            type="text"
            id="recipient"
            className="w-full p-5 outline-none rounded-lg text-3xl"
          />
        </form>

        <figure></figure>
      </section>
    </main>
  );
}
