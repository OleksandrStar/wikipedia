interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal = ({ isOpen, children, onClose }: IProps) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Error happened</h2>
            <p>{children}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;
