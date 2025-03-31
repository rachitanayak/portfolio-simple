import DisplayPicture from "../components/DisplayPicture.tsx";
import ContactImg from "../assets/contact.svg";

function Contact() {
  return (
    <>
      <p className="md:text-2xl md:pr-50">
        if you would like to get in touch, please drop an email to{" "}
        <a
          href="mailto:rachitanayak9@gmail.com"
          className="underline hover:text-blue-700"
        >
          rachitanayak9@gmail.com
        </a>
        ... thank you!
      </p>
      <DisplayPicture
        src={ContactImg}
        alt="Phone receiver"
        fitToContainer={false}
      />
    </>
  );
}

export default Contact;
