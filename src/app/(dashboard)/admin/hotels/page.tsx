import {
  AddHotel,
  AddHotelDestination,
} from "~/app/_components/adminComponents";
import type { Metadata } from "next";
import { SectionTitle } from "~/app/_components";

export const metadata: Metadata = {
  title: "Hotels",
};

export default function page() {
  return (
    <main className="py-16">
      <div className="align-section-center">
        <SectionTitle title="hotels admin page" pageTitle={true} />
      </div>
      <AddHotelDestination />
      <AddHotel />
    </main>
  );
}
