import { useNavigate } from "react-router-dom";

export default function InvoiceButton() {
  const navigate = useNavigate("");

  return (
    <button
      className="border-2 rounded-xl px-8 py-4 cursor-pointer"
      onClick={() => navigate("/invoice")}
    >
      + New Invoice
    </button>
  );
}
