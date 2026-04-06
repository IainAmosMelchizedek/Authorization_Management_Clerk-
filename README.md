# Authorization Management with Clerk
### A Complete Walkthrough for People New to Web Development

---

## Before Anything Else — Read This First

If you are new to building web applications, this guide was written for you.

You may have built something — a website, a tool, an app — and now you want users to be able to **create an account and log in**. That feature is called **authentication** (sometimes called **auth** for short) or **authorization management**. It sounds simple, but building it from scratch is one of the more complex and security-sensitive things a developer can do. One mistake and user data is at risk.

This is why tools like **Clerk** exist. Clerk is a trusted, professionally maintained service that handles all of the login and signup complexity for you. It is free to start, takes minutes to set up, and used by real companies in production.

---

## What Is a Template — And Why Are You Here?

A **template** is a pre-built, working example of how something is set up. Think of it like a practice run.

Before you connect an authentication tool to your *real* application — the one you've already built or are building — it is smart to first practice on a **safe, throwaway project** where mistakes don't matter. That is exactly what this repo is.

By following this walkthrough you will:
1. Set up a brand new practice app on your own computer
2. Connect it to Clerk, a real authentication system
3. Sign in as a real user and watch it work
4. Walk away knowing exactly how to do it on your real app

Nothing here touches your real application. This is a sandbox — a safe place to learn.

---

## What Is Clerk?

**Clerk** is an authentication management platform. In plain language, it is the system that:
- Shows users a **Sign Up** and **Sign In** page
- Securely stores their email, password, or social login (Google, GitHub, etc.)
- Gives your app a way to know **who is logged in** at any given moment
- Handles password resets, email verification, and account security for you

You do not have to build any of that. Clerk does it. You just connect your app to it.

**Why Clerk and not something else?** It has a generous free tier, excellent documentation, and works well with Next.js — the framework we are using in this walkthrough.

---

## What Is Next.js?

**Next.js** is a popular framework for building web applications using JavaScript. A framework is just a set of tools and conventions that make building faster and more organized. You don't need to deeply understand Next.js to follow this walkthrough — just know that it is what we are building on.

---

## What You Need Before You Start

You will need four things installed or set up before beginning. Here is exactly how to check each one.

---

### 1. A Computer Running Windows, Mac, or Linux
This walkthrough works on all three. Where steps differ, both versions are shown.

---

### 2. Node.js (Version 18 or Higher)

**What is Node.js?** It is the engine that runs JavaScript on your computer outside of a browser. Without it, you cannot run a Next.js app locally.

**Do I already have it?** Here is how to check:

**On Windows:**
1. Press the **Windows key** on your keyboard
2. Type `PowerShell` and press Enter
3. A black or blue window will open — this is your terminal
4. Type the following and press Enter:
   ```
   node -v
   ```
5. If you see something like `v20.11.0` or higher, you are good
6. If you see `"node" is not recognized` — you need to install it

> **Do I need to run PowerShell as Administrator?** No. For checking and installing Node.js and running this project, regular PowerShell is fine.

**On Mac:**
1. Press **Cmd + Space**, type `Terminal`, and press Enter
2. Type `node -v` and press Enter
3. Same result — a version number means you have it

**If you need to install Node.js:**
Go to [nodejs.org](https://nodejs.org) and download the **LTS** version (LTS means Long Term Support — it is the stable, recommended version). Run the installer and follow the prompts. When it finishes, close and reopen your terminal and run `node -v` again to confirm it worked.

---

### 3. VS Code (Visual Studio Code)

**What is VS Code?** It is a free code editor made by Microsoft. Think of it like Microsoft Word, but for writing code. It helps you read and edit project files clearly.

**Download it here:** [code.visualstudio.com](https://code.visualstudio.com)

Install it like any normal program on your computer.

---

### 4. A Free Clerk Account

Go to [clerk.com](https://clerk.com) and sign up. No credit card is required. You can use Google or GitHub to sign up, or create an account with your email.

---

### 5. A Free GitHub Account

**What is GitHub?** It is where developers store their code online. Think of it like Google Drive, but specifically for code projects. It also lets you download other people's projects — including this one.

Sign up at [github.com](https://github.com). Free account is all you need.

---

## Step 1 — Create Your Clerk Application

1. Log into your Clerk dashboard at [dashboard.clerk.com](https://dashboard.clerk.com)
2. Click **Create Application**
3. Give it any name you want — for this practice, something like `clerk-test` works fine
4. Leave the default sign-in options (Email and Google are enabled by default) and click **Create Application**
5. You will land on a page that shows your **API keys** — two long strings of text starting with `pk_test_` and `sk_test_`
6. **Keep this browser tab open.** You will need these keys shortly.

---

## Step 2 — Create a Practice Next.js App on Your Computer

Rather than downloading this project, you are going to build it yourself from scratch — that is the whole point of the walkthrough. Open PowerShell (Windows) or Terminal (Mac) and follow along.

First, check that Node.js is installed by typing this and pressing Enter:

```
node -v
```

Your screen should look like this:

```
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Users\YourName> node -v
v22.16.0
```

Any version starting with `v18` or higher is fine. If you see an error, go back to the Node.js installation step above.

Next, create your practice app by running this command:

```
npx create-next-app@latest clerk-test --yes
```

It will ask you to confirm the installation. Type `y` and press Enter:

```
Need to install the following packages:
  create-next-app@16.2.2
Ok to proceed? (y) y
```

Then it will run automatically. Your output will look something like this — it may take a minute or two:

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

> You may also see a notice about a new version of npm being available. You can safely ignore that for now.

Now move into the project folder:

```
cd clerk-test
```

Your prompt will change to show you are now inside it:

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

Finally, open the project in VS Code:

```
code .
```

VS Code will open automatically with your project files visible in the left sidebar. You are ready for the next step.

> Replace `YOUR_USERNAME` with your actual username — yours will appear automatically in the terminal.

---

## Step 3 — Add Your Clerk API Keys

Your app needs to know which Clerk account it belongs to. You tell it by adding your API keys to a special file.

1. Open the project in VS Code. In your terminal, type:
   ```
   code .
   ```
   This opens the entire project folder in VS Code.

2. In the file list on the left side of VS Code, click the **New File** icon and name the file exactly:
   ```
   .env.local
   ```
   Make sure it is in the root of the project (the main folder, not inside any subfolder).

3. Inside that file, paste these two lines:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```
   Replace `your_publishable_key_here` and `your_secret_key_here` with the actual keys from your Clerk dashboard tab.

4. Press **Ctrl+S** (Windows) or **Cmd+S** (Mac) to save.

> **Important:** Never share these keys publicly. Never paste them into a chat, email, or commit them to GitHub. The `.gitignore` file in this project already prevents `.env.local` from being uploaded to GitHub automatically.

---

## Step 4 — Run the App

In your terminal, make sure you are inside the project folder, then run:

```bash
npm run dev
```

You should see output that includes:
```
- Local: http://localhost:3000
✓ Ready
```

This means the app is running on your computer. Open your browser and go to:

```
http://localhost:3000
```

**What is localhost?** It is your own computer acting as a web server. `3000` is the port number — think of it as which door of your computer the app is running behind. No one else can see this — it is only visible to you.

---

## Step 5 — Test the Login System

You should see a basic page with **Sign In** and **Sign Up** buttons in the top right corner.

1. Click **Sign Up**
2. Create an account using your email or Google
3. After signing up, you will be returned to the app and your profile icon will appear in the top right corner

That profile icon means it worked. You are now a logged-in user of your own app.

You can verify this by going back to your Clerk dashboard — click **Users** in the left sidebar and you will see your new account listed there.

---

## What's Inside This Project

| File | What it does |
|---|---|
| `proxy.ts` | Tells Next.js to run Clerk's security check on every page of the app |
| `app/layout.tsx` | The main wrapper for your app — this is where the Sign In/Sign Up buttons live |
| `.env.local` | Holds your private API keys — you create this yourself, it is never uploaded to GitHub |

---

## Troubleshooting

**"Could not parse module middleware.ts — file not found"**
The app has cached an old file name. Clear the cache and restart:
```bash
# Windows PowerShell
Remove-Item -Recurse -Force .next
npm run dev

# Mac / Linux
rm -rf .next && npm run dev
```

**"Email is not allowed to access this application"**
Your Clerk app has an allowlist restriction enabled. Go to your Clerk dashboard → **Configure** → **Restrictions** and either disable the allowlist or add your email address to it.

**The Sign In/Sign Up buttons are not showing**
Make sure your `.env.local` file exists, is in the root folder, and contains both keys with no extra spaces or quote marks around the values.

---

## What to Do Next

Once you are comfortable with this walkthrough, you are ready to connect Clerk to your real application. The core steps are the same — the difference is that your real app may use a different structure or framework, which will require adjustments. The concepts you practiced here apply directly.

From here you can explore:
- [Protecting specific pages](https://clerk.com/docs) so only logged-in users can access them
- [Accessing user data](https://clerk.com/docs/references/nextjs/auth) inside your app (name, email, user ID)
- [Clerk's full component library](https://clerk.com/docs/components/overview) for customizing the login UI

---

## License

MIT — free to use, modify, and build on.
