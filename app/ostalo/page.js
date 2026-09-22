import SportPage from "@/components/SportPage";
import { SPORTS } from "@/lib/sports";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: SPORTS.ostalo.title,
  description: SPORTS.ostalo.description,
  path: "/ostalo",
});

const Page = () => <SportPage sport="ostalo" />;

export default Page;
