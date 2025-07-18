import EventCard from "../EventCard/EventCard";
import { getEvents } from "@/shared/lib/utils/getEvents";

const EventsList = async ({ city }: { city: string }) => {
  const events = await getEvents(city);
  return (
    <section className="max-w-[1100px] flex  flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  );
};

export default EventsList;
