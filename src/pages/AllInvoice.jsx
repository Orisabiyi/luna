import { FaFileInvoiceDollar } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function AllInvoice() {
  return (
    <main className="h-screen bg-black flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center gap-8 flex-1 text-white text-3xl">
        <FaFileInvoiceDollar color="white" size={100} />
        <p>You currently have no invoice</p>
        <button className="border-2 rounded-xl px-8 py-4 cursor-pointer">
          + New Invoice
        </button>
      </section>
    </main>
  );
}
