import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const CanteenDetailPage = () => {
  return (
    <>
      <Head>
        <title>
          <>Kantin {DUMMY_CANTEEN.name}</>
        </title>
      </Head>

      <div className="w-full h-32 relative top-0 left-0">
        <Image
          src={DUMMY_CANTEEN.image}
          alt={DUMMY_CANTEEN.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 p-4 text-white w-full from-black to-transparent bg-gradient-to-t">
          <h1>{DUMMY_CANTEEN.name}</h1>
        </div>
      </div>

      <main className="container mx-auto p-4">
        <div className="mt-6">
          <h2>Daftar Merchant</h2>
          <div className="flex flex-col gap-4 mt-4">
            {DUMMY_CANTEEN.merchants.map((merchant, i) => (
              <MerchantCard merchant={merchant} key={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export const MerchantCard = ({ merchant }) => {
  return (
    <div className="flex bg-white rounded shadow">
      <div className="relative h-24 w-24 rounded shrink-0">
        <Image
          src={merchant.image}
          alt={merchant.name}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div className="px-4 py-3 relative w-full">
        <h3>{merchant.name}</h3>
        <div className="absolute bottom-1 right-4">
          <Link href={`/canteen/${DUMMY_CANTEEN.id}/merchant/${merchant.id}`}>
            lihat detail &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

const DUMMY_MERCHANTS = [
  {
    id: "fbe09c99-e353-4cb6-9c5e-55f5dc3419ea",
    name: "Sate Fasilkom",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sate_Ponorogo.jpg/640px-Sate_Ponorogo.jpg",
  },
  {
    id: "c16c284f-36af-47c1-80cd-21f4ca5cdd3a",
    name: "Masakan Jepang",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Oseti.jpg",
  },
  {
    id: "fbe09c99-e353-4cb6-9c5e-55f5dc3419ea",
    name: "Sate Fasilkom",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sate_Ponorogo.jpg/640px-Sate_Ponorogo.jpg",
  },
  {
    id: "c16c284f-36af-47c1-80cd-21f4ca5cdd3a",
    name: "Masakan Jepang",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Oseti.jpg",
  },
];

export const DUMMY_CANTEEN = {
  id: "4be593b9-03fa-4f43-8162-30963e7c78c0",
  name: "Kantin Fasilkom",
  description:
    "Kantin Fasilkom Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  address: "Jl. Dipati Ukur No. 100, Bandung",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Canteen_of_Urumqi_Senior_High_School.jpg",
  merchants: DUMMY_MERCHANTS,
};

export default CanteenDetailPage;
