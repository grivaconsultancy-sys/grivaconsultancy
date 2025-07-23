import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Filter,
  LogOut,
  Users,
  BookOpen,
  TrendingUp,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

interface ContactSubmission {
  id: string;
  timestamp: string;
  data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    urgency: string;
  };
  status: 'new' | 'contacted' | 'completed';
}

interface Booking {
  id: string;
  timestamp: string;
  data: {
    name: string;
    email: string;
    phone: string;
    service: string;
    consultationType: string;
    preferredDate: string;
    preferredTime: string;
    budget?: string;
    description?: string;
    urgency: string;
  };
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === 'bapu@grivatax.com' && loginData.password === 'Admin') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginData({ email: '', password: '' });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch contact submissions
      const contactResponse = await fetch('/api/contact/submissions');
      if (contactResponse.ok) {
        const contactData = await contactResponse.json();
        setContactSubmissions(contactData.submissions || []);
      }

      // Fetch bookings
      const bookingResponse = await fetch('/api/bookings');
      if (bookingResponse.ok) {
        const bookingData = await bookingResponse.json();
        setBookings(bookingData.bookings || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/contact/submissions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        fetchData(); // Refresh data
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Access the Griva Consultancy CRM Dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter admin email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login to Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stats = {
    totalContacts: contactSubmissions.length,
    totalBookings: bookings.length,
    newContacts: contactSubmissions.filter(c => c.status === 'new').length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Griva Consultancy CRM</h1>
            <p className="text-gray-600">Admin Dashboard</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-primary" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.totalContacts}</p>
                      <p className="text-gray-600">Total Contacts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.totalBookings}</p>
                      <p className="text-gray-600">Total Bookings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <MessageSquare className="h-8 w-8 text-green-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.newContacts}</p>
                      <p className="text-gray-600">New Contacts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-orange-500" />
                    <div className="ml-4">
                      <p className="text-2xl font-bold">{stats.pendingBookings}</p>
                      <p className="text-gray-600">Pending Bookings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Contact Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactSubmissions.slice(0, 5).map((contact) => (
                      <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{contact.data.name}</p>
                          <p className="text-sm text-gray-600">{contact.data.service}</p>
                        </div>
                        <Badge variant={contact.status === 'new' ? 'default' : contact.status === 'contacted' ? 'secondary' : 'outline'}>
                          {contact.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.slice(0, 5).map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{booking.data.name}</p>
                          <p className="text-sm text-gray-600">{booking.data.service}</p>
                          <p className="text-xs text-gray-500">{booking.data.preferredDate}</p>
                        </div>
                        <Badge variant={booking.status === 'pending' ? 'default' : booking.status === 'confirmed' ? 'secondary' : 'outline'}>
                          {booking.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>
                  Manage and track all contact form submissions from the website
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p>Loading contacts...</p>
                ) : (
                  <div className="space-y-4">
                    {contactSubmissions.map((contact) => (
                      <div key={contact.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{contact.data.name}</h3>
                            <p className="text-sm text-gray-600">Submitted: {new Date(contact.timestamp).toLocaleString()}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={contact.status === 'new' ? 'default' : contact.status === 'contacted' ? 'secondary' : 'outline'}>
                              {contact.status}
                            </Badge>
                            <Select value={contact.status} onValueChange={(value) => updateContactStatus(contact.id, value)}>
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{contact.data.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{contact.data.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{contact.data.service}</Badge>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-sm text-gray-700">{contact.data.message}</p>
                        </div>
                        
                        <div className="flex justify-end mt-3 space-x-2">
                          <Button size="sm" variant="outline" asChild>
                            <a href={`mailto:${contact.data.email}`}>
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={`https://wa.me/${contact.data.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                              <Phone className="h-4 w-4 mr-1" />
                              WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Bookings</CardTitle>
                <CardDescription>
                  Manage and track all consultation booking requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <p>Loading bookings...</p>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{booking.data.name}</h3>
                            <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
                            <p className="text-sm text-gray-600">Submitted: {new Date(booking.timestamp).toLocaleString()}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={booking.status === 'pending' ? 'default' : booking.status === 'confirmed' ? 'secondary' : 'outline'}>
                              {booking.status}
                            </Badge>
                            <Select value={booking.status} onValueChange={(value) => updateBookingStatus(booking.id, value)}>
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{booking.data.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{booking.data.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{booking.data.preferredDate}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{booking.data.preferredTime}</span>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <Badge variant="outline">{booking.data.service}</Badge>
                          <Badge variant="secondary">{booking.data.consultationType}</Badge>
                          {booking.data.budget && <Badge variant="outline">Budget: {booking.data.budget}</Badge>}
                        </div>
                        
                        {booking.data.description && (
                          <div className="bg-gray-50 p-3 rounded mb-4">
                            <p className="text-sm text-gray-700">{booking.data.description}</p>
                          </div>
                        )}
                        
                        <div className="flex justify-end space-x-2">
                          <Button size="sm" variant="outline" asChild>
                            <a href={`mailto:${booking.data.email}`}>
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={`https://wa.me/${booking.data.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                              <Phone className="h-4 w-4 mr-1" />
                              WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Submissions</span>
                      <span className="font-bold">{stats.totalContacts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>New Contacts</span>
                      <span className="font-bold text-green-600">{stats.newContacts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Contacted</span>
                      <span className="font-bold text-blue-600">
                        {contactSubmissions.filter(c => c.status === 'contacted').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed</span>
                      <span className="font-bold text-gray-600">
                        {contactSubmissions.filter(c => c.status === 'completed').length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Bookings</span>
                      <span className="font-bold">{stats.totalBookings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pending</span>
                      <span className="font-bold text-orange-600">{stats.pendingBookings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Confirmed</span>
                      <span className="font-bold text-green-600">
                        {bookings.filter(b => b.status === 'confirmed').length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Completed</span>
                      <span className="font-bold text-blue-600">
                        {bookings.filter(b => b.status === 'completed').length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
