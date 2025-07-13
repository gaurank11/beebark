// src/components/FunnelStageInteractive.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ActivityBubbleWithIcon from './ActivityBubbleWithIcon';

const FunnelStageInteractive = ({ stageNumber, activities, ellipseTop, ellipseHeight }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate approximate vertical center for the bubbles to appear
  const bubbleContainerY = ellipseTop; // Adjust based on your SVG positioning

  return (
    <motion.div
      className="absolute w-full flex items-start"
      style={{ top: `${ellipseTop}px`, height: `${ellipseHeight}px` }} // Position based on ellipse
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Optional: Add a subtle hover effect to the number itself
      whileHover={{ scale: 1.05 }}
    >
      {/* Numbered Label */}
      <div className="text-6xl font-bold text-gray-500 z-10" style={{ transform: 'translateY(-20px)', marginLeft: '100px' }}> {/* Adjust positioning */}
        {String(stageNumber).padStart(2, '0')}
      </div>

      {/* Container for Activity Bubbles - positioned absolutely within the stage area */}
      <div
        className="absolute w-full flex flex-wrap justify-center items-center gap-x-6 gap-y-4" // Adjust gaps
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '800px' }} // Center it within the stage area
      >
        <AnimatePresence>
          {isHovered && (
            activities.map((activity, index) => (
              <ActivityBubbleWithIcon key={activity} text={activity} />
            ))
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FunnelStageInteractive;