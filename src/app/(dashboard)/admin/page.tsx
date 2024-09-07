import { SectionTitle } from "~/app/_components";
import { HomePage } from "~/app/_components/adminComponents";
import { api } from "~/trpc/server";

export default async function page() {
  const data = await api.admin.getHomepage();

  return (
    <main className="min-h-[80vh] py-16">
      <div className="align-section-center">
        <SectionTitle title="admin home page" pageTitle={true} />
      </div>
      <HomePage data={data} />
    </main>
  );
}
