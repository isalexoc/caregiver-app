import { Metadata } from "next";
import Image from "next/image";
import {
  Apple,
  Utensils,
  Scale,
  BarChartIcon as ChartBar,
  Salad,
  Carrot,
  Beef,
  Milk,
  Wheat,
  Coffee,
  Clipboard,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutrition Services | Essential Care Services",
  description:
    "Professional nutrition services including personalized meal planning, dietary assessments, and nutrition education for optimal health and wellness.",
};

export default function NutritionServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Nutrition Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Personalized nutrition plans for your health and wellness
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src="/nutrition2.jpg"
            alt="Nutrition Services"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Nutrition Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Clipboard,
              title: "Dietary Assessment",
              description:
                "Comprehensive evaluation of your current dietary habits and nutritional status",
            },
            {
              icon: Utensils,
              title: "Meal Planning",
              description:
                "Customized meal plans tailored to your nutritional needs and preferences",
            },
            {
              icon: ChartBar,
              title: "Nutrition Education",
              description:
                "Informative sessions on nutrition basics, healthy eating habits, and dietary guidelines",
            },
            {
              icon: Scale,
              title: "Weight Management",
              description:
                "Personalized strategies for healthy weight loss or gain",
            },
            {
              icon: Apple,
              title: "Disease-Specific Nutrition",
              description:
                "Specialized nutrition plans for managing chronic diseases and health conditions",
            },
            {
              icon: Coffee,
              title: "Lifestyle Nutrition",
              description:
                "Nutrition advice for different lifestyles, including vegetarian, vegan, and athletic diets",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Nutrition Basics
        </h2>
        <Tabs defaultValue="fruits" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            <TabsTrigger value="proteins">Proteins</TabsTrigger>
            <TabsTrigger value="dairy">Dairy</TabsTrigger>
            <TabsTrigger value="grains">Grains</TabsTrigger>
          </TabsList>
          <TabsContent value="fruits" className="mt-20 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Apple className="w-6 h-6 mr-2" /> Fruits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Fruits are an excellent source of essential vitamins,
                  minerals, and fiber. They provide natural sweetness and a
                  variety of flavors to your diet. Aim for a colorful mix of
                  fruits to ensure a wide range of nutrients.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vegetables" className="mt-20 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Carrot className="w-6 h-6 mr-2" /> Vegetables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vegetables are packed with vitamins, minerals, and
                  antioxidants. They are low in calories and high in fiber,
                  making them essential for a balanced diet. Include a variety
                  of colors and types in your meals for optimal nutrition.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="proteins" className="mt-20 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Beef className="w-6 h-6 mr-2" /> Proteins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Proteins are crucial for building and repairing tissues,
                  making enzymes and hormones, and supporting immune function.
                  Sources include lean meats, fish, eggs, legumes, and
                  plant-based options like tofu and tempeh.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dairy" className="mt-20 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Milk className="w-6 h-6 mr-2" /> Dairy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Dairy products are rich in calcium, vitamin D, and protein.
                  They support bone health and provide essential nutrients. If
                  you&apos;re lactose intolerant or vegan, there are many
                  fortified plant-based alternatives available.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="grains" className="mt-20 md:mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wheat className="w-6 h-6 mr-2" /> Grains
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Grains, especially whole grains, are important sources of
                  fiber, B vitamins, and minerals. They provide energy and can
                  help with digestion. Choose whole grains over refined grains
                  for maximum nutritional benefits.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Nutrition Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {[
              {
                title: "Personalized Plans",
                description:
                  "We create nutrition plans tailored to your individual needs, preferences, and health goals.",
              },
              {
                title: "Evidence-Based",
                description:
                  "Our recommendations are based on the latest scientific research and nutritional guidelines.",
              },
              {
                title: "Holistic Approach",
                description:
                  "We consider your overall lifestyle, not just your diet, to create sustainable nutrition plans.",
              },
              {
                title: "Ongoing Support",
                description:
                  "We provide continuous guidance and adjustments to ensure your nutritional success.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <Salad className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
            <Image
              src="/nutrition1.jpg"
              alt="Nutrition Consultation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-accent rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Improve Your Nutrition?
            </h2>
            <p className="text-lg mb-4">
              Our team of nutrition experts is here to guide you towards a
              healthier lifestyle.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="text-white dark:text-black">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
          <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
            <Image
              src="/nutrition3.jpg"
              alt="Nutrition Consultation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
