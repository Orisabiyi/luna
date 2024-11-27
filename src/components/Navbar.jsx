export default function Navbar() {
  return (
    <nav className="text-white flex items-center justify-between p-20 text-3xl">
      <h1 className="text-5xl font-semibold">Luna</h1>
      <button className="border-2 rounded-xl px-8 py-4 cursor-pointer">
        + New Invoice
      </button>
    </nav>
  );
}
