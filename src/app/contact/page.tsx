"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="flex-column h-full w-full bg-white p-5">
      <button
        className="bg-teal-300 w-auto mb-5 p-2 rounded-md hover:scale-110"
        onClick={router.back}
      >
        Back to home
      </button>
      <p className="leading-8">
        <strong>
          Dane Kontaktowe Konferencji "Przyszłość w Projektowaniu Interfejsów":
        </strong>
        <br /> 1. Biuro Organizacyjne: <br />
        Adres: ul. Konferencyjna 123, 00-000 Miasto, Kraj E-mail:
        info@futureuiuxconference.com Telefon: +XX XXX XXX XXX <br />
        2. Komitet Organizacyjny:
        <br /> Dr. Emily Interfacea (Przewodniczący Komitetu) E-mail:
        emily.interfacea@email.com <br />
        Prof. Adam UXsmith (Wiceprzewodniczący Komitetu) E-mail:
        adam.uxsmith@email.com <br />
        3. Usługa Pomocy w Zakwaterowaniu "StayEase":
        <br /> Emma Bookwell (Doradca Rezerwacji) E-mail:
        emma.bookwell@stayease.com Telefon: +XX XXX XXX XXX <br />
        4. Media Społecznościowe:
        <br /> Twitter: @FutureUIUXConf
        <br /> Facebook: FutureUIUXConference <br />
        LinkedIn: Future-UI-UX-Conference <br />
        5. Strona Konferencji: www.futureuiuxconference.com <br />
        6. Adres Konferencyjny: <br />
        Centrum Konferencyjne "Innowacja 2024" ul. Konferencyjna 456, 00-000
        Miasto, Kraj
        <br /> 7. Godziny Otwarcia Biura Organizacyjnego:
        <br /> Poniedziałek - Piątek: 9:00 - 17:00 (czas lokalny) Prosimy o
        skorzystanie z powyższych danych kontaktowych w przypadku pytań,
        informacji dotyczących rejestracji, zakwaterowania, czy wszelkich innych
        kwestii związanych z udziałem w konferencji "Przyszłość w Projektowaniu
        Interfejsów". Jesteśmy do Państwa dyspozycji i gotowi zapewnić wsparcie
        na każdym etapie.
      </p>
    </div>
  );
};

export default Contact;
