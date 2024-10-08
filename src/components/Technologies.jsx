import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
import { RiOpenaiFill, RiReactjsLine } from "react-icons/ri"
import { FaAngular, FaAws, FaDocker, FaGithub, FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"
import { SiAdobexd, SiApachejmeter, SiMicrosoftazure, SiMongodb, SiSelenium, SiSpring, SiSpringboot, SiTypescript } from "react-icons/si"
import { DiDjango, DiRedis } from "react-icons/di"
import { IoLogoAngular } from "react-icons/io"
import { TbBrandReactNative } from "react-icons/tb"

const Technologies = () => {
    const iconVariants=(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease: "linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        }
    })


    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Technologies
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
               
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800  ">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <IoLogoAngular className="text-7xl text-red-600" />
                </motion.div>
                <motion.div variants={iconVariants(9)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <TbBrandReactNative className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(8.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <SiTypescript className="text-7xl text-blue-700" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800">
                    <FaNodeJs className="text-7xl text-green-400" />
                </motion.div>
                <motion.div variants={iconVariants(8)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800">
                    <SiSpringboot className="text-7xl text-green-600" />
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div variants={iconVariants(8)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>
                <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <FaDocker className="text-7xl" style={{color:"#0db7ed"}} />
                </motion.div>
                <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <DiDjango className="text-7xl text-white-600" />
                </motion.div>
              
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <SiAdobexd className="text-7xl text-pink-400" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <FaAws className="text-7xl text-blue-300" />
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <SiMicrosoftazure className="text-7xl text-sky-300" />
                </motion.div>
                <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <FaGithub className="text-7xl text-wheat" />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <SiSelenium className="text-7xl text-green-500" />
                </motion.div>
                <motion.div variants={iconVariants(7)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <SiApachejmeter className="text-8xl text-red-500" />
                </motion.div>
                <motion.div variants={iconVariants(8.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 ">
                    <RiOpenaiFill className="text-7xl text-white" />
                </motion.div>
                 
            </div>
        </div>
    )
}

export default Technologies
