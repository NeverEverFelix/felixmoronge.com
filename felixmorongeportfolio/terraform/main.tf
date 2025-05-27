provider "aws" {
  region = "us-east-1"
}

resource "aws_key_pair" "deployer" {
  key_name   = "felixportfoliokey"
  public_key = file("~/.ssh/felixportfoliokey.pub")
}

data "aws_vpc" "default" {
  default = true
}

# resource "aws_security_group" "k8s_sg" {
#   name        = "k8s_security_group"
#   description = "Allow SSH, HTTP, HTTPS, and Kubernetes NodePort range"
#   vpc_id      = data.aws_vpc.default.id
# 
#   ingress {
#     from_port   = 22
#     to_port     = 22
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
# 
#   ingress {
#     from_port   = 80
#     to_port     = 80
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
# 
#   ingress {
#     from_port   = 443
#     to_port     = 443
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
# 
#   ingress {
#     from_port   = 30000
#     to_port     = 32767
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
# 
#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
# }

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "architecture"
    values = ["x86_64"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_iam_role" "ebs_csi_role" {
  name = "ec2-ebs-csi-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Service = "ec2.amazonaws.com"
      },
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_policy" "ebs_csi_policy" {
  name        = "ebs-csi-policy"
  description = "Allows EC2 to interact with EBS volumes for CSI"
  policy      = file("${path.module}/ebs_csi_policy.json")
}

resource "aws_iam_role_policy_attachment" "ebs_csi_attach" {
  role       = aws_iam_role.ebs_csi_role.name
  policy_arn = aws_iam_policy.ebs_csi_policy.arn
}

resource "aws_iam_instance_profile" "ebs_csi_profile" {
  name = "ebs-csi-instance-profile"
  role = aws_iam_role.ebs_csi_role.name
}

resource "aws_instance" "k8s_node" {
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = "t3.large"
  key_name                    = aws_key_pair.deployer.key_name
  # vpc_security_group_ids      = [aws_security_group.k8s_sg.id]
  associate_public_ip_address = true
  iam_instance_profile        = aws_iam_instance_profile.ebs_csi_profile.name

  tags = {
    Name = "devops-k8s-node"
  }
}


