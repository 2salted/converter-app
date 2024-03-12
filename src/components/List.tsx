import { Link, To } from "react-router-dom";

type Props = {
  link: To | string | undefined;
  query: string | undefined;
  cssRounded: string;
  topic: string | undefined;
};

export default function List({ link, query, cssRounded, topic }: Props) {
  return (
    <Link to={link ? link : "/"}>
      <div className={cssRounded}>
        <li className="cursor-pointer p-1 text-black">{query} <span className="text-sm text-gray-400">&#x2022; {topic}</span></li>
      </div>
    </Link>
  );
}
