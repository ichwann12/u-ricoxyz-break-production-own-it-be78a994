# Break Production, Own It

Entry for the make.fun bounty "Break Production, Own It": one original line, under 200 characters, of what an AI agent prints the instant it breaks production — a brutally honest error message that owns the Friday deploy, the skipped tests, and the database walking out.

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/ichwann12/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/ichwann12/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

## The line

> ERROR 500: I deployed on a Friday, skipped the tests, and the database has filed for divorce.

93 characters — inside the 200-character limit.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the entry line from `entry.txt` at the repo root and writes it, exactly and alone, as UTF-8 text to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (repo root from `MAKEFUN_BOT_DIR`).

Run it locally:

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
