"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Clock, DollarSign, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const communities = [
  {
    id: 1,
    name: 'Tech Enthusiasts',
    description: 'Connect with fellow tech enthusiasts and discuss the latest trends',
    members: 1200,
    active: true,
    topics: ['Web Development', 'AI/ML', 'Cloud Computing', 'DevOps'],
    category: 'Technology',
  },
  {
    id: 2,
    name: 'Career Development',
    description: 'Share experiences and get advice on career growth',
    members: 850,
    active: true,
    topics: ['Career Growth', 'Interview Prep', 'Networking', 'Leadership'],
    category: 'Career',
  },
  {
    id: 3,
    name: 'Startup Founders',
    description: 'Network with other entrepreneurs and share insights',
    members: 500,
    active: true,
    topics: ['Startup Strategy', 'Funding', 'Product Development', 'Marketing'],
    category: 'Business',
  },
  {
    id: 4,
    name: 'Data Science Community',
    description: 'Discuss data analysis, machine learning, and AI applications',
    members: 950,
    active: true,
    topics: ['Data Analysis', 'Machine Learning', 'Deep Learning', 'Statistics'],
    category: 'Technology',
  },
  {
    id: 5,
    name: 'UX/UI Designers',
    description: 'Share design resources and discuss user experience principles',
    members: 700,
    active: true,
    topics: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
    category: 'Design',
  },
  {
    id: 6,
    name: 'Digital Marketing Pros',
    description: 'Learn and share digital marketing strategies and tools',
    members: 600,
    active: true,
    topics: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    category: 'Marketing',
  },
  {
    id: 7,
    name: 'Product Management',
    description: 'Discuss product strategy, roadmaps, and management techniques',
    members: 800,
    active: true,
    topics: ['Product Strategy', 'Roadmapping', 'User Research', 'Agile'],
    category: 'Business',
  },
  {
    id: 8,
    name: 'Freelancers Network',
    description: 'Connect with fellow freelancers and share opportunities',
    members: 450,
    active: true,
    topics: ['Freelancing', 'Remote Work', 'Client Management', 'Portfolio'],
    category: 'Career',
  },
];

const categories = ['All', 'Technology', 'Career', 'Business', 'Design', 'Marketing'];

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || community.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Communities</h1>
        <p className="text-muted-foreground">
          Join communities of like-minded professionals and engage in meaningful discussions
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search communities..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <Card key={community.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{community.name}</span>
                {community.active && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </CardTitle>
              <CardDescription>{community.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{community.members} members</span>
                  </div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                    {community.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Popular Topics</h4>
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
                </div>

                <SignedIn>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/communities/${community.id}/chat`}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Join Chat
                      </Link>
                    </Button>
                    <Button variant="default" className="flex-1" asChild>
                      <Link href={`/communities/${community.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </SignedIn>
                <SignedOut>
                  <Button variant="default" className="w-full" asChild>
                    <Link href="/sign-in">
                      Sign in to join communities
                    </Link>
                  </Button>
                </SignedOut>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 