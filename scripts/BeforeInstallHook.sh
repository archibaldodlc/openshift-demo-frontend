#!/bin/bash
set -e
sudo yum update -y
sudo amazon-linux-extras enable epel
sudo yum install -y epel-release
sudo yum install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx 