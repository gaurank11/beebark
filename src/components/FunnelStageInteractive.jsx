import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ActivityBubbleWithIcon from './ActivityBubbleWithIcon';

const FunnelStageInteractive = ({ stageNumber, title, tagline, activities }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full flex flex-col items-center px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 w-full max-w-6xl">
        <div className="text-center md:text-right md:pr-4 w-full md:w-48">
          <div className="text-yellow-400 text-4xl md:text-5xl font-bold">
            {String(stageNumber).padStart(2, '0')}
          </div>
        </div>

        <motion.div
          className="relative flex-1 w-full min-h-[120px] md:min-h-[160px] transition-all duration-300"
          animate={{ height: isHovered ? 220 : 160 }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full border border-yellow-400 transition-all duration-300"
            animate={{ scale: isHovered ? 1.05 : 1 }}
          ></motion.div>

          <div className="absolute w-full h-full flex items-center justify-center px-4 text-center">
            <AnimatePresence initial={false}>
              {!isHovered && (
                <motion.div
                  className="text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-yellow-500 font-semibold text-sm md:text-base">{title}</div>
                  <div className="text-xs md:text-sm text-gray-700 mt-1">{tagline}</div>
                </motion.div>
              )}

              {isHovered && (
                <motion.div
                  className="flex flex-wrap justify-center items-center gap-4 px-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {activities.map((activity, index) => (
                    <ActivityBubbleWithIcon key={index} text={activity} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FunnelStageInteractive;