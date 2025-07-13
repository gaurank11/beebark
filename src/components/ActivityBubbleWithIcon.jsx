// src/components/ActivityBubbleWithIcon.jsx
// ... (same as before, with FaBullhorn or a valid alternative)
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaSearch, FaFunnelDollar, FaLaptopCode, FaAd, FaBlog, FaMailBulk,
  FaBookOpen, FaCalendarAlt, FaUsers, FaFileAlt, FaQuestionCircle, FaBullhorn
} from 'react-icons/fa';

const iconMap = {
  'SEO': FaSearch, 'SEM/PPC': FaFunnelDollar, 'Blogging': FaBlog,
  'Content Marketing': FaBookOpen, 'Advertising': FaAd, 'Email Marketing': FaMailBulk,
  'Case Studies': FaFileAlt, 'Marketing Automation': FaLaptopCode, 'Events': FaCalendarAlt,
  'Webinars': FaLaptopCode, 'Demos': FaUsers, 'Sales Collateral': FaFileAlt,
  'Customer Testimonials': FaUsers, 'Product Tutorials': FaBookOpen,
  'Help Guides': FaBookOpen, 'Brand Products': FaBullhorn,
};

const bubbleVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15 } },
  exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2 } }
};

const ActivityBubbleWithIcon = ({ text }) => {
  const IconComponent = iconMap[text] || FaQuestionCircle;
  return (
    <motion.div
      className="flex items-center space-x-2 bg-purple-700 text-white rounded-full px-4 py-2 shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-105"
      variants={bubbleVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <IconComponent className="text-lg" />
      <span className="text-sm font-medium whitespace-nowrap">{text}</span>
    </motion.div>
  );
};

export default ActivityBubbleWithIcon;