import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Check } from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams()

  const productData = {
    'jardins': {
      name: 'Jardins',
      category: 'Paisagistas',
      description: 'Transforme seu espaço exterior em um refúgio natural com nossos serviços de jardinagem. Oferecemos soluções personalizadas para criar e manter jardins que refletem a beleza e a harmonia da natureza. Nossos especialistas em paisagismo trabalham em conjunto com você para entender suas necessidades e desejos, resultando em um projeto único que se adapta ao seu estilo de vida.\n\nUtilizamos plantas nativas e técnicas sustentáveis para garantir que seu jardim não apenas floresça, mas também contribua para o ecossistema local. Desde a seleção das espécies ideais até a manutenção regular, cuidamos de cada detalhe para que você possa desfrutar de um ambiente agradável e revitalizante.\n\nAlém de criar jardins deslumbrantes, oferecemos serviços de irrigação, poda e adubação, assegurando que suas plantas estejam sempre saudáveis. Deixe seu espaço mais bonito e convidativo com nossos serviços profissionais de jardinagem que elevam a estética e o bem-estar do seu lar.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg',
      features: ['Projeto personalizado', 'Plantas nativas e sustentáveis', 'Sistema de irrigação inteligente', 'Manutenção completa incluída', 'Garantia de 2 anos', 'Acompanhamento pós-plantio']
    },
    'jardins-internos': {
      name: 'Jardins Internos',
      category: 'Design de Interiores',
      description: 'Leve a beleza e a tranquilidade da natureza para dentro de seus ambientes com nossos projetos de jardins internos. Criamos soluções personalizadas que se adaptam a qualquer espaço, desde pequenos apartamentos a grandes escritórios, melhorando a qualidade do ar e o bem-estar.\n\nNossos especialistas selecionam plantas que prosperam em ambientes internos, exigindo baixa manutenção e trazendo vida e cor para sua decoração. Desenvolvemos desde jardins verticais a arranjos em vasos, sempre com um design moderno e sofisticado.\n\nOferecemos um serviço completo que inclui o design, a seleção e instalação das plantas, e orientações para cuidados. Transforme seu espaço interno em um oásis verde com a VerdeJah.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg',
      features: ['Purificação do ar', 'Design biofílico', 'Baixa manutenção', 'Plantas adaptadas a interiores', 'Melhora do bem-estar', 'Consultoria de cuidados']
    },
    'plantas-e-arvores': {
      name: 'Plantas e Árvores',
      category: 'Fornecimento',
      description: 'Oferecemos uma vasta seleção de plantas e árvores de alta qualidade, ideais para qualquer projeto de paisagismo. Desde espécies nativas a plantas ornamentais exóticas, nosso catálogo é cuidadosamente selecionado para garantir saúde e vigor.\n\nNossa equipe de especialistas em botânica está à disposição para ajudar na escolha das espécies mais adequadas para seu clima, solo e design. Fornecemos plantas para jardins residenciais, projetos comerciais e espaços internos.\n\nAlém da venda, oferecemos serviços de entrega e plantio, garantindo que suas novas plantas tenham o melhor começo possível. Conte com a VerdeJah para encontrar as plantas perfeitas que darão vida ao seu projeto.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/c0d1f557-c955-445d-9c72-b1d6505e724c/1765150645026_a49a7i6xe8w_john-towner.jpg',
      features: ['Ampla variedade de espécies', 'Consultoria especializada na escolha', 'Plantas saudáveis e de alta qualidade', 'Serviço de entrega e plantio', 'Garantia de adaptação', 'Suporte pós-venda']
    }
  };

  const product = productData[slug];

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Produto não encontrado</h1>
          <p className="text-gray-300 mb-8">O produto que você está procurando não existe.</p>
          <Link to="/produtos" className="btn-primary">
            Voltar aos Produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link to="/produtos" className="flex items-center text-primary-400 hover:text-primary-300 transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para todos os produtos
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <span className="px-3 py-1 bg-primary-400/20 text-primary-400 text-sm font-medium rounded-full border border-primary-400/30 mb-4 inline-block">
                  {product.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                  <span className="text-gray-400">(4.9 de 5 estrelas)</span>
                </div>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{product.description}</p>
              </div>

              <div className="card-modern">
                <h3 className="text-2xl font-bold text-white mb-6">Principais Características</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-2xl font-bold gradient-text mb-4">Interessado neste produto?</h3>
                <p className="text-gray-400 mb-6">Entre em contato para um orçamento personalizado.</p>
                <Link to="/contato" className="btn-primary w-full text-center">
                  Solicitar Orçamento
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}