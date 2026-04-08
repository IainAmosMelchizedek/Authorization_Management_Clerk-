# Authorization Management with Clerk
### A Complete Walkthrough for People New to Web Development

---

## Before Anything Else — Read This First

If you are new to building web applications, this guide was written for you.

You may have built something — a website, a tool, an app — and now you want users to be able to **create an account and log in**. That feature is called **authentication** (sometimes called **auth** for short) or **authorization management**. It sounds simple, but building it from scratch is one of the more complex and security-sensitive things a developer can do. One mistake and user data is at risk.

This is why tools like **Clerk** exist. Clerk is a trusted, professionally maintained service that handles all of the login and signup complexity for you. It is free to start, takes minutes to set up, and is used by real companies in production.

---

## What Is a Template — And Why Are You Here?

A **template** is a pre-built, working example of how something is set up. Think of it like a practice run or a dry run before the real thing.

Before you connect an authentication tool to your *real* application — the one you have already built or are currently building — it is smart to first practice on a **safe, throwaway project** where mistakes do not matter. That is exactly what this repo is for.

By following this walkthrough you will:
1. Set up a brand new practice app on your own computer
2. Connect it to Clerk, a real authentication system
3. Sign in as a real user and watch it work
4. Push your code to GitHub
5. Deploy it live on the internet using Vercel
6. Walk away knowing exactly how to repeat the process on your real app

Nothing here touches your real application. This is a sandbox — a safe place to learn.

---

## Two Ways to Use This Repo

**Option A — Build it from scratch (recommended for beginners)**
Follow every step in this guide from the beginning. You will create everything yourself, which means you will actually understand what each piece does. This is the best way to learn.

**Option B — Clone this repo and run it**
If you already know how to use Git and just want to see a working example, you can clone this repo directly:
```bash
git clone https://github.com/IainAmosMelchizedek/Authorization_Management_Clerk-.git
cd Authorization_Management_Clerk-
npm install
```
Then skip to **Step 3 — Add Your Clerk API Keys**.

> **What is cloning?** Cloning means downloading an exact copy of someone else's code repository onto your own computer so you can run it or learn from it. If you are not sure what that means yet, start with Option A.

---

## What Is Clerk?

**Clerk** is an authentication and user management platform. In plain language, it is the system that:
- Shows users a **Sign Up** and **Sign In** page
- Securely stores their email, password, or social login (Google, GitHub, etc.)
- Gives your app a way to know **who is logged in** at any given moment
- Handles password resets, email verification, and account security for you

You do not have to build any of that yourself. Clerk does it. You just connect your app to it.

---

## What Is Next.js?

**Next.js** is a popular framework for building web applications using JavaScript. A framework is a set of tools and conventions that make building faster and more organized. You do not need to deeply understand Next.js to follow this walkthrough — just know that it is what we are building on top of.

---

## What You Need Before You Start

You will need five things installed or set up before beginning. Here is exactly how to check each one.

---

### 1. A Computer Running Windows, Mac, or Linux
This walkthrough works on all three. Where steps differ, instructions for each are shown.

---

### 2. Node.js (Version 18 or Higher)

**What is Node.js?** It is the engine that runs JavaScript on your computer outside of a browser. Without it, you cannot run a Next.js app locally.

**On Windows:**
1. Press the **Windows key** on your keyboard
2. Type `PowerShell` and press Enter — do NOT right-click and run as Administrator, regular mode is fine
3. A blue or black window will open — this is your terminal
4. Type the following exactly and press Enter:
   ```
   node -v
   ```
5. You should see something like this:
   ```
   v22.16.0
   ```
   Any version starting with `v18` or higher means you are good to go.
6. If you see `"node" is not recognized` — you need to install it (see below)

**On Mac:**
1. Press **Cmd + Space**, type `Terminal`, and press Enter
2. Type `node -v` and press Enter — same result applies

**If you need to install Node.js:**
Go to [nodejs.org](https://nodejs.org) and download the **LTS** version (LTS stands for Long Term Support — it is the stable, recommended version). Run the installer and follow the prompts. When finished, close and reopen your terminal and run `node -v` again to confirm.

---

### 3. VS Code (Visual Studio Code)

**What is VS Code?** It is a free code editor made by Microsoft. Think of it like Microsoft Word, but for writing and reading code. It makes navigating project files much easier.

Download and install it here: [code.visualstudio.com](https://code.visualstudio.com)

---

### 4. A Free Clerk Account

Go to [clerk.com](https://clerk.com) and sign up. No credit card is required. You can use Google, GitHub, or your email address to create an account.

---

### 5. A Free GitHub Account

**What is GitHub?** It is where developers store their code online. Think of it like Google Drive, but specifically built for code projects. It also lets you download other people's projects — which is how Option B above works.

Sign up at [github.com](https://github.com). A free account is all you need.

---

---

### 6. Git and Git Bash

**What is Git?** It is the system that tracks changes to your code and lets you push it to GitHub. Without it, you cannot complete Steps 6 and 7 of this walkthrough.

**On Windows:**

Windows does not come with Git installed. You need to install **Git Bash** — a terminal application that gives you both Git and a Unix-style terminal in one package.

1. Go to [gitforwindows.org](https://gitforwindows.org)
2. Click **Download** and run the installer
3. Accept all the default options and click through to finish
4. When done, press the **Windows key**, type `Git Bash`, and press Enter
5. A terminal window will open — you are ready to go

**On Mac:**

Mac handles Git automatically. Open Terminal and type: git --version

If Git is installed you will see something like: git version 2.39.0

If it is not installed, your Mac will automatically prompt you to install **Xcode Command Line Tools** — click Install and follow the prompts. Git is included.

**On Linux:**

Run this in your terminal: sudo apt install git

## Step 1 — Create Your Clerk Application

1. Log into your Clerk dashboard at [dashboard.clerk.com](https://dashboard.clerk.com)
2. Click **Create Application**
3. Give it any name you want — for this practice walkthrough, something like `clerk-test` is fine
4. Leave the default sign-in options as they are (Email and Google are enabled by default) and click **Create Application**
5. You will land on a page that shows your **API keys** — two long strings of characters
6. **Keep this browser tab open.** You will need these keys in Step 3.

---

## Step 2 — Create a Practice Next.js App on Your Computer

Open PowerShell (Windows) or Terminal (Mac) and follow along exactly.

First confirm Node.js is ready:
```
node -v
```
Expected output:
```
v22.16.0
```

Now create your practice app:
```
npx create-next-app@latest clerk-test --yes
```

It will ask you to confirm. Type `y` and press Enter:
```
Need to install the following packages:
  create-next-app@16.2.2
Ok to proceed? (y) y
```

It will then run automatically and install everything. This takes one to two minutes. Your output will look like this:

```
Creating a new Next.js app in C:\Users\YourName\clerk-test.
Using npm.
Initializing project with template: app-tw

Installing dependencies:
- next
- react
- react-dom

Installing devDependencies:
- typescript
- tailwindcss
- eslint
(... and others)

added 358 packages, and audited 359 packages in 42s
✓ Types generated successfully
Initialized a git repository.
Success! Created clerk-test at C:\Users\YourName\clerk-test
```

> You may see a notice about a new version of npm being available. You can safely ignore that for now.

Now move into your new project folder:
```
cd clerk-test
```

Your terminal prompt will change to show you are inside it:
```
PS C:\Users\YourName\clerk-test>
```

Now install Clerk:
```
npm install @clerk/nextjs
```

Expected output:
```
added 13 packages, and audited 372 packages in 5s
found 0 vulnerabilities
```

Now open the project in VS Code:
```
code .
```

VS Code will open automatically with your project files visible in the left sidebar panel. You are ready for the next step.

---

## Step 3 — Add Your Clerk API Keys

Your app needs to know which Clerk account it belongs to. You do this by adding your API keys to a special private file.

1. In VS Code, look at the left sidebar where your project files are listed
2. Click the **New File** icon at the top of the sidebar (it looks like a page with a small plus sign)
3. Name the file exactly:
   ```
   .env.local
   ```
   Make sure it appears in the root of the project — the main folder level, not inside any subfolder like `app`

4. Inside the file, type these two lines:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```
5. Go back to your Clerk dashboard tab from Step 1 and copy your actual keys, replacing the placeholder text above
6. Press **Ctrl+S** (Windows) or **Cmd+S** (Mac) to save

Your file should look like this in VS Code (your actual key values will be much longer):

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxx
```

> **Never share these keys publicly.** Do not paste them into a chat, an email, or a public post. The `.gitignore` file in this project already prevents `.env.local` from being uploaded to GitHub automatically — your keys stay on your computer only.

---

## Step 4 — Create the Required Project Files

You need to create two files and update one existing file. Follow each sub-step carefully.

### 4a — Create `proxy.ts`

1. In VS Code, click the **New File** icon in the sidebar again
2. Name it exactly:
   ```
   proxy.ts
   ```
   Place it in the root of the project (same level as `.env.local`)

3. Paste this code inside it:
   ```typescript
   import { clerkMiddleware } from '@clerk/nextjs/server'

   export default clerkMiddleware()

   export const config = {
     matcher: [
       '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
       '/(api|trpc)(.*)',
     ],
   }
   ```
4. Press **Ctrl+S** to save

**What does this file do?** It tells Next.js to run Clerk's security check on every page of your app — so Clerk always knows whether a user is logged in or not.

---

### 4b — Update `app/layout.tsx`

1. In the left sidebar, click the `app` folder to expand it
2. Click on `layout.tsx` to open it
3. Press **Ctrl+A** to select all the existing content
4. Replace it entirely by pasting this:

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clerk Auth Template — Safe Passage Strategies",
  description: "A practice template for connecting your app to Clerk authentication and user management.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "#000", color: "#fff" }}>
        <ClerkProvider>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", borderBottom: "0.5px solid #333", background: "#000" }}>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#fff", letterSpacing: "0.05em", fontFamily: "'Courier New', monospace" }}>
              CLERK AUTH TEMPLATE
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {userId ? (
                <UserButton />
              ) : (
                <>
                  <SignInButton>
                    <button style={{ padding: "8px 18px", fontSize: "13px", borderRadius: "6px", border: "0.5px solid #555", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "'Courier New', monospace" }}>
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button style={{ padding: "8px 18px", fontSize: "13px", borderRadius: "6px", border: "none", background: "#fff", color: "#000", cursor: "pointer", fontFamily: "'Courier New', monospace", fontWeight: 700 }}>
                      Sign up
                    </button>
                  </SignUpButton>
                </>
              )}
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
```

5. Press **Ctrl+S** to save

**What does this file do?** It wraps your entire app with Clerk and adds the properly styled Sign In and Sign Up buttons to the top right corner of every page. Once a user is logged in, those buttons are replaced by their profile icon.

---

## Step 5 — Run the App

In VS Code, open the terminal by clicking **Terminal** in the top menu bar, then **New Terminal**. Make sure you are inside the project folder and run:

```
npm run dev
```

**What you want to see — a clean successful start:**

```
▲ Next.js 16.2.2 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://10.x.x.x:3000
- Environments: .env.local
✓ Ready in 455ms
```

The `✓ Ready` line means your app is running. Open your browser and go to:

```
http://localhost:3000
```

> **What is localhost?** It is your own computer acting as a temporary web server. Port `3000` is like a door number — your app is running behind door 3000. Nobody else on the internet can see this. It is only visible to you on your own machine.

You should see your dark-themed app with **Sign in** and **Sign up** buttons in the top right corner.

---

### If You See This Error — Don't Panic

If your first run produces these errors, it means the app cached a file with an old name. This is a known issue and easy to fix:

```
⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.
⨯ Error: Could not parse module '[project]/middleware.ts', file not found
```

Stop the server by pressing **Ctrl+C** in the terminal. Then clear the cache:

**Windows PowerShell:**
```
Remove-Item -Recurse -Force .next
```

> **Windows users:** Do NOT use `rd /s /q .next` — that command does not work in PowerShell. You will see this error if you try it:
> ```
> Remove-Item : A positional parameter cannot be found that accepts argument '/q'.
> ```
> Always use `Remove-Item -Recurse -Force .next` instead.

**Mac or Linux:**
```
rm -rf .next
```

Then start the server again:
```
npm run dev
```

---

### Notes on What You May See in the Terminal While Running

Once your app is working and open in the browser, the terminal will show live activity. These messages are all normal:

```
[browser] Clerk: Clerk has been loaded with development keys.
Development instances have strict usage limits and should not be
used when deploying your application to production.
```
This just means you are using test keys, which is correct for this walkthrough.

```
GET / 200 in 163ms
```
This means your browser successfully loaded the page. `200` is the standard code meaning everything is working fine.

---

## Step 5b — Test the Login System

With your app open at `localhost:3000`:

1. Click **Sign up** in the top right corner
2. You will be taken to a Clerk-hosted sign-up page that says **"Sign in to [your app name]"**
3. Click **Continue with Google** (or enter your email if you prefer)
4. If using Google, you will see a screen showing your Google accounts — choose one
5. Google will confirm you are signing in to Clerk — click **Continue**
6. You will be redirected back to your app at `localhost:3000`

**How do you know it worked?**

Look at the top right corner of the page. The **Sign in / Sign up** buttons will be gone, replaced by a small **profile icon** — a circular image or your initials. That icon is your logged-in user profile.

- If you signed in with a Google account that has a profile photo, you will see that photo
- If you signed in with an email account, you may see your initials in a colored circle
- Either way, that icon appearing means Clerk is fully connected and working

You can also verify by going to your Clerk dashboard, clicking **Users** in the left sidebar, and seeing your account listed there.

---

## Step 6 — Push Your Code to GitHub

At this point your app is working locally. Now we push it to GitHub so the code is stored online, shareable, and ready to deploy.

### First — Create Your GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top right corner and select **New repository**
3. Give it a name — something like `clerk-auth-template`
4. **Read this warning before you continue:**

> ⚠️ **Important — Do NOT check any of these boxes:**
> - Do not check "Add a README file"
> - Do not check "Add .gitignore"
> - Do not check "Choose a license"
>
> Leave all three unchecked and create a completely **empty** repository.
>
> **Why?** If you let GitHub add any files, your online repo will have content that your local project does not have. When you try to push, Git will refuse because the two histories do not match. This causes a **merge conflict** — one of the most confusing errors a beginner can hit. The solution is documented below, but the easiest path is to avoid it entirely by starting with an empty repo.

5. Click **Create repository**
6. Copy the repo URL — it will look like:
   ```
   https://github.com/YourUsername/your-repo-name.git
   ```

---

### Connect Your Local Project to GitHub

Open Git Bash (press Windows key, type `Git Bash`, press Enter). Navigate into your project folder:

```bash
cd /c/Users/YourName/clerk-test
```

Your prompt will show `(main)` confirming Git is already initialized:

```
YourName@COMPUTER MINGW64 ~/clerk-test (main)
$
```

Now connect your local project to your GitHub repo:

```bash
git remote add origin https://github.com/YourUsername/your-repo-name.git
```

No output means it worked. Then push your code:

```bash
ALLOW_MAIN_PUSH=1 git push origin main
```

Expected output:

```
Enumerating objects: 33, done.
Counting objects: 100% (33/33), done.
Delta compression using up to 20 threads
Compressing objects: 100% (30/30), done.
Writing objects: 100% (31/31), 73.25 KiB | 10.46 MiB/s, done.
Total 31 (delta 5), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (5/5), done.
To https://github.com/YourUsername/your-repo-name.git
   337d091..1c96dbc  main -> main
```

Your code is now live on GitHub. Go to your repo URL in the browser to confirm you can see all your project files.

---

### If You Already Have a Merge Conflict — Fix It Here

If you already created your GitHub repo with a default README, you will see an error like this when you try to push:

```
! [rejected] main -> main (fetch first)
error: failed to push some refs to 'https://github.com/...'
hint: Updates were rejected because the remote contains work that you
hint: do not have locally.
```

**Here is how to fix it:**

Step 1 — Pull the remote content down and merge it with yours:

```bash
git pull origin main --allow-unrelated-histories
```

Step 2 — Git may open a merge conflict in your README. Run this to keep your local version:

```bash
git checkout --ours README.md
```

Step 3 — Stage and commit the merge:

```bash
git add .
git commit -m "Resolve merge conflict"
```

Step 4 — Push again:

```bash
ALLOW_MAIN_PUSH=1 git push origin main
```

You should now see the successful push output shown above.

---

## Step 7 — Deploy to Vercel

Vercel is a free hosting platform built by the same team that created Next.js. It connects directly to your GitHub repo and deploys your app live on the internet in under a minute.

### Create a Free Vercel Account

Go to [vercel.com](https://vercel.com) and sign up. You can use your GitHub account to sign in — this makes connecting your repo much easier.

---

### Import Your Project

1. Once logged in, click **Add New...** in the top right corner
2. Select **Project**
3. You will see a list of your GitHub repositories — find your `clerk-auth-template` repo and click **Import**

Vercel will automatically detect that it is a Next.js project. You will see a screen showing:
- **Project Name** — auto-filled from your repo name
- **Framework Preset** — automatically set to Next.js
- **Root Directory** — set to `./`

---

### Add Your Clerk API Keys

Before deploying, scroll down and click **Environment Variables** to expand that section. You will see a **Key** field and a **Value** field.

Add your first key:
- Key: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- Value: your publishable key from the Clerk dashboard (starts with `pk_test_`)

Click **Add More** and add your second key:
- Key: `CLERK_SECRET_KEY`
- Value: your secret key from the Clerk dashboard (starts with `sk_test_`)

> **Why do we need to add these here?** Your `.env.local` file is never uploaded to GitHub — that is intentional and correct. But Vercel needs these keys to run your app in production. Adding them here is the secure way to provide them.

---

### Deploy

Click the **Deploy** button. Vercel will build and deploy your app. This takes about 30 seconds.

When it finishes you will see a **Congratulations** screen with a preview of your live app. You should already see the **Sign in** and **Sign up** buttons visible in the top right corner of the preview.

Click **Continue to Dashboard** and then click **Visit** to open your live URL. It will look like:

```
https://your-repo-name.vercel.app
```

That is your app — live on the internet, accessible to anyone in the world.

---

### Make Sure the Latest Version Is Live

After your first deployment, every time you push new code to GitHub, Vercel automatically redeploys. However, if you ever need to manually promote a deployment to production:

1. In your Vercel dashboard, click **Deployments** in the left sidebar
2. Find the most recent deployment
3. Click the three dots `...` next to it
4. Select **Promote to Production**

---

## What's Inside This Project

| File | What it does |
|---|---|
| `proxy.ts` | Tells Next.js to run Clerk's security check on every page request |
| `app/layout.tsx` | The main wrapper — styled header with Sign In/Sign Up buttons and profile icon |
| `app/page.tsx` | The welcome page — what visitors see when they land on your app |
| `.env.local` | Holds your private API keys — you create this yourself, never uploaded to GitHub |

---

## Troubleshooting

**"Email is not allowed to access this application"**
Your Clerk app has an allowlist restriction enabled. Go to your Clerk dashboard → **Configure** → **Restrictions** and either disable the allowlist or add your email address to it.

**The Sign In/Sign Up buttons are not showing**
Make sure your `.env.local` file exists, is in the root folder of the project, and contains both keys with no extra spaces or quotation marks around the values.

**The app shows a blank page or crashes on startup**
Make sure you saved all three files — `.env.local`, `proxy.ts`, and `app/layout.tsx` — before running `npm run dev`.

**Vercel is showing an old version of your app**
Go to your Vercel dashboard → Deployments → find the latest deployment → click the three dots → select **Promote to Production**.

---

## What to Do Next

Once this walkthrough is complete and you have successfully signed in, you are ready to connect Clerk to your real application. The core steps are the same — the difference is that your real app may use a different structure, which will require some adjustments. The concepts you practiced here apply directly.

From here you can explore:
- [Protecting specific pages](https://clerk.com/docs) so only logged-in users can access them
- [Accessing user data](https://clerk.com/docs/references/nextjs/auth) inside your app such as name, email, and user ID
- [Clerk's full component library](https://clerk.com/docs/components/overview) for customizing the look of the login UI

---

## Running Into Issues?

If you are stuck or want to work through something, reach out directly:

- 📧 [iain@safe-passage-strategies.com](mailto:iain@safe-passage-strategies.com)
- 🌐 [safepassagestrategies.com](https://safepassagestrategies.com)
- 📅 [calendly.com/iain-safe-passage-strategies](https://calendly.com/iain-safe-passage-strategies)

---

## License

MIT — free to use, modify, and build on.