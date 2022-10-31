import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Items {
  id: string;
  name: string;
  quantity: number;
}

type OrderStatusTypes = "PROCESSING" | "PENDING" | "PROCESSED";

export interface OrderCardProps {
  id: string;
  status: OrderStatusTypes;
  canteen: {
    id: string;
    name: string;
    image: string;
  };
  items: Items[];
}

export const OrderCard: FC<OrderCardProps> = ({
  canteen,
  status,
  items,
  id,
}) => {
  const subtitle = items
    .map((item) => `${item.name} x${item.quantity}`)
    .join(", ");

  const statusColor = {
    PENDING: "bg-yellow-500",
    PROCESSING: "bg-yellow-500",
    PROCESSED: "bg-green-500",
  };

  const statusText = {
    PENDING: "Terjadwal",
    PROCESSING: "Sedang diproses",
    PROCESSED: "Dapat diambil",
  };

  return (
    <Link href={`/order/${id}`} passHref>
      <a className="flex gap-4">
        <div className="relative h-24 aspect-square">
          <Image src={canteen.image} alt={canteen.name} layout="fill" />
        </div>
        <div className="flex flex-col justify-between pb-1">
          <div>
            <h3 className="font-semibold">{canteen.name}</h3>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span
              className={`text-xs text-white font-semibold px-2 py-1 rounded-full ${statusColor[status]}`}
            >
              {statusText[status]}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
