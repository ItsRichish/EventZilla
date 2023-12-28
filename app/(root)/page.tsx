import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="grid grid-cols-1 gap-5 wrapper md:grid-cols-2 2xl:gap-0">
          <div className="flex justify-center flex-col gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button className="button w-full sm:w-fit" size="lg">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <div id="events" className="flex flex-col wrapper my-8 gap-8 md:gap-12">
        Search CategoryFilter
      </div>
    </>
  );
}