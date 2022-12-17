import { protectedProcedure, router } from "../trpc";

function randItem(array: any[]) {
  const ind = Math.floor(Math.random() * array.length);
  return array[ind];
}

export const clothesRouter = router({
  getRandomSet: protectedProcedure.query(async ({ ctx }) => {
    const clothes = await ctx.prisma.clothes.findMany();
    const randHat = clothes.filter((c) => c.type === "Hat");
    const randTop = clothes.filter((c) => c.type === "Top");
    const randBottom = clothes.filter((c) => c.type === "Bottom");
    const randShoes = clothes.filter((c) => c.type === "Shoes");
    return {
      hat: randItem(randHat),
      top: randItem(randTop),
      bottom: randItem(randBottom),
      shoes: randItem(randShoes),
    };
  }),
});
