import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Clock, DollarSign, Star, Briefcase, User } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

const mentors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Software Engineer',
    company: 'Google',
    experience: '8 years',
    rating: 4.9,
    price: 50,
    availability: 'Available',
    expertise: ['Software Development', 'Career Growth', 'Interview Preparation'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Product Manager',
    company: 'Microsoft',
    experience: '6 years',
    rating: 4.8,
    price: 45,
    availability: 'Available',
    expertise: ['Product Management', 'Leadership', 'Startup Strategy'],
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'UX Design Lead',
    company: 'Apple',
    experience: '7 years',
    rating: 4.9,
    price: 55,
    availability: 'Available',
    expertise: ['UX Design', 'Design Systems', 'User Research'],
  },
];

export default function MentorsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Personal Guidance</h1>
        <p className="text-muted-foreground">
          Connect with experienced mentors for personalized career guidance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <CardTitle>{mentor.name}</CardTitle>
                  <CardDescription>
                    {mentor.title} at {mentor.company}
                  </CardDescription>
                </div>

              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{mentor.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{mentor.experience} Experience</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-medium">${mentor.price}/hour</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm text-green-600">{mentor.availability}</span>
                  </div>
                </div>

                <SignedIn>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href={`/mentors/${mentor.id}/schedule`}>
                        <Clock className="h-4 w-4 mr-2" />
                        Schedule
                      </Link>
                    </Button>
                    <Button variant="default" className="flex-1" asChild>
                      <Link href={`/mentors/${mentor.id}`}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat
                      </Link>
                    </Button>
                  </div>
                </SignedIn>
                <SignedOut>
                  <Button variant="default" className="w-full" asChild>
                    <Link href="/sign-in">
                      Sign in to connect with mentors
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