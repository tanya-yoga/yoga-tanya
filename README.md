# ЙОГА С ТАНЯ — Тестов пакет (без реални плащания)

## 1) Подготовка (без код)
- Създайте профил във **Vercel** и **Neon** (Postgres).
- В Neon: създайте база; копирайте `DATABASE_URL`.

## 2) Деплой
1. Влезте във Vercel → **Add New... → Project** → **Import** → качете този ZIP.
2. В **Environment Variables** добавете:
   - `DATABASE_URL` = от Neon
   - `NEXT_PUBLIC_SITE_URL` = адреса на сайта във Vercel (напр. https://yogatanya.vercel.app)
3. Deploy.

## 3) Инициализация на база
- В терминала на Vercel (или локално): 
  - `pnpm i` (или npm/yarn)
  - `pnpm db:push`
  - `pnpm prisma:studio` (по избор) / `pnpm ts-node prisma/seed.ts` за демо данни.

## Как работи
- **График:** /schedule (демо сесии от seed)
- **Резервация:** /book/[sessionId] → „Потвърди (тест режим)“ (без плащане)
- **Е‑книга:** /shop/ebook → „Симулирай покупка (тест)“ (води към демо PDF)
- **Блог:** /blog (една демо статия)

Когато сте готови за реални плащания, ще интегрираме Stripe (лесна смяна).
