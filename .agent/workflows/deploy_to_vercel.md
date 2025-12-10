---
description: How to deploy Dukaansaathi to Vercel with Environment Variables
---

Since `.env.local` is not pushed to Git for security, you must manually add the variables in Vercel.

1.  **Push your code** to GitHub/GitLab.
2.  Go to your **Vercel Dashboard**.
3.  Click **Add New...** -> **Project**.
4.  Import your `dukaan-saathi-website` repository.
5.  **Before clicking Deploy**, look for the **Environment Variables** section.
6.  Add the key-value pair:
    *   **Key**: `GROQ_API_KEY`
    *   **Value**: `your_gsk_...` (copy this from your local `.env.local` file)
7.  Click **Add**.
8.  Click **Deploy**.

If you have already deployed it and it failed or the bot isn't working:
1.  Go to your Project Settings on Vercel.
2.  Click **Environment Variables** on the left sidebar.
3.  Add the `GROQ_API_KEY` there.
4.  Go to the **Deployments** tab and **Redeploy** the latest commit for changes to take effect.
