import { useParams } from "react-router-dom";
import { calculate, calculators } from "../searches";
import { useState } from "react";

export default function Calculator() {
  const { calcId } = useParams();
  const [inputState, setInputState] = useState(
    Array(calculators.find((a) => a.queryId === calcId)?.inputs.length)
      .join(".")
      .split(".")
  );
  let foundSelected = calculators.find((a) => a.queryId === calcId);
  const result =
    calcId && foundSelected ? calculate(inputState.map(Number), calcId) : null;

  function findChar() {
    for (let i = 0; i < inputState.length; i++) {
      if (!inputState[i].trim()) {
        return false;
      }
    }
    return true;
  }

  return (
    <div
      className="flex justify-center h-screen box-border font-jetbrainsmono"
      style={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
    >
      <div className="flex items-center text-black">
        <div className="pr-10 flex flex-col gap-7">
          {foundSelected &&
            foundSelected?.inputs.map((input, index) => {
              return (
                <div key={index} className="flex flex-row">
                  <div
                    className="flex flex-row p-2 bg-white shadow-xl border border-gray-300 rounded-l-md 
                    rounded-20"
                  >
                    <label htmlFor={"" + index} className="text-gray-400">
                      {input.name}
                    </label>
                    <input
                      className="outline-none bg-transparent justify-end max-w-40 text-right pr-1"
                      id={"" + index}
                      type="text"
                      value={inputState[index]}
                      onChange={(e) => {
                        let oldArray = [...inputState];
                        oldArray[index] = e.target.value;
                        setInputState(oldArray);
                      }}
                    />
                    <select className="text-black">
                      {foundSelected?.units.map((unit: any, index) => {
                        return "";
                      })}
                    </select>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="px-3 text-7xl text-white">=</div>
        <div className="pl-10">
          <p
            className="p-2 border shadow-xl w-64 h-10 bg-white border-gray-300
            rounded-r-md outline-none rounded-20"
          >
            {findChar() === true &&
              result?.map((answer) => {
                return answer.toFixed(0);
              })}
          </p>
        </div>
      </div>
    </div>
  );
}
