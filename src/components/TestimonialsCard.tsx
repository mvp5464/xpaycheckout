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
      <div className=" flex flex-col justify-between items-center border rounded-2xl p-4 md:h-80">
        <div className="flex flex-col justify-start items-center mb-8 md:mb-0">
          <div className=" pb-2">
            <Image
              src={"/commaImage.avif"}
              alt={"Logo"}
              width={25}
              height={50}
            />
          </div>
          <div className=" text-[0.85rem] text-[#333333] leading-relaxed">
            {content}
          </div>
        </div>
        <div className="flex flex-col justify-end items-center">
          <div className=" w-10 md:w-25">
            <Image
              src={image}
              alt={"Logo"}
              width={55}
              height={50}
              className=" rounded-full"
            />
          </div>
          <div className=" text-[#333333] font-semibold md:text-[1.4rem] text-[1rem] ">
            {name}
          </div>
          <div className=" text-[#4f4f4f] md:text-[1.18rem] text-[0.8rem] ">
            {founder}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
