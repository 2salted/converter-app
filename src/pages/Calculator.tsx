import { useParams } from "react-router-dom";
import availableSearchQueries from "../searches";

import BMIcalc from "../components/AllCalculators/BMIcalc";
import Celsius from "../components/AllCalculators/Celsius";

export default function Calculator() {
  const { calcId } = useParams();

  let selectedQuery = availableSearchQueries.find(
    (query) => query.queryId === calcId
  );

  if (!selectedQuery) {
    return <div>No matching calculator found</div>;
  }

  const { queryId } = selectedQuery;

  switch (queryId) {
    case "celsius":
      return <Celsius />;
    case "bmicalculator":
      return <BMIcalc />;
  }
}
