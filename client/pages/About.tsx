import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star
} from 'lucide-react';

export default function About() {
  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every service we provide, ensuring accuracy and quality."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We tailor our services to meet your specific needs."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Integrity",
      description: "We maintain the highest standards of professional ethics and confidentiality."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace technology and modern practices to deliver efficient solutions."
    }
  ];

  const team = [
    {
      name: "CA Rajesh Griva",
      role: "Founder & Managing Partner",
      experience: "8+ Years",
      specialization: "Corporate Tax, Business Setup",
      description: "Chartered Accountant with extensive experience in tax planning and business consultancy."
    },
    {
      name: "CA Priya Sharma",
      role: "Senior Tax Consultant",
      experience: "6+ Years",
      specialization: "Individual Tax, GST",
      description: "Expert in individual tax returns and GST compliance with a track record of maximizing client savings."
    },
    {
      name: "Amit Kumar",
      role: "Business Advisor",
      experience: "5+ Years",
      specialization: "Company Registration, Loans",
      description: "Specialized in company incorporation and loan consultancy services."
    }
  ];

  const certifications = [
    "Institute of Chartered Accountants of India (ICAI)",
    "Goods and Services Tax Practitioner",
    "Certified Management Accountant (CMA)",
    "ISO 9001:2015 Quality Management",
    "Data Security & Privacy Certified"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">About Us</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your Trusted
                  <span className="text-primary block">Tax Partner</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Since our inception, Griva Consultancy has been committed to providing 
                  exceptional tax and business services, helping individuals and businesses 
                  achieve financial success and regulatory compliance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team meeting"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5+ Years</div>
                    <div className="text-sm text-gray-600">Trusted Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Trust Through Excellence
              </h2>
            </div>

            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to simplify tax compliance and business processes, 
                Griva Consultancy has grown from a small practice to a trusted name in 
                the tax consultancy industry. Our journey began with a simple belief: 
                every individual and business deserves expert financial guidance without 
                the complexity and high costs traditionally associated with professional services.
              </p>

              <p>
                Over the years, we have helped thousands of clients navigate the complex 
                world of taxation, business registration, and financial planning. Our team 
                of qualified professionals brings deep expertise across various domains, 
                ensuring that our clients receive comprehensive solutions tailored to their 
                unique needs.
              </p>

              <p>
                Today, we continue to evolve and adapt to the changing regulatory landscape, 
                leveraging technology and innovation to deliver faster, more efficient services 
                while maintaining the personal touch that our clients value. Our commitment 
                to excellence and client satisfaction remains at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every service we provide, 
              ensuring consistent quality and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications & Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Certifications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Qualified & Certified Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team holds prestigious certifications and memberships with professional 
                bodies, ensuring that you receive advice from qualified experts who stay 
                updated with the latest regulations and best practices.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Professional Excellence</h3>
                      <p className="text-sm text-gray-600">Recognized for outstanding service quality</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Data Security Certified</h3>
                      <p className="text-sm text-gray-600">Your information is always protected</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Client Satisfaction</h3>
                      <p className="text-sm text-gray-600">98% client satisfaction rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Griva Consultancy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Success is Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond traditional consulting to become your trusted partner 
              in financial success and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick & Efficient</h3>
                <p className="text-gray-600">
                  Fast turnaround times without compromising on quality. We understand 
                  the importance of meeting deadlines in the business world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of helping clients save thousands in taxes and successfully 
                  launching hundreds of businesses across various industries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Touch</h3>
                <p className="text-gray-600">
                  We believe in building long-term relationships. Every client receives 
                  personalized attention and customized solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Get in Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today to discuss how we can help you achieve your financial goals
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="blink w-full sm:w-auto">
                <Link to="/book">File your return now...</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">+91 7600510309</p>
                <Button asChild variant="outline" size="sm">
                  <a href="tel:+917600510309">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">grivaconsultancy@gmail.com</p>
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:grivaconsultancy@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Instant messaging</p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://wa.me/+917600510309" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-600 mb-4">
                  102, Lotus Corporate House, RTO Road, Near Jweles Circle, Vijayraj Nagar, Bhavnagar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Your Financial Success Together
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference of working with true professionals who care 
            about your success as much as you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to="/book">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
