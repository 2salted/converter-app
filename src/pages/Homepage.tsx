import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Homepage() {
  return (
    <div className="h-screen box-border bg-white font-jetbrainsmono">
      <Navbar />
      <div className="text-center text-3xl font-jetbrainsmono pt-24 pb-16">
        Bridging the Gap Between Units
      </div>
      <SearchBar />
    </div>
  );
}
