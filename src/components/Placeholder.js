export default function Placeholder({ number, width = 150, height = 50, className = '' }) {
  return (
    <div
      className={`bg-gray-300 flex items-center justify-center text-gray-600 font-bold shrink-0 ${className}`}
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      {number}
    </div>
  );
}
