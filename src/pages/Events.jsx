import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Trophy, Code } from 'lucide-react';

const Events = () => {
  const eventsData = [
    {
      id: 'hackathon',
      title: 'Hackathon',
      description: 'Join us for an intense 48-hour coding marathon where innovation meets competition. Build groundbreaking solutions, collaborate with brilliant minds, and compete for amazing prizes.',
      path: '/hackathon',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
      features: ['48 Hours', 'Team Competition', 'Prize Pool', 'Mentorship']
    },
    {
      id: 'techfest',
      title: 'TechFest',
      description: 'Experience the ultimate convergence of technology and creativity. Featuring cutting-edge workshops, exhibitions, and competitions showcasing the latest innovations.',
      path: '/techfest',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1200',
      features: ['Multiple Events', 'Workshops', 'Exhibitions', 'Networking']
    },
    {
      id: 'workshop',
      title: 'Workshop',
      description: 'Enhance your skills with hands-on learning sessions led by industry experts. From blockchain to AI, master the technologies shaping our future.',
      path: '/workshop',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
      features: ['Expert Led', 'Hands-on', 'Certificate', 'Small Groups']
    }
  ];

  return (
    <div className="bg-[var(--bg-darkest)] text-[var(--text-ice)] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--primary)] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label mb-8">Events</div>
            
            <h1 className="headline-display mb-10">
              Our<span className="word-cyan italic"> Events</span>
            </h1>
            
            <p className="text-[18px] md:text-[22px] font-bold text-[var(--text-secondary-c)] max-w-[600px] leading-snug mb-16 border-l-4 border-[var(--primary)] pl-6">
              Discover our diverse range of activations designed to empower the next generation of innovators at SRM AP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6 bg-[var(--bg-dark)] border-t border-[var(--border-mid)]">
        <div className="container mx-auto max-w-7xl">
          <div className="technical-grid">
            {eventsData.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="indexed-card group"
                >
                  <span className="card-num">0{index + 1}</span>
                  
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover card-image"
                    />
                    <div className="card-overlay" />
                    <div className="absolute bottom-6 left-6 z-10 flex flex-wrap gap-2">
                       {event.features.slice(0, 2).map((f, i) => (
                         <span key={i} className="badge-event">{f}</span>
                       ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 bg-[var(--bg-card)] flex flex-col justify-between h-[360px] border-t border-[var(--border-mid)]">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-[var(--bg-darkest)] border border-[var(--border-mid)]">
                          <Icon size={20} className="text-[var(--primary)]" />
                        </div>
                        <h3 className="font-display text-[26px] font-black text-[var(--text-ice)]">
                          {event.title}
                        </h3>
                      </div>

                      <p className="text-[16px] font-medium text-[var(--text-secondary-c)] leading-relaxed mb-8">
                        {event.description}
                      </p>
                    </div>

                    <Link
                      to={event.path}
                      className="bg-[var(--primary)] hover:bg-[var(--accent-gold)] text-[var(--bg-darkest)] px-8 py-4 text-[14px] font-bold transition-all uppercase tracking-widest w-full inline-flex items-center justify-center gap-3"
                    >
                      Explore Activation
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview/CTA Row */}
      <section className="py-32 px-6 bg-[var(--bg-darkest)] border-t border-[var(--border-mid)]">
        <div className="container mx-auto max-w-7xl">
           <div className="flat-row">
             <div className="flat-row-key">Mission</div>
             <div className="flat-row-value">
               <h3 className="headline-display text-[clamp(32px,4vw,64px)] mb-8 truncate max-w-full">Empowering Global Innovation.</h3>
               <p className="text-[18px] text-[var(--text-secondary-c)] font-medium max-w-2xl leading-relaxed mb-10">
                 Whether you're a participant, volunteer, or sponsor, there's a place for you in our vibrant tech community.
                 We host 65+ activations annually to foster excellence.
               </p>
               <div className="flex flex-col sm:flex-row gap-6">
                 <Link to="/join" className="bg-[var(--primary)] text-[var(--bg-darkest)] hover:bg-[var(--accent-gold)] px-10 py-4 text-[14px] font-bold transition-all uppercase tracking-widest text-center">
                   Join IEEE
                 </Link>
                 <Link to="/about" className="border-2 border-[var(--border-mid)] text-[var(--text-ice)] hover:border-[var(--primary)] px-10 py-4 text-[14px] font-bold transition-all uppercase tracking-widest text-center">
                   Learn More
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
