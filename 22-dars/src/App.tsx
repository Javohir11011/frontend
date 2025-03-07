import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/components/auth";
import { Home } from "./pages/home/components/home";
import { Debtor } from "./pages/debtor/components/debtor";
import { MainLayout } from "./layout/main-layout";
import { CreateDebtor } from "./pages/debtorCreate/create-debtor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/debtor" element={<Debtor />} />
          <Route path="/create" element={<CreateDebtor />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
