import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MapPin, 
  CheckCircle,
  Star,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    consultationType: 'phone',
    preferredDate: '',
    preferredTime: '',
    budget: '',
    description: '',
    urgency: 'normal',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      name: 'Income Tax Return Filing',
      price: 'Starting ₹999',
      duration: '30-45 mins',
      description: 'Complete ITR filing with tax optimization'
    },
    {
      name: 'GST Registration',
      price: 'Starting ₹1,999',
      duration: '45-60 mins',
      description: 'New GST registration with complete documentation'
    },
    {
      name: 'GST Returns',
      price: 'Starting ₹999/month',
      duration: 'Monthly',
      description: 'Monthly GST return filing (GSTR-1, 3B) and compliance'
    },
    {
      name: 'Company Registration',
      price: 'Starting ₹9,999',
      duration: '60-90 mins',
      description: 'Private Limited or LLP incorporation'
    },
    {
      name: 'Accounting',
      price: 'Starting ₹1,999/month',
      duration: 'Ongoing',
      description: 'Bookkeeping, reconciliation, payroll and monthly statements'
    },
    {
      name: 'Tax Planning Consultation',
      price: 'Starting ₹1,999',
      duration: '60 mins',
      description: 'Comprehensive tax planning strategy'
    },
    {
      name: 'Loan Consultancy',
      price: 'Starting ₹1,499',
      duration: '45 mins',
      description: 'Business or personal loan guidance'
    },
    {
      name: 'Mutual Fund Advisory',
      price: 'Starting ₹999',
      duration: '30-45 mins',
      description: 'Investment planning and portfolio review'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      // Store booking data
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Create WhatsApp message for booking
        const selectedService = services.find(s => s.name === formData.service);
        const whatsappMessage = `*New Consultation Booking*

*Service:* ${formData.service}
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Consultation Details:*
• Type: ${formData.consultationType === 'phone' ? 'Phone Call' : formData.consultationType === 'video' ? 'Video Call' : 'In-Person Meeting'}
• Preferred Date: ${formData.preferredDate}
• Preferred Time: ${formData.preferredTime}
• Budget: ${formData.budget}
• Urgency: ${formData.urgency}

*Service Price:* ${selectedService?.price || 'To be discussed'}
*Duration:* ${selectedService?.duration || 'To be discussed'}

*Description:*
${formData.description}

*Submitted from:* Griva Consultancy Website - Book Consultation`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/+917600510309?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Your consultation booking has been submitted successfully. We've opened WhatsApp 
                  to confirm your appointment. Our team will contact you within 2 hours to finalize the details.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <a href="https://wa.me/+917600510309" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Confirm on WhatsApp
                    </a>
                  </Button>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
                    Book Another Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Book Consultation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Schedule Your Tax Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert advice from our qualified tax professionals. Choose your preferred 
            consultation method and schedule a convenient time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below to schedule your consultation. We'll confirm 
                  your appointment via WhatsApp within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Service Required</h3>
                    <div className="space-y-2">
                      <Label htmlFor="service">Select Service *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.name} value={service.name}>
                              <div className="flex flex-col">
                                <span>{service.name}</span>
                                <span className="text-sm text-gray-500">{service.price} • {service.duration}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Expected Budget</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under ₹1,000</SelectItem>
                          <SelectItem value="1000-5000">₹1,000 - ₹5,000</SelectItem>
                          <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                          <SelectItem value="10000-25000">₹10,000 - ₹25,000</SelectItem>
                          <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="above-50000">Above ₹50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Consultation Preference</h3>
                    <div className="space-y-4">
                      <Label>Consultation Type *</Label>
                      <RadioGroup 
                        value={formData.consultationType} 
                        onValueChange={(value) => handleInputChange('consultationType', value)}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="phone" id="phone" />
                          <Label htmlFor="phone" className="flex items-center space-x-2 cursor-pointer">
                            <Phone className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">Phone Call</div>
                              <div className="text-sm text-gray-500">Voice consultation</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="video" id="video" />
                          <Label htmlFor="video" className="flex items-center space-x-2 cursor-pointer">
                            <Video className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">Video Call</div>
                              <div className="text-sm text-gray-500">Online meeting</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="inperson" id="inperson" />
                          <Label htmlFor="inperson" className="flex items-center space-x-2 cursor-pointer">
                            <MapPin className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">In-Person</div>
                              <div className="text-sm text-gray-500">Office visit</div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Schedule</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (Same Day)</SelectItem>
                          <SelectItem value="normal">Normal (2-3 Days)</SelectItem>
                          <SelectItem value="flexible">Flexible (1 Week)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="description">Tell us about your requirements</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe your tax situation, questions, or specific requirements..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Terms & Submit */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeToTerms', !!checked)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !formData.agreeToTerms}>
                      {isSubmitting ? (
                        'Processing...'
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          Book Consultation & Send to WhatsApp
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-8">
            {/* Consultation Benefits */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Why Book a Consultation?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Personalized Advice</h4>
                    <p className="text-sm text-gray-600">Get solutions tailored to your specific situation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Expert Guidance</h4>
                    <p className="text-sm text-gray-600">Advice from qualified tax professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Save Money</h4>
                    <p className="text-sm text-gray-600">Maximize deductions and minimize tax liability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Peace of Mind</h4>
                    <p className="text-sm text-gray-600">Ensure compliance and avoid penalties</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Overview */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Popular Services</CardTitle>
                <CardDescription>Transparent pricing for our most requested services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.slice(0, 4).map((service, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{service.name}</h4>
                      <p className="text-xs text-gray-500">{service.duration}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">{service.price}</Badge>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-600">
                    *Final pricing may vary based on complexity and requirements
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Urgent Needs */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary to-green-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 opacity-90 text-sm">
                  For urgent tax matters or same-day consultations, contact us directly on WhatsApp.
                </p>
                <Button asChild variant="secondary" size="lg" className="w-full">
                  <a href="https://wa.me/+917600510309" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
