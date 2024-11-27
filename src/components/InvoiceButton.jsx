import PropTypes from "prop-types";

export default function InvoiceButton({ handler }) {
  return (
    <button
      className="border-2 rounded-xl px-8 py-4 cursor-pointer"
      onClick={handler}
    >
      + New Invoice
    </button>
  );
}

InvoiceButton.propTypes = {
  handler: PropTypes.func,
};
