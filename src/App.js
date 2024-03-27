import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./components/UserContext";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/create"} element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
