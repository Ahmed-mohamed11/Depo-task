import { useEffect } from "react";
import { gsap } from "gsap";
import HeroImage from '../images/gfx/original-1dee8bfca65f223e60c259b7a32c6aad.png';
import { ArrowRight } from 'lucide-react';
import { Menu, Transition } from "@headlessui/react";
import { Bell, Moon, Sun, Translate } from "@phosphor-icons/react";
import logo from "../images/gfx/star-edit2.6cb42af93f3116775b22.gif";
import { Link } from "react-router-dom";
import { useI18nContext } from "../context/i18n-context";
import { UserCircle } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ toggleDark, dark, onLogOut, themeDark }) {
  const { t, language, changeLanguage } = useI18nContext();

  return (
    <div className={`w-full`} dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="flex justify-between items-center h-16 py-4 px-4">
        <img src={logo} alt="Logo" className="h-20 w-20" />
        <div className="flex items-center justify-between gap-8 font-bold text-xl">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-gray-500">
            {t(`navbar.Home`)}
          </Link>
          <Link to="/pricing" className="text-gray-800 dark:text-white hover:text-gray-500">
            {t(`navbar.users`)}
          </Link>
          <Link to="blog" className="text-gray-800 dark:text-white hover:text-gray-500">
            {t(`navbar.Blog`)}
          </Link>
        </div>
        <div className="flex items-center justify-between gap-5">
          <button type="button" className="relative rounded-full dark:bg-gray-900 p-1 ml-1 dark:text-gray-400 hover:text-slate-500 focus:outline-none">
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="relative flex rounded-full text-sm border-none focus:outline-none">
                <UserCircle className="h-6 w-6 dark:text-white" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/profile" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                      {t(`navbar.Profile`)}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/settings" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                      {t(`navbar.Settings`)}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a onClick={onLogOut} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700 cursor-pointer")}>
                      {t(`navbar.SignOut`)}
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <button type="button" className={`relative rounded-full dark:bg-gray-900 p-1 ml-1 dark:text-gray-400 hover:text-slate-500 ${themeDark ? "hidden" : ""}`} onClick={toggleDark}>
            {dark ? <Sun className="h-6 w-6" aria-hidden="true" /> : <Moon className="h-6 w-6" aria-hidden="true" />}
          </button>
          <button type="button" className="relative rounded-full p-1 ml-2 dark:text-gray-400 hover:text-slate-500 focus:outline-none" onClick={() => changeLanguage(language === "en" ? "ar" : "en")}>
            <Translate className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  useEffect(() => {
    // GSAP Animations for text and button
    gsap.from(".hero-heading", { y: -50, opacity: 0, duration: 1, ease: "power3.out", delay: 1 });
    gsap.from(".hero-text", { opacity: 0, duration: 1, delay: 1.5 });
    gsap.from(".hero-button", { opacity: 0, y: 20, duration: 1, delay: 2.5, ease: "power3.out" });

    // GSAP Animation for Button Rotation (rotates 360 degrees 3 times)
    gsap.to(".hero-button", {
      rotate: 360,
      y: 0, opacity: 1,
      duration: 1,
      ease: "power3.inOut",
      repeat: 2, // Repeat 2 times for a total of 3 rotations
      delay: 2,
    });

    // GSAP Animation for Background Image (scale and opacity)
    gsap.fromTo(
      ".hero-background",
      { scale: .95, opacity: 0.5 },
      { scale: 1, opacity: 1, duration: 3, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className={`w-full min-h-screen relative bg-cover bg-center  hero-background`} dir="ltr"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <Navbar />

      <div className="relative top-24 w-full flex items-center  justify-start px-6 md:px-12 lg:px-24">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="hero-heading text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
            Unified one <span className="text-sky-500 font-extrabold">solution</span> for any device
          </h2>
          <p className="hero-text text-xl text-gray-600 dark:text-gray-300 mb-8 ">
            We help businesses deliver digital customer experiences that are personalized, optimized, and synchronized.
          </p>
          <button className="hero-button flex items-center gap-2 bg-sky-500 text-white rounded-full py-3 px-6 font-bold hover:bg-sky-600 transition duration-300 shadow-lg">
            Get started free <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
