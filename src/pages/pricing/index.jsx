import CommonQuestions from "./CommonQuestions";
import Pricing from "./Pricing";
import PricingTable1 from "./PricingTable1";
import PricingTable2 from "./PricingTable2";

import ContactUs from '../home/ContactUs'

export default function index() {
  return (
    <>
      <div className="  max-w-7xl mx-auto sm:px-6 lg:px-8 md:px-4">

        <Pricing />
        <PricingTable1 />
        <PricingTable2 />
      
      </div>
        <CommonQuestions />
      <div className="  max-w-7xl mx-auto sm:px-6 lg:px-8 md:px-4">

      <ContactUs />
      </div>

    </>
  )
}
