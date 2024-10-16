// Navbar.jsx
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bell, Moon, Sun, UserCircle } from "lucide-react";
import logo from "../images/gfx/star-edit2.6cb42af93f3116775b22.gif";
import { useI18nContext } from "../context/i18n-context";
import { Translate } from "@phosphor-icons/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ toggleDark, dark, onLogOut, themeDark }) => {
  const { t, language, changeLanguage } = useI18nContext();

  return (
    <div className="w-full" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="flex justify-between items-center h-16 py-4 px-4">
        <img src={logo} alt="Logo" className="h-20 w-20" />
        <div className="flex items-center gap-8 font-bold text-xl">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-gray-500">
            {t(`navbar.Home`)}
          </Link>
          <Link to="/users" className="text-gray-800 dark:text-white hover:text-gray-500">
            {t(`navbar.users`)}
          </Link>
          <Link to="/blog" className="text-gray-800 dark:text-white hover:text-gray-500">
            {t(`navbar.Blog`)}
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <button className="relative p-1 rounded-full dark:bg-gray-900 dark:text-gray-400 hover:text-slate-500">
            <Bell className="h-6 w-6" />
          </button>
          <Menu as="div" className="relative">
            <Menu.Button className="relative flex rounded-full text-sm">
              <UserCircle className="h-6 w-6 dark:text-white" />
            </Menu.Button>
            <Transition>
              <Menu.Items className="absolute right-0 mt-2 w-32 bg-white py-1 shadow-lg ring-1 ring-black">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/profile" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm")}>
                      {t(`navbar.Profile`)}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/settings" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm")}>
                      {t(`navbar.Settings`)}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a onClick={onLogOut} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm cursor-pointer")}>
                      {t(`navbar.SignOut`)}
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className={`p-1 ml-1 rounded-full dark:bg-gray-900 dark:text-gray-400 hover:text-slate-500 ${themeDark ? "hidden" : ""}`} onClick={toggleDark}>
            {dark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
          <button className="p-1 ml-2 rounded-full dark:text-gray-400 hover:text-slate-500" onClick={() => changeLanguage(language === "en" ? "ar" : "en")}>
            <Translate className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
