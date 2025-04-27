import { LoaderCircle } from "lucide-react";
import { theme } from "../theme";

export default function Loading() {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center gap-1 text-${theme}-500 dark:text-${theme}-400`}
    >
      <div className="mb-8 flex gap-1">
        Loading <LoaderCircle className="animate-spin" />
      </div>
      <p>
        If this takes more than a few seconds, there was probably a problem
        fetching the data. Please try reloading the page and report a bug if the
        problem persists.
      </p>
    </div>
  );
}
