import Navbar from "@/components/Layout/Navbar/Navbar";
import { About, Hero } from "@/components/Sections";
import { sanityClientFetch } from "@/sanity/lib/client";
import { dataQuery } from "@/sanity/query/queries";
import { IHeroSectionProps, ITechStackOptionProp } from "@/types/interface";

interface IDataProps {
  heroSection: IHeroSectionProps;
  aboutSection: any[];
  techSection: ITechStackOptionProp[];
}

const page = async () => {
  const data: IDataProps = await sanityClientFetch({
    query: dataQuery,
  });
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-5xl mt-10 pt-16">
        <Hero {...data?.heroSection} />
        <About about={data?.aboutSection} tech={data?.techSection} />
      </div>
    </div>
  );
};

export default page;
