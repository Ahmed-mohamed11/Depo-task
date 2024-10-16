import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Navbar from "./components/Navbar";
import { useI18nContext } from "./context/i18n-context";
import HomePage from "./pages/home/index";
import Error404Modern from "./pages/error/404-modern";
 import { Outlet } from "react-router-dom";
 import User from "./pages/user/User";
  
// Layout component to wrap the routes that should show the Navbar
function Layout({ toggleDarkMode, isDarkMode }) {
  return (
    <>
      <Navbar toggleDark={toggleDarkMode} dark={isDarkMode} />
      <div className="pt-0">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || false
  );
  const [reloadPage, setReloadPage] = useState(false);
  const { language } = useI18nContext();

  // Simulate loading on initial mount
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  // Toggle dark mode and persist the preference
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  // Handle page reload if necessary
  useEffect(() => {
    if (reloadPage) {
      window.location.reload();
      setReloadPage(false);
    }
  }, [reloadPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-14 h-screen w-full fixed z-50 dark:bg-gray-900 bg-white">
        <div className="dot-spin"></div>
        <p className="text-lg font-medium dark:text-white">
          جاري التحميل ... كن صبورًا
        </p>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`} dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="flex">
        <div className="w-full">
          <Routes>
            <Route
              element={<Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<User />} />
            </Route>

            <Route path="*" element={<Error404Modern />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
