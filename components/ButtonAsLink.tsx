import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";

interface ButtonAsLinkProps {
  href: string;
  target?: string;
  placeholder: string;
}

const ButtonAsLink: React.FC<ButtonAsLinkProps> = ({
  href,
  target,
  placeholder,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className="flex items-center gap-2 linear-flow group"
    >
      <span>{placeholder}</span>{" "}
      <span className="inline-block group-hover:translate-x-4  duration-500">
        <FiChevronsRight />
      </span>
    </Link>
  );
};

export default ButtonAsLink;
