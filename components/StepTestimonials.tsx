import React from 'react';
import { Button } from './Button';
import { Star } from 'lucide-react';
import { Review } from '../types';

export const StepTestimonials: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Sarah M.",
      location: "Los Angeles, CA",
      time: "3 hours ago",
      rating: 5,
      text: "I received my $750 Best Buy gift card within 48 hours! The gaming monitor was amazing and the process was so simple."
    },
    {
      name: "James L.",
      location: "Houston, TX",
      time: "4 hours ago",
      rating: 5,
      text: "Best decision ever! Got to try premium headphones and earned a huge reward. Totally legitimate!"
    },
    {
      name: "Emily R.",
      location: "Phoenix, AZ",
      time: "1 day ago",
      rating: 5,
      text: "I was skeptical at first, but this is the real deal. Shopping + $750 reward = amazing opportunity!"
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold text-gray-900">Join Thousands of Satisfied Members</h2>
        <p className="text-gray-500">See what our community is saying about their experience</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 text-center space-y-3">
        <h3 className="font-bold text-gray-900 text-lg">What Our Members Are Saying</h3>
        <div className="flex justify-center space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-500 text-sm">4.9/5 from 12,847 reviews</p>
      </div>

      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-xl space-y-3 text-left">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#0046BE] flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name} <span className="font-normal text-gray-400 text-sm ml-1">{review.location}</span></h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{review.time}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button onClick={() => window.location.href = "https://trkio.org/aff_c?offer_id=880&aff_id=29930"}>Start Now</Button>
      </div>
    </div>
  );
};