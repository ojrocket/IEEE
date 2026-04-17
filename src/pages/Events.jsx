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
    <div className="bg-ieee-light text-ieee-deep min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-ieee-light border-b border-ieee-deep/10">
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
              className="inline-block px-4 py-1.5 bg-ieee-beige border border-ieee-deep/15 rounded-full text-[10px] font-semibold tracking-[0.2em] text-ieee-bright uppercase mb-8"
            >
              IEEE SRM AP 24'
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-semibold text-ieee-deep mb-6 tracking-tighter"
            >
              Events at IEEE
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-[#56627a] max-w-3xl mx-auto font-light leading-relaxed mb-12"
            >
              Discover our diverse range of events designed to inspire, challenge, and empower the next generation of innovators and engineers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-ieee-deep mb-8 uppercase tracking-[0.16em]">
              Our Event Portfolio
            </h2>
            <div className="w-20 h-1 bg-ieee-bright mx-auto mb-10 rounded-full" />
            <p className="text-lg text-[#55627c] max-w-4xl mx-auto font-medium leading-[1.8]">
              From competitive hackathons to skill-building workshops, our events cater to every aspect of technological innovation and personal development.
              Each event is carefully crafted to provide maximum value, learning opportunities, and networking possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6 bg-ieee-light">
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-ieee-deep/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-ieee-cyan/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-ieee-cyan" />
                      </div>
                      <h3 className="text-2xl font-semibold text-ieee-deep">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-[#55627c] font-medium leading-relaxed mb-6 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-ieee-beige/50 text-ieee-deep text-xs font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Explore Button */}
                    <Link
                      to={event.path}
                      className="inline-flex items-center gap-2 bg-ieee-cyan text-white px-6 py-3 rounded-full font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-ieee-bright hover:scale-105 hover:shadow-lg"
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
      <section className="py-20 px-6 bg-ieee-deep text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-semibold mb-8 uppercase tracking-[0.16em]">
              Ready to Join?
            </h2>
            <div className="w-20 h-1 bg-ieee-cyan mx-auto mb-10 rounded-full" />
            <p className="text-xl text-ieee-beige/80 font-light leading-relaxed mb-12">
              Whether you're a participant, volunteer, or sponsor, there's a place for you in our vibrant tech community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hackathon"
                className="bg-ieee-cyan text-ieee-deep px-8 py-4 rounded-full font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl"
              >
                Register for Events
              </Link>
              <Link
                to="/join"
                className="border border-ieee-cyan text-ieee-cyan px-8 py-4 rounded-full font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-ieee-cyan hover:text-ieee-deep hover:scale-105"
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
