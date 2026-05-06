import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  FileText,
  Shield,
  BookOpen,
  Heart,
  Hammer,
  Paintbrush,
  Blocks,
  Grid3X3,
  Glasses,
  HandHeart,
  Calendar,
  Clock,
  Quote,
} from 'lucide-react';
import './App.css';

const PHONE_NUMBER = '+61470356307';
const WHATSAPP_NUMBER = '+61470356307';
const EMAIL = 'vpeconsultants@gmail.com';

const services = [
  {
    title: 'Course & University Selection',
    description:
      'Personalized assessment of your academic profile and career goals to match you with the best-fit universities and programs across Australia.',
    icon: GraduationCap,
  },
  {
    title: 'Application Assistance',
    description:
      'Complete application support from document preparation to final submission, ensuring accuracy and timely processing.',
    icon: FileText,
  },
  {
    title: 'Student Visa Guidance',
    description:
      'End-to-end assistance with Australian student visa applications with expert documentation and approval strategies.',
    icon: Shield,
  },
  {
    title: 'SOP & Documentation Support',
    description:
      'Craft compelling Statements of Purpose and ensure all documents meet university and visa standards.',
    icon: BookOpen,
  },
  {
    title: 'Scholarship Guidance',
    description:
      'Identify scholarship opportunities and guide you through application processes to reduce your financial burden.',
    icon: Award,
  },
  {
    title: 'Health Cover Assistance',
    description:
      'Support with understanding and arranging health cover requirements for Australian student visas.',
    icon: Heart,
  },
];

const programs = [
  { title: 'Carpentry', icon: Hammer },
  { title: 'Painting & Decorating', icon: Paintbrush },
  { title: 'Bricklaying & Blocklaying', icon: Blocks },
  { title: 'Wall Tiling', icon: Grid3X3 },
  { title: 'Glass Glazing', icon: Glasses },
  { title: 'Community Services', icon: HandHeart },
];

const institutions = [
  'UBSS College',
  'Lincoln Institute of Higher Education',
  'Northwest College',
  '+15 more institutes across Australia',
];

const testimonials = [
  {
    name: 'Rahul S.',
    program: 'Carpentry',
    text: 'Vedapath made my dream of studying in Australia a reality. From visa guidance to university selection, they handled everything seamlessly.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    program: 'Community Services',
    text: 'The team was incredibly supportive throughout the entire process. Their scholarship guidance saved me thousands of dollars!',
    rating: 5,
  },
  {
    name: 'Ankit K.',
    program: 'Bricklaying & Blocklaying',
    text: 'Professional, transparent, and genuinely caring. I would recommend Vedapath to anyone planning to study in Australia.',
    rating: 5,
  },
  {
    name: 'Simran D.',
    program: 'Painting & Decorating',
    text: 'Vanshika personally guided me through each step. Her knowledge of Australian education pathways is truly exceptional.',
    rating: 5,
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.program) {
      alert('Please fill in all required fields');
      return;
    }
    const message = `Hello! I'm interested in your services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgram: ${formData.program}\nMessage: ${formData.message}`;
    const cleanPhone = WHATSAPP_NUMBER.replace(/\D/g, '');
    const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', program: '', message: '' });
      setFormSubmitted(false);
    }, 2000);
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appointmentData.name || !appointmentData.phone || !appointmentData.date || !appointmentData.time) {
      alert('Please fill in all required fields');
      return;
    }
    const message = `Hello! I'd like to book an appointment.\n\nName: ${appointmentData.name}\nEmail: ${appointmentData.email}\nPhone: ${appointmentData.phone}\nPreferred Date: ${appointmentData.date}\nPreferred Time: ${appointmentData.time}`;
    const cleanPhone = WHATSAPP_NUMBER.replace(/\D/g, '');
    const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    setAppointmentSubmitted(true);
    setTimeout(() => {
      setAppointmentData({ name: '', email: '', phone: '', date: '', time: '' });
      setAppointmentSubmitted(false);
    }, 2000);
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleWhatsAppQuick = () => {
    const quickMessage = 'Hello! I would like to know more about your services.';
    const cleanPhone = WHATSAPP_NUMBER.replace(/\D/g, '');
    const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(quickMessage)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  const navItems = ['About', 'Services', 'Programs', 'Partners', 'Testimonials', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900 text-xl">
                V
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Vedapath
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handlePhoneCall}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </button>
              <button
                onClick={handleWhatsAppQuick}
                className="flex items-center space-x-2 bg-green-500/20 border-2 border-green-400 text-green-400 font-bold px-5 py-2.5 rounded-full hover:bg-green-500/30 transition-all duration-300"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg p-6 mb-4">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-amber-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => {
                    handlePhoneCall();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold px-5 py-3 rounded-full"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => {
                    handleWhatsAppQuick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-green-500/20 border-2 border-green-400 text-green-400 font-bold px-5 py-3 rounded-full"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Your{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Gateway
            </span>{' '}
            to Australian Education
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Expert guidance for university selection, visa applications, scholarships, and your PR pathway in Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handlePhoneCall}
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
            >
              <Phone size={24} />
              <span>Call +61 470 356 307</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button
              onClick={handleWhatsAppQuick}
              className="group flex items-center justify-center space-x-3 bg-green-500/20 border-2 border-green-400 text-green-400 font-bold px-8 py-4 rounded-full text-lg hover:bg-green-500/30 transition-all duration-300"
            >
              <MessageCircle size={24} />
              <span>WhatsApp Inquiry</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Users size={32} className="mx-auto mb-3 text-amber-400" />
              <p className="text-3xl font-bold">500+</p>
              <p className="text-gray-400 mt-2">Students Guided</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Award size={32} className="mx-auto mb-3 text-amber-400" />
              <p className="text-3xl font-bold">98%</p>
              <p className="text-gray-400 mt-2">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Star size={32} className="mx-auto mb-3 text-amber-400" />
              <p className="text-3xl font-bold">7+</p>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">About Vedapath</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                At Vedapath Edu Consultants, we guide students toward a brighter future through quality education
                opportunities in Australia. Whether you're planning to pursue higher education, PR pathway, vocational
                training, or professional courses, our expert team is here to support you every step of the way.
              </p>
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-l-4 border-amber-400 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Our Mission</h3>
                <p className="text-gray-300">
                  To empower students with the right guidance and opportunities to build successful international careers
                  through quality education and transparency in Australia.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Personalized, student-focused approach',
                  'Expert knowledge of Australian education/PR pathways',
                  'Transparent and ethical guidance',
                  'High success rate for admissions and visas',
                  'Continuous support from application to arrival',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-2xl p-1">
                <div className="bg-slate-900 rounded-2xl p-8 border border-amber-400/20">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap size={48} className="text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Vanshika</h3>
                    <p className="text-amber-400 font-bold mb-4">Education Agent QEAC 14049</p>
                    <p className="text-gray-400 leading-relaxed">
                      Your dedicated guide through every step of your Australian education journey. With years of
                      experience and deep knowledge of the education system, Vanshika ensures every student receives
                      personalized attention and expert advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive support for every stage of your Australian education journey
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent size={24} className="text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Programs Offered</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Vocational and professional courses to kickstart your career in Australia
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, idx) => {
              const IconComponent = prog.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-amber-400/10 to-orange-500/10 border-2 border-amber-400/20 rounded-xl p-8 text-center hover:border-amber-400 hover:bg-amber-400/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4 flex justify-center">
                    <IconComponent
                      size={48}
                      className="text-amber-400 group-hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-amber-400 transition-colors duration-300">
                    {prog.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Our Institutional Partners</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We work with leading Australian educational institutions to provide the best opportunities
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {institutions.map((inst, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-slate-900" />
                  </div>
                  <span className="text-lg font-semibold group-hover:text-amber-400 transition-colors duration-300">
                    {inst}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Student Stories</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Hear from students who achieved their Australian education dreams with our guidance
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <Quote size={32} className="text-amber-400/50 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-amber-400 text-sm">{t.program}</p>
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Book an Appointment</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Schedule a free consultation with our education experts
          </p>
          <form
            onSubmit={handleAppointmentSubmit}
            className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10"
          >
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-300">Full Name *</label>
              <input
                type="text"
                required
                value={appointmentData.name}
                onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  value={appointmentData.email}
                  onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">Phone *</label>
                <input
                  type="tel"
                  required
                  value={appointmentData.phone}
                  onChange={(e) => setAppointmentData({ ...appointmentData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="+61 XXX XXX XXX"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">
                  <Calendar size={14} className="inline mr-1" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={appointmentData.date}
                  onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">
                  <Clock size={14} className="inline mr-1" />
                  Preferred Time *
                </label>
                <input
                  type="time"
                  required
                  value={appointmentData.time}
                  onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold py-4 rounded-full text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
            >
              {appointmentSubmitted ? 'Sent to WhatsApp!' : 'Book via WhatsApp'}
            </button>
          </form>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Get Started Today</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Fill out the form below and we'll send your inquiry directly to WhatsApp
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10"
          >
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-300">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-300">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="+61 XXX XXX XXX"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-300">Program Interest *</label>
              <select
                required
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
              >
                <option value="" className="bg-slate-900">Select a program</option>
                <option value="Carpentry" className="bg-slate-900">Carpentry</option>
                <option value="Painting & Decorating" className="bg-slate-900">Painting & Decorating</option>
                <option value="Bricklaying & Blocklaying" className="bg-slate-900">Bricklaying & Blocklaying</option>
                <option value="Wall Tiling" className="bg-slate-900">Wall Tiling</option>
                <option value="Glass Glazing" className="bg-slate-900">Glass Glazing</option>
                <option value="Community Services" className="bg-slate-900">Community Services</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2 text-gray-300">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                rows={5}
                placeholder="Tell us about your educational goals..."
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold py-4 rounded-full text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
              >
                {formSubmitted ? 'Sent to WhatsApp!' : 'Send Inquiry via WhatsApp'}
              </button>
              <button
                type="button"
                onClick={handlePhoneCall}
                className="flex-1 bg-white/10 border-2 border-white/30 text-white font-bold py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300"
              >
                Call Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-white/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900 text-xl">
                  V
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Vedapath
                </span>
              </div>
              <p className="text-gray-400 text-sm">Your gateway to success in Australian education and PR pathways.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#programs" className="hover:text-amber-400 transition-colors">Programs</a></li>
                <li><a href="#partners" className="hover:text-amber-400 transition-colors">Partners</a></li>
                <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Course Selection</li>
                <li>Visa Guidance</li>
                <li>SOP Support</li>
                <li>Scholarships</li>
                <li>Health Cover</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-amber-400">Contact Info</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-start space-x-3">
                  <Mail size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${EMAIL}`} className="hover:text-amber-400 transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="hover:text-amber-400 transition-colors">+61 470 356 307</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Melbourne, Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Vedapath Edu Consultants Pty Ltd. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://www.homeaffairs.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Dept. Home Affairs
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <button
          onClick={handlePhoneCall}
          className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
          title="Call us"
          aria-label="Call Vedapath"
        >
          <Phone size={24} className="text-white" />
        </button>
        <button
          onClick={handleWhatsAppQuick}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
          title="WhatsApp us"
          aria-label="WhatsApp Vedapath"
        >
          <MessageCircle size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default App;
