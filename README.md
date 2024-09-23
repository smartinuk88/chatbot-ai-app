botify - Chatbot Creator Platform
botify is a modern SaaS application that allows users to create and customize their own chatbots. With this platform, users can add personalized characteristics to their chatbots, interact with them through real-time chat sessions, and even embed them on external websites. botify integrates powerful technologies like OpenAI, StepZen, Neon, and Clerk to deliver an optimal and secure chatbot creation experience.

Features
1. Real-Time AI Conversations
Leverages the OpenAI Completions API to enable real-time, 1-on-1 chats with AI-powered agents. The AI provides intelligent and dynamic responses, ensuring users get immediate assistance.

2. Admin Management with PostgreSQL & Neon
Stores chatbot prompts and admin details securely in a PostgreSQL database hosted by Neon. This setup ensures scalability and data consistency.

3. GraphQL API via StepZen
Uses StepZen to introspect the PostgreSQL database and automatically generate a GraphQL API, allowing for efficient and flexible data querying and mutation.

4. Clerk Authentication with Google OAuth
Integrates Clerk for secure user authentication, including Google OAuth. Admins can safely access their dashboards to create and manage chatbots, prompts, and chat histories.

5. Chatbot Customization and Sharing
Provides an admin dashboard for creating new chatbots, customizing their characteristics, and generating unique shareable links. These links allow users to chat with the bot and assist them with their queries.

6. Next.js Caching for Optimal Performance
Implements caching strategies in Next.js to ensure faster load times and a smoother user experience. Both server and client components are optimized for performance using caching techniques.

7. Modern UI & UX
Utilizes Shadcn and Tailwind CSS for a clean, responsive, and beautiful user interface. This combination enhances the overall user experience, ensuring the platform is easy to navigate and use.

8. TypeScript for Reliability
Written in TypeScript to reduce bugs and improve reliability across the platform.

Setup and Installation
To set up the project locally:

Clone the repository:

git clone https://github.com/smartinuk88/chatbot-ai-app.git
Install dependencies:

npm install
Set up environment variables in a .env.local file:

NEXT_PUBLIC_CLERK_FRONTEND_API
NEXT_PUBLIC_GRAPHQL_ENDPOINT
NEON_DATABASE_URL
OPENAI_API_KEY
GRAPHQL_TOKEN
Start the development server:

npm run dev
The application will run locally at http://localhost:3000.

Usage
Admin Dashboard:
Create and manage chatbots.
Edit chatbot prompts and characteristics.
View chat histories with users.
Embedding Chatbots:
Share chatbot links with external users.
Embed chatbots into external websites (future feature).

Future Roadmap
1. Automated Database Cleanup (CRON/Cloud Function)
The project aims to introduce a CRON job or cloud function that will periodically clean up the database by deleting old chat sessions. This will ensure efficient use of resources and keep the database optimized.

2. Embed Chatbots into Websites
The platform will include a feature that generates an embeddable script, allowing users to place their custom chatbots on their websites. This will make it easier for businesses to integrate AI-powered customer support into their platforms.

3. Improved Chatbot Intelligence
Future iterations of the platform will integrate more advanced AI features, such as intent recognition and multi-turn conversations, to make the chatbots even more helpful and engaging.

4. Enhanced Analytics Dashboard
The admin dashboard will eventually include analytics tools to provide insights into chatbot performance, user interactions, and session metrics.

Contributing
Contributions are welcome! Feel free to fork the repository and create a pull request. Make sure to follow the code style and include appropriate documentation for any new features.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Support
For any issues, please open an issue in the repository or contact the project maintainer directly.
