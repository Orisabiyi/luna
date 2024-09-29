import { useEffect } from "react";
import { useState } from "react";

export default function useTracker({ txId }) {
  const [txData, setTxData] = useState({});
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function checkTransaction() {
        try {
          const res = await fetch(
            `https://stacks-node-api.testnet.stacks.co/extended/v1/tx/${txId}`
          );
          const value = await res.json();
          setTxData(value);
        } catch (error) {
          setError(error.message);
        }
      }

      checkTransaction();
      const interval = setInterval(checkTransaction, 15000);

      return () => clearInterval(interval); // cleaningup
    },
    [txId]
  );

  return { txData, setTxData, error, setError };
}
