import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, ArrowRight, Star } from 'lucide-react'

export default function Products() {
  const products = [
    {
      slug: 'jardins',
      name: 'Jardins',
      description: 'Transforme seu espaço exterior em um refúgio natural com nossos serviços de jardinagem personalizados.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg',
      features: ['Projeto personalizado', 'Plantas nativas', 'Manutenção incluída', 'Garantia de 2 anos'],
      category: 'Paisagistas'
    },
    {
      slug: 'jardins-internos',
      name: 'Jardins Internos',
      description: 'Soluções para levar a natureza para dentro de casa, criando ambientes mais saudáveis e relaxantes.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg',
      features: ['Purificação do ar', 'Baixa manutenção', 'Design moderno', 'Instalação completa'],
      category: 'Arquitetos'
    },
    {
      slug: 'plantas-e-arvores',
      name: 'Plantas e Árvores',
      description: 'Variedade de espécies ideais para diferentes climas e espaços, com orientação especializada.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg',
      features: ['Espécies nativas', 'Consultoria inclusa', 'Garantia de adaptação', 'Entrega e plantio'],
      category: 'Criadores de plantas'
    }
  ]

  const categories = [
    { name: 'Todos', slug: 'all' },
    { name: 'Paisagistas', slug: 'paisagistas' },
    { name: 'Arquitetos', slug: 'arquitetos' },
    { name: 'Criadores de plantas', slug: 'criadores-de-plantas' }
  ]

  const [activeCategory, setActiveCategory] = React.useState('all')

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.category.toLowerCase().replace(/ /g, '-') === activeCategory
      )

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
              <span className="text-sm font-medium text-primary-400">Nossos Produtos</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Soluções Completas em <span className="gradient-text">Paisagismo</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Descubra nossa linha completa de produtos e serviços para transformar 
              qualquer espaço em um ambiente natural único e harmonioso.
            </p>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.slug
                    ? 'bg-gradient-to-r from-primary-400 to-secondary-400 text-dark-900'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-primary-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-modern group overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl -m-6 mb-6">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-400/20 backdrop-blur-md text-primary-400 text-xs font-medium rounded-full border border-primary-400/30">
                      {product.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Product Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/produto/${product.slug}`}
                    className="group/btn flex items-center justify-between w-full p-4 mt-6 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-lg hover:from-primary-400 hover:to-secondary-400 hover:text-dark-900 transition-all duration-300"
                  >
                    <span className="font-medium">Ver Detalhes</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full flex items-center justify-center">
                <Leaf className="w-12 h-12 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nenhum produto encontrado</h3>
              <p className="text-gray-400">Tente selecionar uma categoria diferente</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Não encontrou o que procura?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nossa equipe está pronta para criar soluções personalizadas 
              para suas necessidades específicas de paisagismo.
            </p>
            <Link
              to="/contato"
              className="btn-primary inline-flex items-center"
            >
              Solicitar Projeto Personalizado
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}