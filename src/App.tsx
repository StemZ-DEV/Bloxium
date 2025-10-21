import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex h-screen bg-(--col_base) text-(--col_text)">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Navbar />
        <Routes>
          <Route element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/profile/:handle" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}
