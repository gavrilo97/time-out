import SportPage from "@/components/SportPage";
import { SPORTS } from "@/lib/sports";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: SPORTS.kosarka.title,
  description: SPORTS.kosarka.description,
  path: "/kosarka",
});

const Page = () => <SportPage sport="kosarka" />;

export default Page;
