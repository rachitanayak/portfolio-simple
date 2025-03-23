interface DisplayPictureProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

function DisplayPicture({ src, alt, width, height }: DisplayPictureProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-blue-700 w-[50dvh] h-[60dvh] flex justify-center items-center">
        <div className="flex justify-center items-center border border-blue-700  w-[45dvh] h-[55dvh] p-2">
          <img
            className={`object-cover h-${height} w-${width}`}
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayPicture;
