import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Invoice from "./pages/Invoice";
import { UserContextProvider } from "./contexts/UserContext";
import AllInvoice from "./pages/AllInvoice";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-invoice" element={<AllInvoice />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
