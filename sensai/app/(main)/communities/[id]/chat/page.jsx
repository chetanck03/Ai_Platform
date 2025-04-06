"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';

// Dummy data for chat messages
const initialMessages = [
  {
    id: 1,
    author: 'John Doe',
    content: 'Has anyone tried the new React 19 features?',
    timestamp: '10:30 AM',
    avatar: '/avatars/john.jpg',
  },
  {
    id: 2,
    author: 'Jane Smith',
    content: 'Yes! The new hooks are amazing. The use() hook is particularly useful for data fetching.',
    timestamp: '10:32 AM',
    avatar: '/avatars/jane.jpg',
  },
  {
    id: 3,
    author: 'Mike Johnson',
    content: 'I agree! The performance improvements are significant too.',
    timestamp: '10:35 AM',
    avatar: '/avatars/mike.jpg',
  },
];

// Dummy data for online members
const onlineMembers = [
  { id: 1, name: 'John Doe', status: 'online' },
  { id: 2, name: 'Jane Smith', status: 'online' },
  { id: 3, name: 'Mike Johnson', status: 'online' },
  { id: 4, name: 'Sarah Wilson', status: 'away' },
  { id: 5, name: 'David Brown', status: 'online' },
];

export default function CommunityChatPage({ params }) {
  const { id } = params;
  const { user } = useUser();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState(null);
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
        avatar: user?.imageUrl || '/avatars/default.jpg',
      };

      setMessages(prevMessages => [...prevMessages, message]);
      setNewMessage('');
      setError(null);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
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
                <CardTitle>Tech Enthusiasts Chat</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>1200 members</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {message.author.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
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

        {/* Online Members */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Online Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {onlineMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        member.status === 'online'
                          ? 'bg-green-500'
                          : 'bg-yellow-500'
                      }`}
                    />
                    <span>{member.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Be respectful to all members</li>
                <li>• Keep discussions relevant to tech topics</li>
                <li>• No spam or self-promotion</li>
                <li>• Share knowledge and help others</li>
                <li>• Report any inappropriate behavior</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 