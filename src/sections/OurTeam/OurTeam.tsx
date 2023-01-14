import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CardPeople from "../../components/CardPeople/CardPeople";
import { titles, people } from "./content";

const OurTeam = () => {
  return (
    <>
      <SectionTitle
        primaryColorTitle={titles.primaryColorTitle}
        bigHeader={titles.bigHeader}
        smallerHeader={titles.smallerHeader}
      />
      {people.map(({ image, name, jobTitle }) => {
        return <CardPeople name={name} jobTitile={jobTitle} image={image} />;
      })}
    </>
  );
};

export default OurTeam;
