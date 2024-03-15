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
  const [showResult, setShowResult] = useState<boolean>(false);
  let foundSelected = calculators.find((a) => a.queryId === calcId);
  const result =
    calcId && foundSelected ? calculate(inputState.map(Number), calcId) : null;

  function findChar() {
    for (let i = 0; i < inputState.length; i++) {
      if (!inputState[i].trim()) {
        return console.log("not all inputs have characters");
      }
    }
    return console.log("all inputs have characters");
  }

  findChar();

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
                  <input
                    className="p-2 shadow-xl border border-gray-300 rounded-l-md outline-none 
                    rounded-20"
                    type="text"
                    value={inputState[index]}
                    placeholder={input.name}
                    onChange={(e) => {
                      let oldArray = [...inputState];
                      oldArray[index] = e.target.value;
                      setInputState(oldArray);
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="px-3 text-7xl text-white">=</div>
        <div className="pl-10">
          <p
            className="p-2 border shadow-xl w-52 h-10 bg-white border-gray-300
            rounded-r-md outline-none rounded-20"
          >
            {result?.map((answer) => {
              return answer.toFixed(1);
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
