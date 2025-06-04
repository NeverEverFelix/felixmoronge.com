resource "aws_security_group" "k8s_ingress" {
  name        = "k8s-ingress-sg"
  description = "Allow HTTP and HTTPS traffic for Ingress"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "Allow HTTP (port 80)"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Allow HTTPS (port 443)"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Optional: If cert-manager or other webhook services needed
  ingress {
    description = "Allow Webhook Health Checks (port 9443)"
    from_port   = 9443
    to_port     = 9443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name    = "k8s-ingress-sg"
    Project = "felix-devops"
  }
}
