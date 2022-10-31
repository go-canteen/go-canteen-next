import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EmptyState } from "../../common/empty-state";
import { OrderCard } from "../../common/order-card";
import { OrderCardProps } from "../../common/order-card/order-card";
import { PageLoadingComponent } from "../../common/page-loading";

export const OrderContainer = () => {
  const [orders, setOrders] = useState<OrderCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  const processOrders = orders.filter(
    (order) => order.status === "PROCESSING" || order.status === "PROCESSED"
  );
  const pendingOrders = orders.filter((order) => order.status === "PENDING");

  const fetchOrders = async () => {
    setOrders(DUMMY_ORDERS);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchOrders();
    }, 1000);
  }, []);

  return (
    <main className="p-4">
      <Heading size="lg">Pesanan Anda</Heading>
      <Tabs variant="solid-rounded" colorScheme="yellow" marginTop={4}>
        <TabList>
          <Tab>Dalam Proses</Tab>
          <Tab>Terjadwal</Tab>
        </TabList>
        <TabPanels marginTop={4}>
          <TabPanel display="flex" flexDirection="column" gap={4} paddingX={0}>
            {loading && <PageLoadingComponent />}
            {!loading && processOrders.length === 0 && (
              <EmptyState text="Tidak ada pesanan diproses" />
            )}
            {processOrders.map((order, i) => (
              <OrderCard key={i} {...order} />
            ))}
          </TabPanel>
          <TabPanel display="flex" flexDirection="column" gap={4} paddingX={0}>
            {loading && <PageLoadingComponent />}
            {!loading && pendingOrders.length === 0 && (
              <EmptyState text="Tidak ada pesanan terjadwal" />
            )}
            {pendingOrders.map((order, i) => (
              <OrderCard key={i} {...order} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
};

const DUMMY_ORDERS: OrderCardProps[] = [
  {
    id: "91d2134e-5ef6-4d58-bd73-7fa5aa6af059",
    status: "PROCESSING",
    canteen: {
      id: "4440e586-ed26-4c1e-8fac-16f3db74de72",
      name: "Masakan Jepang (Masjep)",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Oseti.jpg",
    },
    items: [
      {
        id: "c9f0f895-5c40-4c0a-8405-6e83e0c0de53",
        name: "Sushi",
        quantity: 1,
      },
      {
        id: "d57ecf8e-5d59-459b-bd67-4fbeab974cae",
        name: "Katsu",
        quantity: 2,
      },
    ],
  },
  {
    id: "91d2134e-5ef6-4d58-bd73-7fa5aa6af059",
    status: "PROCESSED",
    canteen: {
      id: "4440e586-ed26-4c1e-8fac-16f3db74de72",
      name: "Sate Fasilkom",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sate_Ponorogo.jpg/640px-Sate_Ponorogo.jpg",
    },
    items: [
      {
        id: "e6ec692a-c529-47e5-8447-5c839350a0ad",
        name: "Sate Ayam",
        quantity: 1,
      },
    ],
  },
];
