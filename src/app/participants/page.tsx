"use client";

import { useRouter } from "next/navigation";

const Participants = () => {
  const router = useRouter();
  return (
    <div className="flex-column h-full w-full bg-white p-5">
      <button
        className="bg-teal-300 w-auto mb-5 p-2 rounded-md hover:scale-110"
        onClick={router.back}
      >
        Back to home
      </button>
      <p className="text-3xl"><strong>Participants</strong></p>
      <ol className="flex-column list-decimal pl-5">
        <li className="my-2">
          Dr. Serena Technologos - Specjalistka ds. Psychologii Interfejsów,
          autorka bestsellerów na temat wpływu interfejsów na zachowanie
          użytkowników.
        </li>
        <li className="my-2">
          Prof. Victor Codeforge - Wykładowca akademicki i badacz z zakresu
          Inżynierii Oprogramowania, specjalizujący się w nowoczesnych
          podejściach do projektowania interfejsów.
        </li>
        <li className="my-2">
          Olivia Designova - Doświadczona projektantka interfejsów, zdobywczyni
          wielu nagród za innowacyjne podejścia do UX w projektowaniu aplikacji
          mobilnych.
        </li>
        <li className="my-2">
          Dr. Ethan Techtonic - Ekspert ds. Technologii Przyszłości, autor
          licznych publikacji na temat wpływu sztucznej inteligencji na
          interfejsy użytkownika.
        </li>
        <li className="my-2">
          Prof. Iris Interactionis - Specjalistka z dziedziny Interakcji
          Człowiek-Komputer, prowadząca badania nad nowymi metodami
          ułatwiającymi komunikację między ludźmi a maszynami.
        </li>
        <li className="my-2">
          Zoe Cyberspace - Młoda przedsiębiorczyni, założycielka startupu
          zajmującego się nowatorskimi rozwiązaniami UX w obszarze rozszerzonej
          rzeczywistości.
        </li>
        <li className="my-2">
          Max Prototyp - Guru prototypowania, ekspert w dziedzinie szybkiego
          tworzenia i testowania interfejsów, autor popularnego bloga na temat
          prototypowania.
        </li>
        <li className="my-2">
          Prof. Lara Visualis - Badaczka estetyki w projektowaniu interfejsów,
          specjalizująca się w wykorzystaniu sztuki i designu w celu poprawy
          doświadczeń użytkowników.
        </li>
        <li className="my-2">
          Aaron Appflow - Praktyk z branży, doświadczony menedżer projektów
          UI/UX, który poprowadzi warsztaty na temat efektywnego zarządzania
          procesem projektowania.
        </li>
        <li className="my-2">
          Dr. Alex Cognitron - Neuroinformatyk, który dzieli się wiedzą na temat
          interakcji mózg-komputer i potencjalnych rewolucji w interfejsach
          bazujących na myślach.
        </li>
      </ol>
    </div>
  );
};

export default Participants;
