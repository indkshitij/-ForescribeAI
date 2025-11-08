import { Metadata } from "next";
import PrivacyPolicies from "@/components/Policy/PrivacyPolicies";
export const metadata: Metadata = {
  title: "Privacy Policy",
 
};

const page = () => {
  return <PrivacyPolicies />;
};

export default page;
