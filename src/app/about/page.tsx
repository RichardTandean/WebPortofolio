import { prisma } from "@/lib/prisma";
import { AboutContent } from "@/components/about-content";

async function getActiveCV() {
  const cv = await prisma.cv.findFirst({
    where: { active: true },
    orderBy: { uploadedAt: 'desc' }
  });
  return cv;
}

export default async function About() {
  const activeCV = await getActiveCV();
  const cvPath = activeCV?.path || '/file/CV_Richard Tandean.pdf';
  const cvFilename = 'CV_Richard Tandean.pdf';

  return <AboutContent cvPath={cvPath} cvFilename={cvFilename} />;
} 