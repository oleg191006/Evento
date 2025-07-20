import { unstable_cache } from "next/cache";
import prisma from "./db";
import { notFound } from "next/navigation";

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  console.log(event);

  if (!event) {
    return notFound();
  }

  return event;
});
