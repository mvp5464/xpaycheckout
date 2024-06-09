const FaqPageCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div>
      <div>
        <div>{title} (+)</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default FaqPageCard;
