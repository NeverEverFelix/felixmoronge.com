// terraform/variables.tf

variable "aws_region" {
  type        = string
  default     = "us-east-2"
  description = "The AWS region to deploy resources in."
}

variable "instance_type" {
  type        = string
  default     = "t4g.small"
  description = "Instance type for the EC2 host."
}

variable "ami_id" {
  type        = string
  description = "AMI ID for the Ubuntu ARM EC2 image."
}

variable "key_name" {
  type        = string
  default     = "felixmorongeportfolio.com"
  description = "Name of the SSH key to associate with EC2 instance."
}
