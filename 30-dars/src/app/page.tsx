import { UserCard } from "@/components/user-card";
import { UserForm } from "@/components/user-form";
import { getAllUser } from "@/service/query/getUser";

export default async function Home() {
  const users = await getAllUser();
  return (
    <div className="container">
      <UserForm />
      <div className="grid grid-cols-4 gap-[20px]">
        {users.map((item) => (
          <UserCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
