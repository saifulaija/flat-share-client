


'use client';

import SignUpForm from "@/components/Form/SignUpForm";
import { AnimatePresence, motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Register = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex items-center justify-center mt-20 p-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="max-w-5xl w-full space-y-8 border rounded-lg py-4 shadow-md">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h2 className="text-2xl">Register Now</h2>
          </motion.div>
          <motion.div
            className="pb-4 px-6 shadow rounded-lg sm:px-10"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-3/4">
                <SignUpForm />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
