import question from "../../assets/question.png";
const CommonQs = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <div>
        <img src={question} alt="" />
      </div>
      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-lg md:text-xl font-medium">
          How do I start the home buying process?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">The home buying process typically starts with getting pre-approved for a mortgage to determine your budget. Then, you can start searching for properties with the help of a real estate agent.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg md:text-xl font-medium">
          What should I consider when choosing a neighborhood?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">Consider factors like location, school districts, amenities, safety, proximity to work, and property appreciation potential.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg md:text-xl font-medium">
          What is the difference between pre-qualification and pre-approval?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">Pre-qualification is an estimate of how much you can borrow based on basic financial information, while pre-approval involves a more thorough analysis of your finances and credit history by a lender.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg md:text-xl font-medium">
          How much should I budget for closing costs?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">Closing costs typically range from 2% to 5% of the purchase price and can include fees for appraisal, title insurance, legal services, and taxes..</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg md:text-xl font-medium">
          What are the benefits of owning a home versus renting?
          </div>
          <div className="collapse-content">
            <p className=" text-sm">Owning a home can provide stability, build equity, potential tax benefits, and the freedom to customize your living space.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonQs;
