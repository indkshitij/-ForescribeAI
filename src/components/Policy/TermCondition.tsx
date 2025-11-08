"use client";
import { motion } from "framer-motion";
import ForescribeLogo from "@/components/Branding/ForescribeLogo";
import DarkModeToggler from "@/components/DarkMode/DarkModeToggler";
import GoBackButton from "@/components/Buttons/GoBackButton";

const TermCondition = () => {
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
        <div className="min-h-screen relative overflow-y-auto dark:bg-[#1c1b3a]  text-[#19154E]">
          <div className="pt-6 sm:pt-12 pb-16 px-4 sm:px-12 md:px-20 lg:px-60 leading-relaxed">
            <div className="gap-2 flex flex-col sm:flex-row justify-between items-center pb-3 mb-8 transition-colors duration-300 ">
              <ForescribeLogo color={"#8b3dff"} />

              <h1 className="h-full text-3xl sm:text-3xl font-semibold text-[#19154E] dark:text-[#E2DAFF] transition-colors duration-300">
                Terms Of Service
              </h1>
            </div>

            <div className="flex flex-col  gap-5 text-justify text-sm dark:text-white">
              <p className="">
                These Forescribe Terms of Service (the “
                <strong>Agreement</strong>
                ") are entered into by and between the Forescribe entity set
                forth below (“<strong>Forescribe</strong>") and the entity or
                person placing an order for, or accessing, any Services (“
                <strong>Customer”</strong> or “<strong>you</strong>"). If you
                are accessing or using the Services on behalf of your company,
                you represent that you are authorized to accept this Agreement
                on behalf of your company, and all references to “you” or
                “Customer” reference your company.
              </p>
              <p>
                This Agreement permits Customer to purchase subscriptions to
                online software-as-a-service products and other services from
                Forescribe pursuant to Order Form(s) (defined below) and sets
                forth the terms and conditions under which those products and
                services will be provided.
              </p>
              <p>
                The “<strong>Effective Date</strong>” of this Agreement is the
                date that is the earlier of: (a) Customer's initial access to
                any Services (as defined below) through any online provisioning,
                registration or order process or (b) the effective date of the
                first Order Form referencing this Agreement.
              </p>
              <p>
                As used in this Agreement, “Forescribe” means (a) Innoveer
                Ventures Private Limited., a India corporation with offices at
                M853, 2nd Floor, Mayfield Gardens, Sector 51, Gurugram -
                Haryana, IN, when Customer's shipping address on the applicable
                Order Form is located anywhere in the world.
              </p>
              <p>
                <strong>Modifications to this Agreement:</strong> From time to
                time, Forescribe may modify this Agreement. Unless otherwise
                specified by Forescribe, changes become effective for Customer
                upon renewal of Customer's current Subscription Term (as defined
                below), or entry into a new Order Form. Forescribe will use
                reasonable efforts to notify Customer of the changes through
                communications via Customer's account, email or other means.
                Customer may be required to click to accept or otherwise agree
                to the updated Agreement before renewing a Subscription Term or
                entering into a new Order Form, but in any event continued use
                of the Services after the updated version of this Agreement goes
                into effect will constitute Customer's acceptance of such
                updated version. If Forescribe specifies that changes to the
                Agreement will take effect prior to Customer's next renewal or
                new Order Form (such as for legal compliance, product or pricing
                change reasons) and Customer objects to such changes, Customer
                may terminate the applicable Subscription Term on notice in
                writing to Forescribe and receive as its sole remedy a refund of
                any fees Customer has pre-paid for use of the applicable
                Services for the terminated portion of the Subscription Term,
                commencing on the date notice of termination was received.
              </p>
              <p className="mb-10">
                <strong>
                  BY INDICATING YOUR ACCEPTANCE OF THIS AGREEMENT OR ACCESSING
                  OR USING ANY SERVICES, YOU ARE AGREEING TO BE BOUND BY ALL
                  TERMS, CONDITIONS, AND NOTICES CONTAINED OR REFERENCED IN THIS
                  AGREEMENT. IF YOU DO NOT AGREE TO THIS AGREEMENT, PLEASE DO
                  NOT USE ANY SERVICES. FOR CLARITY, EACH PARTY EXPRESSLY AGREES
                  THAT THIS AGREEMENT IS LEGALLY BINDING UPON IT. THIS AGREEMENT
                  CONTAINS MANDATORY ARBITRATION PROVISIONS THAT REQUIRE THE USE
                  OF ARBITRATION TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS.
                  PLEASE READ IT CAREFULLY.
                </strong>
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                1. Definitions
              </h3>

              <p>
                “<strong>Affiliate</strong>” means any entity under the control
                of Customer where “control” means ownership of or the right to
                control greater than 50% of the voting securities of such
                entity.
              </p>
              <p>
                “<strong>AUP</strong>” means Forescribe's Acceptable Use Policy,
                available at{" "}
                <a target="_blank" className="nav-link" href="/legal">
                  https://forescribe.ai/legal
                </a>{" "}
                or a successor URL, incorporated into these terms by this
                reference.
              </p>
              <p>
                “<strong>Beta Offerings</strong>” means pre-release services,
                features, or functions identified as alpha, beta, preview, early
                access, or words or phrases with similar meanings.
              </p>
              <p>
                “<strong>Contractor</strong>” means an independent contractor or
                consultant.
              </p>
              <p>
                “<strong>Customer Data</strong>” means any data, content or
                other information of any type that is submitted to the Services
                by or on behalf of Customer, including without limitation: (a)
                data, content or other information submitted, uploaded,
                instructed to be used for or imported to the Services by
                Customer (including from Third Party Platforms) and (b) data,
                content or other information provided by or about People
                (including message logs) that are collected from the Customer
                Properties using the Services. “Customer Data” does not include
                data derived from Customer Data and held in a statistical,
                anonymized, or aggregated form (“
                <strong>Aggregated Data</strong>”). For purposes of clarity,
                Aggregated Data will not contain data attributable to a
                particular Customer or User.
              </p>
              <p>
                “<strong>Benchmark Data</strong>” means statistical, system,
                usage, configuration and other data regarding the Customer’s
                compliance with the Agreement and Customer’s usage of the
                Services that: (i) does not specifically identify Customer,
                Users, or Customer’s customers; and (ii) does not consist of any
                of Customer Data, provided, however, that Customer shall not
                consider statistical, anonymized, “Aggregated Data” part of
                Customer Data.
              </p>
              <p>
                “<strong>Customer Properties</strong>” means Customer's
                websites, apps, or other offerings owned and operated by (or for
                the benefit of) Customer through which Customer uses the
                Services to communicate with People.
              </p>
              <p>
                “<strong>Dashboard</strong>” means Forescribe's user interface
                for accessing and administering the Services that Customer may
                access via the web or the Forescribe Apps.
              </p>
              <p>
                “<strong>Documentation</strong>” means the technical user
                documentation provided with the Services.
              </p>
              <p>
                “<strong>Feedback</strong>” means comments, questions,
                suggestions or other feedback relating to any Forescribe product
                or service, including, without limitation, integrations with
                Third Party Apps. Feedback does not include any Customer Data.
              </p>
              <p>
                “<strong>Intellectual</strong> Property Rights” include all
                valid patents, trademarks, copyrights, trade secrets, moral
                rights, and other intellectual property rights, as may exist now
                or hereafter come into existence, and all renewals and
                extensions thereof, and all improvements to any of the
                foregoing, regardless of whether any of such rights arise under
                the laws of any state, country or other jurisdiction.
              </p>
              <p>
                “<strong>Forescribe Apps</strong>” means any integrations and
                applications created or developed by Forescribe or its
                Affiliates that are made available in Forescribe or a
                third-party app store as designated by Forescribe.
              </p>
              <p>
                “<strong>Forescribe Code</strong>” means certain JavaScript
                code, software development kits (SDKs), application programming
                interfaces (APIs), other code or libraries provided by
                Forescribe for deployment on Customer Properties.
              </p>
              <p>
                “<strong>Laws</strong>” means all applicable local, state,
                federal and international laws, regulations and conventions,
                including, without limitation, those related to data privacy and
                data transfer, international communications, and the exportation
                of technical or personal data.
              </p>
              <p>
                “<strong>Order Form</strong>” means a written or electronic form
                referencing this Agreement that is used to order the Services,
                including, without limitation, an online registration or payment
                process completed through Forescribe's website. The Order Form
                may contain details about your order, the applicable service
                plan, contracted usage quantity (e.g., seats or other usage
                quantity metric identified in the Order Form) and Subscription
                Term. Upon execution by the parties (or, in the case of
                electronic orders, confirmation and placement of the order),
                each Order Form will be subject to the terms and conditions of
                this Agreement.
              </p>
              <p>
                “<strong>People</strong>” (in the singular, “Person") means
                Customer's end user customers, potential end user customers, and
                other users of and visitors to the Customer Properties.
              </p>
              <p>
                “<strong>Permitted User</strong>” means an employee or
                Contractor of Customer or its Affiliate who is authorized to
                access the Service.
              </p>
              <p>
                “<strong>Sensitive Personal Information</strong>” means any of
                the following: (i) credit, debit or other payment card data
                subject to the Payment Card Industry Data Security Standards
                (“PCI DSS"); (ii) patient, medical or other protected health
                information regulated by the Health Insurance Portability and
                Accountability Act (“HIPAA") not authorized or covered by a duly
                executed Business Associate Agreement with Forescribe; or (iii)
                any other personal data of an EU citizen deemed to be in a
                “special category” (as identified in EU General Data Protection
                Regulation or any successor directive or regulation).
              </p>
              <p>
                “<strong>Services</strong>” means Forescribe's proprietary
                software-as-a-service solution(s), including the Dashboard,
                Forescribe Code and Forescribe Apps and, if applicable, those
                services and features covered by the Additional Product Terms,
                if any, as described in the applicable Order Form.
              </p>
              <p>
                “<strong>Taxes</strong>” means any sales, use, GST, value-added,
                withholding, or similar taxes or levies, whether domestic or
                foreign, other than taxes based on the income of Forescribe.
              </p>
              <p>
                "<strong>Third Party App(s)</strong>” means a separate,
                stand-alone application or service accessible apart from the
                generally available Services to which Customer subscribes. A
                Third Party App allows Customer to integrate Customer's
                Forescribe account(s) with Customer's Third Party App services
                account(s).
              </p>
              <p className="mb-10">
                "<strong>Third-Party Platform(s)</strong>” means any software,
                software-as-a-service, data sources or other products or
                services not provided by Forescribe that are integrated with or
                otherwise accessible through the Services.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                2. Forescribe Services
              </h3>
              <p>
                2.1. <strong>Services Overview.</strong> Forescribe's Services
                are a suite of SaaS Ops or Infrastructure and Inventory
                Management software-as-a-service solutions offered through an
                online platform. The Services are designed to enable Customer to
                manage online or offline Inventory with People through the
                entire lifecycle of their relationship.
              </p>
              <p>
                2.2. <strong>Provision of Services. </strong>Each Service is
                provided on a subscription basis for a set term designated on
                the Order Form (each, a “Subscription Term"). Customer will
                purchase and Forescribe will provide the specific Services as
                specified in the applicable Order Form.
              </p>
              <p>
                Some Services may be subject to Additional Product Terms, if
                any. By accessing or using a product or feature covered by the
                Additional Product Terms, Customer hereby agrees that their use
                of those Services is governed by the applicable Additional
                Product Terms.
              </p>
              <p>
                2.3. <strong>Access to Services.</strong> Customer may access
                and use the Services solely for its own benefit (and for the
                benefit of People) and in accordance with the terms and
                conditions of this Agreement, the Documentation and any scope of
                use restrictions designated in the applicable Order Form
                (including, without limitation, the usage quantity tracked). Use
                of and access to the Services is permitted only by Permitted
                Users. If Customer is given API keys or passwords to access the
                Services on Forescribe's systems, Customer will require that all
                Permitted Users keep API keys, user ID and password information
                strictly confidential and not share such information with any
                unauthorized person. User IDs and related credentials are
                granted to individual, named persons and may not be shared. If
                Customer is accessing the Services using credentials provided by
                a third party (e.g., Google), then Customer will comply with all
                applicable terms and conditions of such third party regarding
                provisioning and use of such credentials. Customer will be
                responsible for any and all actions taken using Customer's
                accounts and passwords. If any Permitted User who has access to
                a user ID is no longer an employee (or Contractor, as set forth
                below) of Customer, then Customer will promptly delete such user
                ID and otherwise terminate such Permitted User's access to the
                Service. Forescribe reserves the right to suspend access to any
                Services or features (including, without limitation, SaaS Ops
                Management and integrations with Third Party Platforms and Third
                Party Apps) if Customer has exceeded applicable usage limits (if
                any) or if Forescribe otherwise determines, in its sole
                discretion, that Customer is using the applicable Service in a
                manner that has become excessive (e.g., substantially exceeds
                typical use projections or exceeds usage by similar-sized
                customers (where customer size is defined by number of seats),
                including, but not limited to, storage and bandwidth
                consumption) and/or negatively impacts the operability,
                integrity, or security of the Service until usage is reduced to
                reasonable levels, as determined by Forescribe and/or such
                impact is resolved to Forescribe's satisfaction. We may change
                usage limits at any time, in our sole discretion, without
                notice.
              </p>
              <p>
                2.4. <strong>Forescribe Apps.</strong> To the extent Forescribe
                provides Forescribe Apps for use with the Services, subject to
                all of the terms and conditions of this Agreement (unless
                otherwise indicated in the specific Forescribe App), Forescribe
                grants to Customer a limited, non-transferable,
                non-sublicensable, non-exclusive license during any applicable
                Subscription Term to use the object code form of the Forescribe
                Apps internally, but only in connection with Customer's use of
                the Service and otherwise in accordance with the Documentation
                and this Agreement.
              </p>
              <p>
                2.5. <strong>Forescribe Code.</strong> The right to use the
                Services includes the right to deploy Forescribe Code on
                Customer Properties in order to enable Insights, Alerts and
                other functionality and to collect Customer Data for use with
                the Services as further described herein. Subject to all of the
                terms and conditions of this Agreement, Forescribe grants to
                Customer a limited, non-transferable, non-sublicensable,
                non-exclusive license during any applicable Subscription Term to
                copy and implement the Forescribe Code in the form provided by
                Forescribe on Customer Properties solely to support Customer's
                use of the Service and otherwise in accordance with the
                Documentation and this Agreement. Customer must implement
                Forescribe Code on the Customer Properties in order to enable
                the relevant features of the Services. Customer will implement
                all necessary Forescribe Code in strict accordance with the
                Documentation and other instructions provided by Forescribe.
                Customer acknowledges that any changes made to the Customer
                Properties after initial implementation of Forescribe Code may
                cause the Services to cease working or to function improperly
                and that Forescribe will have no responsibility for the impact
                of any such Customer changes.
              </p>
              <p>
                2.6. <strong>Contractors and Affiliates. </strong>Customer may
                permit its employees and Contractors and its Affiliates'
                employees and Contractors to serve as Permitted Users, provided
                Customer remains responsible for compliance by such individuals
                with all of the terms and conditions of this Agreement and any
                use of the Services by such Permitted Users is for the sole
                benefit of Customer.
              </p>
              <p>
                2.7. <strong>General Restrictions.</strong> Customer will not
                (and will not permit any third party to): (a) rent, lease,
                provide access to or sublicense the Services to a third party;
                (b) use the Services to provide, or incorporate the Services
                into, any product or service provided to a third party other
                than the Customer Properties; (c) reverse engineer, decompile,
                disassemble, or otherwise seek to obtain the source code or
                non-public APIs to the Services, except to the extent expressly
                permitted by applicable law (and then only upon advance notice
                to Forescribe); (d) copy or modify the Services or any
                Documentation, or create any derivative work from any of the
                foregoing; (e) remove or obscure any proprietary or other
                notices contained in the Services and/or on any reports or data
                printed from the Services (unless otherwise expressly permitted
                by Forescribe in advance); (f) publicly disseminate information
                regarding the performance of the Services; (g) use the Services
                for competitive analysis purposes; or (h) otherwise violate our
                AUP.
              </p>
              <p>
                2.8. <strong>Forescribe APIs. </strong>If Forescribe makes
                access to any APIs available as part of the Services, Forescribe
                reserves the right to place limits on access to such APIs (e.g.,
                limits on numbers of calls or requests). Further, Forescribe may
                monitor Customer's usage of such APIs and limit the number of
                calls or requests Customer may make if Forescribe believes that
                Customer's usage is in breach of this Agreement or may
                negatively affect the security, operability, or integrity of the
                Services (or otherwise impose liability on Forescribe).
              </p>
              <p>
                2.9. <strong>Trial Subscriptions.</strong> If Customer receives
                free access or a trial or evaluation subscription to the Service
                (a “Trial Subscription"), then Customer may use the Services in
                accordance with the terms and conditions of this Section (and
                any other supplemental trial terms agreed by Customer) for a
                period of seven (7) days or such other period granted by
                Forescribe (the “Trial Period"). Trial Subscriptions are
                permitted solely for Customer's evaluation to determine whether
                to purchase a paid subscription to the Services or an upgrade to
                a service plan. Trial Subscriptions may not include all
                functionality and features accessible as part of a paid
                Subscription Term and may be subject to usage limits. If
                Customer does not enter into a paid Subscription Term prior to
                the expiration of the Trial Period, this Agreement and
                Customer's right to access and use the Services will terminate
                at the end of the Trial Period, except as otherwise set forth
                herein. If stated in the Order Form or Additional Product Terms
                for a specific Service or otherwise communicated in advance by
                Forescribe to Customer, a paid Subscription Term will commence
                automatically once the Trial Period expires, and Customer will
                be charged for any continued use of the Services. Forescribe has
                the right to terminate a Trial Subscription at any time for any
                reason. NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS
                AGREEMENT, Forescribe WILL HAVE NO WARRANTY, INDEMNITY, SUPPORT,
                SERVICE LEVEL AGREEMENT ("SLA"), OR OTHER OBLIGATIONS WITH
                RESPECT TO TRIAL SUBSCRIPTIONS.
              </p>
              <p className="mb-10">
                2.10. <strong>Beta Offerings.</strong> Customer may choose to
                use Beta Offerings in its sole discretion. Use of Beta Offerings
                may be subject to additional terms. Forescribe, in its
                discretion, may offer a Beta Offering with or without charge.
                Forescribe reserves the right to start charging and/or modify
                the pricing for a Beta Offering upon prior written notice to
                Customer. Beta Offerings may be changed at any time without
                notice and may not be maintained and/or become generally
                available. Beta Offerings are to be used for Customer's internal
                testing and evaluation purposes only and are not subject to the
                same security measures specified in the Security Policy.
                Forescribe will have no liability arising out of or in
                connection with Beta Offerings and disclaims any warranty,
                indemnity, support, SLA, or other obligations with respect to
                its Beta Offerings. CUSTOMER USES BETA OFFERINGS “AS IS” AND AT
                ITS OWN RISK.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                3. Customer Data and Customer Obligations
              </h3>
              <p>
                3.1.<strong>Data Processing by Forescribe.</strong> All data
                processing activities carried out as part of the Services will
                be governed by the Data Processing Addendum (“DPA"), available
                at{" "}
                <a href="https://www.forescribe.ai/legal" className="nav-link">
                  https://forescribe.ai/legal
                </a>{" "}
                or a successor URL, incorporated by reference herein.
              </p>
              <p>
                3.2. <strong>Rights in Customer Data.</strong> As between the
                parties, Customer will retain all of Customer's Intellectual
                Property Rights in and to the Customer Data provided to
                Forescribe. Subject to the terms of this Agreement, Customer
                hereby grants to Forescribe a non-exclusive, worldwide,
                royalty-free right to access, use and display the Customer Data
                in order to provide the Services to Customer.
              </p>
              <p>
                3.3. <strong>Storage of Customer Data.</strong> Forescribe does
                not provide an archiving service. Forescribe agrees only that it
                will not intentionally delete any Customer Data from the
                Services prior to termination of Customer's applicable
                Subscription Term and expressly disclaims all other obligations
                with respect to storage.
              </p>
              <p>
                3.4. <strong>Anonymized Data.</strong> Notwithstanding anything
                to the contrary herein, Customer agrees that Forescribe may use:
                certain technical and other data about Customers and People's
                use of the Services; and/or Customer Data, which, in all cases,
                is anonymized to remove any personal data of People (“Benchmark
                Data") to analyze, improve, support and operate the Services
                during and after the term of this Agreement, and Customer agrees
                that Forescribe is permitted to anonymize Customer Data to use
                for the aforementioned purposes.
              </p>
              <p>
                <strong>3.5. Customer Obligations.</strong>
              </p>
              <p>
                {" "}
                a) <strong>In General.</strong> Customer is solely responsible
                for the accuracy, content and legality of all Customer Data.
                Customer represents and warrants to Forescribe that Customer has
                all necessary rights, consents and permissions to collect, share
                and use all Customer Data as contemplated in this Agreement
                (including granting Forescribe the rights under Section 3) and
                that no Customer Data will violate or infringe: (i) any third
                party Intellectual Property Rights or, publicity, privacy, or
                other rights, (ii) any Laws, or (iii) any terms of service,
                privacy or other policies and/or any other agreements governing
                the Customer Properties or Customer's accounts with any
                Third-Party Platforms. Customer will be fully responsible for
                any Customer Data submitted to the Services by any Person as if
                it was submitted by Customer.
              </p>
              <p>
                b) <strong>No Sensitive Personal Information.</strong> Except as
                otherwise expressly agreed between the Parties in writing by
                entering into a business associate agreement for HIPAA data,
                Customer specifically agrees not to use the Services to collect,
                store, process or transmit any Sensitive Personal Information.
                Customer acknowledges that Forescribe is not a payment card
                processor and that the Services are not PCI DSS compliant.
                Except for Forescribe's obligations under any business associate
                agreement entered into with Customer, Customer shall be
                responsible for any Sensitive Personal Information it submits to
                the Service, and Customer acknowledges that Forescribe is not
                subject to any additional obligations that may apply to any
                Sensitive Personal Information submitted to the Services.
              </p>
              <p>
                c) <strong>Compliance with Laws.</strong> Customer agrees to
                comply with all applicable Laws in its use of the Services.
                Without limiting the generality of the foregoing, Customer will
                not engage in any unsolicited advertising, marketing, or other
                activities using the Services, including, without limitation,
                any activities that, to the extent applicable, violate any
                applicable anti-spam laws and regulations.
              </p>
              <p>
                d) <strong>Disclosures on Customer Properties.</strong> Customer
                acknowledges that the Forescribe Code causes a unique cookie ID
                to be associated with each Person who accesses the Customer
                Properties, which cookie ID enables Forescribe to provide the
                Services. Customer will include on each Customer Property a link
                to a privacy policy that discloses Customer's use of third party
                tracking technology to collect data about People and how, and
                for what purposes, the data collected will be used or shared
                with third parties. Customer must also provide People with clear
                and comprehensive information about the storing and accessing of
                cookies or other information on the Peoples' devices where such
                activity occurs in connection with the Services and as required
                by applicable Laws. For clarity, as between Customer and
                Forescribe, Customer will be solely responsible for obtaining
                the necessary clearances, consents and approvals from People
                under all applicable Laws.
              </p>
              <p className="mb-10">
                3.6. <strong>Indemnification by Customer.</strong> Customer will
                indemnify, defend and hold harmless Forescribe from and against
                any and all third party (including, without limitation, People)
                claims, costs, damages, losses, liabilities and expenses
                (including reasonable attorneys' fees and costs) arising from or
                relating to any Customer Data, Customer's use of a Third Party
                App, Third-Party Platform or breach or alleged breach by
                Customer of Section 3.5 (Customer Obligations). This
                indemnification obligation is subject to Customer receiving (i)
                prompt written notice of such claim (but in any event notice in
                sufficient time for Customer to respond without prejudice); (ii)
                the exclusive right to control and direct the investigation,
                defense, or settlement of such claim; and (iii) all necessary
                cooperation of Forescribe at Customer's expense. Notwithstanding
                the foregoing sentence, (a) Forescribe may participate in the
                defense of any claim by counsel of its own choosing, at its cost
                and expense and (b) Customer will not settle any claim without
                Forescribe's prior written consent, unless the settlement fully
                and unconditionally releases Forescribe and does not require
                Forescribe to pay any amount, take any action, or admit any
                liability.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                4. Security
              </h3>
              <p className="mb-10">
                Forescribe agrees to use commercially reasonable technical and
                organizational measures designed to prevent unauthorized access
                to or use of the Services, as described in Forescribe's Security
                Policy attached to the DPA and Security policy available at{" "}
                <a
                  target="_blank"
                  className="nav-link hover:underline"
                  href="https://forescribe.ai/security"
                >
                  https://forescribe.ai/security
                </a>
                . However, Forescribe will have no responsibility for errors in
                transmission, unauthorized third-party access or other causes
                beyond Forescribe's control.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                5. Third-Party Platforms and Third Party Apps
              </h3>
              <p>
                5.1. Integration with Third Party Platforms. The Services may
                support integrations with certain Third-Party Platforms.
                Customer may import and export Customer Data between the
                Services and certain Third-Party Platforms through supported
                integrations. In order for the Services to communicate with such
                Third-Party Platforms, Customer may be required to input
                credentials in order for the Services to access and receive
                relevant information from such Third-Party Platforms. By
                enabling use of the Services with any Third-Party Platform,
                Customer authorizes Forescribe to access Customer's accounts
                with such Third-Party Platform for the purposes described in
                this Agreement. Customer is solely responsible for complying
                with any relevant terms and conditions of the Third-Party
                Platforms and maintaining appropriate accounts in good standing
                with the providers of the Third-Party Platforms. Customer
                acknowledges and agrees that Forescribe has no responsibility or
                liability for any Third-Party Platform, including, without
                limitation, any beta releases or pre-release features of a
                Third-Party Platform, or how a Third-Party Platform uses or
                processes Customer Data after it is exported to such Third-Party
                Platform. Forescribe does not guarantee that the Services will
                maintain integrations with any Third-Party Platform, and
                Forescribe may disable integrations of the Services with any
                Third-Party Platform at any time with or without notice to
                Customer. For clarity, this Agreement governs Customer's use of
                and access to the Services, even if accessed through an
                integration with a Third-Party Platform.
              </p>
              <p className="mb-10">
                5.2. <strong>Third Party Apps.</strong> Customer represents and
                warrants that Customer has agreed to the terms of service
                associated with any Third Party App(s) and has created, or has
                authorized Forescribe to create on Customer's behalf, a Third
                Party App account in accordance with such terms and conditions,
                which govern Customer's use of such Third Party App account.
                Forescribe will have no liability for and the Third Party App
                provider is solely responsible for the Third Party App's
                network, functionality, clients, and APIs.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                6. Ownership
              </h3>
              <p>
                6.1. <strong>Forescribe Technology.</strong> This is a
                subscription agreement for access to and use of the Services.
                Customer acknowledges that it is obtaining only a limited right
                to the Services and that irrespective of any use of the words
                “purchase", “sale” or like terms in this Agreement, no ownership
                rights are being conveyed to Customer under this Agreement.
                Customer agrees that Forescribe or its suppliers retain all
                right, title and interest (including all Intellectual Property
                Rights) in and to the Services and all Documentation,
                integrations with the Services, and any and all related and
                underlying technology and documentation and any derivative
                works, modifications or improvements of any of the foregoing,
                including any Feedback (collectively, “Forescribe Technology").
                Except as expressly set forth in this Agreement, no rights in
                any Forescribe Technology are granted to Customer.
              </p>
              <p className="mb-10">
                6.2. <strong> Feedback. </strong>Customer, from time to time,
                may submit Feedback to Forescribe. Forescribe may freely use or
                exploit Feedback in connection with the Services and Forescribe
                Technology. Customer hereby grants to Forescribe a perpetual,
                non-exclusive, transferable, irrevocable, worldwide,
                royalty-free license (with rights to sublicense) to make, use,
                sell, offer to sell, reproduce, modify, distribute, make
                available, publicly display and perform, disclose and otherwise
                commercially exploit the Feedback.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                7. Subscription Term, Fees &amp; Payment
              </h3>
              <p>
                7.1. <strong>Subscription Term and Renewals.</strong>
              </p>
              <p>
                a) <strong>Monthly Subscription Term.</strong> For a
                month-to-month subscription, the Subscription Term will
                automatically renew on a monthly basis. Each successive contract
                month will be considered a “renewal term.” Customer may cancel a
                month-to-month subscription at any time by going to the
                “Account” page in the Dashboard, and the effective termination
                date will be the last day of the then-current renewal term.
              </p>
              <p>
                b) <strong>Yearly or Multi-Year Subscription Term.</strong> For
                a yearly or multi-year subscription, the initial Subscription
                Term is set forth in the Order Form. The Subscription Term will
                automatically renew for additional, successive twelve month
                periods (each, a “renewal term"), unless either party gives the
                other written notice of intent not to renew at least thirty (30)
                days prior to expiration of the initial Subscription Term or
                then-current renewal term. Customer will send written notice of
                intent not to renew to{" "}
                <a href="mailto:hey@forescribe.ai" className="nav-link">
                  {" "}
                  hey@forescribe.ai
                </a>
                .
              </p>
              <p>
                7.2. <strong> Fees and Payment. </strong>All fees are as set
                forth in the applicable Order Form and will be paid by Customer
                within thirty (30) days of invoice, unless (a) Customer is
                paying via a Recurring Payment Method (as defined below) or (b)
                otherwise specified in the applicable Order Form. Forescribe
                reserves the right to adjust pricing for any service plan and/or
                any Service(s) to the then-current list price upon the start of
                any renewal term.
              </p>
              <p>
                a)<strong> Baseline Monthly Fee.</strong> Forescribe will charge
                Customer the monthly subscription fee in advance of each billing
                period. The monthly subscription fee will be based on the
                contracted quantity of full seats purchased for the applicable
                service plan plus any upgrades (e.g., an Addon on Pro), if
                applicable. Customer's invoice will also include any fees for
                one-time services (e.g., onboarding services) ordered by
                Customer.
              </p>
              <p>
                b) <strong>Changes to Contracted Usage.</strong> If the
                contracted usage quantity (e.g., number of full seats,
                resolutions or channel usage) or service plan is changed during
                a billing period, Customer's monthly subscription fee will be
                prorated accordingly as of the effective date of the change.
              </p>
              <p>
                c) <strong>Additional Usage Charges. </strong>In addition to the
                monthly subscription fee, if Customer uses any Services that are
                subject to additional usage charges and/or if Customer's actual
                usage exceeds Customer's contracted usage quantity, Customer
                will be charged additional usage fees (calculated based on
                published pricing and/or applicable unit price set forth in the
                Order Form).
              </p>
              <p>
                <strong>Services.</strong> For any Services that are subject to
                additional usage charges, the applicable charges will be
                calculated based on the actual amount of usage of each Service
                in the given contract month. These additional usage charges will
                be billed in arrears in the next invoice that Customer receives
                following the date when the charges were incurred.
              </p>
              <p>
                <strong>Seats.</strong> With respect to charges for full seats
                specifically, if Customer exceeds the originally contracted
                quantity, the additional seats activated by Customer will be
                billed as additional usage charges. In the month the additional
                seats are activated, these charges will be prorated as of the
                effective date of the change and included in the next invoice
                that Customer receives. Thereafter, these additional usage
                charges will be pre-billed for each month that the additional
                seats remain activated, unless Customer's Order Form specifies
                otherwise.
              </p>
              <p>
                d) <strong>Taxes.</strong> Except as expressly set forth in this
                Agreement, all fees are non-refundable. Customer is responsible
                for paying all Taxes, and all Taxes are excluded from any fees
                set forth in the applicable Order Form. Forescribe will invoice
                Customer for Taxes as well as any legally required fees arising
                from Customer's use of Services if Forescribe believes it has a
                legal obligation to do so, and Customer will pay such Taxes and
                fees if invoiced. If Customer is required by Law to withhold any
                Taxes from Customer's payment, the fees payable by Customer will
                be increased as necessary so that after making any required
                withholdings, Forescribe receives and retains (free from any
                liability for payment of Taxes) an amount equal to the amount it
                would have received had no such withholdings been made. Any late
                payments will be subject to a service charge equal to 10% per
                month of the amount due or the maximum amount allowed by law,
                whichever is less.
              </p>
              <p>
                7.3.<strong> Payment Via Recurring Payment Method.</strong> If
                you are purchasing the Services via credit card, debit card or
                any other recurring payment method accepted by Forescribe
                (“Recurring Payment Method"), the following terms apply:
              </p>
              <p>
                a.<strong>Recurring Billing Authorization.</strong> By providing
                Recurring Payment Method information and agreeing to purchase
                any Services, Customer hereby authorizes Forescribe (or its
                designee) to automatically charge Customer's Recurring Payment
                Method on the same date of each calendar month (or the closest
                prior date, if there are fewer days in a particular month)
                during the Subscription Term for all fees accrued as of that
                date (if any) in accordance with the applicable Order Form.
                Customer acknowledges and agrees that the amount billed and
                charged each month may vary depending on Customer's usage of the
                Services and may include adjustments to monthly subscription
                fee, upgrade fees, one-time service fees, additional usage
                charges, taxes and other fees as described above.
              </p>
              <p>
                b. <strong>Foreign Transaction Fees.</strong> Customer
                acknowledges that for certain Recurring Payment Methods, the
                provider/issuer may charge a foreign transaction fee or other
                charges.
              </p>
              <p>
                c. <strong>Invalid Payment.</strong> If a payment is not
                successfully settled due to expiration of a Recurring Payment
                Method, insufficient funds, or otherwise, Customer remains
                responsible for any amounts not remitted to Forescribe and
                Forescribe may, in its sole discretion, either (i) invoice
                Customer directly for the deficient amount, (ii) continue
                billing the Recurring Payment Method once it has been updated by
                Customer (if applicable) or (iii) terminate this Agreement.
              </p>
              <p>
                d.{" "}
                <strong>Changing Recurring Payment Method Information.</strong>{" "}
                At any time, Customer may change its Recurring Payment Method
                information by entering updated information via the “Account”
                page on the Dashboard.
              </p>
              <p>
                e.<strong> Payment of Outstanding Fees.</strong> Upon any
                termination or expiration of the subscription, Forescribe will
                charge Customer's Recurring Payment Method (or invoice Customer
                directly) for any outstanding fees for Customer's use of the
                Services during the Subscription Term, after which payment,
                Forescribe will not charge Customer's Recurring Payment Method
                for any additional fees.
              </p>
              <p className="mb-10">
                7.4. <strong>Suspension of Service.</strong> If Customer's
                account is thirty (30) days or more overdue, in addition to any
                of its other rights or remedies (including but not limited to
                any termination rights set forth herein), Forescribe reserves
                the right to suspend Customer's access to the applicable Service
                (and any related services) without liability to Customer until
                such amounts are paid in full. Forescribe also reserves the
                right to suspend Customer's access to the Services, without
                liability, if Customer's use of the Services is in violation of
                the AUP or this Agreement.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                8. Term and Termination
              </h3>
              <p>
                8.1. <strong>Term.</strong> This Agreement is effective as of
                the Effective Date and expires on the date of the last to expire
                Subscription Term under any Order Form, unless earlier
                terminated as set forth herein.
              </p>
              <p>
                8.2. <strong>Termination for Cause.</strong> Either party may
                terminate this Agreement (including all related Order Forms) if
                the other party (a) fails to cure any material breach of this
                Agreement (including a failure to pay fees) within thirty (30)
                days after written notice; (b) ceases operation without a
                successor; or (c) seeks protection under any bankruptcy,
                receivership, trust deed, creditors' arrangement, composition,
                or comparable proceeding, or if any such proceeding is
                instituted against that party (and not dismissed within sixty
                (60) days thereafter).
              </p>
              <p>
                8.3. <strong>Effect of Termination.</strong> Upon any expiration
                or termination of this Agreement, Customer will immediately
                cease any and all use of and access to all Services (including
                any and all related Forescribe Technology) and delete (or, at
                Forescribe's request, return) any and all copies of the
                Documentation, any Forescribe passwords or access codes and any
                other Forescribe Confidential Information in its possession.
                Customer acknowledges that following termination, it will have
                no further access to any Customer Data input into any Service,
                and that Forescribe may delete any such data as may have been
                stored by Forescribe at any time. Except where an exclusive
                remedy is specified, the exercise by either party of any remedy
                under this Agreement, including termination, will be without
                prejudice to any other remedies it may have under this
                Agreement, by law or otherwise.
              </p>
              <p className="mb-10">
                8.4. <strong>Survival.</strong> The following Sections will
                survive any expiration or termination of this Agreement: 2.7
                (General Restrictions), 2.9 (Trial Subscriptions), 2.10 (Beta
                Offerings), 3.3 (Storage of Customer Data), 3.4 (Anonymized
                Data), 3.6 (Indemnification by Customer), 6 (Ownership), 7.2
                (Fees and Payment), 7.3 (Payment Via Recurring Payment Method),
                8.3 (Effect of Termination), 8.4 (Survival), 9.2 (Warranty
                Disclaimer), 12 (Limitation of Liability), 13 (Indemnification),
                14 (Confidential Information) and 16 (General Terms).
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                9. Limited Warranty
              </h3>
              <p>
                9.1. <strong> Limited Warranty.</strong> Forescribe warrants,
                for Customer's benefit only, that each Service will operate in
                substantial conformity with the applicable Documentation.
                Forescribe's sole liability (and Customer's sole and exclusive
                remedy) for any breach of this warranty will be, at no charge to
                Customer, for Forescribe to use commercially reasonable efforts
                to correct the reported non-conformity, or if Forescribe
                determines such remedy to be impracticable, either party may
                terminate the applicable Subscription Term and Customer will
                receive as its sole remedy a refund of any fees Customer has
                pre-paid for use of such Service for the terminated portion of
                the applicable Subscription Term. The limited warranty set forth
                in this Section 9.1 will not apply: (i) unless Customer makes a
                claim within thirty (30) days of the date on which Customer
                first noticed the non-conformity, (ii) if the error was caused
                by misuse, unauthorized modifications or third-party hardware,
                software or services, or (iii) if Services are provided to
                Customer to use on a no-charge, trial, beta or evaluation basis.
              </p>
              <p className="mb-10">
                9.2. <strong> Warranty Disclaimer.</strong> EXCEPT FOR THE
                LIMITED WARRANTY IN SECTION 9.1, ALL SERVICES ARE PROVIDED “AS
                IS". NEITHER Forescribe NOR ITS SUPPLIERS MAKES ANY OTHER
                WARRANTIES, EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE,
                INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                TITLE, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT.
                Forescribe DOES NOT WARRANT THAT CUSTOMER'S USE OF THE SERVICES
                WILL BE UNINTERRUPTED OR ERROR-FREE, NOR DOES Forescribe WARRANT
                THAT IT WILL REVIEW THE CUSTOMER DATA FOR ACCURACY. Forescribe
                SHALL NOT BE LIABLE FOR THE RESULTS OF ANY COMMUNICATIONS SENT
                OR ANY COMMUNICATIONS THAT WERE FAILED TO BE SENT USING THE
                SERVICES. Forescribe SHALL NOT BE LIABLE FOR DELAYS,
                INTERRUPTIONS, SERVICE FAILURES OR OTHER PROBLEMS INHERENT IN
                USE OF THE INTERNET AND ELECTRONIC COMMUNICATIONS, THIRD-PARTY
                PLATFORMS, THIRD PARTY APPS, OR OTHER SYSTEMS OUTSIDE THE
                REASONABLE CONTROL OF Forescribe. CUSTOMER MAY HAVE OTHER
                STATUTORY RIGHTS, BUT THE DURATION OF STATUTORILY REQUIRED
                WARRANTIES, IF ANY, SHALL BE LIMITED TO THE SHORTEST PERIOD
                PERMITTED BY LAW.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                10. Availability
              </h3>
              <p className="mb-10">
                The Services are available subject to Forescribe's Service Level
                Agreement (“SLA").
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                11. Support
              </h3>
              <p className="mb-10">
                During the Subscription Term of each Service, Forescribe will
                provide end user support in accordance with Forescribe's Support
                Policy (“Support Policy").
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                12. Limitation of Liability
              </h3>
              <p>
                12.1.<strong> Consequential Damages Waiver.</strong> EXCEPT FOR
                EXCLUDED CLAIMS (DEFINED BELOW), NEITHER PARTY (NOR ITS
                SUPPLIERS) SHALL HAVE ANY LIABILITY ARISING OUT OF OR RELATED TO
                THIS AGREEMENT FOR ANY LOSS OF USE, LOST DATA, LOST PROFITS,
                FAILURE OF SECURITY MECHANISMS, INTERRUPTION OF BUSINESS, OR ANY
                INDIRECT, SPECIAL, INCIDENTAL, RELIANCE, OR CONSEQUENTIAL
                DAMAGES OF ANY KIND, EVEN IF INFORMED OF THE POSSIBILITY OF SUCH
                DAMAGES IN ADVANCE.
              </p>
              <p>
                12.2.<strong>Liability Cap. </strong> EXCEPT FOR EXCLUDED CLAIMS
                (DEFINED BELOW), EACH PARTY'S ENTIRE LIABILITY TO THE OTHER
                ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE
                AMOUNT ACTUALLY PAID OR PAYABLE BY CUSTOMER TO Forescribe UNDER
                THE AGREEMENT GIVING RISE TO THE LIABILITY IN THE TWELVE (12)
                MONTHS IMMEDIATELY PRECEDING THE CLAIM.
              </p>
              <p>
                12.3. <strong>Excluded Claims.</strong> ” Excluded Claims” means
                any claim arising (a) from Customer's breach of Section 2.7
                (General Restrictions); (b) under Section 3.5 (Customer
                Obligations) or 3.6 (Indemnification by Customer); or (c) from a
                party's breach of its obligations in Section 14 (Confidential
                Information) (but excluding claims arising from operation or
                non-operation of any Service or relating to Customer Data).
              </p>
              <p>
                12.4.{" "}
                <strong>
                  Nature of Claims and Failure of Essential Purpose.
                </strong>{" "}
                The parties agree that the waivers and limitations specified in
                this Section 12 apply regardless of the form of action, whether
                in contact, tort (including negligence), strict liability or
                otherwise and will survive and apply even if any limited remedy
                specified in this Agreement is found to have failed of its
                essential purpose.
              </p>
              <p className="mb-10">
                12.5. <strong>Applicable Law.</strong> The limitations on
                liability under this Section 12 will not apply to the extent
                such liability cannot be limited under applicable law.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                13. Indemnification
              </h3>
              <p className="mb-10">
                Forescribe will defend Customer from and against any claim by a
                third party alleging that a Service when used as authorized
                under this Agreement infringes any Intellectual Property Rights
                and will indemnify and hold harmless Customer from and against
                any damages and costs finally awarded against Customer or agreed
                in settlement by Forescribe (including reasonable attorneys'
                fees) resulting from such claim, provided that Forescribe will
                have received from Customer: (i) prompt written notice of such
                claim (but in any event notice in sufficient time for Forescribe
                to respond without prejudice); (ii) the exclusive right to
                control and direct the investigation, defense and settlement (if
                applicable) of such claim; and (iii) all reasonable necessary
                cooperation of Customer. If Customer's use of a Service is (or
                in Forescribe's opinion is likely to be) enjoined, if required
                by settlement or if Forescribe determines such actions are
                reasonably necessary to avoid material liability, Forescribe
                may, in its sole discretion: (a) substitute substantially
                functionally similar products or services; (b) procure for
                Customer the right to continue using such Service; or if (a) and
                (b) are not commercially reasonable, (c) terminate this
                Agreement and refund to Customer the fees paid by Customer for
                the portion of the Subscription Term that was paid by Customer
                but not rendered by Forescribe. The foregoing indemnification
                obligation of Forescribe will not apply: (1) if such Service is
                modified by any party other than Forescribe, but solely to the
                extent the alleged infringement is caused by such modification;
                (2) if such Service is combined with products or processes not
                provided by Forescribe, but solely to the extent the alleged
                infringement is caused by such combination; (3) to any
                unauthorized use of such Service; (4) to any action arising as a
                result of Customer Data or any third-party deliverables or
                components contained within such Service; (5) to the extent the
                alleged infringement is not caused by the particular technology
                or implementation of the Service but instead by features common
                to any similar product or service; (6) to any action arising
                from Customer's use of Third Party Apps; or (7) if Customer
                settles or makes any admissions with respect to a claim without
                Forescribe's prior written consent. THIS SECTION 13 SETS FORTH
                Forescribe'S AND ITS SUPPLIERS' SOLE LIABILITY AND CUSTOMER'S
                SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO ANY CLAIM OF
                INTELLECTUAL PROPERTY INFRINGEMENT.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                14. Confidential Information
              </h3>
              <p className="mb-10">
                Each party (as “Receiving Party") agrees that all code,
                inventions, know-how, business, technical and financial
                information it obtains from the disclosing party (“Disclosing
                Party") constitute the confidential property of the Disclosing
                Party (“Confidential Information"), provided that it is
                identified as confidential at the time of disclosure or should
                be reasonably known by the Receiving Party to be confidential or
                proprietary due to the nature of the information disclosed and
                the circumstances surrounding the disclosure. Any Forescribe
                Technology, performance information relating to any Service, and
                the terms and conditions of this Agreement will be deemed
                Confidential Information of Forescribe without any marking or
                further designation. Except as expressly authorized herein, the
                Receiving Party will (1) hold in confidence and not disclose any
                Confidential Information to third parties and (2) not use
                Confidential Information for any purpose other than fulfilling
                its obligations and exercising its rights under this Agreement.
                The Receiving Party may disclose Confidential Information to its
                employees, agents, contractors and other representatives having
                a legitimate need to know (including, for Forescribe, the
                subcontractors referenced in Section 16.8 (Subcontractors)),
                provided that such representatives are bound to confidentiality
                obligations no less protective of the Disclosing Party than this
                Section 14 and that the Receiving Party remains responsible for
                compliance by any such representative with the terms of this
                Section 14. The Receiving Party's confidentiality obligations
                will not apply to information that the Receiving Party can
                document: (i) was rightfully in its possession or known to it
                prior to receipt of the Confidential Information; (ii) is or has
                become public knowledge through no fault of the Receiving Party;
                (iii) is rightfully obtained by the Receiving Party from a third
                party without breach of any confidentiality obligation; or (iv)
                is independently developed by employees of the Receiving Party
                who had no access to such information. The Receiving Party may
                make disclosures to the extent required by law or court order,
                provided the Receiving Party notifies the Disclosing Party in
                advance and cooperates in any effort to obtain confidential
                treatment. The Receiving Party acknowledges that disclosure of
                Confidential Information would cause substantial harm for which
                damages alone would not be a sufficient remedy, and therefore
                that upon any such disclosure by the Receiving Party the
                Disclosing Party will be entitled to seek appropriate equitable
                relief in addition to whatever other remedies it might have at
                law.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                15. Publicity
              </h3>
              <p className="mb-10">
                Forescribe may, upon Customer's prior written consent, use
                Customer's name to identify Customer as an Forescribe customer
                of the Services, including on Forescribe's public website.
                Forescribe agrees that any such use shall be subject to
                Forescribe complying with any written guidelines that Customer
                may deliver to Forescribe regarding the use of its name and
                shall not be deemed Customer's endorsement of the Services.
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold  text-[#19154E] dark:text-[#C5B8FF]  border-b border-[#8b3dff]/40 dark:border-[#B892FF]/60  pb-1 mb-3  transition-colors duration-300 ">
                16. General Terms
              </h3>
              <p>
                16.1. <strong>Assignment.</strong> This Agreement will bind and
                ensure to the benefit of each party's permitted successors and
                assigns. Neither party may assign this Agreement without the
                advance written consent of the other party, except that either
                party may assign this Agreement in connection with a merger,
                reorganization, acquisition or other transfer of all or
                substantially all of such party's assets or voting securities.
                Any attempt to transfer or assign this Agreement except as
                expressly authorized under this Section 16.1 will be null and
                void.
              </p>
              <p>
                16.2. <strong>Severability.</strong> If any provision of this
                Agreement will be adjudged by any court of competent
                jurisdiction to be unenforceable or invalid, that provision will
                be limited to the minimum extent necessary so that this
                Agreement will otherwise remain in effect.
              </p>
              <p>
                16.3.<strong> Governing Law; Dispute Resolution.</strong>
              </p>
              <p>
                a) <strong>Direct Dispute Resolution.</strong> In the event of
                any dispute, claim, question, or disagreement arising from or
                relating to this Agreement, whether arising in contract, tort or
                otherwise, (“Dispute"), the parties shall first use their best
                efforts to resolve the Dispute. If a Dispute arises, the
                complaining party shall provide written notice to the other
                party in a document specifically entitled “Initial Notice of
                Dispute,” specifically setting forth the precise nature of the
                dispute (“Initial Notice of Dispute"). If an Initial Notice of
                Dispute is being sent to Forescribe it must be emailed to
                <a href="mailto:legal@forescribe.ai" className="nav-link">
                  {" "}
                  legal@forescribe.ai
                </a>{" "}
                and sent via mail to:
              </p>
              <p>
                Attn: Innoveer Ventures Private Limited, M853, 2nd Floor,
                Mayfield Gardens, The Green Images, Sector 51, Gurugram -
                122001, HR, IN
              </p>
              <p>
                Following receipt of the Initial Notice of Dispute, the parties
                shall consult and negotiate with each other in good faith and,
                recognizing their mutual interest, attempt to reach a just and
                equitable solution of the Dispute that is satisfactory to both
                parties (“Direct Dispute Resolution"). If the parties are unable
                to reach a resolution of the Dispute through Direct Dispute
                Resolution within thirty (30) days of the receipt of the Initial
                Notice of Dispute, then the Dispute may subsequently be resolved
                in a court of law as set forth below.
              </p>
              <p>
                b) <strong>Choice of Law and Jurisdiction.</strong> FOR ANY
                CLAIM WHICH IS NOT SUBJECT TO THIS DISPUTE RESOLUTION PROVISION,
                CUSTOMER AGREES TO SUBMIT AND CONSENT TO THE PERSONAL AND
                EXCLUSIVE JURISDICTION IN, AND THE EXCLUSIVE VENUE OF, THE STATE
                AND FEDERAL COURTS LOCATED WITHIN GURUGRAM, INDIA. IN ANY
                DISPUTE, INDIA LAW SHALL APPLY.
              </p>
              <p>
                c) Construction and Joinder. THIS AGREEMENT MUST BE CONSTRUED AS
                IF IT WAS JOINTLY WRITTEN BY BOTH PARTIES. BOTH CUSTOMER AND
                Forescribe AGREE THAT EACH MAY BRING OR PARTICIPATE IN CLAIMS
                AGAINST THE OTHER ONLY IN THEIR RESPECTIVE INDIVIDUAL
                CAPACITIES, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
                PURPORTED CLASS. NO ARBITRATION OR CLAIM UNDER THIS AGREEMENT
                SHALL BE JOINED TO ANY OTHER ARBITRATION OR CLAIM, INCLUDING ANY
                ARBITRATION OR CLAIM INVOLVING ANY OTHER CURRENT OR FORMER USER
                OF THE SERVICES, AND NO CLASS ARBITRATION PROCEEDINGS SHALL BE
                PERMITTED. IN THE EVENT OF ANY DISPUTE CONCERNING THE VALIDITY
                OR ENFORCEABILITY OF THIS PROVISION, SUCH CLAIM MUST BE
                ADJUDICATED BY A COURT AND NOT BY AN ARBITRATOR.
              </p>
              <p>
                d) <strong>Injunctive Relief.</strong> Notwithstanding the above
                provisions, Forescribe may apply for injunctive remedies (or an
                equivalent type of urgent legal relief) in any jurisdiction.
              </p>
              <p>
                16.4.<strong> Notice.</strong> Any notice or communication
                required or permitted under this Agreement will be in writing to
                the parties at the addresses set forth on the Order Form or at
                such other address as may be given in writing by either party to
                the other in accordance with this Section and will be deemed to
                have been received by the addressee (i) if given by hand,
                immediately upon receipt; (ii) if given by overnight courier
                service, the first business day following dispatch (iii) if
                given by registered or certified mail, postage prepaid and
                return receipt requested, the second business day after such
                notice is deposited in the mail; or (iv) if given by email on
                the first business day after we send it. You agree that any
                electronic communication satisfies any applicable legal
                communication requirements, including that such communications
                be in writing.
              </p>
              <p>
                16.5. <strong>Amendments; Waivers. </strong>Except as provided
                under “Modifications to this Agreement” and otherwise provided
                herein, no supplement, modification, or amendment of this
                Agreement will be binding, unless executed in writing by a duly
                authorized representative of each party to this Agreement. No
                waiver will be implied from conduct or failure to enforce or
                exercise rights under this Agreement, nor will any waiver be
                effective unless in a writing signed by a duly authorized
                representative on behalf of the party claimed to have waived. No
                provision of any purchase order or other business form employed
                by Customer that may be referenced in the Order Form or
                otherwise issued by Customer will supersede or modify the terms
                and conditions of this Agreement (regardless of any statement to
                the contrary in such document), and any such document relating
                to this Agreement will be for Customer's convenience and
                administrative purposes only and will have no legal effect.
              </p>
              <p>
                16.6. <strong> Entire Agreement.</strong> This Agreement is the
                complete and exclusive statement of the mutual understanding of
                the parties and supersedes and cancels all previous written and
                oral agreements and communications relating to the subject
                matter of this Agreement. Customer acknowledges that the
                Services are on-line, subscription-based products, and that in
                order to provide improved customer experience Forescribe may
                make changes to the Services, and Forescribe will update the
                applicable Documentation accordingly. The support and service
                level availability terms described in the the Support Policy,
                Security Policy, and the SLA may be updated from time to time
                upon reasonable notice to Customer to reflect process
                improvements or changing practices (but the modifications will
                not materially decrease Forescribe's obligations as compared to
                those reflected in such terms as of the Effective Date).
              </p>
              <p>
                16.7. <strong> Force Majeure.</strong> Neither party will be
                liable to the other for any delay or failure to perform any
                obligation under this Agreement (except for a failure to pay
                fees) if the delay or failure is due to unforeseen events that
                occur after the signing of this Agreement and that are beyond
                the reasonable control of such party, such as a strike,
                blockade, war, act of terrorism, riot, natural disaster, failure
                or diminishment of power or telecommunications or data networks
                or services, or refusal of a license by a government agency.
              </p>
              <p>
                16.8. <strong> Subcontractors.</strong> Forescribe may use the
                services of subcontractors and permit them to exercise the
                rights granted to Forescribe in order to provide the Services
                under this Agreement, provided that Forescribe remains
                responsible for (i) compliance of any such subcontractor with
                the terms of this Agreement,(ii) for the overall performance of
                the Services as required under this Agreement, and (iii)
                compliance with the terms of the DPA.
              </p>
              <p>
                16.9.<strong> Subpoenas.</strong> Nothing in this Agreement
                prevents Forescribe from disclosing Customer Data to the extent
                required by law, subpoenas, or court orders, but Forescribe will
                use commercially reasonable efforts to notify Customer where
                permitted to do so.
              </p>
              <p>
                16.10. <strong>Independent Contractors.</strong> The parties to
                this Agreement are independent contractors. There is no
                relationship of partnership, joint venture, employment,
                franchise or agency created hereby between the parties. Neither
                party will have the power to bind the other or incur obligations
                on the other party's behalf without the other party's prior
                written consent.
              </p>
              <p>
                16.11. <strong>Export Control and Economic Sanctions.</strong>{" "}
                Each party: (i) agrees to comply with all export control and
                economic sanctions and any relevant import laws and regulations
                of India and other applicable jurisdictions, and (ii) represents
                and warrants that it is not listed on any Indian or other
                government list of prohibited or restricted parties or located
                in (or a national of) a country that is subject to a Indian
                government export control embargo or economic sanctions. Without
                limiting the foregoing, (a) Customer will not (and will not
                permit any of its users to) access or use the Services in
                violation of any Indian export control or economic sanction,
                prohibition or restriction.
              </p>
              <p>
                16.12. <strong>Government End-Users.</strong> Elements of the
                Services are commercial computer software. If Customer or end
                user of the Services is an agency, department, or other entity
                of the United States Government, then the use, duplication,
                reproduction, release, modification, disclosure, or transfer of
                the Services, or any related documentation of any kind,
                including technical data and manuals, is restricted by the terms
                of this Agreement in accordance with Federal Acquisition
                Regulation 12.212 (Computer Software) for civilian purposes and
                Defense Federal Acquisition Regulation Supplement 227.7202
                (Rights in Commercial Computer Software or Commercial Computer
                Software Documentation) for military purposes. All Services were
                developed fully at private expense.
              </p>
              <p>
                16.13. <strong>Counterparts.</strong> This Agreement may be
                executed in counterparts, each of which will be deemed an
                original and all of which together will be considered one and
                the same agreement.
              </p>
            </div>
            <div className="w-full py-5 flex justify-center items-center">
              <GoBackButton />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TermCondition;
