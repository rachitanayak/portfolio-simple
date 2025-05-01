import DisplayPicture from "../components/DisplayPicture.tsx";
import SkillsetImage from "../assets/skillset.gif";

const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  Frameworks: ["React", "Node.js", "jQuery", "Redux"],
  Libraries: ["Bootstrap", "Tailwind CSS"],
  Databases: ["SQL Server", "Microsoft Dataverse"],
  "Cloud Platforms": ["Azure", "Power Platform"],
  "Developer Tools": ["Git", "VS Code", "Postman", "Jira", "Azure DevOps"],
};

const getSkillCategory = (category: string) => {
  return skills[category as keyof typeof skills]; // Cast key properly
};

function Skillset() {
  return (
    <>
      <ul className="space-y-8 lg:pr-20">
        {Object.keys(skills).map((category) => (
          <li key={category} className="list-disc">
            <span className="md:text-2xl">{category}</span>:{" "}
            <span className="text-blue-700">
              {getSkillCategory(category).join(", ")}
            </span>
          </li>
        ))}
      </ul>
      <DisplayPicture
        src={SkillsetImage}
        alt="Cat typing aggressively on laptop"
        fitToContainer={true}
      />
    </>
  );
}

export default Skillset;
