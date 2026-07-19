FROM node:22-alpine

WORKDIR /app

COPY vite-project .
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

EXPOSE 5173 

ENTRYPOINT ["/entrypoint.sh"]