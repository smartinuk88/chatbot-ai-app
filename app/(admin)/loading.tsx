import Avatar from "@/components/Avatar";

function Loading() {
  return (
    <div className="mx-auto animate-spin p-10">
      <Avatar seed="botify" />
    </div>
  );
}

export default Loading;
