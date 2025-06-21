// src/components/GitHubRepoCard.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/GitHubRepoCard.css'; // we’ll define this shortly

type GitHubRepoCardProps = {
  username: string;
  repository: string;
};

export default function GitHubRepoCard({ username, repository }: GitHubRepoCardProps) {
  const [repo, setRepo] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repository}`)
      .then((res) => res.json())
      .then((data) => setRepo(data));
  }, [username, repository]);

  if (!repo) return null;

  return (
    <motion.div
      className="github-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="repo-name">{repo.name}</h3>
      <p className="repo-description">{repo.description}</p>

      <div className="repo-stats">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        {repo.language && <span>🛠 {repo.language}</span>}
      </div>

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
        View Repository →
      </a>
    </motion.div>
  );
}
