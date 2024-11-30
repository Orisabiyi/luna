import InvoiceButton from "./InvoiceButton";

export default function Navbar() {
  return (
    <nav className="text-white flex items-center justify-between py-12 px-32 text-3xl">
      <h1 className="text-5xl font-semibold">Luna</h1>
      <InvoiceButton />
    </nav>
  );
}
