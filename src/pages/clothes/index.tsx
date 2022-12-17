import { Clothes } from "@prisma/client";
import { type NextPage } from "next";
import Image from "next/image";

import { trpc } from "../../utils/trpc";

const Clothes: NextPage = () => {
  const { data: set, error } = trpc.clothes.getRandomSet.useQuery();

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <ul>
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
    </>
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
