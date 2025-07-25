import { CheckCircle, XCircle } from "lucide-react";

interface AlertProps {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

const Alert = ({ show, type, message }: AlertProps) => {
  if (!show) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-darkcustom text-offwhitecustom px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 min-w-fit max-w-sm">
        {type === 'success' ? (
          <CheckCircle className="w-4 h-4 text-green-400" />
        ) : (
          <XCircle className="w-4 h-4 text-red-400" />
        )}
        <span className="text-sm font-medium whitespace-nowrap">{message}</span>
      </div>
    </div>
  );
};

export default Alert;