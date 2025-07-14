import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye } from 'react-icons/fa';

const ActivityBubbleWithIcon = ({ text }) => {
  return (
    <motion.div
      className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <FaBullseye className="text-white text-xs" />
      {text}
    </motion.div>
  );
};

export default ActivityBubbleWithIcon;