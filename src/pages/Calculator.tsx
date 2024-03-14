import { useParams } from "react-router-dom";
import { calculators } from "../searches";
import { useState } from "react";

export default function Calculator() {
  const { calcId } = useParams();
  const [inputState, setInputState] = useState([""]);
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
        <div className="pr-10 flex flex-col gap-7">
          {foundSelected &&
            foundSelected?.inputs.map((input, index) => {
              return (
                <div className="flex flex-row" key={index}>
                  <input
                    className="p-2 shadow-xl border border-gray-300 rounded-l-md outline-none 
                    rounded-20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                    [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
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
          <input
            className="p-2 border shadow-xl border-gray-300 rounded-r-md outline-none rounded-20"
            type="text"
            placeholder="Input 2"
          />
        </div>
      </div>
    </div>
  );
}
