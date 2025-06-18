import '../styles/Tutorial.css';
import CodeBlock from '../components/CodeBlock';


export default function Tutorial(){
    return(
        <div className="tutorial-container">
        <h1 className="tutorial-title">
          CI/CD, Docker, and EC2 — Your First Live Deployment<br />
          <span className="subline">(and Why It’s Not Enough)</span>
        </h1>
        <div className="divider-casestudy full" />
        <div className="tutorial-learn-section">
  <h2 className="learn-subheading">What You'll Learn</h2>
  <p className="learn-body">
    This tutorial is a beginner-friendly, production-aware guide to deploying a real application using:
  </p>
  <ul className="learn-list">
    <li>GitHub Actions (CI/CD automation)</li>
    <li>Docker (containerization)</li>
    <li>AWS EC2 (manual cloud hosting)</li>
    <li>TLS + DNS (basic domain security)</li>
  </ul>
  <p className="learn-body">
    It’s not just a how-to. It’s a lesson in why manual infrastructure eventually fails, and why the next step is automation, reproducibility, and real-world DevOps tooling.
  </p>
</div>
<div className="divider-casestudy full" />
<div className="tutorial-teaches-section">
  <h2 className="teaches-subheading">What This Teaches You</h2>
  <p className="teaches-body">
    You’ll walk away understanding:
  </p>
  <ul className="teaches-list">
    <li>How to containerize a Node.js app with Docker</li>
    <li>How to automate your CI/CD with GitHub Actions</li>
    <li>How to SSH into and prepare an EC2 instance manually</li>
    <li>How to push Docker images and deploy them on AWS</li>
    <li>How to configure TLS with Certbot</li>
    <li>Why this setup is fragile — and why you must evolve to Infrastructure as Code (IaC)</li>
  </ul>
  <p className="teaches-purple-text">
    This is the CI/CD version of your first production deployment. It's what most developers get wrong when shipping something live. But it's also what teaches you why you need to evolve.
  </p>
</div>
<div className="divider-casestudy full" />
<div className="techstack-section">
  <h2 className="techstack-title">Tech Stack</h2>
  <div className="techstack-table">
    <div className="techstack-row techstack-header">
      <div className="techstack-cell label">Component</div>
      <div className="techstack-cell label">Tech Used</div>
    </div>

    <div className="techstack-row">
      <div className="techstack-cell">Frontend</div>
      <div className="techstack-cell">React + Vite</div>
    </div>

    <div className="techstack-row">
      <div className="techstack-cell">Backend</div>
      <div className="techstack-cell">Node.js + Express + OpenAI</div>
    </div>

    <div className="techstack-row">
      <div className="techstack-cell">Infrastructure</div>
      <div className="techstack-cell">Docker, GitHub Actions, EC2, Certbot</div>
    </div>

    <div className="techstack-row">
      <div className="techstack-cell">CI/CD</div>
      <div className="techstack-cell">GitHub Actions</div>
    </div>

    <div className="techstack-row">
      <div className="techstack-cell">Live Site</div>
      <div className="techstack-cell">storybuilder.online</div>
    </div>

    <div className="techstack-row">
      <div className="techstack-cell">Observability</div>
      <div className="techstack-cell error">❌ None (explained below)</div>
    </div>

    <div className="techstack-row">
      <div className="techstack-cell">Secrets Mgmt</div>
      <div className="techstack-cell error">❌ None (explained below)</div>
    </div>
  </div>
</div>

<div className="divider-casestudy full" />

<div className="tutorial-phase-section">
  <h3 className="phase-heading">Phase One: Containerize With Docker</h3>
  <h2 className="phase-title">What is Docker?</h2>
  <p className="phase-description">
    Docker is a platform for developing, shipping, and running applications using lightweight containers.
    A container packages code, runtime, libraries, and dependencies so your application runs the same regardless of the environment.
  </p>
  <p className="phase-description">
    This solves the classic problem: "It worked on my machine!" — by ensuring your app always runs in an isolated, predictable environment.
  </p>
  <div className="divider-casestudy full" />
</div>
<div className="tutorial-dockerfile-section">
  <h2 className="dockerfile-title">What is a Dockerfile?</h2>
  <p className="dockerfile-paragraph">
    A Dockerfile is a script-like set of instructions for building a Docker image.
  </p>
  <p className="dockerfile-paragraph">It tells Docker:</p>
  <ul className="dockerfile-list">
    <li>What base image to use</li>
    <li>What files to copy</li>
    <li>What commands to run</li>
    <li>What ports to expose</li>
    <li>What command starts the container</li>
  </ul>
  <p className="dockerfile-paragraph">
    A Dockerfile is declarative infrastructure — the foundation of Infrastructure as Code.
  </p>
  <div className="divider-casestudy full" />
</div>
<div className="tutorial-containerization-section">
  <h2 className="containerization-title">
    Why Containerization<br />Matters in Production
  </h2>
  <ul className="containerization-list-centered">
    <li><span className="green-highlight">Portability:</span> Works anywhere Docker is supported (local, cloud, Kubernetes)</li>
    <li><span className="green-highlight">Reproducibility:</span> Same image = same behavior across teams/environments</li>
    <li><span className="green-highlight">Isolation:</span> Keeps dependencies separate, avoids system conflicts</li>
    <li><span className="green-highlight">Scalability:</span> Containers are the unit of deployment in Kubernetes, ECS, etc.</li>
  </ul>
  <div className="divider-casestudy full" />
</div>
<div className="tutorial-code-section">
  <h2 className="dockerfile-title">
    Here's the StoryBuilder Dockerfile —<br />Line-by-Line
  </h2>

  <h3 className="code-step">Step 1:</h3>

  <CodeBlock
    language="yaml"
    code={`
# ----- Step 1: Build Frontend -----
FROM node:18-alpine AS frontend
`}
  />
  <p className="code-explanation">
    <strong>Explanation:</strong> <br />
    “<code>FROM</code>” specifies the base image that this Docker build stage starts from. It must always be the first command in any Dockerfile.
    <br /><br />
    “<code>node:18-alpine</code>” refers to the Node.js Docker image version 18 based on the Alpine Linux distribution. This image is a minimal,
    security-focused, and lightweight image. Use this image as a base for lightweight applications.
    <br /><br />
    Small base images mean faster builds, fewer vulnerabilities, and quicker deployments.
    <br /><br />
    “<code>AS frontend</code>” gives the current build stage a name that you can reference and reuse later in the same Dockerfile in another stage like this:<br />
    <code>COPY --from=frontend ...</code>
  </p>
</div>
<div className="tutorial-code-section">
  <h3 className="code-step">Step 2:</h3>
  <CodeBlock
    language="yaml"
    code={`
WORKDIR /app
COPY package*.json ./
RUN npm install
`}
  />
  <p className="code-explanation">
    The line <code>WORKDIR /app</code> sets the working directory inside the container to <code>/app</code>,
    meaning all following commands will execute from that path. This avoids having to use full file paths like <code>/app/package.json</code>
    or running <code>cd /app</code> manually in every instruction.
    <br /><br />
    Next, <code>COPY package*.json ./</code> brings in just the <code>package.json</code> and <code>package-lock.json</code> files
    from your local machine into the container. This step is important for Docker layer caching — if these files haven’t changed,
    Docker can skip re-running <code>npm install</code>, dramatically speeding up builds in CI/CD pipelines.
    <br /><br />
    Then, <code>RUN npm install</code> installs all the required Node.js dependencies into <code>/app/node_modules</code> inside the container.
    <br /><br />
    Installing dependencies this way keeps your host system clean, guarantees deterministic builds by locking versions,
    and avoids bugs caused by using host-installed modules.
    <br /><br />
    Together, these three instructions enable efficient caching, clean and reproducible builds, and lay the groundwork for a proper multi-stage production build.
  </p>
</div>
<div className="tutorial-code-section">
  <h3 className="code-step">Step 3:</h3>

  <CodeBlock
    language="yaml"
    code={`
# ----- Step 2: Set up Backend -----
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY --from=frontend /app/dist ./dist

EXPOSE 5001

CMD ["node", "server.js"]
`}
  />

  <p className="code-explanation">
    This second stage begins with <code>FROM node:18-alpine</code>, using a lightweight Node.js base image to optimize final image size.
    <br /><br />
    The <code>WORKDIR /app</code> instruction sets the working directory, ensuring all subsequent commands run from there.
    <code>COPY package*.json ./</code> and <code>RUN npm install</code> follow the same caching pattern as the frontend:
    they copy only the dependency manifests and install backend dependencies inside the container, enabling efficient rebuilds.
    <br /><br />
    Then, <code>COPY . .</code> brings in the backend source code.
    Crucially, <code>COPY --from=frontend /app/dist ./dist</code> imports the frontend build artifacts from the previous stage —
    allowing the backend to serve the prebuilt frontend.
    <br /><br />
    <code>EXPOSE 5001</code> declares the port your app will run on inside the container, and <code>CMD ["node", "server.js"]</code>
    tells Docker what command to run to start your backend service.
  </p>
</div>
<div className="tutorial-phase-section">
  <h3 className="phase-heading">Phase Two: CI/CD with GitHub Actions</h3>
  <h2 className="ci-disclaimer">Disclaimer</h2>
  <p className="ci-warning">Why This Isn’t Production-Grade (And Why That Matters)</p>

  <div className="ci-limitations-table">
    <div className="ci-row ci-header">
      <div className="ci-col">Limitation</div>
      <div className="ci-col">Why it Breaks<br />Production</div>
    </div>

    <div className="ci-row">
      <div className="ci-col">Manual EC2 Setup</div>
      <div className="ci-col">No reproducibility, can’t<br />auto-scale, fragile</div>
    </div>

    <div className="ci-row">
      <div className="ci-col">Single Docker Image</div>
      <div className="ci-col">No separation of frontend/<br />backend, no rollback control</div>
    </div>

    <div className="ci-row">
      <div className="ci-col">No IAM / Secrets Mgmt</div>
      <div className="ci-col">Security risk: exposed keys</div>
    </div>

    <div className="ci-row">
      <div className="ci-col">No Monitoring</div>
      <div className="ci-col">You won’t know if it’s down</div>
    </div>

    <div className="ci-row">
      <div className="ci-col">No IaC</div>
      <div className="ci-col">No versioning, no<br />automation, no repeatability</div>
    </div>
    <div className="ci-reflection-pill">
  <p>
    It gave me my first exposure to <span className="ci-highlight">CI/CD, containers, and automated deploys</span>
  </p>
  <p>
    I shipped a live product under a real domain and HTTPS
  </p>
  <p>
    I learned what breaks — and what real infra must solve
  </p>
  <p>
    It became the turning point for learning Kubernetes,<br />
    Terraform, and real DevOps principles
  </p>
</div>
  </div>
  <div className="divider-casestudy full" />
</div>
<div className="cicd-definition-section">
  <h2 className="cicd-title">What is CI/CD?</h2>
  <p className="cicd-description">
    CI/CD stands for Continuous Integration and Continuous Deployment. It’s a methodology where code changes are:
  </p>
  <ul className="cicd-list">
    <li>Integrated automatically via version control (CI)</li>
    <li>Deployed automatically to an environment (CD)</li>
  </ul>
  <p className="cicd-description">
    This ensures faster iteration, safer delivery, and a unified team workflow.
  </p>
</div>
<div className="cicd-code-section">
  <CodeBlock
    language="yaml"
    code={`
name: Deploy to EC2 on Merge to Main

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: SSH and run deploy.sh on EC2
        uses: appleboy/ssh-action@v0.1.6
        with:
          host: \${{ secrets.SERVER_IP }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd project-003-story-builder-team-2
            bash deploy.sh
    `}
  />
</div>
<div className="cicd-code-explanation">
  <ul className="cicd-code-list">
    <li><strong>name:</strong> Title for the workflow in GitHub UI.</li>
    <li><strong>on.push.branches.main:</strong> Trigger workflow when pushing to main — simulating a production merge.</li>
    <li><strong>jobs.deploy.runs-on:</strong> Use the latest Ubuntu runner.</li>
    <li><strong>appleboy/ssh-action:</strong> GitHub Action that SSHs into EC2 and runs deploy.sh.</li>
    <li><strong>with.host/username/key:</strong> Injects EC2 login credentials via GitHub secrets.</li>
    <li><strong>script:</strong> This line SSHs into your server, enters the project directory, and executes your deployment logic.</li>
  </ul>
</div>
<div className="cicd-code-section">
  <CodeBlock
    language="bash"
    code={`
#!/bin/bash

set -e

PROJECT_DIR="project-003-story-builder-team-2"
APP_NAME="storybuilderdemo1"
TEMP_NAME="\${APP_NAME}-temp"
LIVE_PORT=5001
TEMP_PORT=5002

echo "🔄 Changing to project directory..."
cd ~/\$PROJECT_DIR

echo "📥 Pulling latest changes from main branch..."
git pull origin main

echo "🐳 Building temporary Docker image..."
docker build -t \$TEMP_NAME -f my-app/Dockerfile my-app

echo "🚀 Running temporary container on port \$TEMP_PORT..."
docker run -d --name \$TEMP_NAME -p \$TEMP_PORT:\$LIVE_PORT \$TEMP_NAME

echo "⏳ Waiting for container to initialize..."
sleep 5

echo "🧪 Health checking temporary container..."
if curl -fs http://localhost:\$TEMP_PORT > /dev/null; then
    echo "✅ Health check passed. Deploying new version..."

    echo "🛑 Stopping existing container..."
    docker stop \$APP_NAME || true
    docker rm \$APP_NAME || true

    echo "📦 Tagging new image and starting on live port..."
    docker tag \$TEMP_NAME \$APP_NAME
    docker run -d --name \$APP_NAME -p \$LIVE_PORT:\$LIVE_PORT \$APP_NAME

    echo "🧹 Cleaning up temporary container and image..."
    docker stop \$TEMP_NAME || true
    docker rm \$TEMP_NAME || true
    docker image rm \$TEMP_NAME || true

    echo "🎉 Deployment successful and live at http://<your-ec2-ip>:\$LIVE_PORT"
else
    echo "❌ Health check failed. Rolling back..."
    docker stop \$TEMP_NAME || true
    docker rm \$TEMP_NAME || true
    docker image rm \$TEMP_NAME || true
    echo "🔁 Live container remains untouched."
    exit 1
fi
    `}
  />
</div>
<div className="cicd-fragility-section">
  <ul className="cicd-fragility-list">
    <li>• Blue/Green Deployment: Spins up a temp container, tests it,<br />then swaps it live only if healthy.</li>
    <li>• ✅ Rollback Protection: Leaves the live container untouched on failure.</li>
    <li>• ✅ Scripted Delivery: Automates repeatable deploys without GUI login</li>
  </ul>

  <p className="cicd-fragility-warning">🚨 Why This Is Fragile in Real Production</p>

  <ul className="cicd-fragility-list red">
    <li>❌ SSH Dependency: SSH-based deploys don’t scale or allow RBAC/security boundaries</li>
    <li>• ❌ No Secrets Management: Environment variables like <code>TEMP_NAME</code> are undeclared or insecure</li>
    <li>• ❌ No Logging/Monitoring: You have no visibility into what's failing</li>
    <li>• ❌ Hardcoded Paths: Any directory structure change breaks deployment</li>
    <li>• ❌ No Observability: Cannot alert, retry, or visualize deploy success</li>
  </ul>

  <p className="cicd-fragility-recommendation">🍀 Why You Should Move to a Real CI/CD Engine</p>
  <p className="cicd-fragility-note">
    In real production systems:
    <br />• Use tools like Jenkins, GitHub Actions + Kaniko, or ArgoCD
    <br />• Replace shell scripts with declarative pipelines (with rollback, caching, secrets)
  </p>
</div>
<div className="cicd-next-section">
  <h2 className="cicd-next-title">What Comes Next (and Why It Matters)</h2>
  <p className="cicd-next-description">
    After this tutorial, you’ll understand why Infrastructure as Code is non-negotiable:
  </p>
  <ul className="cicd-next-list">
    <li>• Manual servers don’t scale or recover</li>
    <li>• <span className="bold">Real infra requires version control, isolation, and rollback</span></li>
    <li>• IaC tools like Terraform + Helm + Jenkins bring reproducibility and resiliency</li>
    <li>• CI/CD should be event-driven, observable, and testable</li>
  </ul>
  <p className="cicd-next-tutorial">
  Next tutorial:{' '}
  <a href="/Tutorial2" className="highlight">
    Intermediate — Full IaC, EKS, Jenkins, and Helm
  </a>
</p>
</div>
      </div>
    );
}
