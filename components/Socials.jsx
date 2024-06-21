import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub/>, path: "https://github.com/farhanxaidi"},
    { icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/syed-farhan-ali-zaidi-6a38b6213/"},
    { icon: <FaBehance/>, path: "https://www.behance.net/syedfarhanxaidi"},
    { icon: <FaInstagram/>, path: "https://www.instagram.com/farhan.codex?igsh=eTBrcDd2MGl3aWMx"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        )
      })}
    </div>
  )
}

export default Socials
