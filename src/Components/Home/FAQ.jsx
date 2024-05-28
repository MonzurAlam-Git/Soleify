const FAQ = () => {
  return (
    <div className="grid justify-items-center gap-5">
      <h1 className="text-2xl text-center font-bold text-accent">F A Q</h1>
      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I find the right shoe size?
          </div>
          <div className="collapse-content">
            <p>
              We recommend measuring your feet and using our size guide
              available on each product page. You can also visit our store for a
              professional fitting.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>
              You can return any unworn shoes within 30 days of purchase for a
              full refund. Please ensure the shoes are in their original
              condition and packaging.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I care for my shoes?
          </div>
          <div className="collapse-content">
            <p>
              Proper shoe care depends on the material. For leather shoes, use a
              leather conditioner and polish regularly. For fabric and synthetic
              materials, use a gentle cleaner and avoid soaking. Always refer to
              the care instructions provided with your shoes.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer international shipping to most countries. Shipping
              costs and delivery times vary depending on the destination. Please
              check our shipping policy for more details.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I track my order?
          </div>
          <div className="collapse-content">
            <p>
              Yes, once your order is shipped, you will receive a tracking
              number via email. You can use this number to track the delivery
              status of your order on our website or the carrier website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
