This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

.
└── app/
    ├── components/
    │   └── Button/
    │       └── Button.tsx
    ├── home/
    │   ├── TweetsList/
    │   │   └── TweetsList.tsx
    │   ├── Sidebar/
    │   │   └── Sidebar.tsx
    │   ├── page.tsx
    │   └── useTweets.ts
    ├── (auth)/
    │   ├── useAuth.ts
    │   ├── User.ts
    │   ├── sign-up/
    │   │   └── page.tsx
    │   └── login/
    │       └── page.tsx
    ├── hooks/
    │   └── useSomething.ts
    └── utils/
        └── makeThings.ts
