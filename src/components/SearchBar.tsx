import { useState } from "react";
import loupeImage from "../assets/loupeImage.png";
import availableSearchQueries from "../searches.ts";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayList, setDisplayList] = useState(false);
  const [listItems, setListItems] = useState([""]);
  const ObjIntoArray = availableSearchQueries.map((obj) => obj.query);

  return (
    <div className="w-1/2 bg-white mx-auto rounded-30">
      <div className="flex items-center pt-2.5 pb-2.5 pl-5 pr-5">
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
              setDisplayList(true);
              let filteredArray = ObjIntoArray.filter((keyword) => {
                return keyword
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase());
              });
              setListItems(filteredArray);
            } else if (!event.target.value.length) {
              setDisplayList(false);
            }
          }}
        />
        <button className="bg-transparent border-none outline-none">
          <img className="cursor-pointer" src={loupeImage} />
        </button>
      </div>
      <div>
        {displayList && (
          <ul className="bg-white p-0 border-t border-t-gray-500 rounded-bl-3xl rounded-br-3xl">
            {listItems.map((list: any, index: number) => {
              return (
                <li
                  key={index}
                  className="list-none text-sm rounded-none p-2 cursor-pointer"
                >
                  {list}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
