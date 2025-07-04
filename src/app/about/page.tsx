import { prisma } from "@/lib/prisma";
import { AboutContent } from "@/components/about-content";

async function getActiveCV() {
  try {
    if (process.env.SKIP_DB_CHECK === "1") {
      return null;
    }
    const cv = await prisma.cv.findFirst({
      where: { active: true },
      orderBy: { uploadedAt: 'desc' }
    });
    return cv;
  } catch (error) {
    console.error('Error fetching CV:', error);
    return null;
  }
}

export default async function About() {
  const activeCV = await getActiveCV();
  const cvPath = activeCV?.path || '/file/CV_1751605105638.pdf';
  const cvFilename = activeCV?.filename || 'CV_Richard Tandean.pdf';

  return <AboutContent cvPath={cvPath} cvFilename={cvFilename} />;
}