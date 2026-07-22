import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Courses() {
  return (
    <div className={`${poppins.className} flex flex-col px-20 py-3`}>
      <h1 className="text-3xl mb-5 font-bold text-[#43246f]">
        Popular Courses In Denmark
      </h1>

      <ul className="flex flex-col gap-4">
        <li>
          <strong>Business & Economics:</strong> Well-known universities with business programs include Aalborg University, Aarhus University, and Copenhagen Business School.
        </li>

        <li>
          <strong>Engineering:</strong> Pioneers in sustainability teaching and research are DTU, University of Copenhagen, and Aarhus University.
        </li>

        <li>
          <strong>Renewable Energy and Sustainability:</strong> Aarhus University, Aalborg University, and Technical University of Denmark (DTU) are all excellent in different areas of engineering.
        </li>

        <li>
          <strong>Medical and Life Sciences:</strong> Prestigious medical and life science programs are available at University of Copenhagen, Aarhus University, and Southern Denmark University.
        </li>

        <li>
          <strong>Design and Creative Industries:</strong> Well-known organizations in the subject of design include the Royal Danish Academy of Fine Arts, KEA—Copenhagen School of Design and Technology, and Kolding School of Design.
        </li>
      </ul>
    </div>
  );
}


