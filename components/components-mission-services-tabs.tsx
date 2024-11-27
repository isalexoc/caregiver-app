import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MissionServicesTabs() {
  return (
    <section className="mb-12">
      <Tabs defaultValue="mission">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="advantages">Advantages</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At Essential Care Services, we are dedicated to providing the
                highest quality home care, preserving the independence and
                dignity of our clients while offering peace of mind to their
                families.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>
                  <h3 className="font-semibold">Personal Care Assistance</h3>
                  <p className="text-sm text-muted-foreground">
                    Bathing, dressing, and hygiene assistance for daily living.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">In-Home Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Housekeeping, meal preparation, and mobility assistance.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Companionship Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Social interaction and mental health support for well-being.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Specialized Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored care for elderly and chronic illness management.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Medical Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Medication reminders and health monitoring by professionals.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Nutrition Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized meal planning and dietary guidance for optimal
                    health.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Exercise Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored physical activity programs to maintain and improve
                    mobility.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Healthy Lifestyle Methodology
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Holistic approach to promote overall well-being and quality
                    of life.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Caregiver Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Guides and tips for caregivers to provide the best care.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Insurance & Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    Information on insurance coverage and partnerships.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">For Families</h3>
                  <p className="text-sm text-muted-foreground">
                    Resources and support for families of loved ones in care.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">For Patients</h3>
                  <p className="text-sm text-muted-foreground">
                    Information and resources for patients receiving care.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Careers</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our team of compassionate caregivers and professionals.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advantages">
          <Card>
            <CardHeader>
              <CardTitle>Our Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personalized and culturally sensitive approach</li>
                <li>Highly trained and committed staff</li>
                <li>24/7 available services</li>
                <li>Use of advanced technology for care coordination</li>
                <li>Strategic alliances with local hospitals and insurers</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
