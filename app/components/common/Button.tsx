import { motion } from 'framer-motion';

export const Button = ({
  color,
  label,
  mr = '0',
  ml = '0',
  mb = '0',
  mt = '0',
  fontsize = '3xl',
  rounded = '3xl',
  onClick = null,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 1.01 }}
      onClick={onClick}
      className={`flex items-center justify-center height-min w-48 rounded-${rounded} mr-${mr} ml-${ml} mt-${mt} mb-${mb} ${color} py-1.5 px-3 hover:shadow-sm  font-sans font-medium text-white`}
    >
      <p className={`text-${fontsize}`}>{label}</p>
    </motion.div>
  );
};
