# Installing dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compact
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

# Building
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV Production
RUN addgroup -system -gid 1001 nodejs
RUN adduser -system -uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]