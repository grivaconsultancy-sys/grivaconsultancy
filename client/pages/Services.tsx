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
  PiggyBank,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  DollarSign,
  Phone
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "Income Tax Return Filing",
      subtitle: "ITR-1 to ITR-7 | Individual & Business",
      price: "Starting ₹999",
      duration: "2-3 Days",
      description: "Complete income tax return filing service with maximum deductions and quick processing.",
      features: [
        "All ITR forms (ITR-1 to ITR-7)",
        "Tax optimization strategies",
        "Maximum deduction claims",
        "Quick refund processing",
        "Expert CA review",
        "Free consultation",
        "Document collection",
        "E-filing & verification"
      ],
      process: [
        "Document collection & review",
        "Tax calculation & optimization",
        "ITR preparation & filing",
        "Acknowledgment & tracking"
      ],
      popular: true
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "GST Registration & Returns",
      subtitle: "New Registration | Monthly Returns",
      price: "Registration: Starting ₹1,999 | Returns: Starting ₹999/month",
      duration: "7-10 Days",
      description: "Complete GST registration and ongoing return filing services for all business types.",
      features: [
        "GST registration (all states)",
        "GSTIN certificate",
        "Monthly return filing",
        "GSTR-1, GSTR-2, GSTR-3B",
        "Input tax credit optimization",
        "Compliance calendar",
        "Notice handling",
        "Appeal handling",
        "Amendment support"
      ],
      process: [
        "Business details verification",
        "Document preparation",
        "Online application filing",
        "GSTIN certificate delivery"
      ]
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Company Registration",
      subtitle: "Private Limited | LLP | Partnership",
      price: "Starting ₹9,999",
      duration: "15-20 Days",
      description: "Complete company incorporation services with all legal formalities and documentation.",
      features: [
        "Private Limited Company",
        "Limited Liability Partnership",
        "Partnership registration",
        "Name approval & reservation",
        "Digital signature certificate",
        "Director identification",
        "Certificate of incorporation",
        "PAN & TAN application"
      ],
      process: [
        "Name availability check",
        "Document preparation",
        "Government filing",
        "Certificate issuance"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Company Compliances",
      subtitle: "ROC Filing | Audit | Annual Returns",
      price: "Starting ₹4,999/year",
      duration: "Ongoing",
      description: "Complete compliance management for registered companies including ROC filings and audits.",
      features: [
        "Annual return filing",
        "Board meeting minutes",
        "ROC compliance",
        "Statutory audit",
        "Income tax audit",
        "Filing of forms",
        "Compliance calendar",
        "Penalty avoidance",
        "Appeal filing support"
      ],
      process: [
        "Compliance assessment",
        "Document preparation",
        "Statutory filings",
        "Ongoing monitoring"
      ]
    },
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "Accounting",
      subtitle: "Bookkeeping | Reconciliation | Payroll",
      price: "Starting ₹1,999/month",
      duration: "Ongoing",
      description: "Professional accounting services including bookkeeping, monthly statements, GST/TDS reconciliation, and payroll processing.",
      features: [
        "Daily bookkeeping",
        "Ledger maintenance",
        "Bank reconciliation",
        "GST reconciliation",
        "TDS compliance",
        "Payroll processing",
        "Monthly financial statements",
        "MIS reports"
      ],
      process: [
        "Requirement assessment",
        "Data setup & onboarding",
        "Monthly processing",
        "Review & reporting"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Loan Consultancy",
      subtitle: "Business | Personal | Home Loans",
      price: "Starting ₹1,499",
      duration: "7-15 Days",
      description: "Expert guidance for loan applications with documentation support and best rate negotiations.",
      features: [
        "Business loan assistance",
        "Personal loan guidance",
        "Home loan consultancy",
        "Documentation support",
        "Bank liaison",
        "Rate negotiation",
        "Eligibility assessment",
        "Application tracking"
      ],
      process: [
        "Eligibility assessment",
        "Documentation support",
        "Bank application",
        "Follow-up & approval"
      ]
    },
    {
      icon: <PiggyBank className="h-12 w-12" />,
      title: "Mutual Fund & Tax Planning",
      subtitle: "SIP | Tax Saving | Portfolio Review",
      price: "Starting ₹999",
      duration: "Ongoing",
      description: "Comprehensive investment advisory and tax planning for wealth creation and tax optimization.",
      features: [
        "SIP planning & setup",
        "Tax saving investments",
        "Portfolio diversification",
        "Risk assessment",
        "Goal-based planning",
        "Regular review",
        "Market analysis",
        "Retirement planning"
      ],
      process: [
        "Financial goal analysis",
        "Investment strategy",
        "Portfolio creation",
        "Regular monitoring"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Secure & Confidential",
      description: "Bank-level security for all your sensitive documents and data"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert CA Team",
      description: "Qualified chartered accountants with years of experience"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Turnaround",
      description: "Fast processing with guaranteed delivery timelines"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Transparent Pricing",
      description: "No hidden charges, upfront pricing for all services"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Tax & Business
              <span className="text-primary block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From individual tax returns to complete business setup, we provide comprehensive 
              solutions for all your financial and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/book">
                  <Calculator className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <a href="https://wa.me/+917600510309" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Service Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-primary">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          {service.popular && (
                            <Badge className="bg-primary">Most Popular</Badge>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-3">{service.subtitle}</p>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-5 w-5 text-green-600" />
                            <span className="font-semibold text-green-600">{service.price}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-blue-600" />
                            <span className="text-blue-600">{service.duration}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-2 mb-6">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild>
                            <Link to="/book">
                              Book Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline">
                            <a href="https://wa.me/+917600510309" target="_blank" rel="noopener noreferrer">
                              <Phone className="mr-2 h-4 w-4" />
                              Get Quote
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div className="bg-gray-50 p-8 border-l border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex items-start space-x-3">
                          <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                            {stepIdx + 1}
                          </div>
                          <span className="text-sm text-gray-600 flex-1">{step}</span>
                        </div>
                      ))}
                    </div>

                    {service.features.length > 6 && (
                      <div className="mt-6">
                        <h5 className="font-medium text-gray-900 mb-3">Additional Features</h5>
                        <div className="space-y-2">
                          {service.features.slice(6).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Trust Griva Consultancy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to deliver 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">{reason.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Service Areas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Serve Clients Across India
            </h2>
            <p className="text-xl text-gray-600">
              Providing professional tax and business services nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Individual Taxpayers</CardTitle>
                <CardDescription>Personal tax solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Salaried professionals</li>
                  <li>• Business owners</li>
                  <li>• Freelancers & consultants</li>
                  <li>• Senior citizens</li>
                  <li>• NRI tax filing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Small & Medium Businesses</CardTitle>
                <CardDescription>Complete business solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Startups & new businesses</li>
                  <li>• Retail & trading companies</li>
                  <li>• Service providers</li>
                  <li>• Manufacturing units</li>
                  <li>• E-commerce businesses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Large Enterprises</CardTitle>
                <CardDescription>Enterprise-grade services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Corporate tax planning</li>
                  <li>• Multi-state compliance</li>
                  <li>• Transfer pricing</li>
                  <li>• International taxation</li>
                  <li>• Audit & assurance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose the service you need and let our experts handle the rest. 
            Get professional tax and business solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/book">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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
