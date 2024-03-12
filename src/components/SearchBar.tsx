import { useState } from "react";
import loupeImage from "../assets/loupeImage.png";
import availableSearchQueries from "../searches.ts";
import List from "./List.tsx";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string[] | string>("");
  const [listItems, setListItems] = useState<string[]>([]);

  let cssRender =
    "flex items-center pt-2.5 pb-2.5 pl-5 pr-5 rounded-30 shadow-xl";

  if (listItems.length > 0) {
    cssRender = "flex items-center pt-2.5 pb-2.5 pl-5 pr-5 rounded-30";
  } else {
    cssRender =
      "flex items-center pt-2.5 pb-2.5 pl-5 pr-5 rounded-30 shadow-xl";
  }

  let cssRounded = "";

  return (
    <div className="md:w-4/5 w-full bg-white mx-auto rounded-30">
      <div className={cssRender}>
        <input
          value={searchQuery}
          type="text"
          placeholder="Search..."
          autoComplete="off"
          className="flex-1 h-10 
          outline-none text-xl bg-white text-gray-800 md:w-4/5 w-full placeholder:text-slate-600"
          onChange={(event) => {
            setSearchQuery(event.target.value);
            if (event.target.value.length !== 0) {
              let filteredArray = availableSearchQueries.filter((keyword) => {
                return keyword.query
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase());
              });
              const arrayify = filteredArray.map((filtered) => filtered.query);
              setListItems(arrayify);
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
          <ul className="p-0 border-t border-t-gray-300 rounded-bl-30 rounded-br-30 shadow-xl">
            {listItems
              .map((item) => {
                return availableSearchQueries.find((a) => a.query === item);
              })
              .map((obj, index) => {
                if (index === listItems.length - 1) {
                  cssRounded =
                    "list-none text-base rounded-none p-2 hover:bg-slate-200 last:rounded-br-30 last:rounded-bl-30";
                } else {
                  cssRounded =
                    "list-none text-base rounded-none p-2 hover:bg-slate-200";
                }
                return (
                  <List
                    topic={obj?.topic}
                    key={index}
                    link={obj?.queryId}
                    query={obj?.query}
                    cssRounded={cssRounded}
                  />
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
