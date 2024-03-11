import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="flex items-center justify-end p-4 text-center">
      <div className="pr-4">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="pl-4">
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
}
