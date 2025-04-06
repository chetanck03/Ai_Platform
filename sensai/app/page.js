"use client";

import React from "react";
import Link from "next/link";
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AIAssistantButton } from "@/components/ai-assistant-button";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg border-2 hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">AI-Powered Resume Builder</h3>
              <p className="text-muted-foreground">
                Create professional resumes with AI assistance
              </p>
            </div>
            <div className="p-6 rounded-lg border-2 hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">Expert Mentors</h3>
              <p className="text-muted-foreground">
                Connect with industry experts for guidance
              </p>
            </div>
            <div className="p-6 rounded-lg border-2 hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">Career Dashboard</h3>
              <p className="text-muted-foreground">
                Track your progress and achievements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Assistant Button */}
      <AIAssistantButton />
    </>
  );
}
