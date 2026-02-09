'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = 500;
      const opacity = Math.max(0, 1 - scrollTop / heroHeight);
      setHeroOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: heroOpacity,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            color: '#ffffff',
            opacity: heroOpacity,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 10vw, 4.5rem)',
              fontWeight: 900,
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            YASMIN NADIA
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 4vw, 1.5rem)',
              marginTop: '1rem',
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            Your journey to better health starts here
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
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
            stroke="#ffffff"
            strokeWidth="2"
            style={{ opacity: heroOpacity }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(10px); }
          }
        `}</style>
      </section>

      {/* ABOUT ME */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#FF6B9D',
              }}
            >
              About Me
            </h2>
            <div style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              <p>Hi, I'm Yasmin Nadia.</p>
              <p>
                I believe health and fitness should never feel like a punishment. They should feel like care for your body, your mind, and your life.
              </p>
              <p>
                My passion is helping people move in ways that feel good, not forced. And my happiest moment? Watching a client realize they're stronger than they ever believed, physically and mentally.
              </p>
              <p>
                This isn't about perfect form or extreme results. It's about showing up for yourself, one honest step at a time.
              </p>
              <p style={{ fontWeight: 700 }}>That's what we're here for.</p>
            </div>
          </div>
          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src="/yasminnadiam.webp"
              alt="Yasmin Nadia"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
        <style>{`
          @media (min-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
      </section>

      {/* WHO I WORK WITH */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#FF6B9D',
            }}
          >
            Who I Work With
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            {['Pre-wedding bride', 'Postpartum recovery', 'Post-injury rehab', 'Busy professionals', 'Total beginners', 'Returning after a break', 'Managing stress or low energy'].map((item) => (
              <div
                key={item}
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '0.8rem',
                  border: '2px solid #FF6B9D',
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              fontWeight: 700,
              marginTop: '2rem',
            }}
          >
            I meet you where you are — and move with your life!
          </p>
        </div>
      </section>

      {/* STATISTICS */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 700, marginBottom: '1rem' }}>
            87 clients • 2 years • 1 promise:
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
              fontWeight: 600,
              color: '#FF6B9D',
            }}
          >
            Fitness that fits you — not the other way around.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '3rem',
              textAlign: 'center',
              color: '#FF6B9D',
            }}
          >
            What My Clients Say
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
            }}
            className="testimonials-grid"
          >
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
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '0.8rem',
                  borderLeft: '4px solid #FF6B9D',
                  lineHeight: 1.8,
                }}
              >
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{testimonial.text}</p>
                <p style={{ fontWeight: 700, color: '#FF6B9D' }}>— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 768px) {
            .testimonials-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>
      </section>

      {/* WHAT I OFFER - CAROUSEL */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: '3rem',
              textAlign: 'center',
              color: '#FF6B9D',
            }}
          >
            What I Offer
          </h2>
          <div style={{ position: 'relative' }}>
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              style={{
                position: 'absolute',
                left: '-3rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '2rem',
                color: '#FF6B9D',
                padding: '0.5rem',
                zIndex: 5,
              }}
              className="carousel-arrow"
            >
              ‹
            </button>

            {/* Carousel */}
            <div
              ref={carouselRef}
              style={{
                display: 'flex',
                gap: '2rem',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                paddingBottom: '1rem',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
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
                    'Online/in person discussion available',
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
                  price: 'from RM100/week',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: '0 0 280px',
                    backgroundColor: '#ffffff',
                    border: '2px solid #FF6B9D',
                    borderRadius: '1rem',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FF6B9D' }}>
                    {card.title}
                  </h3>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 2rem 0',
                      flex: 1,
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {card.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.8rem' }}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FF6B9D', margin: '1rem 0 0 0' }}>
                    {card.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              style={{
                position: 'absolute',
                right: '-3rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '2rem',
                color: '#FF6B9D',
                padding: '0.5rem',
                zIndex: 5,
              }}
              className="carousel-arrow"
            >
              ›
            </button>

            <style>{`
              .carousel::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 767px) {
                .carousel-arrow {
                  position: static !important;
                  transform: none !important;
                  display: inline-block;
                  margin: 1rem 0.5rem 0 0.5rem;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#f9f9f9' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="cta-grid"
        >
          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img src="/yasminadiac.webp" alt="Yasmin Nadia Training" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              Let's build a fitness plan that fits you
            </h2>
            <p
              style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#FF6B9D',
                marginBottom: '2rem',
              }}
            >
              Starting right here. RIGHT NOW
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Please don't hesitate to ask and book your free session.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: '#FF6B9D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                WhatsApp
              </a>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: '#FF6B9D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Instagram
              </a>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: '#FF6B9D',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 768px) {
            .cta-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
