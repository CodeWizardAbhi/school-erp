import { redirect } from "next/navigation";

// Redirect to student login by default
// Users can switch to Admin/Faculty using the role switcher on the login page
export default function Home() {
  redirect("/auth/login/student");
}
