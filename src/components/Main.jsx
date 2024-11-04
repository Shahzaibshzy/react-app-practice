import TiltImage from "./TiltImage";
import Card from "./Cards";

const Main = () => {
  return (
    <div>
      <main
        className="container mx-auto flex 
      flex-col md:flex-row 
      items-center justify-between py-20 px-1"
      >
        <div className="max-w-2xl mb-8 md:mb-0 mt-62 ml-40 xl:-mt-52">
          <span
            className="inline-block bg-purple-100
           text-custom-blue 
           text-md px-4 py-1
           rounded-full
           font-bold tracking-wide"
          >
            Education
          </span>
          <h1 className="text-6xl font-bold text-gray-900 mt-3 leading-tight">
            Web-based LMS, loved by more than 1000 learners
          </h1>
          <p className="text-gray-700 mt-3 text-xl md:mb-20">
            Shekz Tech offers some of the best courses available anywhere online
            for creating websites. Learn at your own speed and master PHP,
            Laravel, and CodeIgniter4. Start learning how to code websites right
            now!
          </p>
        </div>
        <TiltImage />
      </main>
    </div>
  );
};

export default Main;
