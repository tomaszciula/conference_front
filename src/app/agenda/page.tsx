"use client";

import { useRouter } from "next/navigation";

const Agenda = () => {
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
        <strong>Dzień 1: Ewolucja i Trendy w Projektowaniu Interfejsów </strong>
        <br />
        8:00 - 9:00: Rejestracja i Śniadanie <br />
        9:00 - 9:30: Otwarcie Konferencji Przywitanie i przedstawienie celów
        konferencji Słowo wprowadzające od głównego organizatora <br />
        9:30 - 10:30: Sesja Plenarna 1 "Rola UI/UX w Transformacji Cyfrowej" -
        Dr. Serena Technologos <br />
        10:30 - 11:00: Przerwa na Kawę <br />
        11:00 - 12:30: Prezentacje Naukowe 1 "Nowe Tendencje w Projektowaniu
        Interfejsów" - Prof. Victor Codeforge "Ewolucja Narzędzi UX w Era
        Sztucznej Inteligencji" - Dr. Ethan Techtonic <br />
        12:30 - 14:00: Lunch i Networking <br />
        14:00 - 15:30: Warsztaty 1 "Prototypowanie w Praktyce" - Max Prototyp
        "Estetyka w UX: Jak Znaleźć Balans?" - Prof. Lara Visualis <br />
        15:30 - 16:00: Przerwa na Kawę <br />
        16:00 - 17:30: Panel Dyskusyjny "Czy UI/UX są naprawdę Zawodami
        Przyszłości?" - Uczestnicy: Olivia Designova, Zoe Cyberspace, Aaron
        Appflow, Dr. Alex Cognitron <br />
        17:30 - 18:00: Zakończenie Dnia 1 <br />
        <strong>
          Dzień 2: Innowacje i Praktyka w Projektowaniu Interfejsów
        </strong>
        <br /> 8:30 - 9:00: Rejestracja i Śniadanie <br />
        9:00 - 10:30: Sesja Plenarna 2 "Znaczenie Psychologii Interfejsów w
        Projektowaniu" - Prof. Iris Interactionis "Innowacje UX w Praktyce:
        Studium Przypadku" - Olivia Designova <br />
        10:30 - 11:00: Przerwa na Kawę <br /> 11:00 - 12:30: Prezentacje Naukowe
        2 "Rola Sztucznej Inteligencji w Projektowaniu Interfejsów" - Dr. Alex
        Cognitron "Wykorzystanie Nowych Technologii w Projektowaniu Aplikacji
        Mobilnych" - Zoe Cyberspace <br /> 12:30 - 14:00: Lunch i Networking{" "}
        <br />
        14:00 - 15:30: Warsztaty 2 "Zarządzanie Procesem Projektowania UI/UX" -
        Aaron Appflow "Interakcje Mózg-Komputer: Praktyczne Aspekty" - Dr. Ethan
        Techtonic <br />
        15:30 - 16:00: Przerwa na Kawę <br />
        16:00 - 17:30: Sesja Plenarna 3 "Przyszłość Projektowania Interfejsów:
        Wizje i Wyzwania" - Max Prototyp "Spojrzenie W Przód: Nowe Kierunki w
        UI/UX" - Prof. Victor Codeforge <br />
        17:30 - 18:00: Podsumowanie Konferencji i Zakończenie
        <br /> Konferencja zakończy się podsumowaniem głównych tematów,
        podziękowaniami dla prelegentów i uczestników oraz ogłoszeniem
        planowanych działań po wydarzeniu.
      </p>
    </div>
  );
};

export default Agenda;
