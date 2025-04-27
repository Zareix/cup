import { theme } from "../theme";

export default function DataLoadingError() {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center gap-1 text-${theme}-500 dark:text-${theme}-400`}
    >
      <div className="mb-8 flex gap-1">
        An error occurred, please try again.
      </div>
    </div>
  );
}
