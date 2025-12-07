import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Leaf, Heart, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', path: '/' },
        { name: 'Sobre', path: '/sobre' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'Produtos', path: '/produtos' }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Paisagismo Residencial', path: '/servicos' },
        { name: 'Jardins Internos', path: '/servicos' },
        { name: 'Arquitetura Paisagística', path: '/servicos' },
        { name: 'Manutenção', path: '/servicos' }
      ]
    },
    {
      title: 'Produtos',
      links: [
        { name: 'Jardins', path: '/produto/jardins' },
        { name: 'Jardins Internos', path: '/produto/jardins-internos' },
        { name: 'Plantas e Árvores', path: '/produto/plantas-e-arvores' },
        { name: 'Todos os Produtos', path: '/produtos' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ]

  const contactInfo = [
    { icon: Phone, content: '(55) 11945-5172', href: 'tel:+5511945-5172' },
    { icon: Mail, content: 'contato@verdejah.com', href: 'mailto:contato@verdejah.com' },
    { icon: MapPin, content: 'Rua Pinheiros, São Paulo - SP', href: 'https://maps.google.com/?q=Rua+Pinheiros+São+Paulo' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="%2300ffff" stroke-width="0.5" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <img 
                    src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/c0d1f557-c955-445d-9c72-b1d6505e724c/logo_1765150710127_0.png"
                    alt="VerdeJah Logo"
                    className="h-12 w-12 object-contain"
                  />
                  <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold gradient-text">VerdeJah</h1>
                  <p className="text-xs text-gray-400">Paisagismo & Arquitetura</p>
                </div>
              </Link>

              <p className="text-gray-400 leading-relaxed mb-6">
                Transformando espaços com natureza há mais de 15 anos. 
                Criamos jardins únicos que encantam e enriquecem seu imóvel.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-3 text-sm text-gray-400 hover:text-primary-400 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span>{info.content}</span>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-400/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Receba Dicas de Paisagismo
              </h3>
              <p className="text-gray-400 text-sm">
                Cadastre-se e receba mensalmente dicas exclusivas sobre cuidados com jardins e plantas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
              />
              <button className="btn-primary whitespace-nowrap">
                Cadastrar
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} VerdeJah. Todos os direitos reservados.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current hidden sm:inline" />
              <span className="hidden sm:inline">para a natureza</span>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/privacidade" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Termos de Uso
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Criado com</span>
                <em className="text-primary-400 font-medium">
                  <a 
                    href="https://papum.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-300 transition-colors"
                  >
                    Papum
                  </a>
                </em>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            to="/contato"
            className="w-14 h-14 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
          >
            <Leaf className="w-6 h-6 text-dark-900 group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}