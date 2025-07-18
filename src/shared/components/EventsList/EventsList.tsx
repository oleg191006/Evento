import EventCard from "../EventCard/EventCard";
import { getEvents } from "@/shared/lib/utils/getEvents";
import PaginationControls from "../PaginationControls/PaginationControls";

type EventsListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventsListProps) => {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="max-w-[1100px] flex  flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
