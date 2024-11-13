FROM nginx:alpine3.20

COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY dist/ /opt/campinsa-frontend

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]