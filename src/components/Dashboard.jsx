import { motion } from "framer-motion"
import charts from "../assets/charts.json"
import { Player } from '@lottiefiles/react-lottie-player';

export function Dashboard() {
    return (
        <motion.section
            className="dashboardContainer"
            key="dashboard"
            exit={{
                opacity: 0, y: "-200%", transition: {
                    duration: 0.2,
                    ease: "easeInOut"
                }
            }}
            initial={{ opacity: 0, y: "-200%" }}
            animate={{
                opacity: 1, y: 0, transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }}
        >
            <h2 className="welcome">Välkommen till Livsmedelsverkets Dashboard 2.0</h2>

            <div className="chartsContainer">
                <Player
                    autoplay
                    loop
                    src={charts}
                >
                </Player>
            </div>

        </motion.section>
    )
}