import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Clock, Calendar, MessageCircle, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

// Dummy data for community details
const communityDetails = {
  id: 1,
  name: 'Tech Enthusiasts',
  description: 'Connect with fellow tech enthusiasts and discuss the latest trends in technology, programming, and innovation.',
  members: 1200,
  active: true,
  topics: ['Web Development', 'AI/ML', 'Cloud Computing', 'DevOps'],
  recentDiscussions: [
    {
      id: 1,
      title: 'Best practices for React performance optimization',
      author: 'John Doe',
      replies: 24,
      likes: 45,
      lastActive: '2 hours ago',
    },
    {
      id: 2,
      title: 'Getting started with AI/ML - Resources and tips',
      author: 'Jane Smith',
      replies: 18,
      likes: 32,
      lastActive: '5 hours ago',
    },
    {
      id: 3,
      title: 'Cloud architecture patterns for startups',
      author: 'Mike Johnson',
      replies: 15,
      likes: 28,
      lastActive: '1 day ago',
    },
  ],
  upcomingEvents: [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: '2024-04-15',
      time: '14:00',
      attendees: 45,
    },
    {
      id: 2,
      title: 'AI/ML Panel Discussion',
      date: '2024-04-20',
      time: '16:00',
      attendees: 78,
    },
  ],
};

export default function CommunityDetailsPage({ params }) {
  const { id } = params;
  const community = communityDetails;

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{community.name}</h1>
            <p className="text-muted-foreground">{community.description}</p>
          </div>
          <SignedIn>
            <Button asChild>
              <Link href={`/communities/${id}/chat`}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Join Chat
              </Link>
            </Button>
          </SignedIn>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Discussions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Discussions</CardTitle>
              <CardDescription>Latest conversations in the community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {community.recentDiscussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <h3 className="font-medium mb-2">{discussion.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {discussion.author}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {discussion.replies}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {discussion.likes}
                        </span>
                        <span>{discussion.lastActive}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Community Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Members</span>
                  <span className="font-medium">{community.members}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active Members</span>
                  <span className="font-medium">850</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Discussions</span>
                  <span className="font-medium">245</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {community.upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-1">{event.title}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date} at {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {event.attendees} attending
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Topics */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {community.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary px-2 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 