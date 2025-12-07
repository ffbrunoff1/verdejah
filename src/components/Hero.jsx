import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Users, Award, MapPin } from 'lucide-react'

export default function Hero() {
  const stats = [
    { icon: Leaf, label: 'Projetos Realizados', value: '500+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '350+' },
    { icon: Award, label: 'Anos de Experiência', value: '15+' },
    { icon: MapPin, label: 'Cidades Atendidas', value: '25+' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/90 to-primary-900/90"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="%2300ffff" stroke-width="0.5" opacity="0.1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className={`absolute w-2 h-2 bg-primary-400/30 rounded-full animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-primary-400/20 rounded-full border border-primary-400/30"
            >
              <Leaf className="w-5 h-5 text-primary-400 mr-2" />
              <span className="text-sm font-medium text-primary-400">Paisagismo Profissional</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Transforme Seus{' '}
              <span className="gradient-text">Espaços</span>
              <br />
              com a <span className="gradient-text">Natureza</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Na VerdeJah, criamos jardins únicos que encantam e enriquecem seu imóvel. 
              Nossos especialistas em paisagismo e arquitetura transformam qualquer espaço 
              em um ambiente atrativo e desejável de viver.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contato"
                className="btn-primary group inline-flex items-center"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/produtos"
                className="btn-outline inline-flex items-center"
              >
                Ver Nossos Trabalhos
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Atendimento Online</span>
              </div>
              <div className="text-sm text-gray-400">
                📞 (55) 11945-5172
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg"
                alt="Jardim paisagístico profissional"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 card-modern max-w-xs"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-dark-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Projeto Concluído</h3>
                    <p className="text-sm text-gray-400">Residencial São Paulo</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-2xl flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}