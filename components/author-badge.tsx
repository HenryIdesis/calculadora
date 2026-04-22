import { UserCheck } from "lucide-react";

type AuthorBadgeProps = {
  name: string;
  role: string;
};

export function AuthorBadge({ name, role }: AuthorBadgeProps) {
  return (
    <div className="mt-4 inline-flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 shadow-soft">
      <span className="mt-0.5 text-[color:var(--brand)]">
        <UserCheck className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-[color:var(--ink)]">{name}</p>
        <p className="text-xs leading-5 text-[color:var(--muted)]">{role}</p>
      </div>
    </div>
  );
}
