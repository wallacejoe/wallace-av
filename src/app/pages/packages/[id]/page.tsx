//import axios from "axios";
import { packages } from "@/app/lib/placeholder-data";
import { notFound } from "next/navigation";

interface Package {
  packageId: string;
  name: string;
  description: string;
  price: number;
}

type GetPackage = {
  id: number;
};

const getPackage = ({ id }: GetPackage): Package => {
  return packages[id];
};

type PackageDetailsProps = {
  params: Promise<{ id: string }>;
};

const PackageDetails = async ({ params }: PackageDetailsProps) => {
  const { id } = await params;
  const item = await getPackage({ id: Number(id) });

  if (!item) return notFound();

  return (
    <div className="">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default PackageDetails;
