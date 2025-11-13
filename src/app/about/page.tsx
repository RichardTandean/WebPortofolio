import { AboutContent } from "@/components/about-content";

export default async function About() {
  const cvPath = "/file/CV_Richard Tandean.pdf";
  const cvFilename = "CV_Richard Tandean.pdf";

  return <AboutContent cvPath={cvPath} cvFilename={cvFilename} />;
}