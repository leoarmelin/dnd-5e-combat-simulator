import { DefaultSeoProps } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";

//
const openGraphProps: OpenGraph = {
  url: "",
  type: "website",
  siteName: "D&D 5e Combat Simulator",
  title: "D&D 5e Combat Simulator",
  description: "D&D 5e Combat Simulator",
  locale: "en_US",
  images: []
};

const config: DefaultSeoProps = {
  title: "D&D 5e Combat Simulator",
  description: "D&D 5e Combat Simulator",
  openGraph: openGraphProps,
  canonical: ""
};

export default config;
