import DisplayPicture from "../components/DisplayPicture.tsx";
import AboutImg from "../assets/about.jpg";

function About() {
  return (
    <>
      <div className="pr-50 space-y-8 text-2xl">
        <p className="flex align-items-center">
          hi! I'm rachita.. i'm a React developer and love building websites. i
          began my web development journey more than 4 years back and have
          enjoyed every bit along the way. i'm always open to learning new
          things and i aim to get better at my skills everyday. i've built this
          website using vite, typescript and tailwind css.
        </p>
        <p>
          when i'm not working, i love to explore new places and food in my city
          and around. i like to read fiction, discover new music, art and movies
          :)
        </p>
        <p>
          also, i'm trying to make this wesbite look{" "}
          <a
            href="https://www.creativebloq.com/features/are-brutalist-sites-the-webs-punk-rock-moment"
            className="hover:text-blue-700 underline"
            target="_blank"
            rel="noreferrer"
          >
            brutalist
          </a>{" "}
          👀...
        </p>
      </div>
      <DisplayPicture
        src={AboutImg}
        alt={"Me pretending to read"}
        height="full"
        width="full"
      />
    </>
  );
}

export default About;
