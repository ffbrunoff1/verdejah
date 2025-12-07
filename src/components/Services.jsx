import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Home, TreePine, Wrench, Droplets, Scissors, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      icon: Leaf,
      title: 'Paisagismo Residencial',
      description: 'Criação de jardins únicos para residências, transformando espaços externos em ambientes acolhedores e harmoniosos.',
      features: ['Projeto personalizado', 'Plantas nativas', 'Design sustentável', 'Acompanhamento pós-plantio'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    },
    {
      icon: Home,
      title: 'Jardins Internos',
      description: 'Soluções para levar a natureza para dentro de casa, criando ambientes internos mais saudáveis e relaxantes.',
      features: ['Purificação do ar', 'Baixa manutenção', 'Plantas adaptadas', 'Design moderno'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    },
    {
      icon: TreePine,
      title: 'Arquitetura Paisagística',
      description: 'Planejamento arquitetônico de espaços verdes, integrando funcionalidade e beleza natural.',
      features: ['Projeto 3D', 'Integração arquitetônica', 'Sustentabilidade', 'Cronograma detalhado'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    },
    {
      icon: Wrench,
      title: 'Manutenção e Cuidados',
      description: 'Serviços completos de manutenção para manter seu jardim sempre saudável e belo.',
      features: ['Poda especializada', 'Controle de pragas', 'Adubação regular', 'Monitoramento contínuo'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    },
    {
      icon: Droplets,
      title: 'Sistemas de Irrigação',
      description: 'Instalação de sistemas inteligentes de irrigação para otimizar o uso da água.',
      features: ['Economia de água', 'Automação', 'Sensores inteligentes', 'Manutenção programada'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg'
    },
    {
      icon: Scissors,
      title: 'Consultoria Especializada',
      description: 'Orientação profissional para escolha de plantas e cuidados específicos do seu jardim.',
      features: ['Avaliação detalhada', 'Plano de ação', 'Orientação técnica', 'Suporte contínuo'],
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-tower.jpg'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Visitamos o local e entendemos suas necessidades e desejos para o projeto.'
    },
    {
      step: '02',
      title: 'Projeto Personalizado',
      description: 'Criamos um projeto único, adaptado ao seu espaço e estilo de vida.'
    },
    {
      step: '03',
      title: 'Execução Profissional',
      description: 'Nossa equipe especializada executa o projeto com qualidade e precisão.'
    },
    {
      step: '04',
      title: 'Acompanhamento',
      description: 'Oferecemos suporte contínuo para garantir o sucesso do seu jardim.'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
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
            <span className="text-sm font-medium text-primary-400">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Soluções Completas em <span className="gradient-text">Paisagismo</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Oferecemos uma gama completa de serviços especializados para transformar 
            qualquer espaço em um ambiente natural harmonioso e sustentável.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card-modern group"
              >
                {/* Service Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-dark-900" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contato"
                    className="inline-block w-full text-center py-3 px-6 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-lg text-primary-400 font-medium transition-all duration-300 hover:from-primary-400 hover:to-secondary-400 hover:text-dark-900 mt-6"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-bold gradient-text mb-4">
              Como Trabalhamos
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nosso processo estruturado garante resultados excepcionais em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-2xl font-bold text-dark-900 shadow-lg">
                    {item.step}
                  </div>
                  
                  {/* Connecting Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-30"></div>
                  )}
                </div>

                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center card-modern"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Pronto para Transformar seu Espaço?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Entre em contato conosco para uma consulta gratuita e descubra como 
              podemos transformar seu espaço com soluções personalizadas de paisagismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Link>
              
              <Link
                to="/produtos"
                className="btn-outline inline-flex items-center justify-center"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Ver Projetos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}