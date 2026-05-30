This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




🚀 Live Website

🌐 https://assignment-8-gray.vercel.app

Features
🔐 Authentication system with Better Auth
🐄 Browse all available animals
📄 Animal details page
📱 Fully responsive design
🎨 Modern UI with Tailwind CSS
🔍 Sorting functionality
🖼️ Optimized image loading with Next.js Image
☁️ Deployed on Vercel
🔥 Toast notifications
🗂️ Dynamic routing


🛠️ Technologies Used
Frontend
Next.js 15
React
Tailwind CSS
HeroUI
Backend
Next.js API Routes
Better Auth
MongoDB
Deployment
Vercel
📦 NPM Packages Used
next
react
react-dom
better-auth
mongodb
tailwindcss
react-hot-toast
@heroui/react


⚙️ Environment Variables

Create a .env.local file and add:

BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

DB_URL=your_mongodb_uri

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

💻 Run Locally

Clone the project:

git clone your_repo_link

Install dependencies:

npm install

Run development server:

npm run dev


📁 Project Structure
app/
 ├── allAnimals/
 ├── details/
 ├── login/
 ├── register/
 ├── api/
components/
lib/
public/
🔑 Authentication

This project uses Better Auth for:

Email & Password Login
Registration
Session Management