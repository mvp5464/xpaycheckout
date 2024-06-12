import Wrapper from "../Wrapper";

const YoutubeFrame = () => {
  return (
    <div className="bg-[#141414] text-white">
      <Wrapper>
        <div className=" flex flex-col gap-8 py-20 justify-center items-center">
          <div className=" md:font-[500] font-[450] md:text-5xl text-3xl mb-5">
            Know the product
          </div>
          <iframe
            width="90%"
            height="450px"
            src={
              "https://www.youtube.com/embed/_oI3TlyYwWg?showinfo=0&iv_load_policy=3&controls=0"
            }
            title="YouTube video player"
            allow="accelerometer; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
      </Wrapper>
    </div>
  );
};

export default YoutubeFrame;
