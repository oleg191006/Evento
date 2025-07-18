import { EventoEvent } from "@prisma/client";
import prisma from "./db";
import { notFound } from "next/navigation";

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}
