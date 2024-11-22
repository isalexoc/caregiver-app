import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const follow = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Follow Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4">
          <a href="#" className="text-primary hover:text-primary/80">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-primary hover:text-primary/80">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default follow;
