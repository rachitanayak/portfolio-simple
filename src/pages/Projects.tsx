import DisplayPicture from "../components/DisplayPicture.tsx";
import ProjectImg from "../assets/projects.jpeg";

const projects = [
  {
    name: "Subpoena Process Automator",
    details: [
      "Worked with the team to design a UI for paralegals to upload documents, review extracted data in tabular/PDF formats, and export results as a Word document.",
    ],
    order: 3,
  },
  {
    name: "Patterns",
    details: [
      "Collaborated on a dynamic UI powered by a JSON schema for different business services teams to create and review content using Gen AI",
    ],
    order: 2,
  },
  {
    name: "Revenue Growth Engagement Chat",
    details: [
      "Developed a AI-driven chat UI for querying internal databases and uploaded files, with session history for seamless query refinement.",
    ],
    order: 1,
  },
];

function Projects() {
  return (
    <>
      <div className="space-y-8 lg:pr-20">
        <p>
          These are some of the projects I have contributed to professionally.
        </p>
        <ul className="space-y-6">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project, mainIndex) => (
              <li key={mainIndex}>
                <span className="md:text-2xl">{project.name}</span>
                <ul>
                  {project.details.map((detail, detailIndex) => (
                    <li
                      key={mainIndex + detailIndex}
                      className="list-disc text-blue-700"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
      <DisplayPicture
        src={ProjectImg}
        alt="Macro data refinement cubicle"
        fitToContainer={true}
      />
    </>
  );
}

export default Projects;
