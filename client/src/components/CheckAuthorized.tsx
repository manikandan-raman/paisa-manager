import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function CheckAuthorized({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;
  if (!token) {
    redirect("/signin");
  }
  return <>{children}</>;
}
