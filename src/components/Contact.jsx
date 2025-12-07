import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setStatus({ message: 'Enviando mensagem...', isError: false })
      
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: '',
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        throw new Error('Erro no envio')
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    } finally {
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(55) 11945-5172',
      link: 'tel:+5511945-5172'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@verdejah.com',
      link: 'mailto:contato@verdejah.com'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Rua Pinheiros, São Paulo - SP',
      link: 'https://maps.google.com/?q=Rua+Pinheiros+São+Paulo'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg a Sex: 8h às 18h\nSáb: 8h às 14h',
      link: null
    }
  ]

  const services = [
    'Paisagismo Residencial',
    'Jardins Internos',
    'Arquitetura Paisagística',
    'Manutenção de Jardins',
    'Sistemas de Irrigação',
    'Consultoria Especializada'
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
            <MessageSquare className="w-5 h-5 text-primary-400 mr-2" />
            <span className="text-sm font-medium text-primary-400">Entre em Contato</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Vamos Criar seu <span className="gradient-text">Jardim dos Sonhos</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Estamos prontos para transformar seu espaço. Entre em contato conosco 
            e receba um orçamento personalizado para seu projeto de paisagismo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-modern"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Solicite seu Orçamento</h3>
              <p className="text-gray-400">Preencha os campos abaixo e nossa equipe entrará em contato em até 24 horas.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Projeto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                >
                  <option value="" className="bg-dark-800">Selecione o tipo de projeto</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="bg-dark-800">{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Descrição do Projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  placeholder="Descreva seu projeto, área aproximada, preferências e qualquer informação relevante..."
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${status.isError ? 'bg-red-500/20 border border-red-500/30 text-red-300' : 'bg-green-500/20 border border-green-500/30 text-green-300'}`}>
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Solicitação
              </motion.button>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = info.link ? (
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <span className="text-gray-300 whitespace-pre-line">{info.content}</span>
                )

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="card-modern text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{info.title}</h4>
                    {content}
                  </motion.div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-modern text-center bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-400/30"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.685"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Atendimento Rápido</h4>
              <p className="text-gray-300 mb-4">Fale conosco agora pelo WhatsApp</p>
              <a
                href="https://wa.me/5511945-5172"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Conversar no WhatsApp
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="card-modern p-0 overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1084742837736!2d-46.69429198556094!3d-23.561414784682896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575833723dff%3A0x3d5f3c1d9b5f3d5f!2sRua%20Pinheiros%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1625598765432!5m2!1spt!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}