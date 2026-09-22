import SportPage from "@/components/SportPage";
import { SPORTS } from "@/lib/sports";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: SPORTS.tenis.title,
  description: SPORTS.tenis.description,
  path: "/tenis",
});

const Page = () => <SportPage sport="tenis" />;

export default Page;
