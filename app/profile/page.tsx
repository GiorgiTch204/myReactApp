"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  username: string;
  email: string;
  password: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = localStorage.getItem("currentUser");

    if (loggedIn !== "true" || !currentUser) {
      router.push("/login");
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(JSON.parse(currentUser));
  }, [router]);

  return (
    <main>
      <h1>Profile</h1>
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </main>
  );
}