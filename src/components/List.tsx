import { Link } from "react-router-dom";

type Props = {
  link: string | undefined;
  query: string | undefined;
  cssRounded: string;
};

export default function List({ link, query, cssRounded }: Props) {
  return (
    <Link to={link ? link : "/"}>
      <div className={cssRounded}>
        <li className="cursor-pointer p-1">{query}</li>
      </div>
    </Link>
  );
}
