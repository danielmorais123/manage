import Button from "@/components/my-button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
  return (
    <div className="mx-auto min-h-screen w-full flex justify-center items-center max-w-[1200px] p-5 text-[14px]">
      <div className="flex flex-col gap-7 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Settings</p>
          <p className="text-muted">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <hr className="dark:border-zinc-700" />
        <div className="flex w-full flex-col gap-7 lg:flex-row">
          <div className="flex flex-row flex-wrap lg:w-1/5 lg:flex-col">
            <a
              href="/settings"
              className="focus-visible:ring-ring hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md bg-[#27272a] px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            >
              Profile
            </a>
            <a
              href="/settings/account"
              className="focus-visible:ring-ring hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
            >
              Account
            </a>
            <a
              className="focus-visible:ring-ring hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
              href="/settings/appearance"
            >
              Appearance
            </a>
            <a
              className="focus-visible:ring-ring hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
              href="/settings/notifications"
            >
              Notifications
            </a>
            <a
              className="focus-visible:ring-ring hover:text-accent-foreground inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
              href="/settings/display"
            >
              Display
            </a>
          </div>
          <form className="flex w-full flex-col gap-6 lg:w-4/5">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">Profile</p>
              <p className="text-xs text-muted">
                This is how others will see you on the site.
              </p>
            </div>
            <hr className="dark:border-zinc-700" />
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold">Username</p>
              <Input placeholder="chester" className="text-xs" />
              <p className="text-xs text-muted">
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold">Email</p>
              <Select>
                <SelectTrigger className="w-full text-xs">
                  <SelectValue placeholder="Email" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-xs" value="alex">moraisalexandre01@hotmail.com</SelectItem>
                  <SelectItem className="text-xs" value="artic">moraisartic01@gmail.com</SelectItem>
                </SelectContent>
              </Select>

              <p className="text-xs text-muted">
                You can manage verified email addresses in your email settings.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold">Bio</p>
              <Textarea placeholder="I own a computer" className="text-xs max-h-[100px]" />
              <p className="text-xs text-muted">
                You can @mention other users and organizations to link to them.
              </p>
            </div>
            <div>
              <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
