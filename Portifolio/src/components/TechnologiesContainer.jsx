import {
  DiBootstrap, DiCss3, DiGit, DiHtml5, DiJqueryLogo, DiJsBadge, DiMongodb, DiMysql, DiNodejsSmall, DiPhp, DiReact, DiSass
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html", name: "HTML", icon: <DiHtml5 />},
  { id: "css", name: "CSS3", icon: <DiCss3 />},
  { id: "Bootstrap", name: "Bootstrap", icon: <DiBootstrap />},
  { id: "Sass", name: "Sass", icon: <DiSass />},
  { id: "Git", name: "Git", icon: <DiGit />},
  { id: "js", name: "JavaScript", icon: <DiJsBadge />},
  { id: "React", name: "React", icon: <DiReact />},
  { id: "Php", name: "Php", icon: <DiPhp />},
  { id: "Jquery", name: "Jquery", icon: <DiJqueryLogo />},
  { id: "Nodejs", name: "Node.js", icon: <DiNodejsSmall />},
  { id: "Mysql", name: "Mysql", icon: <DiMysql />},
  { id: "Mongo", name: "MongoDB", icon: <DiMongodb />},

]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {technologies.map((tech) => (
          <div className="technologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              {/* <h3>{tech.name}</h3>
              <p>Tecnologias FullStack</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer