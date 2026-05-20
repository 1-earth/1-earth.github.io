# Portfolio Chat Function

This folder contains the secure backend for the `ASK GEORGE` portfolio chat.

## Setup

Install dependencies:

```sh
npm install
```

Set the OpenAI API key as a Firebase Functions secret:

```sh
firebase functions:secrets:set OPENAI_API_KEY
```

Optional environment variables:

- `OPENAI_MODEL`: defaults to `gpt-4o-mini`.
- `CHAT_ALLOWED_ORIGINS`: comma-separated allowed origins. Defaults include `https://www.1-earth.world`, `https://1-earth.world`, `https://1-earth.github.io`, and localhost dev ports.

## Deploy

```sh
npm run deploy
```

The frontend calls:

```txt
https://portfoliochat-txqkpf6mza-uc.a.run.app
```

If the deployed URL changes, set `window.PORTFOLIO_CHAT_ENDPOINT` before loading `Portfolio/portfolio-chat.js`.
