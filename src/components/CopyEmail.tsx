"use client";

import { useState } from "react";
import Icon from "./ui/Icon";

/** Knapp som kopierar e-postadressen och bekräftar det i några sekunder. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {}
  }

  return (
    <button type="button" onClick={copy} className="link-underline inline-flex items-center gap-2 pb-0.5">
      <Icon name={copied ? "check" : "copy"} width={16} height={16} className={copied ? "text-green" : ""} />
      <span aria-live="polite">{copied ? "Kopierad!" : "Kopiera adress"}</span>
    </button>
  );
}
