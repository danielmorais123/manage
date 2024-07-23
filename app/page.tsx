import Button from "@/components/my-button";
import ThemeSwitcher from "./ThemeSwitcher";
import { signOut } from "./auth/actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={signOut}>
        <Button text="Sign Out" type="submit" />
      </form>

      <ThemeSwitcher />
    </main>
  );
}
