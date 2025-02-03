import { ISocial } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/l7g" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/laurent-gagné-606945251",
  },
];

const Social: React.FC<ISocial> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className={iconStyles}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
