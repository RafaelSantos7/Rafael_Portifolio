import '../styles/components/maincontent.sass';
import AboutConatainer from './AboutConatainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';

const MainContent = () => {
    return(
        <main id="main-content">
            <AboutConatainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
};

export default MainContent;