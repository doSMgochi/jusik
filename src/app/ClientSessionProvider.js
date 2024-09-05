// src/app/ClientSessionProvider.js
"use client"; // 클라이언트 컴포넌트로 지정

import { SessionProvider } from "next-auth/react";

export default function ClientSessionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
