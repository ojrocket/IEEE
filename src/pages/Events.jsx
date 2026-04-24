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
    <div className="bg-[#0D1117] text-[#E2EEF9] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-ieee-mist rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="paren-index mb-8">IEEE_SRM_AP // ACTIVATION_LIST</div>
            
            <h1 className="headline-display mb-10">
              Events<span className="word-cyan italic">.archive</span>
            </h1>
            
            <p className="text-[16px] md:text-[18px] font-body text-[#A8C4DE] max-w-2xl leading-relaxed mb-16">
              Discover our diverse range of activations designed to empower the next generation of innovators at SRM AP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6 bg-[#0D1117] border-t border-white/[0.04]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="relative h-56 overflow-hidden rounded-t-xl">
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
                  <div className="p-8 bg-[#121820]/40 flex flex-col justify-between h-[340px]">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-ieee-mist rounded-lg">
                          <Icon size={18} className="text-[#40B2D6]" />
                        </div>
                        <h3 className="font-display text-[24px] font-medium text-[#E2EEF9]">
                          {event.title}
                        </h3>
                      </div>

                      <p className="text-[14px] font-body text-[#A8C4DE] leading-relaxed mb-8 line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <Link
                      to={event.path}
                      className="bg-[#3C72B0] hover:bg-[#0ECAD4] text-[#E2EEF9] px-8 py-3 rounded-full text-[14px] font-body transition-all duration-250 w-full inline-flex items-center justify-center gap-2"
                    >
                      Explore Activation
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview/CTA Row */}
      <section className="py-32 px-6 bg-[#0D1117] border-t border-white/[0.04]">
        <div className="container mx-auto max-w-7xl">
           <div className="flat-row border-t border-white/[0.08]">
             <div className="flat-row-key">MISSION_DRIVE</div>
             <div className="flat-row-value">
               <h3 className="headline-display text-4xl mb-6 truncate max-w-full">Empowering Global Innovation.</h3>
               <p className="text-[#A8C4DE] max-w-2xl leading-relaxed mb-8">
                 Whether you're a participant, volunteer, or sponsor, there's a place for you in our vibrant tech community.
                 We host 65+ activations annually to foster excellence.
               </p>
               <div className="flex flex-wrap gap-4">
                 <Link to="/join" className="bg-[#3C72B0] hover:bg-[#0ECAD4] text-[#E2EEF9] px-8 py-3 rounded-full text-[14px] font-body transition-all">
                   Join IEEE
                 </Link>
                 <Link to="/about" className="border border-[rgba(64,178,214,0.2)] text-[#A8C4DE] hover:border-[#40B2D6] px-8 py-3 rounded-full text-[14px] font-body transition-all">
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
