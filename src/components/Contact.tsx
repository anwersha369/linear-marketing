import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function Contact() {
  return (
    <section className="py-12 md:py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-3 md:mb-4 text-black">Get In Touch</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Contact us today for a free consultation. We're here to help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow border-yellow-500/20 hover:border-yellow-500/50">
            <CardHeader>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-base md:text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="tel:9744400089"
                className="text-yellow-600 hover:text-yellow-700 transition-colors text-sm md:text-base"
              >
                9744400089
              </a>
              <p className="text-xs md:text-sm text-gray-500 mt-2">Click to call us directly</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-yellow-500/20 hover:border-yellow-500/50">
            <CardHeader>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-base md:text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:contact.linearmarketing@zohomail.com"
                className="text-yellow-600 hover:text-yellow-700 transition-colors break-all text-xs md:text-sm"
              >
                contact.linearmarketing@zohomail.com
              </a>
              <p className="text-xs md:text-sm text-gray-500 mt-2">Send us an email</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-yellow-500/20 hover:border-yellow-500/50">
            <CardHeader>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-base md:text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm md:text-base">Ottathengu, Puthuparamba</p>
              <a
                href="https://maps.app.goo.gl/kb2dGYyWCqpqfGEPA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-400 text-xs md:text-sm">
                  View on Map
                </Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow border-yellow-500/20 hover:border-yellow-500/50">
            <CardHeader>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-base md:text-lg">Website</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="https://www.linearmarketing.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-700 transition-colors text-sm md:text-base"
              >
                www.linearmarketing.in
              </a>
              <p className="text-xs md:text-sm text-gray-500 mt-2">Visit our website</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <div className="bg-black text-white rounded-lg p-6 md:p-8 max-w-3xl mx-auto border-2 border-yellow-500">
            <h3 className="text-white mb-3 md:mb-4">Ready to Start Your Project?</h3>
            <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base px-2">
              Whether you need a new door installation, solar system setup, or complete interior renovation, we're here to help. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <a href="tel:9744400089" className="w-full sm:w-auto">
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 w-full sm:w-auto">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="mailto:contact.linearmarketing@zohomail.com" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 w-full sm:w-auto">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
