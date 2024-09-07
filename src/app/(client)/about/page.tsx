import { ReadMore, PageHero, SectionTitle } from "~/app/_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story and Team",
  description:
    "At Travel Town Holidays we are committed to providing a professional service to our customers, ensuring they benefit from our experience, unique style and energy. A highly visible, independent and progressive travel agency, we aim to make a difference in everything we do.",
  keywords: [
    "About Travel Town Holidays",
    "Travel Town Holidays Team",
    "Our Story at Travel Town Holidays",
    "Why Choose Travel Town Holidays",
  ],
  openGraph: {
    url: "https://traveltownholidays.com/about",
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724529271/Travel%20Town%202024/Home%20Page%20images/target-group-3460039_b4pqqt.jpg",
        width: 800,
        height: 600,
        alt: "people in a circle looking down shown through magnifying glass",
      },
    ],
  },
};

export default function page() {
  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724529271/Travel%20Town%202024/Home%20Page%20images/target-group-3460039_b4pqqt.jpg"
        }
        alt="people in a circle looking down shown through magnifying glass"
      />
      <div className="align-section-center py-8">
        <SectionTitle title="about US" pageTitle={true} />
        <div>
          <section className="section-bg-white my-12 rounded-md px-4 py-12">
            <ReadMore>
              Established with the focus on creating unique and unforgettable
              travel experiences for you, it has been our pleasure to be your
              chosen agency. We aim to continue to delight you with our services
              and offerings and to enjoy a lasting relationship together.
              Equipped with deep local knowledge for each destination, we assure
              you quality itineraries to suit the travel desires of you and your
              loved ones. From relaxing tours to exhilarating adventures, TTH
              will be there with you for that quality time abroad. We will carry
              on with initiatives to fulfil your ever-growing travel needs. No
              matter where you go, it will always be about you. Why? Because we
              believe in creating a lasting travel memory with Travel Town
              Holidays, Always.
            </ReadMore>
          </section>
        </div>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle
            title="Our organization provides the following service"
            subTitle={true}
          />
          <ReadMore isList={true}>
            <li>Domestic and International Holiday Packages</li>
            <li>Hotel reservations</li>
            <li>Car Rentals</li>
            <li>Flight Ticketing</li>
            <li>Tourist Visa Assistance</li>
            <li>Consulting Travel Solutions</li>
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Company Vision" subTitle={true} />
          <ReadMore>
            We aspire to be the most sought after Travel/ Destination Management
            Company
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Company mission statement" subTitle={true} />
          <h2 className="page-section-title"></h2>
          <ReadMore>
            At Travel Town Holidays we are committed to providing a professional
            service to our customers, ensuring they benefit from our experience,
            unique style and energy. A highly visible, independent and
            progressive travel agency, we aim to make a difference in everything
            we do.
          </ReadMore>
        </section>

        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Company values" subTitle={true} />
          <ReadMore isList={true}>
            <li>
              At Travel Town Holidays, we&apos;re guided by a set of core values
              — Trust, Dedication and Personal service — and we ensure that
              these hallmarks are met at every stage of your journey.
            </li>
            <li>
              We are PERSONALLY ACCOUNTABLE for any challenge brought to our
              attention.
            </li>
            <li>
              We gain TRUST by treating others with integrity, respect and
              fairness.
            </li>
            <li>
              We achieve PRIDE & EXCELLENCE by being innovative and creative
            </li>
            <li>
              We COLLABORATE to support the objectives of the company and our
              preferred relationships.
            </li>
            <li>
              We properly represent our company with RESPONSIBLE CITIZENSHIP in
              and out of the workplace.
            </li>
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Dedication" subTitle={true} />
          <ReadMore>
            We know your time is valuable, so our team is committed to providing
            you with the best travel experience possible, from before you book
            your holiday to after your journey has ended.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Why book with us" subTitle={true} />
          <h2 className="page-section-title"></h2>
          <ReadMore>
            Your time is important. When you choose Travel Town Holidays, we
            dedicate time to organizing a first-rate experience using our
            regional knowledge, so you can spend your own time however you
            please. And once you are traveling, each day of your personalized
            itinerary is set up to be memorable.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="Travel with confidence" subTitle={true} />
          <ReadMore>
            Look forward to traveling again and rest assured that you are
            supported every step of the way. Your safety and wellbeing is at the
            heart of everything we do, which is why we have established new
            protocols to ensure you Travel with Confidence.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <SectionTitle title="What Makes Us Unique?" subTitle={true} />
          <ReadMore>
            One travel expert throughout, Many agencies force you to deal with
            multiple people throughout the booking process, making it disjointed
            and impersonal. At Travel Town you will deal with the same travel
            expert from the moment of initial contact until you are safely back
            at home.
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
