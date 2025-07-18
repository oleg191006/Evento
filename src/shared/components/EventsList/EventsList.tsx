import { EventoEvent } from "@/shared/lib/type";
import EventCard from "../EventCard/EventCard";

const EventsList = async ({ city }: { city: string }) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();
  return (
    <section className="max-w-[1100px] flex  flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  );
};

export default EventsList;
