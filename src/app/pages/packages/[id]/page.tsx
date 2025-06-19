//import axios from "axios";
import { packages } from "@/app/lib/placeholder-data";
import { notFound } from "next/navigation";
import { Package, GetPackage } from "@/utilities/types/package";
import ComponentCard from "@/components/common/componentCard";
import EmailForm from "@/components/common/emailForm";

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
    <div className="w-full flex flex-col items-center">
      <ComponentCard title={item.name}>
        <div className="w-full flex flex-col justify-center items-center">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <EmailForm item={item} />
        </div>
      </ComponentCard>
    </div>
  );
};

export default PackageDetails;
