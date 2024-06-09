const SingleBenefits = ({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) => {
  return (
    <div>
      <div className=" grid grid-cols-4">
        <div className=" col-span-1">{image}</div>
        <div className=" col-span-3">
          <div>{title}</div>
          <div>{body}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleBenefits;
