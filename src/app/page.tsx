import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Finds event around you</h1>
      <p>Browse more than 10,000 events around you</p>
      <form>
        <input
          type="text"
          placeholder="Search events in any city..."
          spellCheck={false}
        />
      </form>
      <section>
        <p>Popular:</p>
        <div>
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Austin</Link>
        </div>
      </section>
    </main>
  );
}
