import { Link } from "react-router-dom";
import { HiChatAlt2 } from "react-icons/hi";

const Logo = ({ className = "" }) => {
  const combinedStyles = `flex items-center gap-2 text-2xl font-medium text-white ${className}`;

  return (
    <Link to="/" className={combinedStyles}>
      <span>Chat Time</span>
      <span>
        <HiChatAlt2 />
      </span>
    </Link>
  );
};

export default Logo;
