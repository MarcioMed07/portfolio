FROM oven/bun 
WORKDIR /app 
COPY package.json . 
RUN bun i 
COPY . . 
RUN bun run build
EXPOSE 8007 
CMD ["bun", "run", "preview", "--host", "--port", "8007"] 
