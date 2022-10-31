import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface EmptyStateInterface {
  icon?: JSX.Element;
  text?: string;
}

export const EmptyState: FC<EmptyStateInterface> = ({
  icon = <MagnifyingGlassIcon className="h-24 w-24" />,
  text = "Tidak ditemukan",
}) => {
  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <div className="text-lg text-center flex items-center flex-col gap-4">
        {icon}
        {text}
      </div>
    </div>
  );
};
