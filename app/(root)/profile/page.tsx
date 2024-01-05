import Link from "next/link";
import { auth } from "@clerk/nextjs";

import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organnizedEvents = await getEventsByUser({ userId, page: 1 });

  return (
    <>
      {/* My Tickets  */}
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover py-5 md:py-10">
        <div className="flex items-center justify-center sm:justify-between wrapper">
          <h3 className="h3-bold text-center sm:text-left">My Ticket</h3>
          <Button className="button hidden sm:flex" asChild>
            <Link href={"/#events"}>Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        {/* <Collection
          data={}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        /> */}
      </section>

      {/* Event Organized  */}
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover py-5 md:py-10">
        <div className="flex items-center justify-center sm:justify-between wrapper">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button className="button hidden sm:flex" asChild>
            <Link href={"/events/create"}>Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organnizedEvents?.data}
          emptyTitle="No event have been created yet"
          emptyStateSubtext="Go create your first event!"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default ProfilePage;
