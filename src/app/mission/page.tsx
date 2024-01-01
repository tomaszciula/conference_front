"use client";
import { useRouter, useSearchParams } from "next/navigation";

const Mission = () => {
  const params = useSearchParams();
  console.log(params.get("lang"));

  const router = useRouter();
  return (
    <div className="flex-column h-full w-full bg-white p-5">
      <button
        className="bg-teal-300 w-auto mb-5 p-2 rounded-md hover:scale-110"
        onClick={() => router.push('/')}
      >
        {params.get("lang") === "en" ? "Back home" : "Powrót"}
      </button>
      {params.get("lang") === "en" ? (
        <p className="justify-content mb-5">
          <strong>Introduction:</strong> Scientific conference "The future of...
          Interface Design" is an initiative aimed at exploring i understanding
          the role of UI/UX in today's digital world. In an era dynamic
          development of technology, human interaction with machines has become
          a key element, and design professionals interfaces play a key role in
          shaping this interaction.
        </p>
      ) : (
        <p className="justify-content mb-5">
          <strong>Wprowadzenie:</strong> Konferencja naukowa "Przyszłość w
          Projektowaniu Interfejsów" jest inicjatywą skierowaną ku zgłębianiu i
          zrozumieniu roli UI/UX w dzisiejszym świecie cyfrowym. W erze
          dynamicznego rozwoju technologii, interakcja człowieka z maszynami
          stała się kluczowym elementem, a specjaliści od projektowania
          interfejsów odgrywają kluczową rolę w kształtowaniu tej interakcji.
        </p>
      )}
      {params.get("lang") === "en" ? (
        <p className="justify-content mb-5">
          <strong>Conference goal:</strong> The main goal of the conference is
          uniting industry leaders, researchers, practitioners and enthusiasts
          UI/UX to exchange thoughts, experiences and look into the future of
          these fascinating fields. We want to explore the question of whether
          UI/UX is a profession future, and if so, where to go to be ready for
          the upcoming challenges.
        </p>
      ) : (
        <p className="justify-content mb-5">
          <strong>Cel konferencji:</strong> Głównym celem konferencji jest
          zjednoczenie liderów branżowych, badaczy, praktyków i entuzjastów
          UI/UX w celu wymiany myśli, doświadczeń i spojrzenia w przyszłość tych
          fascynujących dziedzin. Chcemy zgłębić pytanie, czy UI/UX są zawodami
          przyszłości, i jeśli tak, to w jakim kierunku zmierzać, aby być
          gotowym na nadchodzące wyzwania.
        </p>
      )}
      {params.get("lang") === "en" ? (
        <p className="justify-content mb-5">
          <strong>Plenary sessions with industry leaders:</strong> Experienced
          interface designers and representatives of technology companies will
          share their observations on the recent evolution of UI/UX years and
          forecasts for the future. Scientific presentations: Researchers will
          present the latest discoveries in areas related to interface design,
          analyzing the trends, tools and methods that shape today's and
          tomorrow's UI/UX practice. Practical workshops: Participants will have
          the opportunity to participate in interactive workshops where they
          will gain practical skills in interface design, focusing on the latest
          tools and technologies. Discussion panel: Experts those discussing the
          question whether UI/UX are the professions of the future will be
          divided their perspectives on what skills and competencies will be
          crucial in the coming years. Networking: The conference will create an
          atmosphere conducive to establishing contacts and exchanging
          experiences between participants, which will allow building a
          community of professionals interested in UI/UX development. Summary:
          Conference "The Future of... "Interface Design" aims not only to
          analyze the current situation in the field of UI/UX, but also
          identifying development directions and preparing specialists for
          changing market needs. We believe that only through cooperation and
          exchange of knowledge can we effectively shape the future of interface
          design and meet the growing user expectations in the digital era.
        </p>
      ) : (
        <p className="justify-content mb-5">
          <strong>Sesje plenarne z liderami przemysłu:</strong> Doświadczeni
          projektanci interfejsów oraz przedstawiciele firm technologicznych
          podzielą się swoimi spostrzeżeniami na temat ewolucji UI/UX w
          ostatnich latach i prognoz na przyszłość. Prezentacje naukowe: Badacze
          przedstawią najnowsze odkrycia z obszarów związanych z projektowaniem
          interfejsów, analizując trendy, narzędzia i metody, które kształtują
          dzisiejszą i jutrzejszą praktykę UI/UX. Warsztaty praktyczne:
          Uczestnicy będą mieli okazję uczestniczyć w interaktywnych
          warsztatach, gdzie zdobędą praktyczne umiejętności w projektowaniu
          interfejsów, skupiając się na najnowszych narzędziach i technologiach.
          Panel dyskusyjny: Eksperci dyskutujący nad pytaniem, czy UI/UX są
          zawodami przyszłości, podzielą się swoimi perspektywami na temat tego,
          jakie umiejętności i kompetencje będą kluczowe w nadchodzących latach.
          Networking: Konferencja stworzy atmosferę sprzyjającą nawiązywaniu
          kontaktów i wymianie doświadczeń między uczestnikami, co pozwoli na
          budowanie wspólnoty profesjonalistów zainteresowanych rozwojem UI/UX.
          Podsumowanie: Konferencja "Przyszłość w Projektowaniu Interfejsów" ma
          na celu nie tylko analizę obecnej sytuacji w dziedzinie UI/UX, ale
          również zidentyfikowanie kierunków rozwoju i przygotowanie
          specjalistów na zmieniające się potrzeby rynku. Wierzymy, że tylko
          poprzez współpracę i wymianę wiedzy możemy skutecznie kształtować
          przyszłość projektowania interfejsów i zaspokajać rosnące oczekiwania
          użytkowników w erze cyfrowej.
        </p>
      )}
    </div>
  );
};

export default Mission;
