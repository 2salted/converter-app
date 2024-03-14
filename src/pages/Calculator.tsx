import { useParams } from "react-router-dom";
import { calculators } from "../searches";

export default function Calculator() {
  const { calcId } = useParams();
  let foundSelected = calculators.find((a) => a.queryId === calcId);

  return (
    <div
      className="flex justify-center h-screen box-border font-jetbrainsmono"
      style={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
    >
      <div className="flex items-center text-black">
        <div className="pr-10">
          {foundSelected &&
            foundSelected?.inputs.map((input, index) => {
              return (
                <div className="flex flex-row" key={index}>
                  <div>{input.name}</div>
                  <input
                    className="p-2 border border-gray-300 rounded-l-md outline-none rounded-20"
                    type="text"
                    placeholder="Input 1"
                  />
                </div>
              );
            })}
        </div>
        <div className="px-3 text-7xl text-white">=</div>
        <div className="pl-10">
          <input
            className="p-2 border border-gray-300 rounded-r-md outline-none rounded-20"
            type="text"
            placeholder="Input 2"
          />
        </div>
      </div>
    </div>
  );
}
