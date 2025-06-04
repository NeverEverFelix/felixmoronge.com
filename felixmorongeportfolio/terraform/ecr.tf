resource "aws_iam_user" "terraform_admin" {
  name = "terraform-admin"
}

resource "aws_iam_user_policy" "terraform_admin_ecr_inline" {
  name = "terraform-admin-ecr-inline"
  user = aws_iam_user.terraform_admin.name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:PutImage",
          "ecr:InitiateLayerUpload",
          "ecr:UploadLayerPart",
          "ecr:CompleteLayerUpload",
          "ecr:CreateRepository"
        ],
        Resource = "*"
      }
    ]
  })
}

resource "aws_ecr_repository" "portfolio" {
  name                 = "felixmoronge-portfolio"
  image_tag_mutability = "MUTABLE"

  encryption_configuration {
    encryption_type = "AES256"
  }

  force_delete = true
}
