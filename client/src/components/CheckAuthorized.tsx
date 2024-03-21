"use client";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function CheckAuthorized({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const token = cookies.get("access_token");
  if (!token) {
    router.push("/signin");
  }
  return <>{children}</>;
}
