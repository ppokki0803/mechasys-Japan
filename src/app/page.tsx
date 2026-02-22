'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import {
  Menu,
  X,
  ChevronRight,
  Package,
  Scan,
  Layers,
  Target,
  Zap,
  Settings,
  Trophy,
  Quote,
  Play,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'

// Navigation data
const navItems = [
  { label: '製品', href: '#product' },
  { label: '導入業界', href: '#industries' },
  { label: '会社概要', href: '#company' },
  { label: '価格', href: '#pricing' },
  { label: 'ブログ', href: '#blog' },
]

// Partner logos
const partners = [
  'VINCI',
  'Fujita',
  'MG Construction',
  'Haller Wasser',
  'Kajima Corporation',
  'ALEC',
]

// Features data
const features = [
  {
    icon: Package,
    title: 'コンパクトで持ち運びやすい',
    description: '機器を一度に持ち運べます。トータルステーションや追加機器は不要。XR Projectorは完全にスタンドアロンで、バックパックに収まるコンパクトさです。',
  },
  {
    icon: Scan,
    title: '3Dスキャン機能',
    description: '表面の高低差を精密にマッピングし、プロジェクト全体で絶対的な精度を確保。3Dポイントデータをシームレスにエクスポートし、徹底的な品質管理を実現します。',
  },
  {
    icon: Layers,
    title: '2D・3D投影',
    description: '床、壁、天井に投影。複数の高さでも対応可能。2Dまたは3D CADファイルを簡単にインポートして作業を効率化し、あらゆる段階で精度を確保します。',
  },
  {
    icon: Target,
    title: 'ミリ単位の精度',
    description: 'すべてのプロジェクトでミリ単位の精度を実現。最も複雑な詳細でも完璧に実行でき、作業のあらゆる側面を自信を持ってコントロールできます。',
  },
]

// Core values data
const coreValues = [
  {
    icon: Zap,
    title: 'シンプルさ',
    subtitle: '日常業務をより簡単に',
    description: 'XR Projectorは現場のレイアウト作業を大幅に簡素化し、人材管理を容易にします。わずか3時間のトレーニングで完全に操作できるようになり、オンラインプログラムで他のスタッフもトレーニング可能です。',
    image: '/images/value-simplicity.png',
  },
  {
    icon: Settings,
    title: '汎用性',
    subtitle: 'あらゆる作業に対応',
    description: '複数の表面に投影でき、機器を簡単に持ち運べるため、XR Projectorはあらゆるタイプの作業に対応する汎用的なツールです。',
    image: '/images/value-versatility.png',
  },
  {
    icon: Trophy,
    title: '卓越性',
    subtitle: '自信を持って建設',
    description: '最も精密なツールを使用することで、作業員は完全な自信を持って建設できます。すべての材料が正確に配置され、他の業者との競合を簡単に検出できます。',
    image: '/images/value-excellence.png',
  },
]

// Testimonials data
const testimonials = [
  {
    quote: '測量会社として、精度はすべてです。XR Projectorは、これまで以上に正確なレイアウトを迅速に提供する自信を与えてくれました。ワークフローを合理化し、市場機会を拡大しました。真のゲームチェンジャーです。',
    author: 'Christophe Podevin',
    role: 'Haller Wasser プロジェクトマネージャー',
  },
  {
    quote: 'XR Projectorはレイアウト速度を劇的に向上させました。以前は数時間かかった作業が数分で完了し、同じ精度を維持できます。建設チームにとって必須のツールです。',
    author: 'Frédéric Gauthier',
    role: 'MG Construction CEO',
  },
  {
    quote: 'XR Projectorはレイアウト時間を半分に削減するだけでなく、品質管理も向上させ、より早く効果的な自己監視を可能にします。そのシンプルさにより、建設業者を内部で再配分し、下請けへの依存を減らすことができます。',
    author: 'Samy Merry',
    role: 'VINCI Construction イノベーションマネージャー',
  },
  {
    quote: 'フジタはXR Projectorの開発に参加できたことを誇りに思います。この革新は、プロジェクトの納期を大幅に簡素化し、加速させます。',
    author: 'Fujita DaiwaHouse Group',
    role: '',
  },
]

// Footer links
const footerLinks = {
  company: [
    { label: 'ホーム', href: '#' },
    { label: '製品', href: '#product' },
    { label: '導入業界', href: '#industries' },
    { label: '会社概要', href: '#company' },
  ],
  resources: [
    { label: '価格', href: '#pricing' },
    { label: '導入事例', href: '#cases' },
    { label: 'ブログ', href: '#blog' },
  ],
  legal: [
    { label: 'プライバシーポリシー', href: '#' },
    { label: 'EULA', href: '#' },
    { label: 'Cookieポリシー', href: '#' },
    { label: '利用規約', href: '#' },
  ],
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Animated Section Component
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-[#0047bb]' : 'text-white'}`}>
                Mechasys
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#login"
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'
                }`}
              >
                ログイン
              </a>
              <Button variant="outline" size="sm" className="rounded-full">
                ディーラー募集
              </Button>
              <Button size="sm" className="bg-[#0047bb] hover:bg-[#003399] rounded-full">
                お問い合わせ
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#0047bb] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t space-y-3">
                <a href="#login" className="block text-gray-700 hover:text-[#0047bb] font-medium">
                  ログイン
                </a>
                <Button variant="outline" size="sm" className="w-full rounded-full">
                  ディーラー募集
                </Button>
                <Button size="sm" className="w-full bg-[#0047bb] hover:bg-[#003399] rounded-full">
                  お問い合わせ
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-bg.webp" 
            alt="Construction site with XR Projector" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0047bb]/90 to-[#0047bb]/70" />
        </div>

        {/* Hero Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            「正確さを、シンプルに。」
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            プロジェクション技術で、デジタルレイアウトをミリ単位の精度で現場に。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              お問い合わせ
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <a
              href="#product"
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
            >
              <Play className="h-5 w-5" />
              <span className="font-medium">製品について詳しく見る</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              世界中で信頼されています
            </p>
          </AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner}
                variants={fadeIn}
                className="flex items-center justify-center h-12 px-4"
              >
                <span className="text-lg font-bold text-gray-400">{partner}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Introduction Section */}
      <section id="product" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="inline-block px-4 py-1 bg-[#0047bb]/10 text-[#0047bb] rounded-full text-sm font-medium mb-6">
                XR Projectorのご紹介
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                次世代の建設レイアウト
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                XR Projectorは、一貫した精度を保証し、視覚的なワークフローでレイアウト作業の効率を向上させます。床、天井、壁のどの場所でも、その先進的なポジショニング技術により、あらゆる現場に対応する最高クラスの視覚投影を提供します。
              </p>
              <Button size="lg" className="bg-[#0047bb] hover:bg-[#003399] rounded-full">
                製品について詳しく見る
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </AnimatedSection>
            <AnimatedSection className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl">
                <img 
                  src="/images/product-xr-projector.png" 
                  alt="XR Projector" 
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-[#0047bb] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              主な特徴
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              XR Projectorが提供する革新的な機能で、建設現場の生産性を最大化
            </p>
          </AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl bg-white transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-[#0047bb]/10 rounded-xl flex items-center justify-center mb-5">
                      <feature.icon className="h-7 w-7 text-[#0047bb]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              私たちの価値観
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mechasysがお届けする3つの約束
            </p>
          </AnimatedSection>
          <div className="space-y-16 lg:space-y-24">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0047bb] rounded-xl flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-xl text-[#0047bb] font-medium mb-4">
                      {value.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={index === 0 ? '/images/floor-layout.png' : index === 1 ? '/images/track-install.png' : '/images/product-xr-projector.png'} 
                        alt={value.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様からの評価をご覧ください。
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                    <Card className="h-full border-0 shadow-lg">
                      <CardContent className="p-8">
                        <Quote className="h-10 w-10 text-[#0047bb]/20 mb-6" />
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          「{testimonial.quote}」
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#0047bb]/10 rounded-full flex items-center justify-center">
                            <span className="text-[#0047bb] font-bold">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">
                              {testimonial.author}
                            </p>
                            {testimonial.role && (
                              <p className="text-sm text-gray-500">
                                {testimonial.role}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#0047bb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              技術についてもっと知りたいですか？
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              XR Projectorが次の建設プロジェクトの品質、シンプルさ、効率をどのように向上できるかをご確認ください。
            </p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-[#0047bb]"
            >
              詳細を見る
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Mechasys</h4>
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +1 (844) 401-6461
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    160 Saint Viateur St. East<br />
                    Suite 702, Montreal, Quebec<br />
                    H2T 1A8
                  </span>
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h5 className="font-semibold mb-4">会社情報</h5>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h5 className="font-semibold mb-4">リソース</h5>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    ディーラー募集
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    採用情報
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="font-semibold mb-4">法的情報</h5>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                著作権 ©2025 Mechasys
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
