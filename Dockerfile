from node

COPY . .
RUN npm i
RUN npm run build

ENTRYPOINT [ "npm", "start" ]