# NKFL Website — 8-Team Division Version

This version is configured for:

- 8 teams
- American Division
- National Division
- 3 keepers
- 4 playoff teams
- Sleeper live standings support
- Demo data when Sleeper is not connected

## Run locally

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open:

```text
http://localhost:3000
```

## Connect Sleeper

Edit `.env.local`:

```env
SLEEPER_LEAGUE_ID=YOUR_SLEEPER_LEAGUE_ID
NEXT_PUBLIC_LEAGUE_NAME=National Keeper Football League
NEXT_PUBLIC_LEAGUE_ABBREVIATION=NKFL
NEXT_PUBLIC_SEASON=2026
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_DISCORD_URL=
```

Restart:

```powershell
Ctrl+C
npm run dev
```

## Change division assignments

Edit:

```text
lib/demo-data.ts
```

Change this object:

```ts
export const divisionAssignments: Record<number, "American" | "National"> = {
  1: "American",
  2: "American",
  3: "American",
  4: "American",
  5: "National",
  6: "National",
  7: "National",
  8: "National"
};
```

Sleeper roster IDs are usually 1 through 8. If a team appears in the wrong division, swap the roster ID values.

## Deploy

After testing locally:

```powershell
git add .
git commit -m "Update site for 8 teams and divisions"
git push
```

Vercel will redeploy automatically.
