import { ReactElement } from "react";

import DicePageContainer from "@/src/widgets/page-containers/home/home";

export async function generateMetadata() {
  return {
    title: "Dice app",
    description: "Dice app description"
  };
}

export default function Home(): ReactElement {
  return <DicePageContainer />;
}
