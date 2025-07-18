import EventsList from "@/shared/components/EventsList/EventsList";
import H1 from "@/shared/components/H1/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/shared/lib/utils/capitalize";

type Props = {
  params: {
    city: string;
  };
};

type EventPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props) {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const EventsPage = async ({ params, searchParams }: EventPageProps) => {
  const city = params.city;
  const page = searchParams.page ?? "1";

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
