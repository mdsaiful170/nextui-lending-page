import { Accordion, AccordionItem } from "@nextui-org/react";
import { ArrowLeft, Plus } from "lucide-react";
import { useState } from "react";

const faqdata = [
  {
    id: 1,
    q: (
      <h1 className={"text-xl font-bold text-white font-poppins"}>
        What credit score do I need to apply for a credit card?
      </h1>
    ),
    a: (
      <p className="text-base text-[#ADB2B1]">
        The required credit score may vary depending on the specific credit
        card. Generally, a good to excellent credit score (typically 670 or
        above) increases your chances of approval for premium credit cards.
      </p>
    ),
  },
  {
    id: 2,
    q: (
      <h1 className={"text-xl font-bold text-white"}>
        {" "}
        How can I apply for a credit card online?
      </h1>
    ),
    a: (
      <p className="text-base text-[#ADB2B1]">
        Fees can vary depending on the credit card, but they generally fall
        within the range of 2-5% of the purchase amount. Some popular credit
        cards may offer additional fees, such as late fees or interest on unpaid
        balances.
      </p>
    ),
  },
  {
    id: 3,
    q: (
      <h1 className={"text-xl font-bold text-white font-poppins"}>
        What's the best way to pay off my credit card debt?
      </h1>
    ),
    a: (
      <p className="text-base text-[#ADB2B1]">
        Paying off your credit card debt can be a daunting task. However, there
        are several strategies you can employ to minimize your monthly payments
        and increase your credit score. Some popular options include paying off
        your debt in installments, using a credit card consolidation program, or
        utilizing a credit card refinance.
      </p>
    ),
  },
  {
    id: 4,
    q: (
      <h1 className={"text-xl font-bold text-white font-poppins"}>
        What's the difference between a credit card and a loan?
      </h1>
    ),
    a: (
      <p className="text-base text-[#ADB2B1]">
        A credit card is a short-term loan that allows you to borrow money from
        a financial institution. On the other hand, a loan is a long-term loan
        that provides you with a fixed amount of money and interest payments.
        Both credit cards and loans have their own advantages and disadvantages,
        so it's essential to consider the specific needs and preferences of your
        borrower when choosing a financial solution.
      </p>
    ),
  },
  {
    id: 5,
    q: (
      <h1 className={"text-xl font-bold text-white font-poppins"}>
        How can I check my credit card balance and transactions?
      </h1>
    ),
    a: (
      <p className="text-base text-[#ADB2B1]">
        You can check your credit card balance and transactions by visiting your
        bank's website, online banking app, or contacting your credit card
        company directly. Some popular credit card websites and apps include
        American Express, Chase, Discover, and Verve.
      </p>
    ),
  },
  {
    id: 6,
    q: (
      <h1 className={"text-xl font-bold text-white font-poppins"}>
        What should I do if my credit card is lost or stolen?
      </h1>
    ),
    a: "If your credit card is lost or stolen, you may need to contact your bank or credit card company for assistance. Some popular steps to help locate and recover your credit card include calling your bank, sending a lost or stolen card report, and contacting your credit card company directly.",
  },
  {
    id: 7,
    q: (
      <h1 className={"text-xl font-bold text-white font-poppins"}>
        Is my credit card information secure?
      </h1>
    ),
    a: (
      <p className="text-base text-[#ADB2B1]">
        Your credit card information is secure and protected by various
        encryption and security measures. However, it's important to remember
        that hackers may still be able to intercept and steal your credit card
        information if they gain access to your computer or network. It's always
        a good idea to keep your credit card information confidential and use a
        strong, unique password.
      </p>
    ),
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section>
        <div>
          <Accordion
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            {faqdata.map((data, index) => (
              <AccordionItem
                key={data.id}
                title={data.q}
                aria-label={data.q}
                indicator={
                  activeIndex === index ? (
                    <ArrowLeft
                      size={18}
                      className="text-white font-bold !transform-none !transition-none !rotate-0"
                    />
                  ) : (
                    <Plus
                      size={18}
                      className="text-white font-bold !transform-none !transition-none !rotate-0"
                    />
                  )
                }
                className={"border-b border-white pb-2"}
                onClick={() => toggleAccordion(index)}
              >
                {data.a}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Faq;
