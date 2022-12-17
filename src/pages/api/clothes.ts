import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const clothes = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.clothes.findMany();
  res.status(200).json(examples);
};

export default clothes;
