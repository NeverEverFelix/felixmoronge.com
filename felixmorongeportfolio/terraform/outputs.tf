// terraform/outputs.tf

output "public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_eip.static_ip.public_ip
}

output "ssh_connection" {
  description = "SSH command to connect to your EC2 instance"
  value       = "ssh -i ${path.module}/private_key.pem ubuntu@${aws_eip.static_ip.public_ip}"
}

output "website_url" {
  description = "HTTP URL to access your site (will show React app once deployed)"
  value       = "http://${aws_eip.static_ip.public_ip}"
}
