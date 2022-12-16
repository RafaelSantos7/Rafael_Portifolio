import Doc from "../Documento/Rafael.pdf";
import Avatar from "../img/rafaels.jpeg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./informationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Rafael Santos" />
            <p className="title">Desenvolvedor JavaScript</p>
            <SocialNetworks />
            <InformationContainer />
            <a href={Doc} className="btn" target="_blank">Download currículo</a>
        </aside>
    );
};

export default Sidebar;