import SectionTitle from "../Common/SectionTitle";

import WhyUsData from "./WhyUsData";
import WhyUsFeatures from "./WhyUsFeatures";

const WhyUs = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Why Partner With Digo ?"
          paragraph=" "
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {WhyUsData.map((feature) => (
            <WhyUsFeatures key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
