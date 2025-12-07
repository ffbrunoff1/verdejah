import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Target, Heart, Leaf, Shield, Clock, Star } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Ana Silva',
      role: 'Arquiteta Paisagista',
      experience: '12 anos',
      specialties: ['Jardins Residenciais', 'Sustentabilidade', 'Design Biofílico'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    },
    {
      name: 'Carlos Santos',
      role: 'Especialista em Botânica',
      experience: '8 anos',
      specialties: ['Plantas Nativas', 'Jardins Internos', 'Irrigação'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    },
    {
      name: 'Marina Costa',
      role: 'Designer de Jardins',
      experience: '10 anos',
      specialties: ['Paisagismo Moderno', 'Jardins Verticais', 'Manutenção'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    }
  ]

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
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Respeitamos prazos e mantemos nossos clientes sempre informados sobre o progresso dos projetos.'
    },
    {
      icon: Star,
      title: 'Inovação Constante',
      description: 'Buscamos sempre as mais modernas técnicas e tendências em paisagismo e arquitetura.'
    }
  ]

  const milestones = [
    { year: '2009', event: 'Fundação da VerdeJah' },
    { year: '2012', event: 'Primeiro grande projeto residencial' },
    { year: '2015', event: 'Expansão para paisagismo comercial' },
    { year: '2018', event: '100 projetos concluídos' },
    { year: '2020', event: 'Foco em sustentabilidade' },
    { year: '2023', event: 'Mais de 500 clientes atendidos' },
    { year: '2024', event: 'Líder em paisagismo em SP' }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-400/20 rounded-full border border-primary-400/30 mb-6">
              <Leaf className="w-5 h-5 text-primary-400 mr-2" />
              <span className="text-sm font-medium text-primary-400">Nossa História</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transformando <span className="gradient-text">Espaços</span> e 
              <br />Criando <span className="gradient-text">Histórias</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Há mais de 15 anos, a VerdeJah une paixão pela natureza com excelência profissional 
              para criar jardins únicos que transformam a vida de nossos clientes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="card-modern">
                <h2 className="text-3xl font-bold gradient-text mb-6">Nossa Missão</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Encantar nossos clientes com paisagismo de excelência que enriqueça seus imóveis 
                  e torne o entorno das residências, edifícios e condomínios atrativo e desejável de viver.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">500+</h3>
                    <p className="text-sm text-gray-400">Projetos</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">15+</h3>
                    <p className="text-sm text-gray-400">Anos</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">98%</h3>
                    <p className="text-sm text-gray-400">Satisfação</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg"
                alt="Projeto VerdeJah"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Nossa <span className="gradient-text">Equipe</span>
            </h2>
            <p className="text-xl text-gray-300">
              Profissionais especializados e apaixonados por criar jardins únicos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card-modern text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-primary-400/30"
                  />
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-xl"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-4">{member.experience} de experiência</p>
                
                <div className="space-y-2">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 bg-primary-400/20 text-primary-400 text-xs rounded-full mr-2">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-300">
              Princípios que guiam cada projeto e relacionamento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="card-modern text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Nossa <span className="gradient-text">Jornada</span>
            </h2>
            <p className="text-xl text-gray-300">
              Marcos importantes em nossa trajetória de crescimento
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="card-modern">
                    <h3 className="text-2xl font-bold gradient-text mb-2">{milestone.year}</h3>
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full border-4 border-dark-800"></div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary-400 to-secondary-400"></div>
                  )}
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}