import type { Metadata } from "next";
import { ReadMore, PageHero, SectionTitle } from "~/app/_components";

export const metadata: Metadata = {
  title: "Cancellation policy",
  description:
    "We reserve our right to amend or cancel a tour booked by you, without assigning any reason. Such amendment or cancellation may be due to circumstances beyond our control. In such cases, we will offer you alternative tour dates / tours or you would have the option of traveling as individual travelers, if you were booked on a group tour. If the alternative date / tour is not acceptable, we would refund the money paid by you after deducting any costs incurred by us on your behalf, within a period of forty five days from the date of amendment or cancellation. However, we would not be responsible or liable to pay any compensation or damages or consequential loss or to refund any other expense incurred by you",
  keywords: [
    "Travel Town Holidays Cancellation Policy",
    "Booking Cancellation Policy",
    "Cancellation Terms and Conditions",
    "How to Cancel Your Booking with Travel Town Holidays",
  ],
  openGraph: {
    url: "https://traveltownholidays.com/cancellation",
    images: [
      {
        url: "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724572326/traveltownholidays/main%20page%20images/laptop-3196481_bbbarv.jpg",
        width: 800,
        height: 600,
        alt: "two people hands one holding paper and pen, other person writing and holding a pen",
      },
    ],
  },
};

export default function page() {
  return (
    <main>
      <PageHero
        src={
          "https://res.cloudinary.com/dp2hek0t3/image/upload/v1724572326/traveltownholidays/main%20page%20images/laptop-3196481_bbbarv.jpg"
        }
        alt="two people hands one holding paper and pen, other person writing and holding a pen"
      />
      <div className="align-section-center py-8">
        <SectionTitle
          title="Cancellation/ Amendment by company"
          pageTitle={true}
        />
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
          <SectionTitle
            title="Cancellation of booking by you"
            subTitle={true}
          />
          <ReadMore>
            Should you wish to cancel your booking, you must notify us in
            writing. Such notification shall be deemed to have been given to us
            only on the date of the receipt of your letter, since we can act
            only on receipt. Please state the reason for your cancellation as it
            may be covered by your insurance policy. Claims must however be made
            direct to your insurance company. The following cancellation charges
            shall apply irrespective of the reason for cancellation. You
            understand and acknowledge that these charges are a genuine
            pre-estimate of the damages that we will suffer on account of
            cancellation. You understand that these damages are called
            liquidated damages in legal language, which are payable without
            proof of actual damages. You agree not to dispute such deductions or
            to demand proof of actual damages.
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <table>
            <thead>
              <tr>
                <th>
                  When a cancellation is made cancellation charges per person
                </th>
                <th>cancellation charges per person</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Clear 45 working days or more prior to the date of departure
                  of the Tour or for non-payment of the balance Tour Cost
                </td>
                <td>Booking Amount</td>
              </tr>
              <tr>
                <td>
                  Clear 44 to 31 working days prior to the date of departure of
                  the Tour.
                </td>
                <td>30% of Tour Cost</td>
              </tr>
              <tr>
                <td>
                  Clear 30 to 16 working days prior to the date of departure of
                  the Tour.
                </td>
                <td>40% of Tour Cost</td>
              </tr>
              <tr>
                <td>
                  Clear 15 to 07 working days prior to the date of departure of
                  the Tour.
                </td>
                <td>50% of Tour Cost</td>
              </tr>
              <tr>
                <td>
                  Less than 07 clear working days prior to the date of departure
                  of the Tour.
                </td>
                <td>100% of Tour Cost</td>
              </tr>
              <tr>
                <td>
                  FOR TOURS WITH CRUISE Less than clear 80 - 50 working days
                  (depending on the cancellation policy of the particular cruise
                  liner) prior to the date of the departure of the tour for the
                  Cruise portion.
                </td>
                <td>100%</td>
              </tr>
              <tr>
                <td>
                  FOR HOTELS Less than clear 15 working days or depending on the
                  cancellation policy of the particular hotel prior to the date
                  of the departure of the tour for the Hotel.
                </td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <ReadMore>
            Different cancellation charges may be applicable during Peak Season
            (X&apos;Mas &amp; New year period i.e. 20th Dec to 10th Jan; Chinese
            New Year, Carnivals), Festivals of the city, country you visit,
            Trade Fair / Special Event periods in respective city of travel.
          </ReadMore>
          <ReadMore>
            If you wish to cancel your booking, you need to inform us by any of
            the following methods, provided that such information should be
            given on a working day within working hours:
          </ReadMore>
          <ReadMore>
            Cancellation shall take effect only from the time the written
            request reached the Company at its office in Mumbai on working days
            within office time at the details listed above. However, in the
            following cases you shall be deemed to have cancelled the tour even
            if no cancellation notice is issued by you:
          </ReadMore>
        </section>
        <section className="section-bg-white my-12 rounded-md px-4 py-12">
          <ReadMore isList={true}>
            <li>
              In case of visa rejection, you would be deemed to have cancelled
              on the date of intimation of such rejection. Please see our Visa
              Guidance section for further details
            </li>
            <li>
              If you fail to pay the tour costs in time or if you commit any
              other default in relation to your booking, we may treat such
              failure or default as a cancellation of the booking by you. In
              such case, the cancellation charges shall be computed with
              reference to the date on which we issue you a notice of
              cancellation;
            </li>
            <li>
              If on your failure of payment or other default, no notice of
              cancellation is issued by us but your payment or default remains
              outstanding on the date of departure, the booking shall be deemed
              to have been cancelled by you without any advance notice, inviting
              the highest cancellation charge.
            </li>
          </ReadMore>
        </section>
      </div>
    </main>
  );
}
