output "vpc_id" {
  description = "VPC ID created by the VPC module"
  value       = module.vpc.vpc_id
}

output "public_subnets" {
  description = "List of public subnet IDs"
  value       = module.vpc.public_subnets
}

output "private_subnets" {
  description = "List of private subnet IDs"
  value       = module.vpc.private_subnets
}

output "ingress_sg_id" {
  description = "Security Group ID for the Ingress controller"
  value       = aws_security_group.k8s_ingress.id
}

