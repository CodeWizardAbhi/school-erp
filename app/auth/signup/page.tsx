import { redirect } from "next/navigation";

export default function SignUpPage() {
    // TEMPORARILY DISABLED - Redirect to login
    redirect("/auth/login");
}
