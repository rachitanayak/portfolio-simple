interface DisplayPictureProps {
  src: string;
  alt: string;
  fitToContainer: boolean;
}

function DisplayPicture({ src, alt, fitToContainer }: DisplayPictureProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-blue-700 w-[50dvh] h-[60dvh] flex justify-center items-center">
        <div className="flex justify-center items-center border border-blue-700  w-[45dvh] h-[55dvh] p-2">
          <img
            className={`object-cover ${fitToContainer ? "w-full h-full" : ""}`}
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayPicture;
