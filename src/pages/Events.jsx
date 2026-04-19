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
      image: 'https://picsum.photos/seed/hackathon/400/300',
      features: ['48 Hours', 'Team Competition', 'Prize Pool', 'Mentorship']
    },
    {
      id: 'techfest',
      title: 'TechFest',
      description: 'Experience the ultimate convergence of technology and creativity. Featuring cutting-edge workshops, exhibitions, and competitions showcasing the latest innovations.',
      path: '/techfest',
      icon: Trophy,
      image: 'https://picsum.photos/seed/techfest/400/300',
      features: ['Multiple Events', 'Workshops', 'Exhibitions', 'Networking']
    },
    {
      id: 'workshop',
      title: 'Workshop',
      description: 'Enhance your skills with hands-on learning sessions led by industry experts. From blockchain to AI, master the technologies shaping our future.',
      path: '/workshop',
      icon: Users,
      image: 'https://picsum.photos/seed/workshop/400/300',
      features: ['Expert Led', 'Hands-on', 'Certificate', 'Small Groups']
    }
  ];

  return (
    <div className="bg-[#0a0f1d] text-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0a0f1d]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-index mb-8"
            >
              IEEE SRM AP 24'
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[clamp(44px,6vw,84px)] font-light tracking-tight leading-[0.95] text-blue-50 mb-8"
            >
              Events at IEEE
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[17px] md:text-[20px] font-body text-blue-200/60 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Discover our diverse range of events designed to inspire, challenge, and empower the next generation of innovators and engineers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-[#0a0f1d]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-[clamp(28px,4.5vw,48px)] font-light text-blue-50 tracking-tight mb-8">
              Our Event Portfolio
            </h2>
            <div className="w-20 h-1 bg-[#40B2D6] mx-auto mb-10 rounded-full" />
            <p className="text-[16px] md:text-[18px] font-body text-blue-200/60 max-w-4xl mx-auto leading-[1.8]">
              From competitive hackathons to skill-building workshops, our events cater to every aspect of technological innovation and personal development.
              Each event is carefully crafted to provide maximum value, learning opportunities, and networking possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6 bg-[#0a0f1d]">
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
                  className="group glass-card transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#40B2D6]/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#40B2D6]" />
                      </div>
                      <h3 className="font-display text-[22px] font-medium text-blue-50">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-[14px] font-body text-blue-200/50 leading-relaxed mb-6 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-blue-200/60 text-[10px] uppercase font-body tracking-widest rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={event.path}
                      className="group flex items-center justify-center gap-2 ieee-btn-primary w-fit px-8"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-[#0a0f1d] to-[#0d152a] text-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-ieee-bright/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-[clamp(28px,4.5vw,48px)] font-light mb-8 text-blue-50 tracking-tight">
              Ready to Join?
            </h2>
            <div className="w-20 h-1 bg-[#40B2D6] mx-auto mb-10 rounded-full" />
            <p className="text-[17px] md:text-[20px] font-body text-blue-200/60 max-w-2xl mx-auto leading-relaxed mb-12">
              Whether you're a participant, volunteer, or sponsor, there's a place for you in our vibrant tech community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hackathon"
                className="group flex items-center justify-center gap-2 ieee-btn-primary px-8 py-4"
              >
                Register for Events
              </Link>
              <Link
                to="/join"
                className="group flex items-center justify-center gap-2 ieee-btn-outline px-8 py-4"
              >
                Join IEEE
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
