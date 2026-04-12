import { User } from "@/types/user";

export function saveUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser(): User | null {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
}

export function loginUser(user: User) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
}

export function getCurrentUser(): User | null {
  const stored = localStorage.getItem("currentUser");
  return stored ? JSON.parse(stored) : null;
}

export function isLoggedIn(): boolean {
  return localStorage.getItem("isLoggedIn") === "true";
}