import AnimationComponent from "./AnimationComponent";
import Header from "./Header";

function Main() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <Header />
      <div className="flex flex-col justify-center items-center max-w-2xl gap-6">
        <span className="text-[52px] text-center leading-none">
          Connecting Patients and Providers Through
          <span className="ml-2 bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% text-transparent bg-clip-text">
            Precision
          </span>
        </span>
        <span className="text-gray-500 text-center text-2xl">
          Making healthcare simple, smart, and more human-centric by reducing
          admin work, saving time, and enabling doctors to focus on what truly
          matters - Patients
        </span>
      </div>
      <AnimationComponent />
    </div>
  );
}

export default Main;
