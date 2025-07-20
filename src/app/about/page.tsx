// import { prisma } from "@/lib/prisma";
import { AboutContent } from "@/components/about-content";

// async function getActiveCV() {
//   try {
//     const cv = await prisma.cv.findFirst({
//       where: { active: true },
//       orderBy: { uploadedAt: 'desc' }
//     });
//     return cv;
//   } catch (error) {
//     console.error('Error fetching CV:', error);
//     return null;
//   }
// }

export default async function About() {
  // const activeCV = await getActiveCV();
  const cvPath = "@/public/CV_Richard Tandean.pdf";
  const cvFilename = "CV_Richard Tandean.pdf";

  return <AboutContent cvPath={cvPath} cvFilename={cvFilename} />;
}