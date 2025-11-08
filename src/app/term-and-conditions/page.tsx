import TermCondition from "@/components/Policy/TermCondition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};
const page = () => {
  return <TermCondition />;
};

export default page;
