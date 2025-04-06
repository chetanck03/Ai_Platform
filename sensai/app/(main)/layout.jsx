import React from "react";
import { AIAssistantButton } from '@/components/ai-assistant-button';

const MainLayout = async ({ children }) => {
  return (
    <>
      <div className="container mx-auto mt-24 mb-20">{children}</div>
      <AIAssistantButton />
    </>
  );
};

export default MainLayout;
