const TestimonialsCard = ({
  content,
  image,
  name,
  founder,
}: {
  content: string;
  image: string;
  name: string;
  founder: string;
}) => {
  return (
    <div>
      <div>
        <div>(comma)</div>
        <div>{content}</div>
        <div>{image}</div>
        <div>{name}</div>
        <div>{founder}</div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
