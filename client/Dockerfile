FROM node:lts as dependencies
WORKDIR /social-network-frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /social-network-frontend
COPY . .
COPY --from=dependencies /social-network-frontend/node_modules ./node_modules/
RUN yarn build

FROM node:lts as runner
WORKDIR /social-network-frontend
ENV NODE_ENV production

COPY --from=builder /social-network-frontend/public ./public
COPY --from=builder /social-network-frontend/package.json ./package.json
COPY --from=builder /social-network-frontend/.next ./.next
COPY --from=builder /social-network-frontend/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]