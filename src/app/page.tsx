import AnimatedCalendarIcon from "./components/AnimatedCalendarIcon/AnimatedCalendarIcon";
import Main from "./components/Main/Main";

export default function Home() {
  return (
    <div className="min-h-screen px-2 sm:px-8">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Main />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      <AnimatedCalendarIcon />
    </div>
  );
}
