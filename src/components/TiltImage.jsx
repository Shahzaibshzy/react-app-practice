import img from "../resources/new.png";
import img2 from "../resources/im5.png";

const TiltImage = ({ imgSrc }) => {
  // Changed prop name from img to imgSrc

  return (
    <div className="flex justify-center items-center min-h-screen xl:-mt-20">
  <div className="w-[550px] h-[350px] md:w-[750px] md:h-[550px] relative">
    <div className="absolute top-0 left-0 z-0 -mt-12 w-full flex justify-end ">
      <img
        alt="grey background"
        className="w-[150px] h-[140px] object-cover md:ml-auto lg:ml-96 xl:my-14 xl:ml-auto xl:mr-16 animate-move-left-right"
        src={img2}
      />
    </div>
    <div className="absolute top-44 left-6 z-10 -mt-56 w-full flex justify-center">
      <img
        alt="grey background"
        className="max-w-2xl h-full object-cover transition-transform duration-200 hover:transform hover:scale-105 hover:rotate-3"
        src={img}
      />
    </div>
  </div>
</div>

    
  );
};

export default TiltImage;
