import SportPage from "@/components/SportPage";
import { SPORTS } from "@/lib/sports";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: SPORTS.fudbal.title,
  description: SPORTS.fudbal.description,
  path: "/fudbal",
});

const Page = () => <SportPage sport="fudbal" />;

export default Page;
