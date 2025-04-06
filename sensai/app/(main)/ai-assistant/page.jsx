"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AIAssistantPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to ChatGPT
    window.location.href = 'https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/05/01/20250405011050-A973YDWL.json';
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <p>Redirecting to SensAI ChatBot...</p>
    </div>
  );
} 