import { motion } from "framer-motion"
import error404 from "../assets/error404.json"
import { Player } from '@lottiefiles/react-lottie-player';

export function NotFound() {
    return (
        <motion.section
            className="notFoundContainer"
            key="notfound"
            exit={{
                opacity: 0, x: "-200%", transition: {
                    duration: 0.2,
                    ease: "easeInOut"
                }
            }}
            initial={{ opacity: 0, x: "-200%" }}
            animate={{
                opacity: 1, x: 0, transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }}
        >
            <Player
                autoplay
                loop
                src={error404}
            >
            </Player>
        </motion.section>
    )
}