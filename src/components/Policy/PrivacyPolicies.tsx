"use client"
import { motion } from "framer-motion";
import React from "react";
import ForescribeLogo from "@/components/Branding/ForescribeLogo";
import DarkModeToggler from "@/components/DarkMode/DarkModeToggler";
import GoBackButton from "@/components/Buttons/GoBackButton";

const PrivacyPolicies = () => {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <DarkModeToggler />
        <div className="min-h-screen relative overflow-y-auto text-[#19154E] dark:bg-[#1c1b3a]">
          <div className="pt-6 sm:pt-12 pb-16 px-4 sm:px-12 md:px-20 lg:px-60 leading-relaxed">
            <div className="gap-2 flex flex-col sm:flex-row justify-between items-center pb-3 mb-8 transition-colors duration-300 ">
              <ForescribeLogo color={"#8b3dff"} />

              <h1 className="h-full text-3xl sm:text-3xl font-semibold text-[#19154E] dark:text-[#E2DAFF] transition-colors duration-300">
                Privacy Policy
              </h1>
            </div>

            <section className="legal-container text-fs-text-header-blue ">
              <div className="flex flex-col font-normal gap-5 text-justify text-sm text-[#19154E] dark:text-white">
                <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  1. PURPOSE AND SCOPE
                </h3>
                <p>
                  1.1 At Forescribe, we respect your privacy and data protection
                  rights and recognize the importance of protecting the personal
                  data we collect and process. This Privacy Policy is designed
                  to help you to understand what personal data we collect about
                  you and how we use and share it.
                </p>
                <p>
                  1.2 “Forescribe” means (a) Innoveer Ventures Private Limited.,
                  a India corporation with offices at M853, 2nd Floor, Mayfield
                  Gardens, Sector 51, Gurugram - Haryana, IN, and their group
                  companies ("Forescribe", "we", "us", "our").
                </p>
                <p>1.3 This Privacy Policy applies to you if you:</p>
                <ol className="mb-10 list-disc list-outside space-y-3 ml-12 ">
                  <li>
                    interact with any of Forescribe’s websites (including
                    www.forescribe.com and www.forescribe.ai) or our social
                    media pages (collectively, the "Sites") ("website users");
                  </li>
                  <li>
                    visit any of Forescribe’s premises ("office visitors");
                    attend an Forescribe event or an event which Forescribe
                    sponsors ("event attendees");
                  </li>
                  <li>
                    use Forescribe's products, customer workspaces, mobile
                    applications, and our other applications and services
                    (collectively, the "Forescribe Services") ("customers");
                  </li>
                  <li>
                    are a marketing prospect, who is anyone whose data
                    Forescribe processes for the purposes of assessing customer
                    eligibility ("marketing prospect"); or receive marketing
                    communications from Forescribe.
                  </li>
                  <li>
                    The below Privacy Policy applies to you irrespective of
                    where you are based. There are certain additional parts of
                    the Privacy Policy that will apply to you where you are a
                    resident of the EU, UK, Switzerland, or California. These
                    additional parts do not apply to everyone.
                  </li>
                </ol>
                <p className="mb-10">
                  1.4 For the purposes of the General Data Protection Regulation
                  (or any successor or equivalent legislation in the UK)
                  ("GDPR"), Forescribe, is the controller of your personal data.
                </p>
                <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  2. PERSONAL DATA COLLECTED BY FORESCRIBE
                </h3>
                <p>
                  <strong>2.1 PERSONAL DATA WE COLLECT AND RECEIVE</strong>
                </p>
                <p>
                  The personal data that we collect about you broadly falls into
                  the categories set out in the following table. Some of this
                  information you provide voluntarily when you interact with the
                  Forescribe Services and Sites, or when you attend an event or
                  visit our premises. Other types of information may be
                  collected automatically from your device, such as device data
                  and service data. From time to time, we may also receive
                  personal data about you from third party sources (as further
                  described in the table).
                </p>
                <p>We may collect the following personal data about:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>our product users;</li>
                  <li>our website users;</li>
                  <li>recipients of marketing communications; and</li>
                  <li>marketing prospects.</li>
                </ol>
                <p>Registration, contact, and company information:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>first and last names;</li>
                  <li>email addresses;</li>
                  <li>phone numbers;</li>
                  <li>avatars;</li>
                  <li>company name;</li>
                  <li>company industry;</li>
                  <li>your identity provider for eg. Google</li>
                  <li>company size</li>
                  <li>your country</li>
                  <li>your role in your company.</li>
                </ol>
                <p>
                  Payment information (if applicable, powered by Stripe and
                  Razorpay; our Payment Providers):
                </p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>credit card information;</li>
                  <li>billing and mailing addresses;</li>
                  <li>other payment-related information.</li>
                </ol>
                <p>
                  No payment information as indicated above is stored by us in
                  any case and any processing is completely powered by the
                  Payment Processing providers above.
                </p>
                <p>Device data:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    operating system type and version number, manufacturer and
                    model;
                  </li>
                  <li>browser type;</li>
                  <li>screen resolution;</li>
                  <li>IP address;</li>
                  <li>unique device identifiers.</li>
                </ol>
                <p>Service data:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    the website you visited before browsing to the Forescribe
                    Services;
                  </li>
                  <li>how long you spent on a page or screen;</li>
                  <li>how you interact with our emails;</li>
                  <li>navigation paths between pages or screens;</li>
                  <li>date and time;</li>
                  <li>pages viewed;</li>
                  <li>links clicked.</li>
                </ol>
                <p>Third party source data:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    profile information gathered from social networking sites;
                  </li>
                  <li>
                    information that you have viewed or interacted with our
                    content;
                  </li>
                  <li>company information;</li>
                  <li>job titles;</li>
                  <li>avatars;</li>
                  <li>email addresses;</li>
                  <li>phone numbers;</li>
                  <li>addresses;</li>
                  <li>employee profiles;</li>
                  <li>authorized app names;</li>
                  <li>approximate geolocation data.</li>
                </ol>
                <p>
                  The sources of this third party personal data may include:
                </p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>contact enrichment and lead generation providers;</li>
                  <li>targeted online advertising providers</li>
                  <li>
                    Identity and integration providers i.e. Google, Microsoft
                    and the likes
                  </li>
                </ol>
                <p>
                  We may collect the following personal data about our office
                  visitors:
                </p>
                <p>Registration, contact and company information:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>first and last names;</li>
                  <li>email addresses;</li>
                  <li>phone numbers;</li>
                  <li>company name;</li>
                </ol>
                <p>Visitation Data</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>time and date of arrival;</li>
                  <li>photograph ID;</li>
                  <li>signature;</li>
                  <li>CCTV footage.</li>
                </ol>
                <p>
                  We may collect the following personal data about event
                  attendees:
                </p>
                <p>Registration, contact and company information:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>first and last names;</li>
                  <li>email addresses;</li>
                  <li>phone numbers;</li>
                  <li> mailing addresses;</li>
                  <li> company name;</li>
                  <li> your role in your company.</li>
                  <li>Visitation Data</li>
                  <li> time and date of arrival;</li>
                  <li> photograph ID;</li>
                  <li> signature;</li>
                  <li> CCTV footage.</li>
                </ol>
                <p>Third party source data:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>first and last names;</li>
                  <li>email addresses;</li>
                  <li>phone numbers;</li>
                  <li>mailing addresses;</li>
                  <li>company name;</li>
                  <li>your role in your company.</li>
                </ol>
                <p>
                  The sources of this third party personal data may include:
                </p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>The event organizer</li>
                </ol>
                <p>
                  We may collect the following personal data about our customers
                  and end-users (to the extent applicable):
                </p>
                <p>Registration and contact information:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>first and last names</li>
                  <li>email addresses</li>
                  <li>phone numbers</li>
                  <li>mailing addresses</li>
                  <li>company name</li>
                  <li>your role in your company</li>
                </ol>
                <p>Payment information:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>credit card information</li>
                  <li>billing and mailing addresses</li>
                  <li>other payment-related information</li>
                </ol>
                <p>Device data:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    operating system type and version number, manufacturer and
                    model
                  </li>
                  <li>browser type and language</li>
                  <li>screen resolution</li>
                  <li>IP address</li>
                  <li>unique device identifiers</li>
                </ol>
                <p>Service data:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    the website you visited before browsing to the services
                  </li>
                  <li>how long you spent on a page or screen</li>
                  <li>navigation paths between pages or screens</li>
                  <li>
                    session date and time; activity status (including first
                    seen, last seen, last heard from - and last contacted)
                  </li>
                  <li>pages viewed</li>
                  <li>links clicked</li>
                  <li>language preferences</li>
                  <li>tags applied within customer accounts</li>
                  <li>Forescribe assigned user identifier</li>
                </ol>
                <p>Third party source data:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    profile information gathered from social networking sites
                  </li>
                  <li>
                    information that you have viewed or interacted with our
                    content
                  </li>
                  <li>company information</li>
                  <li>job titles</li>
                  <li>avatars</li>
                  <li>email addresses</li>
                  <li>phone number</li>
                  <li>approximate geolocation data</li>
                </ol>
                <p>
                  The sources of this third party personal data may include:
                </p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    Our identity resolution and insight management provider; and
                  </li>
                  <li>Our geolocation IP intelligence provider</li>
                </ol>
                <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  2.2 COOKIES AND OTHER TRACKING TECHNOLOGIES
                </h3>
                <p>
                  Some device data, service data and third party source data is
                  collected through the use of first or third party cookies and
                  similar technologies. Forescribe does not collect, retain, or
                  share data regarding a particular user's activity across
                  multiple websites or applications that are not owned by
                  Forescribe. Forescribe does assign each user a unique user ID
                  within the scope of an individual website, but does not
                  collect or retain IP or any information that would allow
                  Forescribe to identify the same particular user on more than
                  one website.
                </p>
                <p className="mb-10">
                  <strong>Do Not Track.</strong> Some Internet browsers may be
                  configured to send "Do Not Track" signals to the online
                  services that you visit. We currently do not respond to "Do
                  Not Track" or similar signals. To find out more about "Do Not
                  Track," please visit{" "}
                  <a href="http://www.allaboutdnt.com" className="nav-link">
                    http://www.allaboutdnt.com
                  </a>{" "}
                  .
                </p>
                <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  3. HOW AND WHY WE USE YOUR PERSONAL DATA
                </h3>
                <p>
                  3.1 We collect and process your personal data for the
                  following purposes and, if you are from the European Economic
                  Area (EEA), the UK or Switzerland, on the following legal
                  bases:
                </p>
                <ol className="mb-10 list-disc list-outside space-y-3 ml-12">
                  <li>
                    <strong>
                      Providing and facilitating delivery of the Forescribe
                      Services and Sites:
                    </strong>{" "}
                    We process your personal data to perform our contract with
                    you for use of our Services and Sites and to fulfill our
                    obligations under applicable terms of service. Where we have
                    not entered into a contract with you, we process your
                    personal data in reliance on our legitimate interests to
                    operate and administer the Forescribe Services and Sites.
                    For example, to create, administer and manage your account.
                  </li>
                  <li>
                    <strong>
                      Communicating with you about the Forescribe Services and
                      providing customer support:
                    </strong>{" "}
                    We may send you service, technical and other administrative
                    messages in reliance on our legitimate interests in
                    administering the Forescribe Services. For example, we may
                    send you messages about the availability or security of the
                    Forescribe Services. We also process your personal data to
                    respond to your comments and questions and to provide
                    customer care and support.
                  </li>
                  <li>
                    <strong>
                      Improving the Forescribe Services and Sites:
                    </strong>{" "}
                    We process your personal data to improve and optimize the
                    Forescribe Services and Sites and to understand how you use
                    the Forescribe Services and Sites, including to monitor
                    usage or traffic patterns and to analyze trends and develop
                    new products, services, features and functionality in
                    reliance on our legitimate interests.
                  </li>
                  <li>
                    <strong>Sending marketing communications:</strong> We
                    process your personal data to send you marketing
                    communications via email, post or SMS about our products,
                    services and upcoming events that might interest you in
                    reliance on our legitimate interests or where we seek your
                    consent. Please see the "Your Privacy Rights and Choices"
                    section below to learn how you can control your marketing
                    preferences.
                  </li>
                  <li>
                    <strong>Registering office visitors:</strong> We process
                    your personal data for security reasons and for the purpose
                    of hosting your visit to the extent such processing is
                    necessary for our legitimate interests in protecting our
                    premises and confidential information against unauthorized
                    access and the safety of our staff and office visitors.
                  </li>
                  <li>
                    <strong>
                      Managing event registrations and attendance:
                    </strong>{" "}
                    We process your personal data to plan and host events for
                    which you have registered or that you attend, including
                    sending related communications to you.
                  </li>
                  <li>
                    <strong>
                      Maintaining security of the Forescribe Services and Sites:
                    </strong>{" "}
                    We process your personal data to control unauthorized use or
                    abuse of the Forescribe Services and Sites, or otherwise
                    detect, investigate or prevent activities that may violate
                    Forescribe policies or applicable laws, in reliance on our
                    legitimate interests to maintain and promote the safety and
                    security of the Forescribe Sites and Services.
                  </li>
                  <li>
                    <strong>Displaying personalized advertisements:</strong> We
                    process your personal data to advertise to you and to
                    provide personalized information, including by serving and
                    managing advertisements on our Sites and on third party
                    sites, in reliance on our legitimate interests to support
                    our marketing activities and advertise our products and
                    services or, where necessary, to the extent you have
                    provided your consent.
                  </li>
                  <li>
                    <strong>
                      Carrying out other legitimate business purposes:
                    </strong>{" "}
                    including invoicing, audits, fraud monitoring and
                    prevention.
                  </li>
                  <li>
                    <strong>Complying with legal obligations:</strong> We
                    process your personal data when cooperating or complying
                    with public and government authorities, courts or regulators
                    in accordance with our obligations under applicable laws and
                    to protect against imminent harm to our rights, property or
                    safety, or that of our users or the public, as required or
                    permitted by law.
                  </li>
                </ol>
                <p>
                  3.2 In certain circumstances, we may collect your personal
                  data on a different legal basis. If we do, or if we use your
                  personal data for purposes that are not compatible with, or
                  are materially different than, the purposes described in this
                  notice or the point of collection, we will explain how and why
                  we use your personal data in a supplementary notice at or
                  before the point of collection. Where we refer to legal bases
                  in this section we mean the legal grounds on which
                  organizations can rely when processing personal data.
                </p>
                <p>
                  3.3 Please note these legal bases only apply to you if you are
                  resident in the EEA, the UK or Switzerland.
                </p>
                <p className="mb-10">
                  3.4 If you have any questions about our legal bases for
                  processing your personal data, please contact us through our
                  Privacy Request Form.
                </p>
                <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  4. SHARING YOUR PERSONAL DATA
                </h3>
                <p>
                  4.1 We may disclose some or all of the personal data we
                  collect to the following third parties:
                </p>
                <p>To Forescribe Group Companies:</p>
                <p>
                  Any such other group companies, as may be added to this list
                  from time to time.
                </p>
                <p>External Service Providers:</p>
                <ol className="mb-10 list-disc list-outside space-y-0 ml-12">
                  <li>
                    Consultants, vendors and AI models or database service
                    providers engaged by us to support our provision of the
                    Forescribe Services and Sites and the operation of our
                    business;
                  </li>
                </ol>
                <p>Advertising Partners:</p>
                <p>
                  Third party advertising companies may use cookies and similar
                  technologies to collect information about your activity on the
                  Forescribe Services and other online services over time to
                  serve you online targeted advertisements, including the
                  companies listed in the third-party cookies section of our
                  Cookie Policy.
                </p>
                <p>Professional Advisors:</p>
                <p>
                  Professional advisors, such as lawyers, auditors and insurers,
                  in the course of the professional services that they render to
                  us.
                </p>
                <p>Compliance with Law Enforcement:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    Comply with applicable laws, lawful requests, and legal
                    process, such as to respond to subpoenas or requests from
                    government authorities;
                  </li>
                  <li>
                    Protect our, your or others’ rights, privacy, safety or
                    property (including by making and defending legal claims);
                  </li>
                  <li>
                    Enforce the terms and conditions that govern the Services;
                    and
                  </li>
                  <li>
                    Prevent, identify, investigate and deter fraudulent,
                    harmful, unauthorized, unethical or illegal activity,
                    including cyberattacks and identity theft.
                  </li>
                </ol>
                <p>Business Transfers:</p>
                <p>
                  Parties to transactions or potential transactions (and their
                  professional advisors) involving a corporate divestiture,
                  merger, consolidation, acquisition, reorganization, sale or
                  other disposition of all or any portion of the business,
                  assets, or equity interests of Forescribe Group Companies
                  (including, as part of a bankruptcy or similar proceeding).
                </p>
                <p>
                  4.2 <strong> Aggregated or anonymized information.</strong> We
                  may also share aggregated or anonymized information with third
                  parties for other purposes. Such information does not identify
                  you individually, but may include usage, viewing and technical
                  information such as the websites you generally use, the
                  configuration of your computer, and performance metrics
                  related to the use of websites which we collect through our
                  technology, products and services. If we are required under
                  applicable law to treat such information as personal data,
                  then we will only disclose it as described above. Otherwise,
                  we may disclose such information for any reason.
                </p>
                <p>
                  4.3 <strong> Third party websites.</strong> The Sites may also
                  contain links to third party websites. This Privacy Policy
                  applies solely to information processed by us. You should
                  contact the relevant third party websites for more information
                  about how your personal data is processed by them.
                </p>
                <h3 className="mt-10  text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  5. RETENTION OF YOUR PERSONAL DATA
                </h3>
                <p>
                  5.1 We retain your personal data only for as long as necessary
                  to fulfill the purposes set out in this Privacy Policy.
                </p>
                <p>
                  5.2 Note that content you post may remain on the Sites even if
                  you cease using the Sites or we terminate access to the Sites.
                </p>
                <h3 className="mt-10  text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  6. TRANSFERS OF YOUR PERSONAL DATA
                </h3>
                <p>
                  6.1 The Forescribe Services and Sites, and domains are
                  provided and hosted in the United States. If you are located
                  outside the United States, we may transfer, and process, your
                  personal data outside of the country in which you are resident
                  to other Forescribe Group Companies and our service providers
                  including to, India, Ireland, the UK, Australia and other such
                  countries as we deem appropriate from time to time. These
                  countries may not have equivalent privacy and data protection
                  laws (and, in some cases, may not be as protective). We will
                  protect your personal data in accordance with this Privacy
                  Policy wherever it is processed.
                </p>
                <p>
                  6.2 Certain recipients (our service providers and other
                  companies) who process your personal data on our behalf may
                  also transfer personal data outside the country in which you
                  are resident. Where such transfers occur, we will make sure
                  that an appropriate transfer agreement is put in place to
                  protect your personal data.
                </p>
                <p>
                  6.3 If you are a resident of the EEA, India, the UK or
                  Switzerland, we will protect your personal data when it is
                  transferred outside of the EEA, the UK or Switzerland by
                  processing it in a territory which the European Commission has
                  determined provides an adequate level of protection for
                  personal data; or otherwise ensuring appropriate safeguards
                  are in place to protect your personal data. For transfers of
                  your personal data to:
                </p>
                <ol className="mb-10 list-disc list-outside space-y-3 ml-12">
                  <li>
                    Forescribe Group Companies based in the US, if any, we rely
                    on the EU-U.S. Data Privacy Framework (“EU-U.S. DPF”), the
                    UK Extension to the EU-U.S. DPF (“UK-U.S. DPF”), and the
                    Swiss-U.S. Data Privacy Framework (“Swiss-U.S. DPF”) as set
                    forth by the U.S. Department of Commerce. To learn more
                    about the Data Privacy Framework (“DPF”) program, and to
                    view our certification, please visit
                    https://www.dataprivacyframework.gov/;
                  </li>
                  <li>
                    other Forescribe Group Companies based outside of the US, we
                    rely on Standard Contractual Clauses; and
                  </li>
                  <li>
                    recipients who are located outside of the EEA, the UK or
                    Switzerland, we rely on the EU-U.S. DPF, UK-U.S. DPF or
                    Swiss-U.S. DPF where those recipients are located in the US
                    or for onward transfers from the US, and otherwise we rely
                    on Standard Contractual Clauses.
                  </li>
                </ol>
                <p>
                  6.4 Forescribe’s use and transfer of information received from
                  Google APIs to any other app will adhere to{" "}
                  <a
                    target="_blank"
                    className="nav-link hover:underline"
                    href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements. Forescribe Mobile
                  App, if any, distributed on Google Play are also subject to
                  the{" "}
                  <a
                    target="_blank"
                    className="nav-link hover:underline"
                    href="https://play.google.com/about/developer-distribution-agreement.html"
                  >
                    Google Play Developer Distribution Agreement
                  </a>
                  .
                </p>
                <h3 className="mt-10   text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  7. HOW WE STORE AND SAFEGUARD PERSONAL DATA
                </h3>
                <p>
                  We care about protecting personal data. That is why we put in
                  place appropriate measures that are designed to secure your
                  personal data.
                </p>
                <h3 className="mt-10   text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  8. YOUR PRIVACY RIGHTS AND CHOICES
                </h3>
                <p>
                  8.1 Depending on your location and subject to applicable laws,
                  you may have certain data protection rights. If you are a
                  resident of the EEA or the UK you have the following data
                  protection rights:
                </p>
                <ol className="mb-10 list-disc list-outside space-y-3 ml-12">
                  <li>
                    If you wish to access, correct, update or request deletion
                    of your personal data, you can do so at any time.
                  </li>
                  <li>
                    You can object to processing of your personal data, ask us
                    to restrict processing of your personal data or request
                    portability of your personal data.
                  </li>
                  <li>
                    You have the right to opt-out of marketing communications we
                    send you at any time. If you no longer wish to receive our
                    newsletter and promotional communications, you may opt-out
                    of receiving them by clicking on the "unsubscribe" or
                    "opt-out" link in the communications we send you. Please
                    note, however, that it may not be possible to opt-out of
                    certain service-related communications. You can let us know
                    at any time if you do not wish to receive marketing messages
                    by contacting us on the Forescribe Messenger or by
                    contacting us using the contact details below.
                  </li>
                  <li>
                    Similarly, if we have collected and process your personal
                    data with your consent, then you can withdraw your consent
                    at any time. Withdrawing your consent will not affect the
                    lawfulness of any processing we conducted prior to your
                    withdrawal, nor will it affect processing of your personal
                    data conducted in reliance on lawful processing grounds
                    other than consent.
                  </li>
                  <li>
                    You have the right to complain to a data protection
                    authority about our collection and use of your personal
                    data. For more information, please contact your local data
                    protection authority. Contact details for data protection
                    authorities in the EEA and the UK are available here.
                  </li>
                </ol>
                <p>
                  8.2 You can exercise any of these rights by submitting a
                  request through{" "}
                  <a
                    className="nav-link hover:underline"
                    href="mailto:privacy@forescribe.ai"
                  >
                    {" "}
                    privacy@forescribe.ai
                  </a>
                  .
                </p>
                <p>
                  8.3 If you are a California resident, you can find information
                  about how we use your personal data and about your privacy
                  rights in Section 12 of this notice.
                </p>
                <p>
                  8.4 You can also exercise control over the following uses of
                  your information:
                </p>
                <p>
                  Opt-Outs. We will provide you with an opportunity to opt-out
                  of having personal data used for certain purposes when we ask
                  for this information. If you decide to opt-out, we may not be
                  able to provide certain features of our offerings. You can
                  revoke your consent at any point by contacting us using the
                  Reach out link in the footer of this page or through{" "}
                  <a
                    className="nav-link hover:underline"
                    href="mailto:privacy@forescribe.ai"
                  >
                    {" "}
                    privacy@forescribe.ai
                  </a>
                  .
                </p>
                <h3 className="mt-10   text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  9. CHILDREN'S PRIVACY
                </h3>
                <p>
                  Our Services and Sites are not intended for use by anyone
                  under the age of 16. Forescribe does not knowingly collect
                  personal data from anyone under the age of 16. If you are
                  under 16, you may not attempt to register for our Services or
                  send any information about yourself to us, including your
                  name, address, telephone number, or email address. If we
                  become aware that we have collected personal data from someone
                  under the age of 16 without verification of parental consent,
                  we will delete that information promptly. If you are a parent
                  or legal guardian of a child under 16 and believe that a child
                  has provided us with their personal data, please contact us at
                  the email or mailing address provided at the end of this
                  Privacy Policy.
                </p>
                <h3 className="mt-10   text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  10. CHANGES TO THIS NOTICE AND QUESTIONS
                </h3>
                <p>
                  10.1 We may amend this Privacy Policy from time to time in
                  response to changing legal, technical or business
                  developments. When we update it, we will take appropriate
                  measures to inform you, consistent with the significance of
                  the changes we make. If we make material updates to this
                  Privacy Policy we will update the effective date at the top of
                  the Privacy Policy.
                </p>
                <p>
                  10.2 If you have any questions, comments or concerns about
                  this Privacy Policy or the way your personal data is being
                  used or processed by Forescribe, please submit any questions,
                  comments or concerns using the Reach out link in the footer of
                  this page.
                </p>
                <h3 className="mt-10   text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                  11. COLLECTION AND USE OF PERSONAL DATA OF CALIFORNIA
                  RESIDENTS
                </h3>
                <p>11.1 SCOPE</p>
                <p>
                  Except as otherwise provided, this Section 12 applies only if
                  you are a California resident. For purposes of this section,
                  "Personal Information" has the meaning given in the California
                  Consumer Privacy Act ("CCPA"), the California Privacy Rights
                  Act of 2020 ("CPRA"), and any regulations promulgated under
                  either law, in each case, as amended from time to time.
                </p>
                <p>This Section 12 does not apply to;</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>information exempted from the scope of the CCPA;</li>
                  <li>
                    activities governed by a different privacy notice, such as
                    notices we give to California personnel or job candidates;
                    or
                  </li>
                  <li>
                    Personal Information we collect, use, and share on behalf of
                    our customers as a "service provider" under the CCPA.
                  </li>
                </ol>
                <p>11.2 YOUR CALIFORNIA PRIVACY RIGHTS</p>
                <p>You have the following rights:</p>
                <ol className="mb-10 list-disc list-outside space-y-1 ml-12">
                  <li>
                    Right to Information/Know You can request whether we have
                    collected your Personal Information, and in certain cases,
                    the following information about how we have collected and
                    used your Personal Information during the past 12 months:
                  </li>
                  <li>
                    The categories of Personal Information we have collected.
                  </li>
                  <li>
                    The categories of sources from which we collected the
                    Personal Information.
                  </li>
                  <li>
                    The business or commercial purpose for collecting, sharing,
                    and/or selling Personal Information.
                  </li>
                  <li>
                    The categories of Personal Information that we sold or
                    disclosed for a business purpose
                  </li>
                  <li>
                    The categories of third parties to whom Personal Information
                    was sold, shared, or disclosed for a business purpose.
                  </li>
                  <li>
                    Right to Access. You can request a copy of the Personal
                    Information that we have collected about you during the past
                    12 months.
                  </li>
                  <li>
                    Right to Correction. You can request that we correct
                    inaccurate Personal Information that we have collected about
                    you.
                  </li>
                  <li>
                    Right to Deletion. You can ask us to delete the Personal
                    Information that we have collected from you.
                  </li>
                  <li>
                    Right to Opt-Out of Tracking for Targeted Advertising
                    Purposes. While we do not sell Personal Information for
                    money, like many companies, we use services that help
                    deliver targeted ads (also known as interest-based ads) to
                    you, as we have described in the “How and Why We Use Your
                    Personal Data” section above. The CCPA classifies our use of
                    some of these services as “sharing” your Personal
                    Information with the advertising partners that provide the
                    services, from which you have the right to opt-out.
                  </li>
                  <li>
                    Right to Nondiscrimination. You are entitled to exercise the
                    rights described above free from discrimination prohibited
                    by the CCPA.
                  </li>
                </ol>
                <p>11.3 HOW TO EXERCISE YOUR RIGHTS</p>
                <ol className="mb-10 list-disc list-outside space-y-3 ml-12">
                  <li>
                    Right to Information/Know, Access, Correction, and Deletion.
                    You can exercise any of these rights by submitting a request
                    through
                    <a
                      className="nav-link hover:underline"
                      href="mailto:privacy@forescribe.ai"
                    >
                      {" "}
                      privacy@forescribe.ai
                    </a>
                    .
                  </li>
                  <li>
                    Right to Opt-Out of Tracking for Targeted Advertising
                    Purposes. You can submit requests to opt-out of tracking for
                    targeted advertising purposes by using our Cookie Management
                    Center. Your request to opt-out will apply only to the
                    browser and the device from which you submit the request.
                  </li>
                </ol>
                <p>
                  <strong>Verification of Identity.</strong> We will need to
                  verify your identity to process your information/know, access,
                  correction, and deletion requests and reserve the right to
                  confirm your California residency. To verify your identity, we
                  may require you to log into an Forescribe online account (if
                  applicable), provide government identification, give a
                  declaration as to your identity under penalty of perjury,
                  and/or provide additional information. These rights are not
                  absolute, and in some instances, we may decline your request
                  as permitted by law.
                </p>
                <p>
                  <strong>Authorized Agents.</strong> Your authorized agent may
                  make a request on your behalf upon our verification of the
                  agent's identity and our receipt of a copy of the valid power
                  of attorney given to your authorized agent pursuant to
                  California Probate Code Sections 4000-4465. If you have not
                  provided your agent with such a power of attorney, you must
                  provide your agent with written and signed permission to
                  exercise your CCPA rights on your behalf, provide the
                  information we request to verify your identity and provide us
                  with written confirmation that you have given the authorized
                  agent permission to submit the request.
                </p>
                <p>
                  11.4 PERSONAL INFORMATION THAT WE COLLECT, USE AND DISCLOSE
                </p>
                <p>
                  The table below describes our Personal Information practices
                  by reference to the categories in the “Personal Data Collected
                  by Forescribe” section above and the categories described in
                  the CCPA (Cal. Civ. Code Section 1798.140(v)) and describes
                  our practices currently and during the 12 months preceding the
                  effective date of this Privacy Policy. Information you
                  voluntarily provide to us, such as in free-form webforms, may
                  contain other categories of personal information not described
                  below. Note that:
                </p>
                <ol className="mb-10 list-disc list-outside space-y-3 ml-12">
                  <li>
                    We do not “sell” personal information as defined by the CCPA
                    and have not sold Personal Information in the preceding 12
                    months.
                  </li>
                  <li>
                    We do not use or disclose sensitive personal information for
                    purposes that California residents have a right to limit
                    under the CCPA.
                  </li>
                </ol>
                <div className="scroll-x-auto overflow-hidden">
                  <div className="scroll-x-auto overflow-x-auto rounded-xl border border-gray-200">
                    <table className="min-w-full border-collapse dark:text-white text-sm text-[#2b2853]">
                      {/* Table Header */}
                      <thead className="bg-[#8b3dff]/10 dark:bg-[#8b3dff]/25 text-[#19154E] dark:text-white text-left">
                        <tr>
                          <th className="p-4 font-semibold border-b border-gray-200 w-1/4 align-top">
                            <p className="mb-1">CCPA Statutory Category</p>
                            <p className="text-sm font-normal">
                              Personal Information (“PI”) we collect in this
                              category
                            </p>
                          </th>
                          <th className="p-4 font-semibold border-b border-gray-200 w-1/4 align-top">
                            Business / Commercial Purpose for Collection
                          </th>
                          <th className="p-4 font-semibold border-b border-gray-200 w-1/4 align-top">
                            Categories of Third Parties to Whom We “Disclose” PI
                            for a Business Purpose
                          </th>
                          <th className="p-4 font-semibold border-b border-gray-200 w-1/4 align-top">
                            Categories of Third Parties with Whom We “Share” PI
                          </th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        <tr className="hover:bg-[#8b3dff]/5 transition-colors">
                          <td className="align-top p-4 border-b border-gray-100">
                            <p className="mb-2 font-semibold">Identifiers</p>
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Registration, contact, and company information
                              </li>
                              <li>Visitation data</li>
                              <li>Third party source data</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Providing and facilitating delivery of the
                                Forescribe Services and Sites
                              </li>
                              <li>
                                Communicating with you about the Forescribe
                                Services and providing customer support
                              </li>
                              <li>
                                Improving the Forescribe Services and Sites
                              </li>
                              <li>Sending marketing communications</li>
                              <li>Registering office visitors</li>
                              <li>
                                Managing event registrations and attendance
                              </li>
                              <li>
                                Maintaining security of the Forescribe Services
                                and Sites
                              </li>
                              <li>Displaying personalized advertisements</li>
                              <li>
                                Carrying out other legitimate business purposes
                              </li>
                              <li>Complying with legal obligations</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Forescribe group companies</li>
                              <li>Service providers</li>
                              <li>Advertising partners</li>
                              <li>Professional advisors</li>
                              <li>Authorities and others</li>
                              <li>Business transferees</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            Advertising partners (to facilitate online
                            advertising)
                          </td>
                        </tr>

                        <tr className="hover:bg-[#8b3dff]/5 transition-colors">
                          <td className="align-top p-4 border-b border-gray-100">
                            <p className="mb-2 font-semibold">
                              Professional or Employment-Related Data
                            </p>
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Registration, contact, and company information
                              </li>
                              <li>Third party source data</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Providing and facilitating delivery of the
                                Forescribe Services and Sites
                              </li>
                              <li>
                                Communicating with you about the Forescribe
                                Services and providing customer support
                              </li>
                              <li>
                                Improving the Forescribe Services and Sites
                              </li>
                              <li>Sending marketing communications</li>
                              <li>Registering office visitors</li>
                              <li>
                                Managing event registrations and attendance
                              </li>
                              <li>Displaying personalized advertisements</li>
                              <li>
                                Carrying out other legitimate business purposes
                              </li>
                              <li>Complying with legal obligations</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Forescribe group companies</li>
                              <li>Service providers</li>
                              <li>Advertising partners</li>
                              <li>Professional advisors</li>
                              <li>Authorities and others</li>
                              <li>Business transferees</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            Advertising partners (to facilitate online
                            advertising)
                          </td>
                        </tr>

                        <tr className="hover:bg-[#8b3dff]/5 transition-colors">
                          <td className="align-top p-4 border-b border-gray-100">
                            <p className="mb-2 font-semibold">
                              Financial Information
                            </p>
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Payment information</li>
                              <li>Accounting information</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Providing and facilitating delivery of the
                                Forescribe Services and Sites
                              </li>
                              <li>
                                Carrying out other legitimate business purposes
                              </li>
                              <li>Complying with legal obligations</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Forescribe group companies</li>
                              <li>Service providers</li>
                              <li>Professional advisors</li>
                              <li>Authorities and others</li>
                              <li>Business transferees</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            None
                          </td>
                        </tr>

                        <tr className="hover:bg-[#8b3dff]/5 transition-colors">
                          <td className="align-top p-4 border-b border-gray-100">
                            <p className="mb-2 font-semibold">
                              Internet or Network Information
                            </p>
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Device data</li>
                              <li>Service data</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Providing and facilitating delivery of the
                                Forescribe Services and Sites
                              </li>
                              <li>
                                Communicating with you and providing support
                              </li>
                              <li>
                                Improving the Forescribe Services and Sites
                              </li>
                              <li>Sending marketing communications</li>
                              <li>Maintaining security</li>
                              <li>Displaying personalized advertisements</li>
                              <li>Carrying out legitimate business purposes</li>
                              <li>Complying with legal obligations</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Forescribe group companies</li>
                              <li>Service providers</li>
                              <li>Advertising partners</li>
                              <li>Professional advisors</li>
                              <li>Authorities and others</li>
                              <li>Business transferees</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            Advertising partners (to facilitate online
                            advertising)
                          </td>
                        </tr>

                        <tr className="hover:bg-[#8b3dff]/5 transition-colors">
                          <td className="align-top p-4 border-b border-gray-100">
                            <p className="mb-2 font-semibold">
                              Sensory Information
                            </p>
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Registration, contact, and company information
                              </li>
                              <li>Visitation data</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Providing and facilitating delivery of the
                                Forescribe Services and Sites
                              </li>
                              <li>Registering office visitors</li>
                              <li>
                                Managing event registrations and attendance
                              </li>
                              <li>Carrying out legitimate business purposes</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Forescribe group companies</li>
                              <li>Service providers</li>
                              <li>Professional advisors</li>
                              <li>Authorities and others</li>
                              <li>Business transferees</li>
                            </ul>
                          </td>
                          <td className="align-top p-4 border-b border-gray-100">
                            None
                          </td>
                        </tr>

                        <tr className="hover:bg-[#8b3dff]/5 transition-colors">
                          <td className="align-top p-4">
                            <p className="mb-2 font-semibold">Inferences</p>
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Data derived from the above categories</li>
                            </ul>
                          </td>
                          <td className="align-top p-4">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>
                                Providing and facilitating delivery of the
                                Forescribe Services and Sites
                              </li>
                              <li>
                                Improving the Forescribe Services and Sites
                              </li>
                              <li>Sending marketing communications</li>
                              <li>Displaying personalized advertisements</li>
                              <li>Carrying out legitimate business purposes</li>
                            </ul>
                          </td>
                          <td className="align-top p-4">
                            <ul className="list-disc list-outside pl-6 space-y-1">
                              <li>Forescribe group companies</li>
                              <li>Service providers</li>
                              <li>Advertising partners</li>
                              <li>Professional advisors</li>
                              <li>Authorities and others</li>
                              <li>Business transferees</li>
                            </ul>
                          </td>
                          <td className="align-top p-4">
                            Advertising partners (to facilitate online
                            advertising)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            <div className="w-full py-5 flex justify-center items-center">
              <GoBackButton />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default PrivacyPolicies