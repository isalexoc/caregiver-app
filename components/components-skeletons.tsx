'use client'

import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialsSkeleton() {
  return (
    <section className="bg-accent py-16 px-4 rounded-lg mb-24">
      <div className="container mx-auto">
        <Skeleton className="w-64 h-8 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-card p-6 rounded-lg">
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
              <Skeleton className="w-3/4 h-4 mx-auto mb-2" />
              <Skeleton className="w-full h-4 mx-auto mb-2" />
              <Skeleton className="w-5/6 h-4 mx-auto mb-4" />
              <Skeleton className="w-1/2 h-4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// You can add more skeleton components here as needed
export function FeaturesSkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Skeleton className="w-48 h-8 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="p-6 rounded-lg border">
              <Skeleton className="w-12 h-12 mb-4" />
              <Skeleton className="w-3/4 h-6 mb-2" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-5/6 h-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Skeleton className="w-32 h-8 mx-auto mb-8" />
        {[...Array(5)].map((_, index) => (
          <div key={index} className="mb-4">
            <Skeleton className="w-full h-12 mb-2" />
            <Skeleton className="w-5/6 h-4" />
          </div>
        ))}
      </div>
    </section>
  );
}