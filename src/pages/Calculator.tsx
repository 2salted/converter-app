import { useParams } from "react-router-dom";
import { calculate, calculators, convertToSI } from "../searches";
import { useState } from "react";

export default function Calculator() {
  const { calcId } = useParams();
  const [inputState, setInputState] = useState(
    Array(calculators.find((a) => a.queryId === calcId)?.inputs.length)
      .join(".")
      .split(".")
  );
  const [inputUnits, setInputUnits] = useState(
    calculators
      .find((a) => a.queryId === calcId)
      ?.inputs.map((input) => input.unit[0])
  );
  let foundSelected = calculators.find((a) => a.queryId === calcId);

  if (inputUnits === undefined) {
    return <div></div>;
  }

  const result =
    calcId && foundSelected
      ? calculate(
          inputState.map(Number).map((input, index) => {
            return convertToSI(input, inputUnits[index]);
          }),
          calcId
        )
      : null;

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
                <div key={index}>
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
                        let arrCopy = [...inputState];
                        arrCopy[index] = e.target.value;
                        setInputState(arrCopy);
                      }}
                    />
                    <select
                      value={inputUnits[index]}
                      className="text-black text-center text-base outline-none"
                      onChange={(e) => {
                        let arrCopy = [...inputUnits];
                        arrCopy[index] = e.target.value;
                        setInputUnits(arrCopy);
                      }}
                    >
                      {input.unit.map((unitSelect, unitIndex) => {
                        return (
                          <option
                            key={unitIndex}
                            className="py-2 text-black hover:bg-gray-100 hover:text-gray-900"
                          >
                            {unitSelect}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="px-3 text-7xl text-white">=</div>
        <div className="pl-10">
          {foundSelected?.outputs.map((output, index) => {
            return (
              <div key={index}>
                <div
                  className="flex flex-row justify-between p-2 w-64 h-10 bg-white shadow-xl border border-gray-300 rounded-l-md 
                rounded-20"
                >
                  {findChar() === true && (
                    <label className="text-gray-400">{output.name}</label>
                  )}
                  <div className="outline-none bg-transparent justify-end max-w-40 text-right pr-1">
                    {findChar() === true &&
                      result?.map((answer) => {
                        return answer.toFixed(1);
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
