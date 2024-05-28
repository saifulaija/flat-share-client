
import { Mail, Phone, Twitter, Facebook, Linkedin } from "lucide-react";

import { Card } from "@/components/ui/card";


const AboutUs = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
    
    <section className="mb-12">
      <Card className="p-6 bg-background shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Mission Statement</h2>
        <p className="text-lg text-foreground">
          Our mission is to provide high-quality, user-friendly services that enhance productivity and foster innovation. We strive to deliver exceptional value to our users and make a positive impact on the community.
        </p>
      </Card>
    </section>

    <section className="mb-12">
      <Card className="p-6 bg-background shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Team Information</h2>
        <p className="text-lg text-foreground">
          We are a team of dedicated professionals with a passion for technology and innovation. Our team consists of experienced developers, designers, and strategists who work collaboratively to achieve our goals.
        </p>
      </Card>
    </section>

    <section>
      <Card className="p-6 bg-background shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
        <div className="flex flex-col space-y-4 text-lg text-foreground">
          <div className="flex items-center space-x-2">
            <Mail className="text-primary" />
            <span>Email: info@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="text-primary" />
            <span>Phone: (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <Twitter className="text-primary" />
            <span>Twitter: <a href="https://twitter.com/yourprofile" className="text-accent">twitter.com/yourprofile</a></span>
          </div>
          <div className="flex items-center space-x-2">
            <Facebook className="text-primary" />
            <span>Facebook: <a href="https://facebook.com/yourprofile" className="text-accent">facebook.com/yourprofile</a></span>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="text-primary" />
            <span>LinkedIn: <a href="https://linkedin.com/yourprofile" className="text-accent">linkedin.com/yourprofile</a></span>
          </div>
        </div>
      </Card>
    </section>
  </div>
);

export default AboutUs;
