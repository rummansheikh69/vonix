"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
function FAQ() {
  const faqs = [
    {
      q: "Do you work with crypto?",
      a: "Yes. We accept crypto and traditional payment methods.",
    },
    {
      q: "What is your typical timeline?",
      a: (
        <>
          <strong>Graphics:</strong> 1–3 business days.
          <br />
          <strong>Development:</strong> Full systems, websites, bots, or
          automation platforms typically take 1–3 weeks depending on scope.
        </>
      ),
    },
    {
      q: "Do you offer post-launch support?",
      a: (
        <>
          Yes –
          <br />
          Ongoing support and optimization options are available after delivery.
        </>
      ),
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div id="faq" className=" max-w-5xl mx-auto px-4 lg:px-0 py-32">
      <div className=" grid md:grid-cols-12 gap-5 ">
        <div className=" col-span-6 h-full">
          <div className=" sticky top-32 h-max">
            <h4 className=" uppercase text-text-gray font-medium tracking-[3px] text-[13px]">
              FAQ
            </h4>
            <h1 className=" text-5xl font-semibold">
              Common <br /> questions
            </h1>
            <p className=" max-w-[400px] text-text-gray mt-4">
              Everything you need to know before getting started. Can't find
              your answer? Reach out on Telegram.
            </p>
          </div>
        </div>

        {/* faq Q&A */}
        <div className=" col-span-6 ">
          <div className="space-y-6">
            {faqs.map((item, i) => {
              const isOpen = active === i;

              return (
                <div
                  onClick={() => setActive(isOpen ? null : i)}
                  key={i}
                  className="border-t border-zinc-800 pt-6 group"
                >
                  {/* Question */}
                  <button className="w-full flex items-center justify-between text-left group">
                    <div className="flex items-center gap-5">
                      <div className="size-8 rounded-lg border border-primary-border group-hover:text-zinc-200 duration-300 flex items-center justify-center text-xs text-text-gray bg-[#0d0d0d]">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <h3 className=" font-medium group-hover:text-zinc-200 transition">
                        {item.q}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className=" size-7 border border-primary-border flex items-center justify-center rounded-md bg-[#0d0d0d]"
                    >
                      <ChevronDown className="size-4 text-text-gray" />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 ml-[52px] text-text-gray text-sm max-w-xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
