import { Navbar } from "./Navbar";

const CheckAuth = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`, {
    cache: "no-cache",
    credentials: "include",
  });

  const user = await res.json();

  console.log(user);
  return (
    <div>
      <Navbar
        userName={user?.name}
        userEmail={user?.email}
        userAvatar={user?.image}
      />
    </div>
  );
};

export default CheckAuth;
