import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Check, Phone, Mail, Leaf, Users, Award, Shield } from 'lucide-react'

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