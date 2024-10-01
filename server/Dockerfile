FROM node:lts AS dependencies
WORKDIR /social-network/backend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts AS builder
WORKDIR /social-network/backend
COPY . .
COPY --from=dependencies /social-network/backend/node_modules ./node_modules/
RUN yarn build

FROM node:lts AS runner
WORKDIR /social-network/backend
ENV NODE_ENV=production

COPY --from=builder /social-network/backend/dist ./dist
COPY --from=builder /social-network/backend/package.json ./package.json
COPY --from=builder /social-network/backend/node_modules ./node_modules

EXPOSE 3001
CMD ["yarn", "start"]