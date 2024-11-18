import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Clock, UserCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] mb-24 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-background dark:from-primary/10 dark:via-secondary/15 dark:to-background">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Background image for small screens */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/hero.jpg"
          alt="Happy elderly couple sitting together on their couch, smiling while looking at a laptop"
          fill
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"></div>
      </div>

      <div className="container-custom py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left mt-[45vh] sm:mt-[50vh] md:mt-[55vh] lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground animate-fade-in-up">
              Compassionate Care for Your Loved Ones
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 animate-fade-in-up animation-delay-300">
              Essential Care Services provides professional, personalized care
              to ensure comfort and independence at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Link
                href="/services"
                className="btn btn-primary inline-flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="btn bg-secondary text-secondary-foreground hover:bg-secondary/50 inline-flex items-center justify-center dark:bg-secondary/20 dark:text-secondary-foreground dark:hover:bg-secondary/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Happy elderly couple sitting together on their couch, smiling while looking at a laptop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 bg-card shadow-lg rounded-lg p-6 dark:bg-gray-800/90 backdrop-blur-sm">
              <p className="text-sm text-foreground font-medium dark:text-gray-200">
                &quot;Essential Care Services has been a blessing for our
                family. Their care and support have made a world of
                difference.&quot;
              </p>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 dark:bg-primary/40">
                  <span className="text-primary font-bold dark:text-primary-foreground">
                    MJ
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground dark:text-gray-200">
                    Mary Johnson
                  </p>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    Daughter of Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[
            { icon: Heart, text: "Compassionate Care" },
            { icon: Clock, text: "24/7 Support" },
            { icon: UserCheck, text: "Experienced Staff" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <item.icon className="h-8 w-8 text-primary mb-2 dark:text-primary-foreground" />
              <span className="text-sm text-muted-foreground text-center dark:text-gray-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent dark:from-background/80"></div>
    </section>
  );
};

export default Hero;
