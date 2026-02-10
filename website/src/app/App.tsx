import { useState } from 'react';
import { Menu, X, ArrowRight, Users, Target, Award, Zap, Mail, Linkedin, Twitter, Instagram, Shield, TrendingUp, CheckCircle2, Phone, MessageCircle, Facebook, Youtube } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import realityCheckImage from 'figma:asset/c70aa94819d724fa87d8a515f7bd44de56ad87fb.png';
import operationsManagerImage from 'figma:asset/99199b2db00d90c9716487bfa107d3eb1353d92d.png';
import cooImage from 'figma:asset/3cb6682fa525cdf8aa0eac3bfbd4e76d6deb5b0e.png';
import leadProgrammerImage from 'figma:asset/4d05c4c944082f6c52f471791107bc7c14654581.png';
import ceoImage from 'figma:asset/02a5c4bec95c22d03df13756aca09c546ee89a43.png';
import socialMediaManagerImage from 'figma:asset/6ec67a00fb92900cb11673b3bb40841cffaaa930.png';
import logoImage from 'figma:asset/2a3bf96bf1867cd5f1c27ca8bf26e66d0db7fa6a.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
          <div className="flex items-center">
  <span className="text-base md:text-lg font-semibold text-foreground">
    AI BOTHA <span className="text-primary">&</span> COMPANY
  </span>
</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('team')} className="text-muted-foreground hover:text-foreground transition-colors">
                Team
              </button>
              <button onClick={() => scrollToSection('updates')} className="text-muted-foreground hover:text-foreground transition-colors">
                Updates
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Work With Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-border">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                Team
              </button>
              <button onClick={() => scrollToSection('updates')} className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                Updates
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mx-4 px-5 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-center block"
              >
                Work With Us
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-card border border-primary/30 rounded-full">
            <span className="text-primary text-sm tracking-wide">MEDIA • STORYTELLING • IMPACT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            AI BOTHA <span className="text-primary">&</span> COMPANY
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            A premium media and digital company dedicated to creating powerful narratives, 
            driving meaningful impact, and building lasting connections through strategic storytelling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('team')}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
            >
              Meet the Team
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('updates')}
              className="w-full sm:w-auto px-8 py-4 bg-card border border-border text-foreground rounded-lg hover:border-primary transition-all"
            >
              Latest Updates
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
              We transform complex stories into compelling narratives that inspire action and drive meaningful change.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We uphold the highest standards of honesty and transparency in every project and partnership.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every story we tell is crafted to create lasting, measurable impact in communities and industries.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consistency</h3>
              <p className="text-muted-foreground leading-relaxed">
                We deliver excellence reliably, ensuring every engagement reflects our commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the professionals driving innovation and excellence at AI BOTHA & COMPANY
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* CEO */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback 
                  src={ceoImage}
                  alt="CEO - Founder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  CEO
                </div>
                <h3 className="text-xl font-semibold mb-1">Chindikani Israel Botha</h3>
                <p className="text-muted-foreground">Strategic Vision & Leadership</p>
              </div>
            </div>

            {/* COO */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback 
                  src={cooImage}
                  alt="COO"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  COO
                </div>
                <h3 className="text-xl font-semibold mb-1">Mabuchih Mlotha</h3>
                <p className="text-muted-foreground">Operations & Business Development</p>
              </div>
            </div>

            {/* Operations & Programs Manager */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback 
                  src={operationsManagerImage}
                  alt="Operations & Programs Manager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  Operations Manager
                </div>
                <h3 className="text-xl font-semibold mb-1">Mary Gift Chingapa</h3>
                <p className="text-muted-foreground">Program Coordination & Delivery</p>
              </div>
            </div>

            {/* Lead Programmer */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback 
                  src={leadProgrammerImage}
                  alt="Lead Programmer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  Lead Programmer
                </div>
                <h3 className="text-xl font-semibold mb-1">Valentino Miguel Chinyama</h3>
                <p className="text-muted-foreground">Technical Architecture & Development</p>
              </div>
            </div>

            {/* Social Media Manager */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback 
                  src={socialMediaManagerImage}
                  alt="Social Media Manager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  Social Media Manager
                </div>
                <h3 className="text-xl font-semibold mb-1">Patrick George</h3>
                <p className="text-muted-foreground">Digital Presence & Community Engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-semibold tracking-wide">FLAGSHIP PROGRAM</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reality Check Malawi</h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                An innovative media initiative bringing authentic stories from the heart of Malawi. 
                We amplify local voices, document real experiences, and create platforms for 
                community-driven narratives that inspire change and foster understanding.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={16} />
                  </div>
                  <p className="text-muted-foreground">Community storytelling and grassroots journalism</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={16} />
                  </div>
                  <p className="text-muted-foreground">Documentary production and multimedia content</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={16} />
                  </div>
                  <p className="text-muted-foreground">Social impact campaigns and awareness initiatives</p>
                </div>
              </div>

              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 group">
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
                <ImageWithFallback 
                  src={realityCheckImage}
                  alt="Reality Check Malawi Program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates / News Section */}
      <section id="updates" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay informed with our recent news, insights, and announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Update 1 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group cursor-pointer">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <TrendingUp size={16} className="text-primary" />
                  <span>February 5, 2026</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Expanding Our Digital Footprint
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We're excited to announce new partnerships that will amplify our reach 
                  across multiple digital platforms and enhance our storytelling capabilities.
                </p>
                <button className="text-primary hover:gap-3 flex items-center gap-2 transition-all group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Update 2 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group cursor-pointer">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Award size={16} className="text-primary" />
                  <span>January 28, 2026</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Recognition at African Media Awards
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reality Check Malawi has been nominated for Best Community Impact Program 
                  at the 2026 African Media Excellence Awards.
                </p>
                <button className="text-primary hover:gap-3 flex items-center gap-2 transition-all group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Update 3 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all group cursor-pointer">
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users size={16} className="text-primary" />
                  <span>January 15, 2026</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Team Growth & New Talent
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We're welcoming exceptional talent to our growing team as we expand 
                  our operations and take on ambitious new projects across the region.
                </p>
                <button className="text-primary hover:gap-3 flex items-center gap-2 transition-all group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Mail className="text-primary" size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            
            <p className="text-lg text-muted-foreground mb-2 leading-relaxed max-w-2xl mx-auto">
              Follow us, contact us, or collaborate with AI BOTHA & COMPANY.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to create something exceptional? We're here to help bring your vision to life.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all group text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all">
                <Phone className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+265123456789" className="text-muted-foreground hover:text-primary transition-colors">
                +265 893 792 647
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all group text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all">
                <MessageCircle className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a href="https://wa.me/265893792647" className="text-muted-foreground hover:text-primary transition-colors">
                +265 893 792 647
              </a>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all group text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all">
                <Mail className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:aibothacompanyofficial@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                aibothacompanyofficial@gmail.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#" 
                className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="Facebook"
              >
                <Facebook size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="Twitter"
              >
                <Twitter size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="Instagram"
              >
                <Instagram size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="YouTube"
              >
                <Youtube size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label="TikTok"
              >
                <svg 
                  className="text-muted-foreground group-hover:text-primary transition-colors" 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2026 AI BOTHA & COMPANY. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
               <a 
  href="https://www.facebook.com/share/18P5mKqqkR/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-primary transition-colors"
  aria-label="Facebook"
>
  <Facebook size={20} />
</a>

              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}