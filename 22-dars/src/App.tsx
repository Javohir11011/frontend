import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/components/auth";
import { Home } from "./pages/home/components/home";
import { MainLayout } from "./layout/main-layout";
import { CreateDebtor } from "./pages/debtorCreate/create-debtor";
import { CalendarDebtor } from "./pages/calendar/calendar";
import { GetAllDebtor } from "./pages/debtorCreate/components/getAllDebtor";
import { Debt } from "./pages/debts/debt";
import { EditDebtor } from "./pages/debtorCreate/components/editDebtorById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/calendar" element={<CalendarDebtor />} />
          <Route path="/create" element={<CreateDebtor />} />
          <Route path="/mijozlar" element={<GetAllDebtor />} />
          <Route path="/create-debt/:id" element={<Debt />} />
          <Route path="/edit-debtor/:id" element={<EditDebtor />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
