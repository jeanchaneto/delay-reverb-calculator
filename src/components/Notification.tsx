import { motion} from "framer-motion";

const Notification = () => {
  return (
    <motion.div
        initial={{ y: "50%", opacity: 0 }}
        animate= {{y: 0, opacity: 1, transition: {duration: 0.3}}}
        exit= {{ y: "50%", opacity: 0, transition: {duration: 0.3} }}
        className=" flex gap-1 align-baseline backdrop-blur-xl border-1 border-default-800 text-default-800  z-30 rounded-xl p-2 fixed bottom-16 right-16 ">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
              initial={{ pathLength: 0 }}
              animate= {{pathLength: 1, transition: {duration: 0.2, delay: 0.1, ease: "easeInOut"}}}
            />
          </motion.svg>
          Copied to Clipboard
        </motion.div>
  )
}

export default Notification