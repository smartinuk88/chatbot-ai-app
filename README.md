# Botify

An AI chatbot platform where admins create and configure custom AI 
assistants via a dashboard, and end users interact with them through a 
shareable chat interface.

🔗 [Live Demo](https://chatbot-ai-creator-app.vercel.app/)

---

## What it does

**For admins:**
- Create multiple chatbots, each with a unique shareable link
- Configure chatbot behaviour by building a system prompt — adding and removing 
  pieces of knowledge or personality
- Review all previous user chat sessions per chatbot from the dashboard

**For end users:**
- Access a chatbot via its unique shareable link
- Chat in real time with the AI assistant
- No account required

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router), TypeScript |
| Auth | Clerk (Google OAuth) |
| AI | OpenAI Completions API |
| Database | PostgreSQL on Neon |
| API Layer | GraphQL via StepZen |
| UI | Shadcn/UI, Tailwind CSS |
| Deployment | Vercel |

---

## How it works

### Chatbot creation and configuration

When an admin creates a chatbot:

User sends a message via the shareable chat interface
→ Conversation history fetched from PostgreSQL
→ System prompt and full conversation history assembled into a prompt
→ Prompt sent to OpenAI Completions API
→ Response streamed back to the user
→ Both the user message and AI response saved to PostgreSQL

The system prompt is the key differentiator between chatbots — it defines the 
AI's persona, knowledge, and constraints. An admin could create a customer 
support bot, a product FAQ bot, and a sales assistant, each with a completely 
different system prompt and behaviour.

### Admin dashboard

The dashboard gives admins visibility across all their chatbots:
- Create and manage multiple chatbots
- Edit system prompts at any time — changes take effect immediately
- Review full chat session histories per chatbot — useful for understanding 
  how users are interacting and identifying gaps in the system prompt

---

## Key Technical Decisions

### GraphQL via StepZen
Rather than writing a GraphQL API from scratch, StepZen introspects the 
PostgreSQL schema and auto-generates a fully functional GraphQL API from it. 
This means the data layer is defined once — in the database schema — and the 
API reflects it automatically.

GraphQL's single-endpoint querying model suits the dashboard well: a single 
query can retrieve a chatbot, its system prompt, and its recent sessions in 
one round trip, rather than the multiple REST calls that would be needed 
otherwise.

### Next.js Server and Client Components
The dashboard pages — which display chatbot lists, session histories, and 
prompts — are Server Components. They fetch data directly at render time 
without client-side JavaScript overhead. The chat interface is a Client 
Component, handling real-time message state and streaming responses 
interactively.

### Next.js caching for performance
Next.js caching is used to avoid redundant data fetches — chatbot 
configurations and system prompts are cached and only revalidated when the 
admin makes changes. This keeps the chat interface fast for end users without 
hitting the database on every message.

### Clerk for authentication
Clerk handles admin authentication with Google OAuth. End users accessing the 
shareable chat link do not need to authenticate — the public/private split is 
managed at the route level.

### PostgreSQL on Neon
All structured data — admin details, chatbot configurations, system prompts, 
and chat history — lives in a relational PostgreSQL database hosted on Neon. 
The relational model suits the data well: admins have many chatbots, chatbots 
have many sessions, sessions have many messages.

---

## What I'd do differently

This project was built as part of a structured learning programme. With my 
current knowledge, the main changes I'd make are:

- **Replace StepZen with a custom API layer** — StepZen is convenient for 
  auto-generating a GraphQL API, but in a production environment you'd want 
  explicit control over your resolvers, validation logic, and error handling. 
  I'd replace it with a manually written GraphQL layer or simply use Prisma 
  with Next.js API routes, which gives more flexibility and is easier to test.
- **Add Prisma as the ORM** — direct SQL queries or a raw GraphQL layer without 
  an ORM makes database interactions harder to type-check and maintain. Prisma 
  would provide type-safe queries and schema-driven migrations.
- **Add streaming to the chat interface** — the current implementation waits 
  for the full OpenAI response before displaying it. Streaming the response 
  token by token (using the OpenAI streaming API) would significantly improve 
  the perceived responsiveness of the chat.
- **Add rate limiting to the chat endpoint** — without rate limiting, the 
  shareable chat link is an open endpoint that could be abused to run up 
  OpenAI API costs. A simple rate limiter per session or IP would be essential 
  in a real deployment.
- **Add tests** — the chatbot creation flow, system prompt assembly, and chat 
  history retrieval are all untested. These are exactly the kinds of business 
  logic flows that benefit most from unit and integration tests.

---

## Running locally

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env.local` file with the following:

Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

OpenAI
OPENAI_API_KEY=

Neon PostgreSQL
DATABASE_URL=

StepZen
STEPZEN_API_KEY=
NEXT_PUBLIC_STEPZEN_API_URL=

4. Start the development server:
```bash
npm run dev
```

> **Note:** You will need active accounts and API keys for Clerk, OpenAI, 
> Neon, and StepZen to run the full application locally.
