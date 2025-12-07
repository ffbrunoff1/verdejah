import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Leaf, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Contato', path: '/contato' }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className={`border-b border-white/10 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-300">(55) 11945-5172</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-300">contato@verdejah.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary-400 text-xs">🌿 Transformando espaços com natureza</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400"
                  />
                )}
              </Link>
            ))}
            
            <Link
              to="/contato"
              className="btn-primary ml-4"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-primary-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-effect rounded-xl p-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-primary-400/20 text-primary-400'
                        : 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}