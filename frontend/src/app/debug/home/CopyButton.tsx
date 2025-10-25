"use client";

interface CopyButtonProps {
  data: any;
}

export function CopyButton({ data }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
    >
      Copy JSON
    </button>
  );
}
