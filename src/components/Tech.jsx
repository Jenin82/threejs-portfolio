import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mb-10 text-center">
                <p className={styles.sectionSubText}>LANGUAGES | FRAMEWORKS | TOOLS</p>
                <h2 className={styles.sectionHeadText}>Tools Used</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
