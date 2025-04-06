"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import Link from 'next/link';

export function AIAssistantButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        asChild
      >
        <Link href="/ai-assistant">
          <Bot className="h-6 w-6 mr-2" />
          AI Assistant
        </Link>
      </Button>
    </div>
  );
} 