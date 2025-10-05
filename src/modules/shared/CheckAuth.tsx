import { Navbar } from "./Navbar";

const CheckAuth = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`, {
      cache: "no-cache",
      credentials: "include",
    });

    if (!res.ok) {
      return <Navbar />;
    }

    const user = await res.json();

    return (
      <div>
        <Navbar
          userName={user?.name}
          userEmail={user?.email}
          userAvatar={user?.image}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return <Navbar />;
  }
};

export default CheckAuth;
