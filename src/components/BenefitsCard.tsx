import Image from "next/image";

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
    <div className=" bg-[#f0f0f0] rounded-3xl">
      <div className=" grid grid-cols-4 pb-24 pt-16 pr-3">
        <div className=" col-span-1 bg-fuchsia-400s flex justify-center">
          <div>
            <Image src={image} alt={"Logo"} width={65} height={50} />
          </div>
        </div>
        <div className=" col-span-3 h-28 mx-2">
          <div className=" text-[#141414] font-semibold text-[1.32rem] mb-5">
            {title}
          </div>
          <div className=" text-[#4f5874] text-[1.06rem]">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleBenefits;
