import { FallbackProps } from "react-error-boundary";

const PageFallback = ({ error }: FallbackProps) => {
  return (
    <div className="m-2 flex h-screen flex-wrap items-center justify-center">
      <div className="grid grid-flow-row gap-2 md:grid-flow-col" role="alert">
        <div>
          <p className="text-lg md:text-4xl ">
            Uh oh, something has gone wrong.
          </p>
          <p className="text-xs">This isn&apos;t supposed to happen.</p>
          <pre className="whitespace-pre-wrap text-red-600">
            {error.message}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PageFallback;
