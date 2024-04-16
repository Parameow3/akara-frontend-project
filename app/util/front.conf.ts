import { Ubuntu } from "next/font/google";

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: "300",
});

export const ubuntu = ubuntuFont.className;
