'use client'
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-borders";
import {AuroraBackground} from '@/components/ui/aurora-background'
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-screen"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Suvi
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default HeroSection;
