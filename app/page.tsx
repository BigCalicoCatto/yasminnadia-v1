'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [heroOpacity, setHeroOpacity] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

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
              marginBottom: '2rem',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: '#FF6B9D',
            }}
          >
            Your journey to better health starts here
          </p>
        </div>
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
      <section style={{ padding: '2rem 1.5rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5rem',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              flex: '0 0 40%',
              borderRadius: '0.8rem',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <img
              src="/yasminnadiam.webp"
              alt="Yasmin Nadia"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#FF6B9D',
              }}
            >
              About Me
            </h2>
            <div style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
              <p style={{ margin: '0.5rem 0' }}>Hi, I'm Yasmin Nadia.</p>
              <p style={{ margin: '0.5rem 0' }}>
                I believe health and fitness should never feel like a punishment.
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                They should feel like care for your body, your mind, and your life.
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                My passion is helping people move in ways that feel good, not forced.
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                And my happiest moment? Watching a client realize they're stronger than they ever believed, physically and mentally.
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                This isn't about perfect form or extreme results.
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                It's about showing up for yourself, one honest step at a time.
              </p>
              <p style={{ margin: '0.5rem 0', fontWeight: 700 }}>That's what we're here for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section style={{ padding: '2rem 1.5rem', backgroundColor: '#f9f9f9' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#FF6B9D',
          }}
        >
          Who I Work With
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1.5rem 0',
            fontSize: '0.95rem',
            lineHeight: 1.8,
          }}
        >
          {['Pre-wedding bride', 'Postpartum recovery', 'Post-injury rehab', 'Busy professionals', 'Total beginners', 'Returning after a break', 'Managing stress or low energy'].map((item) => (
            <li key={item} style={{ marginBottom: '0.3rem' }}>
              • {item}
            </li>
          ))}
        </ul>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            marginTop: '1.5rem',
          }}
        >
          I meet you where you are — and move with your life!
        </p>
      </section>

      {/* STATISTICS */}
      <section style={{ padding: '2rem 1.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>
          87 clients • 2 years • 1 promise:
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#FF6B9D',
            textAlign: 'center',
            margin: '0.5rem 0 0 0',
          }}
        >
          Fitness that fits you — not the other way around.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '2rem 1.5rem', backgroundColor: '#f9f9f9' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#FF6B9D',
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
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                borderRadius: '0.8rem',
                borderLeft: '4px solid #FF6B9D',
                lineHeight: 1.6,
              }}
            >
              <p style={{ fontStyle: 'italic', marginBottom: '0.8rem', fontSize: '0.95rem' }}>{testimonial.text}</p>
              <p style={{ fontWeight: 700, color: '#FF6B9D', fontSize: '0.95rem', margin: 0 }}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT I OFFER - CAROUSEL */}
      <section style={{ padding: '2rem 1.5rem' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#FF6B9D',
          }}
        >
          What I Offer
        </h2>
        {/* Carousel */}
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            marginBottom: '1.5rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: '0.5rem',
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
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#FF6B9D', margin: 0 }}>
                {card.title}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.5rem 0',
                  flex: 1,
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                }}
              >
                {card.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem' }}>
                    • {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FF6B9D', margin: 0 }}>
                {card.price}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Controls */}
        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
          <button
            onClick={() => scroll('left')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: '#FF6B9D',
              padding: '0.5rem',
            }}
          >
            ‹ Prev
          </button>
          <button
            onClick={() => scroll('right')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: '#FF6B9D',
              padding: '0.5rem',
            }}
          >
            Next ›
          </button>
        </div>

        <style>{`
          .carousel::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ padding: '2rem 1.5rem', backgroundColor: '#f9f9f9' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              borderRadius: '0.8rem',
              overflow: 'hidden',
            }}
          >
            <img src="/yasminnadiac.webp" alt="Yasmin Nadia Training" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div>
            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                marginBottom: '0.8rem',
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
              Starting right here. RIGHT NOW
            </p>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
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
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.122 5.122 0 01-2.996-2.965A5.408 5.408 0 0012.4 1c-3.003 0-5.544 2.563-5.544 5.622 0 .442.052.872.144 1.287-2.324-.12-4.657-1.213-6.234-2.966C-.243 2.97-.604 3.956.247 4.721c.852.765 2.397 1.201 3.942 1.201.63 0 1.248-.084 1.846-.252v1.004c0 3.059 2.54 5.622 5.544 5.622 1.46 0 2.81-.559 3.777-1.468.897.059 1.799.237 2.664.527.643-2.084-.494-3.959-2.211-4.88 1.031-.169 1.99-.427 2.872-.766z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
