"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

// Dummy data for available time slots
const availableSlots = [
  { id: 1, date: '2025-03-20', time: '09:00 AM', duration: '1 hour' },
  { id: 2, date: '2025-03-20', time: '10:30 AM', duration: '1 hour' },
  { id: 3, date: '2025-03-20', time: '02:00 PM', duration: '1 hour' },
  { id: 4, date: '2025-03-21', time: '11:00 AM', duration: '1 hour' },
  { id: 5, date: '2025-03-21', time: '03:00 PM', duration: '1 hour' },
];

export default function SchedulePage({ params }) {
  const { id } = params;
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSchedule = (slot) => {
    setSelectedSlot(slot);
    // Here you would typically make an API call to book the slot
    console.log('Scheduling session:', slot);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href={`/mentors/${id}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Mentor Profile
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Schedule a Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Select a time slot</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableSlots.map((slot) => (
                    <Card key={slot.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{slot.date}</p>
                          <p className="text-sm text-muted-foreground">
                            {slot.time} ({slot.duration})
                          </p>
                        </div>
                        <Button
                          variant={selectedSlot?.id === slot.id ? "default" : "outline"}
                          onClick={() => handleSchedule(slot)}
                        >
                          {selectedSlot?.id === slot.id ? 'Selected' : 'Select'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Session Details</CardTitle>
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
                <Button 
                  className="w-full" 
                  disabled={!selectedSlot}
                  asChild
                >
                  <Link href={`/mentors/${id}/payment`}>
                    Confirm & Pay
                  </Link>
                </Button>
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