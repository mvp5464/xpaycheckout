const SingleServing = ({
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
      <div className="">
        <div className=" ">
          <div>{image}</div>
          <div>{title}</div>
          <div>{body}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleServing;
