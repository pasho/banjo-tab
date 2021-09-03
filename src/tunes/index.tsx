import Korobeiniki from "./Korobeiniki";
import Lambada from "./Lambada";
import PrinceIgor from "./PrinceIgor";
import RoseTatoo from "./RoseTatoo";
import RussianAnthem from "./RussianAnthem";
import ThoseWereTheDays from "./ThoseWereTheDays";
import Vechera from "./Vechera";
import WorriedMansBlues from "./WorriedMansBlues";

export type Tune = {
  title: string;
  subTitle?: string;
  tuning: string;
  path: string;
  component: () => JSX.Element;
};

const tunes: Tune[] = [
  {
    title: "Korobeiniki",
    subTitle: "",
    tuning: "gDGBd",
    path: "/korobeiniki",
    component: Korobeiniki,
  },
  {
    title: "Moscow Nights",
    subTitle: "",
    tuning: "gDGBd",
    path: "/vechera",
    component: Vechera,
  },
  {
    title: "Prince Igor",
    subTitle: "",
    tuning: "gDGBd",
    path: "/prince-igor",
    component: PrinceIgor,
  },
  {
    title: "Those Were The Days",
    subTitle: "",
    tuning: "gDGBd",
    path: "/those-were-the-days",
    component: ThoseWereTheDays,
  },
  {
    title: "Russian Anthem",
    subTitle: "",
    tuning: "gCGBd",
    path: "/russian-anthem",
    component: RussianAnthem,
  },
  {
    title: "Lambada",
    subTitle: "",
    tuning: "gDGBd",
    path: "/lambada",
    component: Lambada,
  },
  {
    title: "Worried Man's Blues",
    subTitle: "",
    tuning: "gDGBd",
    path: "/worried-man",
    component: WorriedMansBlues,
  },
  {
    title: "Rose Tatoo",
    subTitle: "",
    tuning: "gDGBd",
    path: "/rose-tatoo",
    component: RoseTatoo,
  },
];

export default tunes;
