import { motion } from "framer-motion";
import "../styles/LegacyIssuesSwipeCards.css";

// Define TypeScript interface for card data
interface CardData {
  id: number;
  title: string;
  text: string;
}

const cardData: CardData[] = [
    {
      id: 1,
      title: "Issue #1",
      text: "Lacked CI/CD, causing inconsistent builds and slow, error-prone releases",
    },
    {
      id: 2,
      title: "Issue #2",
      text: "Manually managed SSL and domain configs, increasing risk of misconfigurations that could trigger outages and compromise service reliability",
    },
    {
      id: 3,
      title: "Issue #3",
      text: "Ran builds directly on EC2 instead of container pipelines, leading to inconsistent environments and higher deployment risk",
    },
    {
      id: 4,
      title: "Issue #4",
      text: "Provisioned environments manually (No IaC), creating drift across instances and increasing risk of configuration errors in cloud deployments",
    },
    {
      id: 5,
      title: "Issue #5",
      text: "Performed manual resource allocation without templates, leading to unpredictable cloud costs and difficulty enforcing resource standards",
    },
    {
      id: 6,
      title: "Issue #6",
      text: "Executed deployments without automated rollbacks, increasing downtime risk and forcing manual interventions to recover from failed releases.",
    },
    {
      id: 7,
      title: "Issue #7",
      text: "Updated servers manually without load balancer coordination, exposing users to errors and downtime during deployments",
    },
    {
      id: 8,
      title: "Issue #8",
      text: "Deployed changes directly to live systems without blue/green or canary strategies, causing any failure to immediately impact production traffic and increase downtime risk.",
    },
    {
      id: 9,
      title: "Issue #9",
      text: "Lacked deployment automation for environment validation, leading to undetected config errors that caused production failures and prolonged incident resolution",
    },
    {
      id: 10,
      title: "Issue #10",
      text: "Performed deployments without change tracking or version tagging, making it difficult to trace issues back to specific releases and prolonging incident resolution",
    },
  ];
  
export default function LegacyIssuesSwipeCards() {
  return (
    <div className="conveyor-wrapper">
      <div className="conveyor-container">
        <motion.div
          className="conveyor-track"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 8,
            ease: "easeInOut",
          }}
        >
          {cardData.map((card) => (
            <motion.div
              className="conveyor-card"
              key={card.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 8,
                ease: "easeInOut",
               }}
            >
              <div className="card-title">{card.title}</div>
              <div className="card-text">{card.text}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="conveyor-fade fade-left" />
      <div className="conveyor-fade fade-right" />
    </div>
  );
}
