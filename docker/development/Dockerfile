FROM node:22-alpine

# Add the `libc6-compat` package to avoid missing shared library required for use of `process.dlopen`.
# @see https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine for more info.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# same as npm run dev
CMD ["npm", "run", "dev"]
