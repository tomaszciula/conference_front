"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

const LandingPage = () => {
  const [lang, setLang] = useState("en");
  const router = useRouter();

  return (
    <header className="min-h-screen bg-white ">
      {/* <!-- Navigaiton Bar --> */}
      <nav className="flex items-center py-8 px-14 justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-700 ">
            {lang === "en" ? "Future of UI/UX" : "Przyszłość UI/UX"}
          </h1>
          <div className="ml-10">
            <ul className="md:flex space-x-8 hidden ">
              <li>
                <Link
                  href={{ pathname: "/mission", query: { lang: lang } }}
                  className="text-gray-800 font-semibold"
                >
                  {lang === "en" ? "Mission" : "Misja"}
                </Link>
              </li>
              <li>
                <a href="/participants" className="text-gray-800 font-semibold">
                  {lang === "en" ? "Participants" : "Uczestnicy"}
                </a>
              </li>
              <li>
                <a href="/committee" className="text-gray-800 font-semibold">
                  {lang === "en" ? "Committee" : "Komitet"}
                </a>
              </li>
              <li>
                <a href="/accomodation" className="text-gray-800 font-semibold">
                  {lang === "en" ? "Accomodation" : "Zakwaterowanie"}
                </a>
              </li>
              <li>
                <a href="/agenda" className="text-gray-800 font-semibold">
                  Agenda
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-800 font-semibold">
                  {lang === "en" ? "Contact" : "Kontakt"}
                </a>
              </li>
            </ul>
          </div>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
        {/* <div className="lg:flex hidden items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
          <button>Buy now</button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </span>
        </div> */}
      </nav>
      {/* <!-- End Navigation Bar -->

  <!-- Section Hero -->
  <!-- Box left --> */}
      <div className="md:flex space-x-16 mt-20 md:mr-0 mr-10">
        <div className="md:flex items-center pl-16 ">
          <div className="">
            <div className="text-2xl my-5">
              {lang === "en" ? "27-28 May 2024" : "27-28 Maj 2024"}
            </div>
            <h1 className="lg:text-5xl  font-bold text-black leading-tight text-3xl mb-10">
              {lang === "en"
                ? "Scientific International Conference"
                : "Międzynarodowa Konferencja Naukowa"}
            </h1>
            <span className="mt-4 text-lg font-normal text-black">
              <strong>
                {lang === "en"
                  ? "Are UI/UX professions the professions of the future?"
                  : "Czy zawody UI/UX to zawody przyszłości?"}
              </strong>
            </span>
            <div className="flex mt-10 w-52 items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
              <button
                className="text-lg"
                onClick={() => router.push("/register")}
              >
                {lang === "en"
                  ? "Register for conference"
                  : "Zarejestruj się na konferencji"}
              </button>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </span> */}
            </div>
          </div>
        </div>
        {/* <!-- Box right --> */}
        <div className="max-w-2xl pr-24 md:flex justify-center items-center  hidden">
          <img
            className="rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      {/* <!--Show Brand --> */}
      <div className="hidden lg:block">
        <ul className="flex mt-32 space-x-36 justify-center">
          <li>
            <a href="#" className="text-2xl font-semibold text-gray-600">
              Google
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl font-semibold text-gray-600">
              UBER
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl font-semibold text-gray-600">
              Stripe
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl font-semibold text-gray-600">
              Nike
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl font-semibold text-gray-600">
              Mashable
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl font-semibold text-gray-600">
              Airbnb
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default LandingPage;
