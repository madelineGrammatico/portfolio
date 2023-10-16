import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components"
import colors from "../../color";
import { Button } from "../Button/Button";

const HeroStyled = styled.section`
  background-color: ${colors.second};
  /* background: linear-gradient(105deg, ${colors.third} 39%, ${colors.second} 39.2%); */
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 5rem; */
`
const HeroProfile = styled.section`
  background-color: ${colors.third};
  height: 100%;
  color: ${colors.first};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 40%;
  padding: 5rem;
  h1{
    margin:0;
  }
  
`
const HeroSecond = styled.div`
  /* background-color: ${colors.second}; */
  /* height: 100%; */
  flex-flow: wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
 
  gap: 1rem;
  padding: 5rem;
  width: 60%;
  p  {
    flex: 1 100%
  }
`

export function Hero() {
   
    const traduction = {
        pageTitle: {
          EN: "Home",
          FR: "Accueil"
        },
        heroJob: {
          EN: "Front End React Developer",
          FR: "Développeuse Front-End React"
        },
        heroIntroduction: {
          EN:"Front-End Developer in transition, my previous experience in the field of art has allowed me to develop a keen sense of creativity and aesthetics. I am determined to expand my Front-End development skills while adding a creative touch to each project.",
          FR: "Développeuse Front-End en reconversion, mon expérience antérieure dans le domaine de l'art m'a permis de développer un sens aigu de la créativité et de l'esthétique. Je suis déterminée à élargir mes compétences en développement Front-End tout en apportant une touche créative à chaque projet."
        },
        heroButton: {
          EN:"Resume",
          FR:"Voir CV"
        },
        heroSecondButton: {
          EN:"See all my projects",
          FR:"Voir tous mes projects"
        },
    }
    
    const language = useSelector((state: RootState) => state.languageSlice.language)

  return (
    <HeroStyled>
      <HeroProfile>
        <h1>Madeline Grammatico</h1>
        <p>{ traduction.heroJob[language] }</p>
      </HeroProfile>
      <HeroSecond>
        <p>{ traduction.heroIntroduction[language] }</p>
        <Button>{ traduction.heroButton[language]}</Button>
        <Button type="secondary">{ traduction.heroSecondButton[language]}</Button>
      </HeroSecond>
    </HeroStyled>
  )
}