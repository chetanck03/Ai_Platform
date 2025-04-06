"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Clock, DollarSign, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';

// Dummy data for chat messages
const initialMessages = [
  {
    id: 1,
    author: 'Sarah Johnson',
    content: 'Hi! How can I help you today?',
    timestamp: '10:00 AM',
    isMentor: true,
  },
  {
    id: 2,
    author: 'You',
    content: 'I need help with preparing for a technical interview at Google.',
    timestamp: '10:02 AM',
    isMentor: false,
  },
  {
    id: 3,
    author: 'Sarah Johnson',
    content: 'Great! I can help you with that. I\'ve conducted many interviews at Google. Let\'s start with your current preparation level.',
    timestamp: '10:03 AM',
    isMentor: true,
  },
];

export default function MentorChatPage({ params }) {
  const { id } = params;
  const { user } = useUser();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const message = {
        id: messages.length + 1,
        author: user?.fullName || 'You',
        content: newMessage,
        timestamp: currentTime,
        isMentor: false,
      };

      setMessages(prevMessages => [...prevMessages, message]);
      setNewMessage('');
      setError(null);
      setIsTyping(true);

      // Simulate mentor response after 2 seconds
      setTimeout(() => {
        const mentorResponse = {
          id: messages.length + 2,
          author: 'Sarah Johnson',
          content: 'Thank you for sharing that. Let me help you with that.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMentor: true,
        };
        setMessages(prevMessages => [...prevMessages, mentorResponse]);
        setIsTyping(false);
      }, 2000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
      setIsTyping(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Area */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Chat with Sarah Johnson</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Session ends in 45 minutes</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.isMentor ? '' : 'flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${
                        message.isMentor ? 'bg-secondary' : 'bg-primary'
                      } flex items-center justify-center`}
                    >
                      <span className="text-sm font-medium text-white">
                        {message.author.charAt(0)}
                      </span>
                    </div>
                    <div className={`flex-1 ${message.isMentor ? '' : 'text-right'}`}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.author}</span>
                        <span className="text-xs text-muted-foreground">
                          {message.timestamp}
                        </span>
                      </div>
                      <p className="text-sm mt-1">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-medium">S</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Sarah is typing...</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                {error && (
                  <div className="mb-2 text-sm text-red-500">
                    {error}
                  </div>
                )}
                <SignedIn>
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      className="flex-1"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button type="submit">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </SignedIn>
                <SignedOut>
                  <div className="text-center py-4">
                    <Button asChild>
                      <Link href="/sign-in">Sign in to chat</Link>
                    </Button>
                  </div>
                </SignedOut>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Session Info */}
          <Card>
            <CardHeader>
              <CardTitle>Session Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">1 hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rate</span>
                  <span className="font-medium">$50/hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-medium">$50</span>
                </div>
                <Button className="w-full" asChild>
                  <Link href={`/mentors/${id}/payment`}>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Session Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Session Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Be respectful and professional</li>
                <li>• Prepare your questions in advance</li>
                <li>• Keep the discussion focused on your goals</li>
                <li>• Take notes during the session</li>
                <li>• Feel free to ask for clarification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 