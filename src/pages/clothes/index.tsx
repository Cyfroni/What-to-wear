import { Clothes } from "@prisma/client";
import { type NextPage } from "next";
import Image from "next/image";

import { trpc } from "../../utils/trpc";

const Clothes: NextPage = () => {
  const { data: set, error } = trpc.clothes.getRandomSet.useQuery();

  if (error) return <div>{error.message}</div>;

  return (
    <main className="flex items-center justify-center">
      <ul className="flex flex-col gap-4">
        <li>
          <ClothesElem clothes={set?.hat}></ClothesElem>
        </li>
        <li>
          <ClothesElem clothes={set?.top}></ClothesElem>
        </li>
        <li>
          <ClothesElem clothes={set?.bottom}></ClothesElem>
        </li>
        <li>
          <ClothesElem clothes={set?.shoes}></ClothesElem>
        </li>
      </ul>
    </main>
  );
};

export default Clothes;

const ClothesElem: React.FC<{ clothes?: Clothes }> = ({ clothes }) => {
  if (!clothes) return <></>;
  return (
    <>
      <Image
        src={clothes.image}
        alt="Picture of the author"
        width={100}
        height={100}
      />
      {clothes.name}
    </>
  );
};
