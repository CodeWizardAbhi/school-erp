import { Suspense } from "react";
import LoginForm from "@/components/auth/login-form";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center bg-slate-100">
                    <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                </div>
            }
        >
            <LoginForm />
        </Suspense>
    );
}
