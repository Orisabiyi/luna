import { FaFileInvoiceDollar } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function AllInvoice() {
  return (
    <main className="h-screen bg-black">
      <Navbar />

      <section className="flex items-center justify-center h-full">
        <FaFileInvoiceDollar color="white" size={100} />
      </section>
    </main>
  );
}
