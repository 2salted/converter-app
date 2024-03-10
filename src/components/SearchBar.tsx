import { useState } from "react";
import loupeImage from "../assets/loupeImage.png";
import availableSearchQueries from "../searches.ts";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string[] | string>("");
  const [listItems, setListItems] = useState<string[]>([]);
  const ObjIntoArray = availableSearchQueries.map((obj) => obj.query);
  let cssRender =
    "flex items-center pt-2.5 pb-2.5 pl-5 pr-5 rounded-30 shadow-xl";

  if (listItems.length > 0) {
    cssRender = "flex items-center pt-2.5 pb-2.5 pl-5 pr-5 rounded-30";
  } else {
    cssRender =
      "flex items-center pt-2.5 pb-2.5 pl-5 pr-5 rounded-30 shadow-xl";
  }

  return (
    <div className="w-1/2 bg-white mx-auto rounded-30">
      <div className={cssRender}>
        <input
          value={searchQuery}
          type="text"
          placeholder="Search..."
          autoComplete="off"
          className="flex-1 h-10 bg-transparent border-none 
          outline-none text-xl text-gray-800"
          onChange={(event) => {
            setSearchQuery(event.target.value);
            if (event.target.value.length !== 0) {
              let filteredArray = ObjIntoArray.filter((keyword) => {
                return keyword
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase());
              });
              setListItems(filteredArray);
            } else if (!event.target.value.length) {
              setListItems([]);
            }
          }}
        />
        <button className="bg-transparent border-none outline-none">
          <img className="cursor-pointer" src={loupeImage} />
        </button>
      </div>
      <div>
        {listItems.length > 0 ? (
          <ul className="bg-white p-0 border-t border-t-gray-300 rounded-bl-20 rounded-br-20 shadow-xl">
            {listItems.map((list, index: number) => {
              return (
                <li
                  key={index}
                  className="list-none text-sm rounded-none p-2 cursor-pointer hover:bg-slate-200 hover:last:rounded-bl-20 hover:last:rounded-br-20"
                >
                  {list}
                </li>
              );
            })}
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
