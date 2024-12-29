import NeevLogo from "@/components/Icon/Neev";
import { BsTwitterX } from "react-icons/bs";

// work around types/react 19

const X_Logo = BsTwitterX as React.ElementType;

function Header() {
  return (
    <div className="flex justify-between items-center w-full py-9">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        <NeevLogo />
        <span className="text-3xl md:text-4xl font-medium text-gray-800">
          neev
        </span>
      </div>
      <div className="flex justify-between items-center gap-4 md:gap-6">
        <X_Logo className="w-8 h-8 text-black" />
        <button className="flex flex-row gap-2 items-center text-sm md:text-xl border-2 border-gray-500 hover:border-black text-gray-600 hover:text-black transition-colors px-2 md:px-3 py-1 md:py-2 rounded-md z-40">
          Careers
        </button>
      </div>
    </div>
  );
}

export default Header;
