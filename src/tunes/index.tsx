import { KorobeinikiNormal, KorobeinikiTravelBanjo } from "./Korobeiniki";
import { Lambada } from "./Lambada";
import { PrinceIgor } from "./PrinceIgor";
import { RussianAnthem } from "./RussianAnthem";
import { ThoseWereTheDays, ThoseWereTheDaysSimple } from "./ThoseWereTheDays";
import { Vechera1, Vechera2 } from "./Vechera";

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
    subTitle: "Normal Version",
    tuning: "gDGBd",
    path: "/korobeiniki",
    component: KorobeinikiNormal,
  },
  {
    title: "Korobeiniki",
    subTitle: "Travel Banjo",
    tuning: "cGCEg",
    path: "/korobeiniki-travel",
    component: KorobeinikiTravelBanjo,
  },
  {
    title: "Moscow Nights",
    subTitle: "Version 1",
    tuning: "aDGBd",
    path: "/vechera-1",
    component: Vechera1,
  },
  {
    title: "Moscow Nights",
    subTitle: "Version 2",
    tuning: "aDGBd",
    path: "/vechera-2",
    component: Vechera2,
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
    subTitle: "Advanced",
    tuning: "f#DGBd",
    path: "/those-were-the-days",
    component: ThoseWereTheDays,
  },
  {
    title: "Those Were The Days",
    subTitle: "Simpler arrangement",
    tuning: "f#DGBd",
    path: "/those-were-the-days-simple",
    component: ThoseWereTheDaysSimple,
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
].sort((a, b) => a.title.localeCompare(b.title));

export default tunes;
