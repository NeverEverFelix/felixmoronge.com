data "aws_caller_identity" "current" {}

locals {
  # 🔒 Hardcoded OIDC issuer — proven stable
  oidc_issuer_clean = "oidc.eks.us-east-1.amazonaws.com/id/5AFC75AC2E3650E2FF68634E39E06AF0"
}

resource "aws_iam_role" "jenkins_irsa_role" {
  name = "jenkins-irsa-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Principal = {
        Federated = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/${local.oidc_issuer_clean}"
      },
      Action = "sts:AssumeRoleWithWebIdentity",
      Condition = {
        StringEquals = {
          "${local.oidc_issuer_clean}:sub" = "system:serviceaccount:jenkins:jenkins"
        }
      }
    }]
  })
}

resource "aws_iam_role_policy" "jenkins_irsa_policy" {
  name = "jenkins-irsa-policy"
  role = aws_iam_role.jenkins_irsa_role.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
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
