import SpinnerComponent from "../spinner-component";

const LoadingComponent = () => {
  return (
    <div className="h-[calc(100vh-200px)] w-full text-2xl flex items-center justify-center gap-4">
      <div role="status">
        <SpinnerComponent />
        <span className="sr-only">Loading...</span>
      </div>
      <span>Loading...</span>
    </div>
  );
};

export default LoadingComponent;
