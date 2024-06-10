import Image from "next/image";

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
      <div className=" flex flex-col justify-between items-center border rounded-2xl p-4 h-80">
        <div className="flex flex-col justify-start items-center">
          <div className=" pb-2">
            <Image
              src={"/commaImage.avif"}
              alt={"Logo"}
              width={25}
              height={50}
            />
          </div>
          <div className=" text-[0.88rem] text-[#333333] leading-relaxed">
            {content}
          </div>
        </div>
        <div className="flex flex-col justify-end items-center">
          <div>
            <Image
              src={image}
              alt={"Logo"}
              width={60}
              height={50}
              className=" rounded-full"
            />
          </div>
          <div className=" text-[#333333] font-semibold text-[1.4rem] ">
            {name}
          </div>
          <div className=" text-[#4f4f4f] text-xl ">{founder}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
