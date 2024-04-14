import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { useFetchAbout } from "./FetchData";

const About = () => {
  const { aboutContent } = useFetchAbout();
  return (
    <section className="bg-slate-100 py-40" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <article>
          <SectionTitle text="About" textColor="slate-700" />
          <p className="text-slate-600 mt-8 leading-loose">{aboutContent}</p>
        </article>
        <img src={aboutSvg} className="w-full h-64" />
      </div>
    </section>
  );
};
export default About;
