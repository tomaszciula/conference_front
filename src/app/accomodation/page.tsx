"use client";
import { useRouter } from "next/navigation";

const Accomodation = (props: any) => {
  const router = useRouter();
  return (
    <div className="flex-column h-full w-full bg-white p-5">
      <button
        className="bg-teal-300 w-auto mb-5 p-2 rounded-md hover:scale-110"
        onClick={router.back}
      >
        {props.lang === 'en' ? "Back to home" : "Powrót"}
      </button>
      <p className="my-2">
        <strong>
          Usługa Pomocy w Zakwaterowaniu "StayEase" dla Uczestników Konferencji:
        </strong>
      </p>
      <br />
      <p className="my-2">
        <strong>1. Doradca Rezerwacji:</strong> Imię i Nazwisko: Emma Bookwell
        E-mail: emma.bookwell@stayease.com Telefon: +XX XXX XXX XXX
      </p>
      <p className="my-2">
        <strong>2. Dlaczego "StayEase"?</strong> StayEase to partner oficjalny
        konferencji, oferujący atrakcyjne zniżki dla uczestników. Szeroki wybór
        hoteli dostosowanych do różnych budżetów i preferencji.
      </p>
      <p className="my-2">
        <strong>3. Proces Rezerwacji:</strong> Uczestnicy mogą skorzystać z
        dedykowanej strony internetowej "StayEase" lub skontaktować się
        bezpośrednio z Emmą Bookwell. Indywidualne oraz grupowe rezerwacje są
        obsługiwane z elastycznością.{" "}
      </p>
      <p className="my-2">
        <strong>4. Zniżki i Bonusy:</strong> Uczestnicy korzystają z
        ekskluzywnych zniżek na zakwaterowanie w wybranych hotelach
        partnerskich. Bonusy dla osób, które zarezerwują zakwaterowanie z
        wyprzedzeniem.
      </p>
      <p className="my-2">
        <strong>5. Personel Pomocy:</strong> Zespół StayEase jest dostępny 24/7,
        aby pomóc w rozwiązaniu wszelkich problemów z zakwaterowaniem. Zadania
        specjalne, takie jak dostawienie łóżeczka dla niemowlęcia czy
        udogodnienia dla osób niepełnosprawnych, są obsługiwane z pełnym
        zaangażowaniem.
      </p>
      <p className="my-2">
        <strong>6. Elastyczne Opcje Płatności:</strong> StayEase oferuje
        różnorodne opcje płatności, w tym bezgotówkowe transakcje i płatności
        rozłożone na raty.
      </p>
      <p className="my-2">
        <strong>7. Ekskluzywne Udogodnienia:</strong> Uczestnicy otrzymują kupon
        na darmowe śniadanie w wybranych hotelach oraz dostęp do specjalnych
        udogodnień w partnerujących obiektach. StayEase to nie tylko pomoc w
        znalezieniu idealnego miejsca do noclegu, ale także partner dbający o
        komfort i zadowolenie uczestników konferencji. Emma Bookwell i zespół
        StayEase są gotowi, aby uczynić Twój pobyt podczas konferencji
        niezapomnianym i bezproblemowym.
      </p>
    </div>
  );
};

export default Accomodation;
