FROM node:lts as dependencies
WORKDIR /social-network-server
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /social-network-server
COPY . .
COPY --from=dependencies /social-network-server/node_modules ./node_modules/

FROM node:lts as runner
WORKDIR /social-network-server
ENV NODE_ENV production

COPY --from=builder /social-network-server/dist ./dist
COPY --from=builder /social-network-server/package.json ./package.json
COPY --from=builder /social-network-server/node_modules ./node_modules

EXPOSE 5000
CMD ["yarn", "start"]