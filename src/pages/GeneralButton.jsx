import { Link } from "react-router-dom";

const GeneralButton = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="text-capitalize linear-gradient(135deg, #1A3A6B, #00C9A7"
    >
      {text}
      <svg
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
};

export default GeneralButton;
