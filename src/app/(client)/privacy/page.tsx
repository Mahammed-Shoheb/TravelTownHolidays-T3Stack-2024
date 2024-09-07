import type { Metadata } from "next";
import { ReadMore, PageHero, SectionTitle } from "~/app/_components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "At Travel Town Holidays, your privacy is our top priority. Learn about our data collection practices, security measures, and how we comply with privacy regulations to safeguard your personal information.",
  keywords: [
    "Travel Town Holidays Privacy Policy",
    "How Travel Town Holidays Protects Your Data",
    "What Personal Information We Collect",
    "How We Use and Share Your Data",
  ],
  openGraph: {
    url: "https://traveltownholidays.com/privacy",
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724572322/traveltownholidays/main%20page%20images/regulation-3246979_1920_xnm25n.jpg",
        width: 800,
        height: 600,
        alt: "hands of a person holding phone with in the side security related network map",
      },
    ],
  },
};

export default function page() {
  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724572322/traveltownholidays/main%20page%20images/regulation-3246979_1920_xnm25n.jpg"
        }
        alt="hands of a person holding phone with in the side security related network map"
      />
      <div className="align-section-center py-8">
        <SectionTitle title="privacy policy" pageTitle={true} />
        <div>
          <section className="section-bg-white my-12 rounded-md px-4 py-12">
            <ReadMore>
              We reserve our right to amend or cancel a tour booked by you,
              without assigning any reason. Such amendment or cancellation may
              be due to circumstances beyond our control. In such cases, we will
              offer you alternative tour dates / tours or you would have the
              option of traveling as individual travelers, if you were booked on
              a group tour. If the alternative date / tour is not acceptable, we
              would refund the money paid by you after deducting any costs
              incurred by us on your behalf, within a period of forty five days
              from the date of amendment or cancellation. However, we would not
              be responsible or liable to pay any compensation or damages or
              consequential loss or to refund any other expense incurred by you
            </ReadMore>
          </section>
        </div>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="How we use your personal data" subTitle={true} />
          <ul>
            <li>
              Provide our service to you. Communicating and interacting with
              you; and notifying you of changes to any services.
            </li>
            <li>Enhance your customer experience</li>
            <li>Fulfil an obligation under law or contract</li>
            <li>
              We use your Personal Data on legitimate grounds and/or with your
              Consent.
            </li>
          </ul>
          <p>
            On the grounds of entering into a contract or fulfilling contractual
            obligations, we Process your Personal Data for the following
            purposes:
          </p>
          <ul>
            <li>To identify you</li>
            <li>To provide you a service or to send/offer you a product</li>
            <li>To communicate either for sales or invoicing</li>
          </ul>
          <p>
            On the ground of legitimate interest, we Process your Personal Data
            for the following purposes:
          </p>
          <ul>
            <li>
              To send you personalized offers* (from us and/or our carefully
              selected partners)
            </li>
            <li>
              To administer and analyze our client base (purchasing behavior and
              history) in order to improve the quality, variety, and
              availability of products/ services offered/provided
            </li>
            <li>To conduct questionnaires concerning client satisfaction</li>
            <li>
              For additional purposes that are not mentioned here, but are
              compatible with the original purpose for which the data was
              gathered
            </li>
          </ul>
          <p>
            As long as you have not informed us otherwise, we consider offering
            you products/services that are similar or same to your purchasing
            history/browsing behavior to be our legitimate interest.
          </p>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Privacy policy promise" subTitle={true} />
          <p>
            While information is the cornerstone of our ability to provide
            superior service, our most important asset is our clients’ trust.
            Keeping client information secure, and using it only as our clients
            would want us to, is a top priority for all of us at Travel Town
            Holidays. Here then, is our promise to our individual customers:
          </p>
          <ReadMore isList={true}>
            <li>
              We will safeguard, according to strict standards of security and
              confidentiality, any information our customers share with us.
            </li>
            <li>
              We will limit the collection and use of customer information to
              the minimum we require to deliver superior service to our
              customers, which includes advising our customers about our
              products, services and other opportunities, and to administer our
              business.
            </li>
            <li>
              We will permit only authorized employees, who are trained in the
              proper handling of customer information, to have access to that
              information. Employees who violate our Privacy Promise will be
              subject to our normal disciplinary process.
            </li>
            <li>
              We will not reveal customer information to any external
              organization unless we have previously informed the customer in
              disclosures or agreements, or are required by law.
            </li>
            <li>
              We will always maintain control over the confidentiality of our
              customer information. We may, however, share customer information
              with reputable companies when a customer has expressed an interest
              in their service or product. Please note that this Privacy Policy
              does not apply to these other company’s use of customer
              information.
            </li>
            <li>
              We will attempt to keep customer files complete, up-to-date, and
              accurate. We will tell our customers how and where to conveniently
              access their information (except when we’re prohibited by law) and
              how to notify us about errors which we will promptly correct.
            </li>
          </ReadMore>
        </section>

        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle
            title="Who else can access your personal data"
            subTitle={true}
          />
          <ReadMore>
            We do not share your Personal Data with strangers. Personal Data
            about you is in some cases provided to our trusted partners in order
            to either make providing the service to you possible or to enhance
            your customer experience.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Cookies policy" subTitle={true} />
          <ReadMore>
            We use cookies on our Website. By continuing to browse our website
            or close the cookies banner, you consent to the use of cookies.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Security" subTitle={true} />
          <ReadMore>
            The personally identifiable information we collect about you is
            stored in limited-access servers. We will maintain safeguards to
            protect the security of these servers and your personally
            identifiable information.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Internet based transfers" subTitle={true} />
          <ReadMore>
            Given that the Internet is a global environment, using the Internet
            to collect and process personal data necessarily involves the
            transmission of data on an international basis. Therefore, by
            browsing https://www.traveltownholidays.com and communicating
            electronically with us you acknowledge and agree to our processing
            of personal data in this way.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Policy modification" subTitle={true} />
          <ReadMore>
            We may change this Privacy Policy from time to time. We will post
            any changes here, so be sure to check back periodically. However,
            please be assured that if the Privacy Policy changes in the future,
            we will not use the personal information you have submitted to us
            under this Privacy Policy in a manner that is materially
            inconsistent with this Privacy Policy, without your prior consent.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Experience & Accuracy" subTitle={true} />
          <ReadMore>
            Our staff are experienced, well-traveled and have years of travel
            knowledge among them. They draw upon their own first-hand
            experiences when customizing vacations for you.
          </ReadMore>
        </section>

        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Reputation" subTitle={true} />
          <ReadMore>
            At Travel Town Holidays, we strive to earn repeat business from you
            and want you to recommend us to your friends and family. Your
            referrals are extremely valuable to us and we know that we have to
            work diligently to deserve them.;
          </ReadMore>
        </section>
      </div>
    </main>
  );
}
