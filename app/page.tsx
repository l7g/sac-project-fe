//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import WorkInProgress from "@/components/WorkInProgress";
import DownloadButton from "@/components/DownloadButton";
import Volantino from "@/components/Volantino";

export default function Home() {
  return (
    <section className="h-full">
      <Volantino />
      <Stats />
    </section>
  );
}
