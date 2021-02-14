import { Routes } from "./routes/Routes";
import { Header } from "./components/Header";
import { UserProvider } from "./shared/provider/UserProvider";
function App() {
  return (
    <UserProvider>
      <Routes>
        <Header />
      </Routes>
    </UserProvider>
  );
}

export default App;
