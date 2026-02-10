'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections with data-animate
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'work-with', label: 'Who I Work With' },
    { id: 'testimonials', label: 'What My Clients Say' },
    { id: 'offer', label: 'What I Offer' },
    { id: 'goals', label: 'Pick Your Goal' },
    { id: 'cta', label: 'Let\'s Connect' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    setHeroTextVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight;
      const opacity = Math.max(0, 1 - scrollTop / heroHeight);
      setHeroOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: 'Trebuchet MS, sans-serif' }}>
      <style>{`
        @keyframes slideInLine {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 80%;
            opacity: 1;
          }
        }
        @keyframes slideInText {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes hamburgerOpen {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }
        .animate-visible {
          animation: fadeInUp 0.8s ease-out forwards !important;
        }
        .animate-visible-left {
          animation: slideInFromLeft 0.8s ease-out forwards !important;
        }
        .animate-visible-right {
          animation: slideInFromRight 0.8s ease-out forwards !important;
        }
        .animate-visible-scale {
          animation: scaleIn 0.6s ease-out forwards !important;
        }
      `}</style>

      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#ffffff', borderBottom: '1px solid #f0f0f0', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FF6B9D', margin: 0 }}>Yasmin Nadia</h1>
        
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="https://instagram.com/" style={{ color: '#FF6B9D', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"></path>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
          </a>
          <a href="https://tiktok.com/" style={{ color: '#FF6B9D', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'opacity 0.3s' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0h.12c.82 0 1.64.04 2.46.07a3.41 3.41 0 0 1 2.26 1.3c.55.7.88 1.58 1 2.47.05.31.09.63.09.95v.25c-.01 2.18 0 4.37.02 6.55.02.93-.05 1.87-.16 2.78a5.4 5.4 0 0 1-.45 1.75 4.6 4.6 0 0 1-3.12 2.39c-.312.065-.63.1-.95.1-.78.01-1.56 0-2.34-.02-.37-.01-.74-.02-1.12-.02h-.15c-1.68 0-3.36.02-5.04 0-.82-.01-1.64-.05-2.46-.1-.82-.05-1.63-.16-2.42-.35a4.6 4.6 0 0 1-3.12-2.39 5.4 5.4 0 0 1-.45-1.75c-.1-.9-.18-1.84-.16-2.78.02-2.18.01-4.37-.02-6.55V7.27c0-.32.04-.64.09-.95.12-.89.45-1.77 1-2.47a3.41 3.41 0 0 1 2.26-1.3c.82-.03 1.64-.07 2.46-.07h.12c1.3 0 2.6-.01 3.91-.02zm-.06 1.82c-1.25 0-2.49.01-3.74.03-.76.01-1.52.03-2.27.08-.6.04-1.13.15-1.55.36-.68.35-1.18.95-1.35 1.7-.1.4-.14.81-.15 1.23 0 2.08.01 4.15 0 6.23.01.8.04 1.59.16 2.36.15.92.62 1.72 1.35 2.07.42.21.95.32 1.55.36.75.05 1.51.07 2.27.08 1.25.02 2.49.03 3.74.03.99 0 1.99 0 2.98-.01.77-.02 1.54-.04 2.3-.1.6-.05 1.13-.16 1.55-.37.68-.35 1.18-.95 1.35-1.7.1-.4.14-.81.15-1.23 0-2.08-.01-4.15 0-6.23-.01-.8-.04-1.59-.16-2.36-.15-.92-.62-1.72-1.35-2.07-.42-.21-.95-.32-1.55-.36-.75-.05-1.51-.07-2.27-.08-1.25-.02-2.49-.03-3.74-.03zm6.34 3.25a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26zm-6.34 1.52a3.74 3.74 0 1 0 0 7.48 3.74 3.74 0 0 0 0-7.48zm0 1.82a1.92 1.92 0 1 1 0 3.84 1.92 1.92 0 0 1 0-3.84z"/>
            </svg>
          </a>
        </div>
        
        {/* Hamburger Button */}
        <button
          id="hamburger-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '0.5rem',
            transition: 'transform 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          <div style={{ width: '24px', height: '2px', backgroundColor: '#FF6B9D', transition: 'all 0.3s', transform: mobileMenuOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0deg)' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#FF6B9D', transition: 'all 0.3s', opacity: mobileMenuOpen ? 0 : 1 }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#FF6B9D', transition: 'all 0.3s', transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0deg)' }} />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#ffffff', borderBottom: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', animation: 'hamburgerOpen 0.3s ease-out' }}>
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  padding: '1rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: '#FF6B9D',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderBottom: '1px solid #f0f0f0',
                  animation: `hamburgerOpen 0.3s ease-out ${idx * 0.05}s forwards`,
                  opacity: 0,
                }}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/yasminnadiapthero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: heroOpacity,
            transition: 'opacity 0.1s ease-out',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            opacity: heroOpacity,
          }}
        />

        {/* Top Line */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '80%',
            height: '2px',
            backgroundColor: 'rgba(255, 107, 157, 0.5)',
            marginBottom: '2rem',
            opacity: heroTextVisible ? 1 : 0,
            animation: heroTextVisible ? 'slideInLine 0.8s ease-out' : 'none',
          }}
        />

        {/* Text Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            color: '#ffffff',
            opacity: heroOpacity,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: heroTextVisible ? 'slideInText 0.8s ease-out 0.2s both' : 'none',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 107, 157, 0.5)',
              padding: '0.8rem 1.2rem',
              borderRadius: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <h1
              style={{
                fontSize: '3.2rem',
                fontWeight: 900,
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
              }}
            >
              YASMIN NADIA
            </h1>
          </div>
          <p
            style={{
              fontSize: '1rem',
              marginTop: '0.5rem',
              marginBottom: '0',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: '#FF6B9D',
            }}
          >
            Your journey to better health starts here
          </p>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '80%',
            height: '2px',
            backgroundColor: 'rgba(255, 107, 157, 0.5)',
            marginTop: '2rem',
            opacity: heroTextVisible ? 1 : 0,
            animation: heroTextVisible ? 'slideInLine 0.8s ease-out 0.4s both' : 'none',
          }}
        />

        {/* Arrow */}
        <div
          style={{
            position: 'absolute',
            bottom: '8rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            animation: 'bounce 2s infinite',
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF6B9D"
            strokeWidth="2"
            style={{ opacity: heroOpacity }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" data-animate style={{ padding: '2rem 1.5rem', opacity: visibleSections.has('about') ? 1 : 0 }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#FF6B9D',
            animation: visibleSections.has('about') ? 'fadeInUp 0.6s ease-out' : 'none',
          }}
        >
          About Me
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            animation: 'slideInFromLeft 0.6s ease-out 0.2s both',
          }}
        >
          <div
            style={{
              flex: '0 0 auto',
              width: '140px',
              borderRadius: '0.8rem',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }}
          >
            <img
              src="/yasminnadiam.webp"
              alt="Yasmin Nadia"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ lineHeight: 1.7, fontSize: '0.95rem', textAlign: 'justify', color: '#1a1a1a' }}>
              <p style={{ margin: '0.5rem 0', fontWeight: 600, color: '#FF6B9D' }}>Hi, I'm Yasmin Nadia.</p>
              <p style={{ margin: '0.5rem 0', color: '#1a1a1a' }}>
                I believe health and fitness should never feel like a punishment.
              </p>
              <p style={{ margin: '0.5rem 0', color: '#1a1a1a' }}>
                They should feel like care for your body, your mind, and your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POWER MOTTO */}
      <section style={{ 
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        backgroundColor: '#FF6B9D',
        padding: '3rem 1.5rem',
        textAlign: 'center',
        animation: visibleSections.has('about') ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none',
        opacity: visibleSections.has('about') ? 1 : 0,
      }}>
        <p style={{
          fontSize: '1.8rem',
          fontWeight: 900,
          color: '#ffffff',
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          My passion is helping people move in ways that feel good, not forced.
        </p>
      </section>

      {/* WHO I WORK WITH */}
      <section id="work-with" data-animate style={{ padding: '2rem 1.5rem', backgroundColor: '#ffffff', opacity: visibleSections.has('work-with') ? 1 : 0 }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#FF6B9D',
            animation: visibleSections.has('work-with') ? 'fadeInUp 0.6s ease-out' : 'none',
          }}
        >
          Who I Work With
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {['Pre-wedding bride', 'Postpartum recovery', 'Post-injury rehab', 'Busy professionals', 'Total beginners', 'Returning after a break', 'Managing stress or low energy'].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.2rem',
                backgroundColor: '#FF6B9D',
                color: '#ffffff',
                borderRadius: '0.8rem',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '0.95rem',
                animation: visibleSections.has('work-with') ? `scaleIn 0.5s ease-out ${idx * 0.05}s forwards` : 'none',
                opacity: visibleSections.has('work-with') ? 1 : 0,
                ...(idx === 6 && { gridColumn: '1 / -1', maxWidth: '200px', margin: '0 auto' }),
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            textAlign: 'center',
            marginTop: '1.5rem',
            color: '#FF6B9D',
            animation: visibleSections.has('work-with') ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none',
            opacity: visibleSections.has('work-with') ? 1 : 0,
          }}
        >
          I meet you where you are — and move with your life!
        </p>
      </section>

      {/* Premium Line */}
      <div
        style={{
          height: '2px',
          backgroundColor: '#FF6B9D',
          width: '60px',
          margin: '2rem auto',
          animation: 'scaleIn 0.6s ease-out',
        }}
      />

      {/* STATISTICS */}
      <section style={{ padding: '2rem 1.5rem', backgroundColor: '#FF6B9D' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem', animation: 'slideInFromLeft 0.6s ease-out' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem 0', color: '#ffffff' }}>
              87
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
              Clients Transformed
            </p>
          </div>
          <div style={{ marginBottom: '2rem', animation: 'slideInFromRight 0.6s ease-out 0.1s both' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem 0', color: '#ffffff' }}>
              2
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
              Years of Excellence
            </p>
          </div>
          <div style={{ marginBottom: '1rem', animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, margin: '0 0 0.5rem 0', color: '#ffffff' }}>
              1
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: 0 }}>
              Promise: Fitness That Fits You
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" data-animate style={{ padding: '2rem 1.5rem', backgroundColor: '#f9f9f9', opacity: visibleSections.has('testimonials') ? 1 : 0 }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#FF6B9D',
            animation: visibleSections.has('testimonials') ? 'fadeInUp 0.6s ease-out' : 'none',
          }}
        >
          What My Clients Say
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            {
              text: '"I started my fitness journey before my wedding, just to make sure I can fit in the wedding dress and look good on my big day. But you know what? Yasmin got me hooked! I\'m able to maintain the momentum because she made it fun. Love you Yasmin xoxo"',
              author: 'Shazlin Lyn',
            },
            {
              text: '"I\'m a super busy mom of two and a professional accountant. My life is super busy and hectic. I know I need to do some training for my health, but going to the gym alone and working out put so much pressure on me. Yasmin showed me how to do it, and right now I\'m able to slot in a simple workout that really elevates my mood and energy level!"',
              author: 'Athira AB',
            },
            {
              text: '"I\'ve always wanted to go to the gym and do some training, but I felt awkward and shy. So I joined the small group workout with Yasmin, and she made us all feel safe and comfortable the whole time. She taught us everything we needed to know! I\'m feeling so much more confident now being at the gym. So grateful I joined her session — that was the starting point of my journey!"',
              author: 'Nurhani',
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.2rem',
                backgroundColor: '#ffffff',
                borderRadius: '0.8rem',
                border: '3px solid #FF6B9D',
                lineHeight: 1.5,
                animation: visibleSections.has('testimonials') ? `slideInFromLeft 0.6s ease-out ${idx * 0.1}s forwards` : 'none',
                opacity: visibleSections.has('testimonials') ? 1 : 0,
              }}
            >
              <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', fontSize: '0.9rem', margin: '0 0 0.6rem 0', color: '#1a1a1a' }}>{testimonial.text}</p>
              <p style={{ fontWeight: 700, color: '#FF6B9D', fontSize: '0.9rem', margin: 0 }}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I OFFER - CAROUSEL */}
      <section id="offer" data-animate style={{ padding: '2rem 1.5rem', backgroundColor: '#FF6B9D', opacity: visibleSections.has('offer') ? 1 : 0 }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#ffffff',
            textAlign: 'center',
            animation: visibleSections.has('offer') ? 'fadeInUp 0.6s ease-out' : 'none',
          }}
        >
          What I Offer
        </h2>
        
        <div style={{ position: 'relative' }}>
          {/* Carousel */}
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '0.5rem',
              paddingLeft: '0',
              paddingRight: '1.5rem',
            }}
            className="carousel"
          >
            {[
              {
                title: 'Starter Consult',
                items: ['30 minutes chat', 'Needs and wants discussion', 'Simple workout and diet plan', 'Training outline suitability plan'],
                price: 'FREE',
              },
              {
                title: 'Small Group Session',
                items: [
                  'Max 5 people',
                  'Focus on form, confidence, community',
                  'Studio/gym of choice (in KL)',
                  '1-2 hours per session',
                  '2-3 sessions per week',
                  'Free initial consultation',
                  'Free WhatsApp support group',
                  'Free WhatsApp channel training resources',
                  'Free WhatsApp channel easy nutritional recipes',
                ],
                price: 'From RM50/person',
              },
              {
                title: '1-ON-1 Session',
                items: [
                  'Personalized workout plan',
                  'Personalized diet/nutrition plan',
                  '24/7 WhatsApp support',
                  'Weekly check-ins',
                  'In person or online',
                ],
                price: 'From RM100/week',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  flex: '0 0 340px',
                  backgroundColor: '#ffffff',
                  border: '2px solid #FF6B9D',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'inset 0 0 0 2px #FF6B9D, 0 8px 20px rgba(255, 107, 157, 0.2)',
                  animation: visibleSections.has('offer') ? `scaleIn 0.5s ease-out ${idx * 0.1}s forwards` : 'none',
                  opacity: visibleSections.has('offer') ? 1 : 0,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FF6B9D',
                    color: '#ffffff',
                    padding: '0.8rem',
                    borderRadius: '0.6rem',
                    marginBottom: '1.2rem',
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
                    {card.title}
                  </h3>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1rem 0',
                    flex: 1,
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#FF6B9D',
                  }}
                >
                  {card.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.4rem' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    backgroundColor: '#FF6B9D',
                    color: '#ffffff',
                    padding: '0.8rem',
                    borderRadius: '0.6rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                    {card.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dot Indicators */}
        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
              }}
            />
          ))}
        </div>
      </section>

      {/* Premium Line */}
      <div
        style={{
          height: '2px',
          backgroundColor: '#FF6B9D',
          width: '60px',
          margin: '2rem auto',
          animation: 'scaleIn 0.6s ease-out',
        }}
      />

      {/* PICK YOUR GOAL */}
      <section id="goals" data-animate style={{ padding: '2rem 1.5rem', backgroundColor: '#f9f9f9', opacity: visibleSections.has('goals') ? 1 : 0 }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#FF6B9D',
            textAlign: 'center',
            animation: visibleSections.has('goals') ? 'fadeInUp 0.6s ease-out' : 'none',
          }}
        >
          Pick Your Goal and Let's Make it REAL!
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {['Wedding Glow Up', 'Mom Energy Reset', 'Comeback Stronger', 'Beginner Confidence Boost', 'Daily Stress Melter', 'Injury Fresh Comeback', 'Busy Life Energy Boost'].map((goal, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.2rem',
                backgroundColor: '#FF6B9D',
                color: '#ffffff',
                borderRadius: '0.8rem',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '0.95rem',
                animation: visibleSections.has('goals') ? `scaleIn 0.5s ease-out ${idx * 0.05}s forwards` : 'none',
                opacity: visibleSections.has('goals') ? 1 : 0,
              }}
            >
              {goal}
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            textAlign: 'center',
            marginTop: '1.5rem',
            color: '#FF6B9D',
            animation: visibleSections.has('goals') ? 'fadeInUp 0.6s ease-out 0.3s both' : 'none',
            opacity: visibleSections.has('goals') ? 1 : 0,
          }}
        >
          Or just whatever you want!
          <br />
          You don't need reason to start moving!
        </p>
      </section>

      {/* Premium Line */}
      <div
        style={{
          height: '2px',
          backgroundColor: '#FF6B9D',
          width: '60px',
          margin: '2rem auto',
          animation: 'scaleIn 0.6s ease-out',
        }}
      />

      {/* CTA */}
      <section id="cta" data-animate style={{ padding: '2rem 1.5rem', backgroundColor: '#f9f9f9', opacity: visibleSections.has('cta') ? 1 : 0 }}>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            animation: 'slideInFromLeft 0.6s ease-out',
          }}
        >
          <div
            style={{
              flex: '0 0 auto',
              width: '140px',
              borderRadius: '0.8rem',
              overflow: 'hidden',
              marginTop: '1.5rem',
            }}
          >
            <img src="/yasminnadiac.webp" alt="Yasmin Nadia Training" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ flex: 1, minWidth: '0' }}>
            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '0.8rem',
                color: '#1a1a1a',
              }}
            >
              Let's build a fitness plan that fits you
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#FF6B9D',
                marginBottom: '1rem',
              }}
            >
              Starting right here. RIGHT NOW.
            </p>
          </div>
        </div>
        <div style={{ marginTop: '1rem', animation: 'slideInFromRight 0.6s ease-out 0.2s both' }}>
          <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6, color: '#1a1a1a' }}>
            Please don't hesitate to ask and book your free session.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a
                href="https://wa.me/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  padding: '1rem',
                  backgroundColor: '#FF6B9D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.6rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  animation: `slideInFromRight 0.6s ease-out ${0.2}s forwards`,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.969 1.523A9.937 9.937 0 002.121 12a9.935 9.935 0 001.52 4.977A9.87 9.87 0 008.07 19.88h.004c2.46 0 4.709-.822 6.552-2.36.306-.272.603-.56.889-.862-3.982-.424-7.126-3.86-7.126-7.658 0-3.798 3.144-7.234 7.126-7.658-.286-.302-.583-.59-.889-.862-1.843-1.538-4.092-2.36-6.552-2.36z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="https://instagram.com/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  padding: '1rem',
                  backgroundColor: '#FF6B9D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.6rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  animation: `slideInFromRight 0.6s ease-out ${0.25}s forwards`,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://tiktok.com/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  padding: '1rem',
                  backgroundColor: '#FF6B9D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.6rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  animation: `slideInFromRight 0.6s ease-out ${0.3}s forwards`,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.122 5.122 0 01-2.996-2.965A5.408 5.408 0 0012.4 1c-3.003 0-5.544 2.563-5.544 5.622 0 .442.052.872.144 1.287-2.324-.12-4.657-1.213-6.234-2.966C-.243 2.97-.604 3.956.247 4.721c.852.765 2.397 1.201 3.942 1.201.63 0 1.248-.084 1.846-.252v1.004c0 3.059 2.54 5.622 5.544 5.622 1.46 0 2.81-.559 3.777-1.468.897.059 1.799.237 2.664.527.643-2.084-.494-3.959-2.211-4.88 1.031-.169 1.99-.427 2.872-.766z"/>
                </svg>
                TikTok
              </a>
              <a
                href="https://youtube.com/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  padding: '1rem',
                  backgroundColor: '#FF6B9D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.6rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  animation: `slideInFromRight 0.6s ease-out ${0.35}s forwards`,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: '2rem 1.5rem', backgroundColor: '#1a1a1a', color: '#ffffff', textAlign: 'center', animation: 'fadeInUp 0.6s ease-out' }}>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
          © Yasmin Nadia 2026
        </p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.85rem', color: '#999' }}>
          Engineered by FatCalico&Co for FatCalico&Co 2026
        </p>
      </section>
    </div>
  );
}
