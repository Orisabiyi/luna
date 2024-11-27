import InvoiceButton from "./InvoiceButton";

export default function Navbar() {
  return (
    <nav className="text-white flex items-center justify-between p-20 text-3xl">
      <h1 className="text-5xl font-semibold">Luna</h1>
      <InvoiceButton />
    </nav>
  );
}
