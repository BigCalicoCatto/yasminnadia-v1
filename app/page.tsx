"use client"

import { ReactNode, useState, useEffect } from 'react';

const Highlight = ({ children, color = 'orange' }: { children: ReactNode; color?: 'orange' | 'yellow' }) => {
  const colorMap: Record<string, string> = {
    orange: '#E8956F',
    yellow: '#F4D35E'
  };
  return (
    <span style={{ color: colorMap[color], fontWeight: 'bold' }}>
      {children}
    </span>
  );
};

const FatCat = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => setMouseX(e.clientX);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const catX = (scrollY * 0.5 + mouseX * 0.1) % 300;
  const catY = scrollY * 0.3;
  const rotation = (scrollY * 0.2) % 360;

  return (
    <div style={{
      position: 'fixed',
      left: `${20 + (catX % 60)}px`,
      top: `${100 + (catY % window.innerHeight - 200)}px`,
      zIndex: 1000,
      pointerEvents: 'none',
      transform: `rotate(${rotation}deg)`,
      transition: 'all 0.3s ease-out'
    }}>
      <svg width="80" height="80" viewBox="0 0 100 100">
        {/* Body - Fat */}
        <ellipse cx="50" cy="60" rx="38" ry="32" fill="#FF9800" stroke="#000" strokeWidth="1.5"/>
        
        {/* Head - Fat and Round */}
        <circle cx="50" cy="35" r="28" fill="#FF9800" stroke="#000" strokeWidth="1.5"/>
        
        {/* Ears */}
        <polygon points="30,15 25,5 35,10" fill="#FF9800" stroke="#000" strokeWidth="1.5"/>
        <polygon points="70,15 75,5 65,10" fill="#FF9800" stroke="#000" strokeWidth="1.5"/>
        <polygon points="30,15 28,8 32,12" fill="#FFB74D"/>
        <polygon points="70,15 72,8 68,12" fill="#FFB74D"/>
        
        {/* Eyes - Big and cute */}
        <circle cx="40" cy="30" r="5" fill="#000"/>
        <circle cx="60" cy="30" r="5" fill="#000"/>
        <circle cx="42" cy="28" r="2" fill="#FFF"/>
        <circle cx="62" cy="28" r="2" fill="#FFF"/>
        
        {/* Stripes - Tabby pattern */}
        <line x1="35" y1="50" x2="45" y2="52" stroke="#8B6F47" strokeWidth="1.5"/>
        <line x1="55" y1="52" x2="65" y2="50" stroke="#8B6F47" strokeWidth="1.5"/>
        <line x1="38" y1="65" x2="48" y2="68" stroke="#8B6F47" strokeWidth="1.5"/>
        <line x1="52" y1="68" x2="62" y2="65" stroke="#8B6F47" strokeWidth="1.5"/>
        
        {/* Mouth */}
        <path d="M 50 40 Q 48 43 45 42" stroke="#000" strokeWidth="1.5" fill="none"/>
        <path d="M 50 40 Q 52 43 55 42" stroke="#000" strokeWidth="1.5" fill="none"/>
        <circle cx="50" cy="43" r="2" fill="#FFB74D"/>
        
        {/* Front Paws - Chubby */}
        <ellipse cx="38" cy="88" rx="8" ry="12" fill="#FF9800" stroke="#000" strokeWidth="1.5"/>
        <ellipse cx="62" cy="88" rx="8" ry="12" fill="#FF9800" stroke="#000" strokeWidth="1.5"/>
        <ellipse cx="38" cy="95" rx="10" ry="6" fill="#FFB74D" stroke="#000" strokeWidth="1.5"/>
        <ellipse cx="62" cy="95" rx="10" ry="6" fill="#FFB74D" stroke="#000" strokeWidth="1.5"/>
        
        {/* Tail - Curvy and fat */}
        <path d="M 70 60 Q 85 50 80 30" stroke="#FF9800" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M 70 60 Q 85 50 80 30" stroke="#8B6F47" strokeWidth="2" fill="none"/>
        
        {/* Belly - Extra chubby */}
        <ellipse cx="50" cy="70" rx="20" ry="18" fill="#FFB74D" opacity="0.6"/>
      </svg>
    </div>
  );
};

const Card = ({ children }: { children: ReactNode }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '8px 12px',
        borderRadius: '12px',
        marginBottom: '16px',
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#2C2C2C',
        border: '2px solid #E8956F',
        boxShadow: hover ? '0 12px 24px rgba(232, 149, 111, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: hover ? 'translateY(-8px)' : 'translateY(0)'
      }}>
      <span style={{ marginRight: '8px', fontSize: '20px' }}>🐾</span>
      {children}
    </div>
  );
};

const CTAButton = ({ href, text, target }: any) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '16px 24px',
        backgroundColor: '#E8956F',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'block',
        transform: hover ? 'scale(1.08)' : 'scale(1)',
        boxShadow: hover ? '0 10px 20px rgba(232, 149, 111, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      {text}
    </a>
  );
};

const FeatureCard = ({ item, idx, visible }: any) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '16px',
        borderRadius: '12px',
        border: '2px solid #E8956F',
        boxShadow: hover ? '0 12px 24px rgba(232, 149, 111, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: '#2C2C2C',
        fontSize: '16px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.6s ease-out ${idx * 0.08}s`,
        cursor: 'pointer',
        scale: hover ? 1.05 : 1
      }}
    >
      <span>🐾</span>
      {item}
    </div>
  );
};

const ImageHoverCard = ({ src, idx, visible }: any) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: hover ? '0 16px 32px rgba(232, 149, 111, 0.25)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.6s ease-out ${idx * 0.12}s`
      }}
    >
      <img
        src={src}
        alt={`Portfolio example ${idx + 1}`}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          transform: hover ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.4s ease'
        }}
      />
    </div>
  );
};

const PricingCard = ({ title, items, visible, delay = 0 }: any) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '24px 16px',
        borderRadius: '16px',
        border: '2px solid #E8956F',
        boxShadow: hover ? '0 16px 32px rgba(232, 149, 111, 0.25)' : '0 4px 12px rgba(0, 0, 0, 0.12)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: `all 0.8s ease-out ${delay}s`,
        cursor: 'pointer'
      }}
    >
      <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#E8956F', margin: '0 0 20px 0', textAlign: 'center' }}>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0' }}>
        {items.map((item: string, idx: number) => (
          <li key={idx} style={{ fontSize: '15px', color: '#2C2C2C', marginBottom: idx === items.length - 1 ? '0px' : '12px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <span>✨</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getAnimationStyle = (sectionId: string, animationType = 'fadeIn') => {
    if (!visibleSections.has(sectionId)) {
      return { opacity: 0, transform: animationType === 'slideUp' ? 'translateY(40px)' : 'scale(0.95)' };
    }
    return { opacity: 1, transform: animationType === 'slideUp' ? 'translateY(0)' : 'scale(1)', transition: 'all 0.8s ease-out' };
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', color: '#2C2C2C', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* BANNER */}
      <div style={{ width: '100%', height: 'auto' }}>
        <img
          src="/fatbanner.png"
          alt="Fat Calico - Build Your Creator Portfolio Website"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* HERO */}
      <section style={{ padding: '48px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0', lineHeight: '1.3', letterSpacing: '-1px' }}>
          <div style={{ color: '#E8956F', marginBottom: '8px', animation: 'slideInLeft 0.8s ease-out' }}>GET DISCOVERED</div>
          <div style={{ color: '#F4D35E', animation: 'slideInRight 0.8s ease-out 0.2s both' }}>GET CHOSEN</div>
        </h1>
      </section>

      {/* YOU ARE NOT VISIBLE ENOUGH */}
      <section id="section-visible" data-animate style={{ padding: '48px 24px', backgroundColor: '#2C2C2C', ...getAnimationStyle('section-visible') }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '36px', textAlign: 'center', color: '#FAFAFA' }}>
          YOU ARE <Highlight color="orange">NOT VISIBLE</Highlight> ENOUGH
        </h2>
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Card>Clients <Highlight color="orange">can't see</Highlight> your best work.</Card>
            <Card>Your link-in-bio is just a <Highlight color="orange">messy list</Highlight>.</Card>
            <Card>You <Highlight color="orange">look like everyone</Highlight> else online.</Card>
            <Card>"<Highlight color="orange">DM me</Highlight>" is too much work for them.</Card>
            <Card>The <Highlight color="orange">algorithm</Highlight> decides if you get seen.</Card>
            <Card>Your best posts <Highlight color="orange">disappear in 2 days</Highlight>.</Card>
          </div>
        </div>
      </section>

      {/* MAKE YOURSELF VISIBLE */}
      <section id="section-make" data-animate style={{ padding: '48px 24px', backgroundColor: '#FFFFFF', ...getAnimationStyle('section-make') }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '36px', textAlign: 'center', color: '#2C2C2C' }}>
          <Highlight color="orange">MAKE YOURSELF</Highlight> VISIBLE
        </h2>
        <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Card>Give them one <Highlight color="orange">clean link</Highlight> to click.</Card>
            <Card>It loads <Highlight color="orange">fast—under 2 seconds</Highlight>!</Card>
            <Card>Show your <Highlight color="orange">best content</Highlight> first.</Card>
            <Card>Let them know your <Highlight color="orange">niche</Highlight> right away.</Card>
            <Card>Show your <Highlight color="orange">real talent</Highlight> in seconds.</Card>
            <Card>Brands can <Highlight color="orange">find and hire</Highlight> you faster.</Card>
          </div>
        </div>
      </section>

      {/* THIS IS WHAT GETS YOU CHOSEN */}
      <section id="section-chosen" data-animate style={{ padding: '48px 24px', backgroundColor: '#2C2C2C', ...getAnimationStyle('section-chosen', 'scale') }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center', color: '#FAFAFA' }}>
          THIS IS WHAT <Highlight color="yellow">GETS YOU CHOSEN</Highlight>
        </h2>
        <div style={{ maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '450px', aspectRatio: '828 / 1534' }}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dbcghcpes&public_id=Portfolio_preview_rhcsd2&autoplay=true&loop=true&muted=true&controls=false"
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: '16px', display: 'block', pointerEvents: 'none' }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              title="Portfolio Preview"
            />
          </div>
        </div>
      </section>

      {/* WHY THIS GETS YOU CHOSEN */}
      <section id="section-why" data-animate style={{ padding: '48px 24px', backgroundColor: '#FFFFFF', ...getAnimationStyle('section-why') }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#2C2C2C' }}>
          WHY THIS <Highlight color="orange">GETS YOU</Highlight> CHOSEN
        </h2>
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          {['/why1.jpg', '/why2.jpg', '/why3.jpg', '/why4.jpg', '/why5.jpg', '/why6.jpg'].map((src, idx) => (
            <ImageHoverCard key={idx} src={src} idx={idx} visible={visibleSections.has('section-why')} />
          ))}
        </div>
      </section>

      {/* YOU CAN ADD MORE */}
      <section id="section-addmore" data-animate style={{ padding: '24px 24px', backgroundColor: '#FFFFFF', ...getAnimationStyle('section-addmore') }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#2C2C2C' }}>
          YOU CAN ADD <Highlight color="orange">MORE</Highlight> ACCORDING TO YOUR NEEDS!
        </h2>
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              'Brand Collaborations', 'Comp Cards', 'Rate Card', 'Photoshoot Experiences',
              'Social Media Metrics', 'Social Reviews', 'Client Testimonials', 'Media Kit Download Button',
              'Quick Form', 'Prefilled WhatsApp Message'
            ].map((item, idx) => (
              <FeatureCard key={idx} item={item} idx={idx} visible={visibleSections.has('section-addmore')} />
            ))}
            <div style={{ gridColumn: '1 / -1', backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '2px solid #E8956F', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', gap: '12px', color: '#2C2C2C', fontSize: '16px' }}>
              <span>🐾</span>
              Many more — <span style={{ color: '#E8956F', fontWeight: 'bold' }}>everything can be included</span> and is discussable.
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="section-pricing" data-animate style={{ padding: '48px 24px', backgroundColor: '#2C2C2C', ...getAnimationStyle('section-pricing') }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px', color: '#FAFAFA' }}>
          FAT CALICO & CO <Highlight color="yellow">PACKAGES</Highlight>
        </h2>

        <div style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <PricingCard title="RM100" items={[
            'Free domain (yourname.vercel.app)',
            'Free hosting — no hidden fees',
            'Basic SEO (custom title + description)',
            'Mobile-perfect & fast-loading (under 2 seconds)',
            'Single page scrollable portfolio',
            'Live in 48 hours after material submission',
            'Minimum 5 sections (bio, work, rates, reviews, contact — your choice)',
            'Gather & organize your content from your socials',
            'Social links + affiliate/CTA buttons included',
            'One-tap contact button',
            'Fully customized: colors, fonts, vibe — just for you',
            'Up to 3 revisions'
          ]} visible={visibleSections.has('section-pricing')} />

          <PricingCard title="RM150" items={[
            'Your own .com domain (yourname.com)',
            'Free domain setup & connection and hosting',
            'Basic SEO (custom title + description)',
            'Mobile-perfect & fast-loading',
            'Single page scrollable portfolio',
            'Live in 24 hours after material submission',
            'Minimum 7 sections',
            'Gather & organize your content from your socials',
            'Social links + affiliate/CTA buttons included',
            'One-tap contact button',
            'Fully customized: colors, fonts, vibes',
            'Up to 4 revisions'
          ]} visible={visibleSections.has('section-pricing')} delay={0.2} />
        </div>
      </section>

      {/* CTA */}
      <section id="section-cta" data-animate style={{ padding: '48px 24px', backgroundColor: '#FFFFFF', ...getAnimationStyle('section-cta') }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#2C2C2C', marginBottom: '16px' }}>
            READY TO GET <Highlight color="orange">DISCOVERED</Highlight>?
          </h2>
          <p style={{ fontSize: '18px', color: '#2C2C2C', lineHeight: '1.6', margin: '0' }}>
            Stop waiting. Your portfolio is just one message away. <Highlight color="orange">Let's build something amazing together.</Highlight>
          </p>
        </div>

        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/fatcalicodev.jpg"
              alt="Fat Calico"
              style={{ width: '200px', height: '200px', borderRadius: '8px', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <CTAButton href="mailto:fatcalico.co@gmail.com?subject=Let's build my website!&body=Hi Fat Calico! Let's build my website!" text="📧 Email" />
            <CTAButton href="https://wa.me/60176218234?text=Hi%20Fat%20Calico!%20Let's%20build%20my%20website!" text="💬 WhatsApp" target="_blank" />
            <CTAButton href="https://instagram.com/fatcalico.co" text="📷 Instagram DM" target="_blank" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 24px', backgroundColor: '#2C2C2C', textAlign: 'center', borderTop: '1px solid #E8956F' }}>
        <p style={{ fontSize: '14px', color: '#FAFAFA', margin: '0' }}>
          © 2025 FatCalico&Co engineered by FatCalico&Co for FatCalico&Co
        </p>
      </footer>
    </div>
  );
}
