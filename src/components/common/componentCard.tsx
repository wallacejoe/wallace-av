interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    <div
      className={`my-10 pb-10 px-5 md:w-1/2 md:h-80 rounded-2xl border border-gray-800 bg-gray-500 ${className}`}
    >
      {/* Card Header */}
      <div className="px-6 py-5">
        <h3 className="text-base font-medium text-gray-800">{title}</h3>
        {desc && <p className="mt-1 text-sm text-gray-500">{desc}</p>}
      </div>

      {/* Card Body */}
      <div className="p-4 border-t border-gray-200 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
