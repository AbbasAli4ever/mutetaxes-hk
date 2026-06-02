import Nav from "../../components/Nav";
import { HeroSection } from "./sections/HeroSection";
import { KeyMetricsSection } from "./sections/KeyMetricsSection";
import ElementLightClient from "./ElementLightClient";

export const ElementLight = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="fixed top-0 left-0 z-50 flex flex-col items-start w-full">
        <Nav />
      </div>
      <div className="relative w-full pt-[70px] max-[540px]:overflow-hidden">
        <HeroSection />
        <KeyMetricsSection />
      </div>
      <ElementLightClient />
    </div>
  );
};
