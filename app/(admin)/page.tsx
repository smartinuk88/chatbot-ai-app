import { Button } from "@/components/ui/button";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="p-10 bg-white m-10 rounded-md w-full">
      <h1 className="text-4xl font-light">
        Welcome to <span className="text-[#e57373] font-semibold">botify</span>
      </h1>
      <h2 className="mt-2 mb-10">
        Your customisable AI chat agent that helps you manage your customer
        conversations.
      </h2>

      <Link href="/create-chatbot">
        <Button className="bg-[#e57373]">
          Lets get started by creating a chatbot
        </Button>
      </Link>
    </div>
  );
}

export default Dashboard;
