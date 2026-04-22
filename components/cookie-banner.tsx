"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const cookieKey = "cookie_consent";

type CookieConsent = "accepted" | "essential";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(cookieKey);
      setVisible(stored !== "accepted" && stored !== "essential");
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(value: CookieConsent) {
    try {
      window.localStorage.setItem(cookieKey, value);
    } finally {
      setVisible(false);
    }
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-6 sm:bottom-6">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg)] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-5">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[color:var(--ink)]">Uso de cookies e privacidade</p>
            <p className="text-sm leading-6 text-[color:var(--muted)]">
              Usamos cookies essenciais para funcionamento, segurança e medição básica do site. Você pode aceitar todos os cookies ou seguir apenas com os essenciais.
              Consulte a <Link href="/privacidade" className="font-semibold text-[color:var(--brand)] underline underline-offset-4">política de privacidade</Link> para entender como os dados são tratados.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="flex h-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-white px-4 text-sm font-semibold text-[color:var(--brand)] transition hover:bg-[rgba(255,255,255,0.75)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(22,58,114,0.12)]"
            >
              Aceitar todos
            </button>
            <button
              type="button"
              onClick={() => saveConsent("essential")}
              className="flex h-12 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-white px-4 text-sm font-semibold text-[color:var(--ink)] transition hover:bg-[rgba(255,255,255,0.75)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(22,58,114,0.12)]"
            >
              Apenas essenciais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
