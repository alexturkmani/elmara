import { FadeIn, PageHero, ScaleIn } from '../components/Animations';
import { Diamond, Gem, Heart, Leaf, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div>
      <PageHero
        title="Our Story"
        subtitle="Crafting beauty since 1987"
        backgroundImage="https://images.unsplash.com/photo-1610694955371-d4b52a3b52?w=1920&q=80"
      />

      {/* Intro */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="section-subheading">The House of Elmara</p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 font-light tracking-wide mb-8">
              Where Heritage Meets <span className="italic text-tiffany-600">Innovation</span>
            </h2>
            <p className="font-sans text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Founded in 1987 by master jeweler Isabelle Elmara in the heart of Paris,
              Elmara has grown from a single atelier to an internationally revered luxury
              jewelry house. Our philosophy remains unchanged: to create jewelry that
              transcends time, blending impeccable craftsmanship with contemporary elegance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Split */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div
            className="bg-cover bg-center min-h-[400px]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&q=80)',
            }}
          />
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16">
            <FadeIn>
              <p className="section-subheading">Craftsmanship</p>
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 font-light mb-6">
                120 Hours of Devotion
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                Every Elmara piece is the product of over 120 hours of meticulous handwork.
                Our master artisans, many of whom have perfected their craft over decades,
                use techniques passed down through generations while embracing innovation
                to push the boundaries of what's possible.
              </p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                From the initial sketch to the final polish, each step is guided by an
                uncompromising commitment to excellence. We use only the finest materials
                — conflict-free diamonds, ethically sourced gemstones, and recycled precious metals.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 order-2 lg:order-1">
            <FadeIn>
              <p className="section-subheading">Legacy</p>
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 font-light mb-6">
                A Heritage of Excellence
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                From our first collection unveiled at the Place Vendôme to our now-global
                presence spanning five continents, Elmara has adorned queens, celebrities,
                and discerning collectors who appreciate the extraordinary.
              </p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Our flagship salon on Fifth Avenue, New York, continues the tradition of
                intimate, personalized service that Isabelle Elmara established nearly four
                decades ago — because luxury isn't just about what you wear, it's about
                how it makes you feel.
              </p>
            </FadeIn>
          </div>
          <div
            className="bg-cover bg-center min-h-[400px] order-1 lg:order-2"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=1000&q=80)',
            }}
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="section-subheading">What Defines Us</p>
            <h2 className="section-heading">Our Values</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Diamond,
                title: 'Exceptional Quality',
                description: 'Only the top 1% of gemstones meet our rigorous selection criteria, ensuring every piece radiates unparalleled brilliance.',
              },
              {
                icon: Heart,
                title: 'Passion-Driven Design',
                description: 'Our designers draw from art, nature, and architecture to create pieces that are not just worn — they are experienced.',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'We are committed to responsible sourcing, carbon-neutral operations, and the preservation of our planet for future generations.',
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Through our foundation, we support artisan communities and fund education programs in gemstone-producing regions worldwide.',
              },
              {
                icon: Gem,
                title: 'Innovation',
                description: 'Cutting-edge technology meets traditional techniques. Our proprietary settings maximize light performance and comfort.',
              },
              {
                icon: Clock,
                title: 'Timelessness',
                description: 'Trends come and go. Elmara pieces are designed to be cherished today, tomorrow, and by generations yet to come.',
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <ScaleIn key={title} delay={i * 0.1}>
                <div className="bg-white p-10 text-center hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 rounded-full bg-tiffany-50 flex items-center justify-center mx-auto mb-6">
                    <Icon size={24} className="text-tiffany-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-xl text-gray-900 mb-3">{title}</h4>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 bg-tiffany-500">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { number: '1987', label: 'Founded' },
              { number: '120+', label: 'Master Artisans' },
              { number: '38', label: 'Countries' },
              { number: '50K+', label: 'Pieces Created' },
            ].map(({ number, label }, i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <p className="font-serif text-5xl md:text-6xl text-ivory-100 font-light">{number}</p>
                <p className="font-sans text-xs tracking-ultra-wide uppercase text-ivory-200/70 mt-2">{label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
