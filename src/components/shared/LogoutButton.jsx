"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.refresh();
                    router.push("/login"); // redirect to login page
                },
            },
        });
        // router.refresh();
        // router.push("/login");
    }
    return (
        <button className="btn bg-[#e1ff51] text-[#00272c] text-xl font-bold hover:scale-110" onClick={handleLogout}>
            Logout
        </button>
    );
}