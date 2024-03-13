import { useParams } from "react-router-dom";
import availableSearchQueries from "../searches";

import BMIcalc from "../components/AllCalculators/BMIcalc";
import Celsius from "../components/AllCalculators/Celsius";
import Fahrenheit from "../components/AllCalculators/Fahrenheit";
import Deltav from "../components/AllCalculators/Deltav";

export default function Calculator() {
  const { calcId } = useParams();

  let selectedQuery = availableSearchQueries.find(
    (query) => query.queryId === calcId
  );

  if (!selectedQuery) {
    return <div>No matching calculator found</div>;
  }

  const { queryId } = selectedQuery;

  return (
    <div
      className="flex justify-center h-screen box-border text-white font-jetbrainsmono"
      style={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
    >
      {(() => {
        switch (queryId) {
          case "celsius":
            return <Celsius />;
          case "bmicalculator":
            return <BMIcalc />;
          case "fahrenheit":
            return <Fahrenheit />;
          case "deltav":
            return <Deltav />;
        }
      })()}
    </div>
  );
}
