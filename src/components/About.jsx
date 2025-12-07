import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Users, Award, Target, Heart, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Paixão pela Natureza',
      description: 'Cada projeto é desenvolvido com amor e respeito pela natureza, criando espaços que harmonizam com o meio ambiente.'
    },
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Comprometidos com a qualidade máxima em cada detalhe, desde o planejamento até a execução final.'
    },
    {
      icon: Users,
      title: 'Relacionamento Próximo',
      description: 'Valorizamos a parceria com nossos clientes, entendendo suas necessidades e superando expectativas.'
    },
    {
      icon: Shield,
      title: 'Sustentabilidade',
      description: 'Priorizamos práticas sustentáveis e o uso de plantas nativas para preservar o ecossistema local.'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projetos Entregues' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '350+', label: 'Clientes Satisfeitos' },
    { number: '25+', label: 'Cidades Atendidas' }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-400/20 rounded-full border border-primary-400/30 mb-6">
            <Leaf className="w-5 h-5 text-primary-400 mr-2" />
            <span className="text-sm font-medium text-primary-400">Sobre Nós</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Criamos <span className="gradient-text">Paisagens</span> que 
            <br />Transformam <span className="gradient-text">Vidas</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Na VerdeJah, acreditamos que cada espaço tem o potencial de se tornar um refúgio natural. 
            Há mais de 15 anos, especializamos-nos em paisagismo e arquitetura, criando jardins que 
            não apenas embelezam, mas também enriquecem a qualidade de vida de nossos clientes.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-modern">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-dark-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Encantar nossos clientes com paisagismo de excelência que enriqueça seus imóveis 
                e torne o entorno das residências, edifícios e condomínios atrativo e desejável de viver. 
                Transformamos espaços comuns em ambientes extraordinários através da harmonia entre 
                natureza e arquitetura.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Projetos personalizados que refletem a personalidade e necessidades de cada cliente
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Uso de técnicas sustentáveis e plantas nativas para preservar o ecossistema
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Acompanhamento completo desde o planejamento até a manutenção contínua
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg"
                alt="Equipe VerdeJah trabalhando em projeto paisagístico"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 card-modern w-48"
              >
                <div className="text-center">
                  <h4 className="text-3xl font-bold gradient-text">98%</h4>
                  <p className="text-sm text-gray-400">Cliente Satisfeitos</p>
                  <div className="mt-2 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-bold gradient-text mb-4">Nossos Valores</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Princípios fundamentais que guiam cada projeto e relacionamento que construímos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="card-modern text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-2xl flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full flex items-center justify-center border border-primary-400/30">
                <span className="text-2xl font-bold gradient-text">{achievement.number}</span>
              </div>
              <p className="text-sm font-medium text-gray-300">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}