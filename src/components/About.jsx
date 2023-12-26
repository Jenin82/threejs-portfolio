import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievments, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="hidden md:block">
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <div className="block md:hidden">
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] hidden md:block"
            >
                I'm a skilled web application developer with experience in
                TypeScript, JavaScript and Python, and expertise in frameworks
                like React, Next.js, and Django. I'm a quick learner and
                collaborate closely with my team and clients to create
                efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to
                life!
            </motion.p>
            <p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] block md:hidden"
            >
                I'm a skilled web application developer with experience in
                TypeScript, JavaScript and Python, and expertise in frameworks
                like React, Next.js, and Django. I'm a quick learner and
                collaborate closely with my team and clients to create
                efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to
                life!
            </p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-20 text-secondary text-[17px] max-w-7xl leading-[30px]"
            >
                <div className="flex flex-wrap lg:gap-48 lg:w-full">
                    <div>
                        <h3 className="text-white text-3xl lg:text-5xl font-bold">
                            Acheivements
                        </h3>
                        <ul
                            className="mt-5 list-disc px-5 text-secondary text-[17px] max-w-4xl
                        leading-[30px]"
                        >
                            {achievments.map((point, index) => (
                                <li
                                    key={`experience-point-${index}`}
                                    // className="text-white-100 text-[14px] pl-1 tracking-wider"
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <h3 className="text-white text-3xl lg:text-5xl font-bold">Stats</h3>
                        <div className="mt-5 grid grid-rows-1 md:grid-flow-col gap-8">
                            <div className="text-white text-lg lg:text-xl font-bold">
                                <span className="text-[#915EFF] text-2xl lg:text-4xl">
                                    15+
                                </span>
                                <br />
                                Projects completed
                            </div>
                            <div className="text-white text-lg lg:text-xl font-bold">
                                <span className="text-[#915EFF] text-2xl lg:text-4xl">
                                    1+
                                </span>
                                <br />
                                Years of experience
                            </div>
                        </div>
                    </div>
                </div>
            </motion.p>
        </>
    );
};

export default SectionWrapper(About, "about");
