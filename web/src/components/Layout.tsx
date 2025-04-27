import { theme } from "../theme";
import Logo from "./Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex min-h-screen justify-center bg-white dark:bg-${theme}-950`}
    >
      <div className="absolute mx-auto h-full w-full max-w-[80rem] overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mx-auto my-8 flex h-full max-w-[48rem] flex-col">
          <div className="flex items-center gap-1">
            <h1 className="text-5xl font-bold lg:text-6xl dark:text-white">
              Cup
            </h1>
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
