import { Link } from "react-router-dom";

function TermsandConditions() {
  return (
    <>
      <div className="my-10 mt-14">
        <p className=" text-4xl mb-16 text-center tracking-wide font-semibold">
          Terms & Conditions
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          1. Introduction
        </p>
        <p className=" px-24 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          These Terms of Service constitute an electronic contract formed under
          applicable laws, encompassing the amended provisions regarding
          electronic documents/records. This document serves as an agreement
          between Keyraya Bike Rentals (referred to as “Company”, “we”, “us”, or
          “our”), based out in Nagasandra, Bengaluru, and the registered users
          (referred to as "you" or "your" or “User”). By accessing and utilizing
          the services provided by Keyraya Bike Rentals, you acknowledge your
          understanding, agreement, and consent to these Terms of Service. If
          you do not agree with these terms, please refrain from using our
          platform or services.
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          2. Acceptance of Terms
        </p>
        <p className=" px-24 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          By accessing the Keyraya Bike Rentals platform, you agree to abide by
          these Terms of Service, including any updates or modifications made by
          the Company. These terms should be read in conjunction with our
          Privacy Policy available at [insert privacy policy link] and any other
          notices, disclaimers, or guidelines provided on the platform. Your
          continued usage of the platform implies your acceptance of the Terms
          and Conditions, as revised from time to time.
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          3. Definitions
        </p>
        <p className=" px-24 pl-32 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          <ul className=" list-disc">
            <li>
              {" "}
              Platform: Refers to the Keyraya Bike Rentals website, mobile
              sites, mobile applications, and any associated products, services,
              or websites.
            </li>
            <li>
              {" "}
              User: Any individual who registers on the Keyraya Bike Rentals
              platform and holds an account.
            </li>
            <li>
              {" "}
              Parties: Refers to both the User and the Company collectively or
              individually.
            </li>
            <li>
              {" "}
              Person: Any natural person, firm, company, governmental authority,
              or entity.
            </li>
          </ul>
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          4. Updates to Terms and Conditions
        </p>
        <p className=" px-24 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          Keyraya Bike Rentals reserves the right to update, amend, modify, or
          revise these Terms of Service at any time. Users are responsible for
          regularly reviewing the Terms and Conditions for any changes.
          Continued use of the platform after updates implies acceptance of the
          revised Terms and Conditions.
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          5. Platform Services
        </p>
        <p className=" px-24 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          These Terms of Service govern your access to the Keyraya Bike Rentals
          platform and the services provided, including but not limited to
          rental booking, subscription, and usage of various two-wheeled
          vehicles. The Company may update the platform and services to
          introduce new features, enhance existing ones, or improve user
          experience.
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          6. Eligibility and Account Registration
        </p>
        <p className=" px-24 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          By accessing the Keyraya Bike Rentals platform, you affirm that you
          are at least 18 years old and legally capable of accepting these Terms
          of Service. Registration on the platform is available only to
          individuals who can form legally binding contracts. Users must provide
          accurate and complete information during registration and promptly
          update any changes. It is the User's responsibility to ensure the
          confidentiality of their account information and to notify the Company
          of any unauthorized account activity. The Company reserves the right
          to suspend or terminate accounts with inaccurate or incomplete
          information.
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          7. Documents Required
        </p>
        <p className=" px-24 pl-32 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          <ul className=" list-disc">
            <li>
              {" "}
              For Domestic Users: Valid Indian driving license and Aadhaar card
              are required.
            </li>
            <li>
              {" "}
              For International Users: Valid driving license from their home
              country along with an international driving permit, valid visa,
              and passport are necessary.
            </li>
            <li>
              {" "}
              Users must carry their original documents for verification at the
              time of pickup.
            </li>
          </ul>
        </p>
        <p className=" px-24 mt-8 mb-8 text-3xl text-left font-semibold tracking-normal ">
          8. Confidentiality
        </p>
        <p className=" px-24 mt-8 mb-8 text-xl text-left font-normal leading-relaxed tracking-wide ">
          Users agree to safeguard and maintain the confidentiality of their
          account information. Disclosure of account information to third
          parties is prohibited, and Users are liable for any unauthorized use
          of their accounts.
        </p>
        <p className=" px-24 mt-8 mb-8 text-xl text-left font-semibold leading-relaxed tracking-wide ">
          By using the Keyraya Bike Rentals platform, you acknowledge and agree
          to abide by these Terms of Service. Failure to comply with these terms
          may result in the suspension or termination of your account. If you
          have any questions or concerns regarding these terms, please contact
          us at [
          <Link to="/Contact_Us">
            <span className=" text-blue-500">insert contact information</span>
          </Link>
          ].
        </p>
      </div>
    </>
  );
}

export default TermsandConditions;
