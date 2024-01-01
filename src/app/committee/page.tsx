"use client";

import { useRouter } from "next/navigation";

const Committee = () => {
  const router = useRouter();
  return (
    <div className="flex-column h-full w-full bg-white p-5">
      <button
        className="bg-teal-300 w-auto mb-5 p-2 rounded-md hover:scale-110"
        onClick={router.back}
      >
        Back to home
      </button>
      <p>
        <strong>
          Komitet Organizacyjny Konferencji "Czy zawody UI/UX to zawody przyszłości?"
        </strong>
      </p>
      <br />
      <ul>
        <li>
          Przewodniczący Komitetu: Dr. Emily Interfacea E-mail:
          emily.interfacea@email.com{" "}
        </li>
        <li>
          Wiceprzewodniczący Komitetu: Prof. Adam UXsmith E-mail:
          adam.uxsmith@email.com
        </li>
        <li>
          Koordynator Logistyczny: Julia Eventflow E-mail:
          julia.eventflow@email.com
        </li>
        <li>
          Koordynator Marketingu: Martin Brandwave E-mail:
          martin.brandwave@email.com
        </li>
        <li>
          Koordynator Programowy: Dr. Sarah Sessionplanner E-mail:
          sarah.sessionplanner@email.com
        </li>
        <li>
          Koordynator Techniczny: Alex Techsupport E-mail:
          alex.techsupport@email.com
        </li>
        <li>
          Koordynator Finansowy: Laura Budgetmaster E-mail:
          laura.budgetmaster@email.com
        </li>
        {/* Koordynator
        Komunikacji z Prelegentami: Tom Speakerliaison E-mail:
        tom.speakerliaison@email.com Koordynator Wolontariuszy: Sophie
        Volunteerspirit E-mail: sophie.volunteerspirit@email.com Koordynator
        Bezpieczeństwa i Zdrowia: Dr. Michael Safeguard E-mail:
        michael.safeguard@email.com Koordynator Działalności Społecznej: Emma
        Socialconnector E-mail: emma.socialconnector@email.com Koordynator
        Ewaluacji: Daniel Feedbackmaster E-mail: daniel.feedbackmaster@email.com
        Komitet Organizacyjny jest zróżnicowanym zespołem specjalistów, którzy
        są odpowiedzialni za wszystkie aspekty organizacyjne, logistyczne,
        marketingowe i techniczne konferencji. Każdy członek komitetu pełni
        kluczową rolę w zapewnieniu sukcesu wydarzenia, a ich współpraca
        gwarantuje płynny przebieg konferencji "Przyszłość w Projektowaniu
        Interfejsów". */}
      </ul>
    </div>
  );
};

export default Committee;
