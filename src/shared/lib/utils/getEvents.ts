import { capitalize } from "./capitalize";
import prisma from "./db";

export async function getEvents(city: string) {
  const events = prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });
  return events;
}
