import SectionTitle from "../Common/SectionTitle";
import CapabilitiesData from "./CapabilitiesData";
import CapabilitiesFeatures from "./CapabilitiesFeatures";

const Capabilities = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Capabilities"
          paragraph="Whether you’re a digital native or you’re modernizing; whether you’re looking for help building new products or transforming, Digo can help! "
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {CapabilitiesData.map((feature) => (
            <CapabilitiesFeatures key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
