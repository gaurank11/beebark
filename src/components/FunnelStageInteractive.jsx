import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ActivityBubbleWithIcon from './ActivityBubbleWithIcon'; // Assuming this path is correct

const FunnelStageInteractive = ({ stageNumber, title, tagline, activities }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full flex flex-col items-center px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 w-full max-w-6xl">
        {/* Stage Number */}
        <div className="text-center md:text-right md:pr-4 w-full md:w-48">
          <div className="text-yellow-400 text-4xl md:text-5xl font-bold">
            {String(stageNumber).padStart(2, '0')}
          </div>
        </div>

        {/* Interactive Ring Container */}
        <motion.div
          className="relative flex-1 w-full flex items-center justify-center p-4 rounded-full border border-yellow-400 transition-all duration-300 overflow-hidden"
          // Animate scale and padding to create the expansion effect.
          // minHeight is set to 'auto' when hovered to allow content to dictate height.
          animate={{
            scale: isHovered ? 1.05 : 1, // Slightly scale up the ring on hover
            minHeight: isHovered ? 'auto' : '160px', // Allow height to be determined by content when hovered
            paddingTop: isHovered ? '40px' : '16px', // Increase vertical padding on hover
            paddingBottom: isHovered ? '40px' : '16px', // Increase vertical padding on hover
          }}
          transition={{ duration: 0.3 }} // Smooth transition for animation
        >
          <AnimatePresence initial={false}>
            {/* Content when not hovered (Title and Tagline) */}
            {!isHovered && (
              <motion.div
                className="text-gray-800 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }} // Faster transition for content fade
              >
                <div className="text-yellow-500 font-semibold text-xl md:text-2xl">{title}</div>
                <div className="text-sm md:text-xl text-gray-700 mt-1">{tagline}</div>
              </motion.div>
            )}

            {/* Content when hovered (Activity Bubbles) */}
            {isHovered && (
              <motion.div
                className="flex flex-wrap justify-center items-center gap-4 w-full" // w-full ensures bubbles wrap correctly
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }} // Faster transition for content fade
              >
                {activities.map((activity, index) => (
                  <ActivityBubbleWithIcon key={index} text={activity} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FunnelStageInteractive;
