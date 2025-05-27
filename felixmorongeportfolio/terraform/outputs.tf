output "public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.k8s_node.public_ip
}
output "ssh_command" {
  description = "SSH command to access the EC2 instance"
  value       = "ssh -i ~/.ssh/felixportfoliokey ubuntu@${aws_instance.k8s_node.public_ip}"
}