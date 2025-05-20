// terraform/main.tf

provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "portfolio_host" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  key_name                    = var.key_name
  associate_public_ip_address = true

  tags = {
    Name        = "FelixMorongePortfolio"
    Environment = "DevOpsPortfolio"
    Owner       = "Felix Moronge"
  }

  vpc_security_group_ids = [aws_security_group.portfolio_sg.id]

  user_data = file("${path.module}/user_data.sh") # Used to bootstrap Docker + K8s later

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_eip" "static_ip" {
  instance = aws_instance.portfolio_host.id
  vpc      = true

  tags = {
    Name = "FelixMorongePortfolioEIP"
  }
}
