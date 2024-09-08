import { AddDestination, AddPackage } from "~/app/_components/adminComponents";
import type { Metadata } from "next";
import { SectionTitle } from "~/app/_components";

export const metadata: Metadata = {
  title: "Packages",
};
export default function page() {
  return (
    <main className="py-16">
      <div className="align-section-center">
        <SectionTitle title="packages admin page" pageTitle={true} />
      </div>
      <AddDestination />
      <AddPackage />
    </main>
  );
}
