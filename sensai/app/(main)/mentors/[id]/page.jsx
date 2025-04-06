"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Calendar, Star, Briefcase, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

// Dummy data for mentor
const mentor = {
  id: 1,
  name: 'Sarah Johnson',
  title: 'Senior Software Engineer',
  company: 'Google',
  experience: '8 years',
  rating: 4.9,
  price: 50,
  availability: 'Available',
  expertise: ['Technical Interviews', 'System Design', 'Career Growth'],
  bio: 'Experienced software engineer with a passion for mentoring. Specialized in technical interview preparation and system design.',
  achievements: [
    'Conducted 500+ technical interviews',
    'Mentored 100+ engineers',
    'Google Certified Interviewer',
  ],
  reviews: [
    {
      id: 1,
      author: 'John Doe',
      rating: 5,
      comment: 'Sarah helped me land my dream job at Google!',
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 5,
      comment: 'Excellent mentor with deep technical knowledge.',
    },
  ],
};

export default function MentorDetailsPage({ params }) {
  const { id } = params;

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{mentor.name}</CardTitle>
                  <p className="text-muted-foreground mt-1">
                    {mentor.title} at {mentor.company}
                  </p>
                </div>
                <div className="flex gap-2">
                  <SignedIn>
                    <Button asChild>
                      <Link href={`/mentors/${id}/schedule`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Session
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/mentors/${id}/chat`}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Chat
                      </Link>
                    </Button>
                  </SignedIn>
                  <SignedOut>
                    <Button asChild>
                      <Link href="/sign-in">Sign in to schedule</Link>
                    </Button>
                  </SignedOut>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Bio */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground">{mentor.bio}</p>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-secondary px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                  <ul className="space-y-2">
                    {mentor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reviews */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                  <div className="space-y-4">
                    {mentor.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-medium">{review.author}</span>
                          </div>
                          <p className="text-muted-foreground">
                            {review.comment}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Session Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">{mentor.experience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{mentor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Rate</span>
                  <span className="font-medium">${mentor.price}/hour</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="font-medium text-green-500">
                    {mentor.availability}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

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