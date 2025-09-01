import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Zap, 
  Users, 
  DollarSign, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Award,
  Sparkles,
  Snowflake
} from "lucide-react";
import subzeroHero1 from "@/assets/subzero-hero-1.jpg";
import subzeroHero2 from "@/assets/subzero-hero-2.jpg";
import subzeroFlavors from "@/assets/subzero-flavors.jpg";
import subzeroNitrogen from "@/assets/subzero-nitrogen.jpg";
import subzeroProcess from "@/assets/subzero-process-1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-comfortaa">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Snowflake className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-2xl font-nunito font-black text-primary">SUB ZERO</h1>
              <p className="text-xs text-muted-foreground font-medium">ICE CREAM CATERING</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-foreground hover:text-secondary transition-colors">How It Works</a>
            <a href="#flavors" className="text-foreground hover:text-secondary transition-colors">Flavors</a>
            <a href="#pricing" className="text-foreground hover:text-secondary transition-colors">Pricing</a>
            <a href="#testimonials" className="text-foreground hover:text-secondary transition-colors">Reviews</a>
          </nav>
          <Button variant="redGradient" size="lg" className="shadow-glow">
            <Phone className="h-4 w-4 mr-2" />
            Book Your Event
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={subzeroHero1} 
            alt="Sub Zero liquid nitrogen ice cream demonstration with dramatic vapor clouds"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2 shadow-ice">
            <Sparkles className="h-4 w-4 mr-2" />
            Experience the Magic. Taste the Sensation.
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-nunito font-black text-white mb-6 leading-tight drop-shadow-lg">
            Unforgettable Ice Cream, 
            <span className="text-secondary"> Frozen Before Your Eyes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Premium liquid nitrogen ice cream catering that turns dessert into entertainment
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-white">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-secondary" />
              <span className="font-semibold">$6 per serving</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              <span className="font-semibold">75 person minimum</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span className="font-semibold">No setup fees</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="redGradient" size="xl" className="shadow-premium text-lg">
              <Zap className="h-5 w-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button variant="outline-hero" size="xl" className="text-lg">
              <Clock className="h-5 w-5 mr-2" />
              See How It Works
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Snowflake className="h-8 w-8 text-secondary/60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-bounce delay-2000">
          <Sparkles className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-nunito font-black text-primary mb-4">
              Why Choose Sub Zero Catering?
            </h2>
            <div className="w-24 h-1 bg-gradient-red-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just serve ice cream – we create an unforgettable interactive experience 
              that combines premium quality with live entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-ice hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-red-warm rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-nunito font-bold text-primary">Live Entertainment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Watch in amazement as our experts create ice cream using liquid nitrogen, 
                  creating dramatic clouds and an unforgettable show.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-ice hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-nunito font-bold text-primary">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Super premium ingredients made-to-order. Each scoop is crafted fresh 
                  in seconds, ensuring the highest quality and taste.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-ice hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-nunito font-bold text-primary">Cost Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  At just $6 per serving with no setup fees, we offer premium dessert 
                  entertainment at an unbeatable value.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-ice hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-nunito font-bold text-primary">Zero Waste</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our refreezable ice cream eliminates the waste problems of traditional 
                  catering, saving you money and reducing environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-nunito font-black text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It's fresh. It's delicious. It's science. Watch the magic happen in 4 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Base",
                description: "Select from our premium cream bases and flavor profiles. Dairy, non-dairy, and sugar-free options available."
              },
              {
                step: "02", 
                title: "Pick Your Mix-Ins",
                description: "Customize with fresh fruits, premium chocolates, nuts, candies, and gourmet toppings for endless combinations."
              },
              {
                step: "03",
                title: "Watch the Magic",
                description: "Our expert freezes your custom creation using liquid nitrogen at -321°F, creating dramatic clouds and perfect texture."
              },
              {
                step: "04",
                title: "Enjoy Fresh",
                description: "Receive your perfectly frozen, ultra-creamy ice cream in seconds, fresher than anything from a traditional freezer."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-2xl font-nunito font-black text-white">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-secondary to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-nunito font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="py-24 bg-gradient-ice">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-nunito font-black text-primary mb-6">
                Trillions of Combinations. 
                <span className="text-secondary">Infinite Possibilities.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                With our extensive selection of premium bases, fresh mix-ins, and gourmet toppings, 
                every guest can create their perfect dessert experience.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-nunito font-bold text-primary mb-3">Premium Bases</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Vanilla Bean</li>
                    <li>• Chocolate Decadence</li>
                    <li>• Strawberry Fresh</li>
                    <li>• Vegan Coconut</li>
                    <li>• Sugar-Free Options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-primary mb-3">Gourmet Mix-Ins</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fresh Seasonal Fruits</li>
                    <li>• Belgian Chocolate Chips</li>
                    <li>• Artisan Cookie Pieces</li>
                    <li>• Candied Nuts</li>
                    <li>• Premium Sauces</li>
                  </ul>
                </div>
              </div>
              
              <Button variant="redGradient" size="lg" className="shadow-glow">
                <Sparkles className="h-4 w-4 mr-2" />
                View Full Menu
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={subzeroFlavors} 
                alt="Premium Sub Zero ice cream varieties with nitrogen vapor effects"
                className="rounded-xl shadow-warm w-full"
              />
              <div className="absolute -top-4 -right-4 bg-brand-red text-white px-6 py-3 rounded-full shadow-glow">
                <span className="font-nunito font-bold">50+ Flavors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-brand-red/5 to-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-red-warm opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-nunito font-black text-primary mb-6">
            Simple, Transparent Pricing
          </h2>
          <div className="w-24 h-1 bg-gradient-red-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            No hidden fees, no complicated packages. Just premium ice cream entertainment 
            at an unbeatable price point.
          </p>

          <Card className="max-w-2xl mx-auto shadow-premium bg-white/95 backdrop-blur-sm border border-brand-red/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-red-accent opacity-10 rounded-bl-full"></div>
            <CardHeader className="text-center pb-8 relative">
              <CardTitle className="text-3xl font-nunito font-black text-primary">Catering Package</CardTitle>
              <CardDescription className="text-lg">Everything you need for the perfect ice cream experience</CardDescription>
            </CardHeader>
            <CardContent className="text-center relative">
              <div className="mb-8">
                <span className="text-6xl font-nunito font-black text-brand-red">$6</span>
                <span className="text-xl text-muted-foreground ml-2">per serving</span>
              </div>
              
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                  <span>Live liquid nitrogen demonstration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                  <span>Professional ice cream artisan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                  <span>All equipment and ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                  <span>Multiple flavor and mix-in options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                  <span>No setup or delivery fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0"></div>
                  <span>75 person minimum</span>
                </div>
              </div>

              <Button variant="redGradient" size="xl" className="w-full shadow-glow">
                <Phone className="h-5 w-5 mr-2" />
                Book Your Event Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-ice">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-nunito font-black text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from event organizers who chose Sub Zero for their special celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Mike",
                event: "Wedding Reception",
                rating: 5,
                review: "The liquid nitrogen ice cream was the highlight of our wedding! Our guests are still talking about the amazing show and how delicious the ice cream was. Worth every penny!"
              },
              {
                name: "Corporate Events Inc.",
                event: "Company Celebration", 
                rating: 5,
                review: "Sub Zero made our employee appreciation event unforgettable. The interactive experience brought everyone together, and the quality was exceptional. Highly recommended!"
              },
              {
                name: "Jennifer L.",
                event: "Birthday Party",
                rating: 5,
                review: "My daughter's sweet 16 was made magical by Sub Zero! The kids loved watching the science behind it, and adults were just as entertained. Amazing service and taste!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-ice hover:shadow-premium transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-nunito font-bold text-primary">{testimonial.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">{testimonial.event}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-red-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/80 to-primary/60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-nunito font-black text-white mb-6">
                Ready to Book Your 
                <span className="text-secondary"> Unforgettable Event?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a custom quote for your event. We'll work with you to create the perfect 
                ice cream experience for your guests.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-white">Call Us</h4>
                    <p className="text-white/80">(555) 123-ZERO</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-white">Email Us</h4>
                    <p className="text-white/80">catering@subzero.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-white">Service Area</h4>
                    <p className="text-white/80">50 mile radius from our locations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-premium bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-nunito font-bold text-primary">Get Your Custom Quote</CardTitle>
                <CardDescription>Tell us about your event and we'll create the perfect package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="fundraiser">Fundraiser</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guestCount">Guest Count</Label>
                    <Input id="guestCount" type="number" placeholder="100" min="75" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input id="eventDate" type="date" />
                </div>
                
                <div>
                  <Label htmlFor="location">Event Location</Label>
                  <Input id="location" placeholder="City, State" />
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your event, special requests, or dietary restrictions..."
                    rows={4}
                  />
                </div>
                
                <Button variant="redGradient" size="lg" className="w-full shadow-glow">
                  <Zap className="h-4 w-4 mr-2" />
                  Get My Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Snowflake className="h-8 w-8 text-secondary" />
                <div>
                  <h3 className="text-2xl font-nunito font-black">SUB ZERO</h3>
                  <p className="text-sm text-white/80">ICE CREAM CATERING</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Creating unforgettable ice cream experiences with liquid nitrogen technology 
                and premium ingredients.
              </p>
              <p className="text-sm text-white/60">
                Experience the magic. Taste the sensation.
              </p>
            </div>
            
            <div>
              <h4 className="font-nunito font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Wedding Catering</li>
                <li>Corporate Events</li>
                <li>Birthday Parties</li>
                <li>Fundraisers</li>
                <li>Private Celebrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-nunito font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li>Phone: (555) 123-ZERO</li>
                <li>Email: catering@subzero.com</li>
                <li>Hours: Mon-Fri 9AM-6PM</li>
                <li>Weekend events available</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-nunito font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">ig</span>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">tw</span>
                </div>
              </div>
              <p className="text-sm text-white/60">
                #SubZeroIceCream #LiquidNitrogen #InfinitePossibilities
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 Sub Zero Ice Cream Catering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;