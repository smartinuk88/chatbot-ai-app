import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CreateChatbot() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 bg-white p-10 rounded-md m-10">
      <Avatar seed="create-chatbot" />
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">Create</h1>
        <h2 className="font-light">
          Create a new chatbot to assist you in your interactions with your
          customers.
        </h2>
        <form className="flex flex-col md:flex-row gap-5 mt-5">
          <Input
            placeholder="Chatbot Name..."
            className="max-w-lg"
            type="text"
            required
          />
          <Button>Create Chatbot</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateChatbot;
