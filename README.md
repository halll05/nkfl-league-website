# National Keeper Football League Website

An entertaining, responsive league website built with Next.js and the free, read-only Sleeper API.

## 1. Requirements

Install:

- Node.js LTS
- Git
- A free GitHub account
- A free Vercel account
- A Sleeper league

## 2. Start locally

Open PowerShell inside this project folder:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open:

```text
http://localhost:3000
```

## 3. Connect Sleeper

Find the league ID:

1. Open the league in a desktop browser.
2. Look at its URL.
3. Copy the long number after `/league/`.

Edit `.env.local`:

```env
SLEEPER_LEAGUE_ID=YOUR_LONG_LEAGUE_ID
NEXT_PUBLIC_LEAGUE_NAME=National Keeper Football League
NEXT_PUBLIC_LEAGUE_ABBREVIATION=NKFL
NEXT_PUBLIC_SEASON=2026
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourhandle
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/yourinvite
```

Restart the local server after editing environment variables:

```powershell
Ctrl+C
npm run dev
```

Without a league ID—or if Sleeper is temporarily unavailable—the site safely displays demo data.

## 4. Customize weekly content

Edit:

```text
lib/demo-data.ts
app/page.tsx
```

The standings automatically switch to Sleeper data. The initial featured matchups, awards, rivalry copy, and editorial power-ranking comments are deliberately manual because those are the entertaining parts of the league.

## 5. Deploy through GitHub and Vercel

Create a new blank GitHub repository.

From PowerShell in the project folder:

```powershell
git init
git add .
git commit -m "Launch NKFL website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

In Vercel:

1. Select **Add New → Project**.
2. Import the GitHub repository.
3. Leave framework detection as Next.js.
4. Add every variable from `.env.local` under **Environment Variables**.
5. Select **Deploy**.

Every future GitHub push will automatically redeploy the website.

## 6. Important security note

Never commit `.env.local`. It is already excluded by `.gitignore`.

The Sleeper league ID is not a password, and the Sleeper API is read-only, but keeping configuration in environment variables makes the project easier to manage.

## 7. Suggested next upgrades

- Real weekly matchup cards
- Team profile pages
- League constitution page
- Full rivalry history
- All-play records and expected wins
- Keeper-value database
- Automated weekly recap generator
- Social-share graphics
