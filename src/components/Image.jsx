const Image = ({ src }) => {
  return (
    <>
      <img
        src={src}
        className="h-full w-full rounded-xl object-cover saturate-0 transition duration-300 ease-in-out hover:saturate-100"
        alt=""
      />
    </>
  );
};

export default Image;
