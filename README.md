# felixmoronge.com
felixmoronge.com — Production-Grade Portfolio Infra 🚀

This is the source infrastructure behind https://www.felixmoronge.com, a live, production-grade DevOps portfolio designed to showcase both my engineering projects and the infrastructure that powers them. Built to mirror real-world SaaS-grade environments, this repo demonstrates secure, automated, observable, and scalable infrastructure on AWS using Terraform and Kubernetes.

 Core Infrastructure Overview

1. Infrastructure-as-Code. 2. CI/CD Pipelines. 3. Observability. 4 GitOps. 5. Production-Ready.
Layer	Tooling & Features
IaC	Terraform (modular), OIDC + IRSA, RBAC, scoped IAM roles
Orchestration	Kubernetes (AWS EKS)
CI/CD	Jenkins PodTemplates + Kaniko + GitHub Actions
Secrets	AWS Secrets Manager
Routing	ALB Ingress Controller (Helm) + NGINX Reverse Proxy
Observability	Prometheus + Grafana (Helm) + k6 synthetic testing

CI/CD & GitOps

Fully automated pipeline with zero manual deployments
Jenkins + Kaniko builds/pushes Docker images to ECR
Helm-deployed workloads to EKS
90% deployment time reduction via GitOps-first design
 Security & Scalability

OIDC + IRSA for fine-grained pod-level AWS permissions
RBAC scoped across environments (staging, production)
Blue-green deployment support
Autoscaling enabled (HPA)

 Observability

Prometheus for metrics scraping
Grafana for real-time dashboards (live monitoring)
k6 for load testing (500+ simulated users, p95 < 800ms)
 Why This Matters

This repo isn’t just a portfolio — it’s proof of my ability to:

Build secure, scalable AWS-based Kubernetes environments
Automate end-to-end CI/CD workflows for real projects
Monitor, test, and optimize infrastructure for real performance
Think and ship like a production engineer
🔗 Live Site

👉 https://www.felixmoronge.com


