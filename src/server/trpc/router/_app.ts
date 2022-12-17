import { router } from "../trpc";
import { authRouter } from "./auth";
import { clothesRouter } from "./clothes";

export const appRouter = router({
  clothes: clothesRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
