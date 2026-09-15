
"use client";

import type { ReactNode } from "react";

interface IntlProviderProps {
  children: ReactNode;
  locale?: string;
  messages?: Record<string, unknown>;
}

export default function IntlProvider({
  children,
}: IntlProviderProps) {
  return <>{children}</>;
}
