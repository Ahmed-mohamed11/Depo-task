import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "./App.scss";
 import Navbar from "./components/Navbar";
import { useI18nContext } from "./context/i18n-context";
import HomePage from "./pages/home/index";
import Error404Modern from "./pages/error/404-modern";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || false
  );
  const [reloadPage, setReloadPage] = useState(false);
  const { language } = useI18nContext();

   useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

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
              path="/"
              element={
                <>
                   <Navbar toggleDark={toggleDarkMode} dark={isDarkMode} />
                  <div className="pt-0 px-4">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                     </Routes>
                  </div>
                </>
              }
            />

             <Route path="*" element={<Error404Modern />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
