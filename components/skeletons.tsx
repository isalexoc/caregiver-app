import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSkeleton({ qty = 3 }) {
  return (
    <section className="bg-accent py-16 px-4 rounded-lg mb-24">
      <div className="container mx-auto">
        <Skeleton className="w-64 h-8 mx-auto mb-12" /> {/* SectionTitle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(qty)].map((_, index) => (
            <Card key={index} className="bg-card overflow-visible">
              <CardContent className="p-6 relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-background">
                    <Skeleton className="w-full h-full" /> {/* Image */}
                  </div>
                </div>
                <Skeleton className="w-8 h-8 mb-4 mx-auto mt-8" />{" "}
                {/* QuoteIcon */}
                <Skeleton className="w-full h-4 mb-2 mx-auto" />{" "}
                {/* Quote line 1 */}
                <Skeleton className="w-5/6 h-4 mb-2 mx-auto" />{" "}
                {/* Quote line 2 */}
                <Skeleton className="w-4/5 h-4 mb-4 mx-auto" />{" "}
                {/* Quote line 3 */}
                <div className="text-center">
                  <Skeleton className="w-32 h-5 mx-auto mb-1" /> {/* Name */}
                  <Skeleton className="w-24 h-4 mx-auto" /> {/* Role */}
                </div>
              </CardContent>
            </Card>
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
