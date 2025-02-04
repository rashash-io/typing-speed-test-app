import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

export const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur(); // remove focus
    handleRestart();
  };
  return (
    <button
      onClick={handleClick}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className} outline`}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
