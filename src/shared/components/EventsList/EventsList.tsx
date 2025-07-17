import { EventoEvent } from "@/shared/lib/type";
import EventCard from "../EventCard/EventCard";

type EventsListProps = {
  events: EventoEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
  return (
    <section className="max-w-[1100px] flex  flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </section>
  );
};

export default EventsList;
