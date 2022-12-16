import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <ul id="rede">
        <li>
          <a className="social-btn cor" href="https://www.linkedin.com/in/rafael-santos-12b773156/" target="_blank"><FaLinkedinIn /></a>
        </li>
        <li>
          <a className="social-btn cor2" href="https://github.com/RafaelSantos7" target="_blank"><FaGithub /></a>
        </li>
        <li>
          <a className="social-btn cor3" href="https://www.instagram.com/rafaelsantos.dev/" target="_blank"><FaInstagram /></a>
        </li>
    </ul>
    
    // <section id="social-networks"> {
    //     socialNetworks.map((network) => (
    //     <a href="" className="social-btn" id={network.name} key={network.name}>
    //       {network.icon}
    //     </a>
    //   ))}
    // </section>
  );
};

export default SocialNetworks;

