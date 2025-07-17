import H1 from "@/shared/components/H1/H1";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = ({ params }: EventsPageProps) => {
  const city = params.city;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
    </main>
  );
};

export default EventsPage;
