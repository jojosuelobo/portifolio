import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/jojosuelobo/" },
  { name: "github", icon: <FaGithub />, url: "https://github.com/jojosuelobo" },
  // { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/jojosuelobo/" },
  { name: "whatzapp", icon: <FaWhatsapp />, url: "https://wa.me/5527988486353" },
  { name: "gmail", icon: <MdAttachEmail />, url: "mailto:josuelobo2000@gmail.com" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a target="_blank" href={network.url} className="social-btn" id={network.name} key={network.name}>
          <p className="icon">{network.icon}</p>
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
