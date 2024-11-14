/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion";

export default function InsuranceSection() {
  return (
    <section className="py-16 bg-dark-green text-center">
      {/* Main Heading */}
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-paragraphText">
          We believe in the future of AI
        </h2>
        <p className="text-3xl font-bold text-headingText mt-4">
          Your AI Agent is cool! Probably cooler than humans.
          Give it a bit more confidence with insurance coverage
        </p>
      </div>

      {/* Cards Container */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        {/* Card 1 */}
        <div>
          <h3 className="text-lg font-semibold text-headingText text-left mb-2 max-w-[250px]">Free Evaluation of your AI Agent</h3>
          <p className="text-paragraphText text-left max-w-xs mb-4">
            Get a jooj score on your Agent's accuracy and performance after a free evaluation by our AI data science team
          </p>
          <motion.div
            className="relative rounded-tl-lg overflow-hidden"
            style={{
              width: "388px",
              height: "283px",
              borderRadius: "10px 0px 0px 0px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Gradient Background Image */}
            <img
              src="/assets/bg-gradient.webp"
              alt="Gradient Background"
              className="absolute inset-0 w-full h-full object-contain z-0"
            />
            {/* Overlay Image */}
            <img
              src="/assets/img1.webp"
              alt="Overlay Image"
              style={{
                width: "282px",
                height: "213.75px",
              }}
              className="absolute top-20 left-12 z-10"
            />
          </motion.div>
        </div>

        {/* Card 2 */}
        <div>
          <h3 className="text-lg font-semibold text-headingText text-left mb-2 max-w-xs">Discover potential risks and liabilities</h3>
          <p className="text-paragraphText text-left max-w-[200px] mb-4">
            Receive a custom report on the potential risks/liabilities and costs associated
          </p>
          <motion.div
            className="relative rounded-tl-lg overflow-hidden"
            style={{
              width: "388px",
              height: "283px",
              borderRadius: "10px 0px 0px 0px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Gradient Background Image */}
            <img
              src="/assets/bg-gradient.webp"
              alt="Gradient Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Overlay Image */}
            <img
              src="/assets/img2.webp"
              alt="Overlay Image"
              style={{
                width: "282px",
                height: "213.75px",
              }}
              className="absolute bottom-4 left-12 z-10"
            />
          </motion.div>
        </div>

        {/* Card 3 */}
        <div>
          <h3 className="text-lg font-semibold text-headingText text-left max-w-xs mb-2">Get coverage for your Agent’s liabilities</h3>
          <p className="text-paragraphText text-left mb-4 max-w-xs">
            Review options for liability coverage unique to your agent’s industry, jooj score and AI fundamentals
          </p>
          <motion.div
            className="relative rounded-tl-lg overflow-hidden"
            style={{
              width: "388px",
              height: "283px",
              borderRadius: "10px 0px 0px 0px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Gradient Background Image */}
            <img
              src="/assets/bg-gradient.webp"
              alt="Gradient Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Overlay Image */}
            <img
              src="/assets/img3.webp"
              alt="Overlay Image"
              style={{
                width: "282px",
                height: "213.75px",
              }}
              className="absolute top-20 left-12 z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
