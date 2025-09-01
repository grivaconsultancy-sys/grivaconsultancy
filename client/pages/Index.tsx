import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Building2, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Target,
  Briefcase,
  PiggyBank
} from 'lucide-react';

export default function Index() {
  const services = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Income Tax Return",
      description: "Expert filing of individual and business income tax returns with maximum refunds.",
      features: ["ITR-1 to ITR-7", "Tax Optimization", "Quick Processing", "Expert Review"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "GST Registration & Return",
      description: "Complete GST registration and monthly return filing services.",
      features: ["GST Registration", "Monthly Returns", "GSTR-1,2,3B", "Compliance Support"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Company Registration",
      description: "End-to-end company incorporation and business setup services.",
      features: ["Private Limited", "LLP Registration", "Partnership Firm", "Sole Proprietorship"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Company Compliances",
      description: "Ongoing compliance management for registered companies.",
      features: ["Annual Filing", "Board Meetings", "Audit Support", "ROC Compliance"]
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Accounting",
      description: "Bookkeeping, bank reconciliation, payroll, and monthly statements.",
      features: ["Bookkeeping", "Reconciliation", "Payroll", "Monthly Statements"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Loan Consultancy",
      description: "Expert guidance for business and personal loan applications.",
      features: ["Business Loans", "Personal Loans", "Home Loans", "Documentation"]
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Mutual Fund & Tax Planning",
      description: "Investment advisory and comprehensive tax planning solutions.",
      features: ["SIP Planning", "Tax Saving", "Portfolio Review", "Retirement Planning"]
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Savani Smit",
      role: "Business Owner",
      content: "Excellent service for GST registration and returns. Very professional and timely.",
      rating: 5
    },
    {
      name: "Mehul Vatukiya",
      role: "Individual Taxpayer",
      content: "Got maximum refund on my ITR. Highly recommend their tax planning services.",
      rating: 5
    },
    {
      name: "Yashpal Padhiyar",
      role: "Startup Founder",
      content: "Smooth company registration process. They handled everything professionally.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  🏆 Trusted Tax Consultancy
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your One-Stop
                  <span className="text-primary block">Tax Solution</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Professional tax consultancy helping individuals and businesses save money, 
                  ensure compliance, and achieve financial success with expert guidance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg w-full sm:w-auto">
                  <Link to="/book">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg w-full sm:w-auto border-white text-white hover:bg-white hover:text-black">
                  <a href="https://wa.me/+917600510309" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">100% Secure & Confidential</h3>
                      <p className="text-sm text-gray-300">Your data is protected with us</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Quick Turnaround</h3>
                      <p className="text-sm text-gray-300">Fast processing of all documents</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Expert Team</h3>
                      <p className="text-sm text-gray-300">Qualified chartered accountants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Tax & Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual tax returns to complete business setup, we provide end-to-end 
              solutions for all your financial and compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6" variant="outline">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                India's Most Trusted Tax Consultancy
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of expertise and thousands of satisfied clients, we are committed 
                to providing exceptional tax and business services that save you time, money, and stress.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accuracy Guaranteed</h3>
                    <p className="text-gray-600">100% accurate filing with expert review process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Briefcase className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Team</h3>
                    <p className="text-gray-600">Qualified CAs and tax experts at your service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Data Security</h3>
                    <p className="text-gray-600">Bank-level security for all your sensitive information</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="mt-8">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional tax consulting"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">₹2.5L+</div>
                    <div className="text-sm text-gray-600">Average Tax Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Save on Your Taxes?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert tax advice and maximize your savings. Book a free consultation today 
            and discover how much you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg w-full sm:w-auto">
              <Link to="/book">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/+917600510309" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 7600510309
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
