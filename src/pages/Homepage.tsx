import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Homepage() {
  return (
    <div
      className="flex justify-center h-screen box-border font-jetbrainsmono"
      style={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
    >
      <div className="w-full lg:max-w-screen-lg px-8">
        <Navbar />
        <div className="text-center text-3xl font-jetbrainsmono pt-24 pb-16">
          Bridging the Gap Between Units
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
