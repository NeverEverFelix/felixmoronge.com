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
      text: "No CI/CD pipeline, leading to inconsistent builds, deploys taking up to 45 minutes, and delayed feature delivery",
    },
    {
      id: 2,
      title: "Issue #2",
      text: "Manual SSL and domain setups increased misconfiguration risk, threatening outages and damaging user trust",
    },
    {
      id: 3,
      title: "Issue #3",
      text: "Built directly on EC2 without isolated pipelines, causing inconsistent environments and raising deployment failure risk by ~40",
    },
    {
      id: 4,
      title: "Issue #4",
      text: "No Infrastructure-as-Code, leading to environment drift, manual errors, and costly inconsistencies across deployments",
    },
    {
      id: 5,
      title: "Issue #5",
      text: "Manually sized resources without templates, causing unpredictable AWS costs and making cost control difficult",
    },
    {
      id: 6,
      title: "Issue #6",
      text: "No automated rollbacks meant any failed deploy risked downtime, requiring manual fixes and prolonged outages",
    },
    {
      id: 7,
      title: "Issue #7",
      text: "Manual updates without load balancer orchestration exposed users to errors and downtime during deployments",
    },
    {
      id: 8,
      title: "Issue #8",
      text: "No blue/green or canary releases meant deploy failures hit live traffic instantly, risking outages and user impact",
    },
    {
      id: 9,
      title: "Issue #9",
      text: "No automated environment validation let config errors slip into production, causing failures and longer incident resolution times",
    },
    {
      id: 10,
      title: "Issue #10",
      text: "No version tracking made it hard to trace issues to specific releases, delaying fixes and complicating incident response",
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
