
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn =
      sessionStorage.getItem("smansa-admin-demo") === "true";

    if (loggedIn) {
      setIsAuthenticated(true);
    } else {
      router.replace("/admin/login");
    }

    setIsChecking(false);
  }, [router]);

  if (isChecking || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-slate-500">
          Memeriksa akses admin...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
