import { useParams } from "react-router-dom";
import availableSearchQueries from "../searches";

export default function Calculator() {
  const { calcId } = useParams();

  for (let i = 0; i < availableSearchQueries.length; i++) {
    let searchQuery = availableSearchQueries[i];
    if (calcId !== undefined) {
      if (calcId === searchQuery.queryId) {
        return;
      }
    }
  }
}
