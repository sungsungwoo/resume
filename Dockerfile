FROM nginx:alpine

# 정적 파일 복사
COPY . /usr/share/nginx/html

# Nginx 설정 교체
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
