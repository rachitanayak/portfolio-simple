interface DisplayPictureProps {
  src: string;
  alt: string;
  fitToContainer: boolean;
}

function DisplayPicture({ src, alt, fitToContainer }: DisplayPictureProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-blue-700 flex justify-center items-center">
        <div className="flex justify-center items-center border border-blue-700  w-[32dvh] h-[42dvh] md:w-[45dvh] md:h-[55dvh] p-2">
          <img
            className={`object-cover md:${
              fitToContainer ? "w-full h-full" : ""
            }`}
            src={src}
            alt={alt}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayPicture;
