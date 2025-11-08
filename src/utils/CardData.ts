
// images
import FlatFile from "@/assets/CardImg/flatfile.png";
import Notion from "@/assets/CardImg/notion.png";
import Linkedin from "@/assets/CardImg/linkedin.png";
import Canva from "@/assets/CardImg/canva.png";
import Ariana from "@/assets/CardImg/ariana.png";
import Kate from "@/assets/CardImg/kate.png";
import Chatgpt from "@/assets/CardImg/gpt.png";
import Andrew from "@/assets/CardImg/andrew.png";
import Jane from "@/assets/CardImg/janeMary.png";
import NameCheap from "@/assets/CardImg/nameCheap.png";
import Skype from "@/assets/CardImg/skype.png";
import Paul from "@/assets/CardImg/paul.png";
import ChimpMonk from "@/assets/CardImg/chimpMonk.png";
import Qb from "@/assets/CardImg/qb.png";
import AWS from "@/assets/CardImg/aws.png";
import Jack from "@/assets/CardImg/jackMark.png";
import { StaticImageData } from "next/image";

interface CardData {
  type: "company" | "person";
  name: string;
  role?: string;
  logo: StaticImageData;
  bg: string;
  quote?: string;
  bgGradient: string;
}

export const CardData: CardData[] = [
  {
    type: "company",
    name: "Flatfile",
    role: "Project Management",
    logo: FlatFile,
    bg: "#FEE4CB",
    bgGradient:"#FEE4CB",
  },
  {
    type: "person",
    name: "Ariana",
    logo: Ariana,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#242059",
    bgGradient:"white",
  },
  {
    type: "company",
    name: "Name Cheap",
    role: "Project Management",
    logo: NameCheap,
    bg: "#FF5301",
    bgGradient:"#FF5301",
  },
  {
    type: "person",
    name: "Jack Mark",
    logo: Jack,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#FF9CA8",
    bgGradient:"white",
  },
  {
    type: "company",
    name: "ChatGPT",
    role: "Project Management",
    logo: Chatgpt,
    bg: "#10A37F",
    bgGradient:"#10A37F",
  },
  {
    type: "person",
    name: "Kate",
    logo: Kate,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#D2B7FF",
    bgGradient:"white",
  },
  {
    type: "company",
    name: "QB",
    role: "Project Management",
    logo: Qb,
    bg: "#2CA01C",
    
    bgGradient:"#2CA01C",
  },
  {
    type: "company",
    name: "Notion",
    role: "Project Management",
    logo: Notion,
    bg: "#000000",
    bgGradient:"#000000",
  },
  {
    type: "person",
    name: "Andrew",
    logo: Andrew,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#242059",
    bgGradient:"#242059",
  },
  {
    type: "company",
    name: "Skype",
    role: "Project Management",
    logo: Skype,
    bg: "#0098E3",
    bgGradient:"#0098E3",
  },
  {
    type: "person",
    name: "Jack Mark",
    logo: Jack,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#FF9CA8",
    bgGradient:"white",
  },
  {
    type: "company",
    name: "Linkedin",
    role: "Project Management",
    logo: Linkedin,
    bg: "#0A66C2",
    bgGradient:"#0A66C2",
  },
  {
    type: "person",
    name: "Paul",
    logo: Paul,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#595959",
    bgGradient:"white",
  },
  {
    type: "company",
    name: "AWS",
    role: "Project Management",
    logo: AWS,
    bg: "#262E3B",
    bgGradient:"#3C434F",
  },
  {
    type: "company",
    name: "Canva",
    role: "Project Management",
    logo: Canva,
    bg: "#24BECA",
    bgGradient:"#24BECA",
  },
  {
    type: "person",
    name: "Jane Mary",
    logo: Jane,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#FF9CA8",
    bgGradient:"white",
  },
  {
    type: "company",
    name: "Chimp Monk",
    role: "Project Management",
    logo: ChimpMonk,
    bg: "#FFE002",
    bgGradient:"#FFE002",
  },
  {
    type: "person",
    name: "Jack Mark",
    logo: Jack,
    quote:
      "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    bg: "#FF9CA8",
    bgGradient:"white",
  },
];