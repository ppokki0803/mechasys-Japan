'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Menu,
  X,
  ChevronRight,
  Package,
  Scan,
  Layers,
  Target,
  Quote,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Send,
  CheckCircle,
  Play,
  ExternalLink,
} from 'lucide-react'

// Navigation (anchor links for single page)
const navItems = [
  { label: '製品紹介', href: '#product' },
  { label: '業界', href: '#industries' },
  { label: '会社案内', href: '#company' },
  { label: 'お問い合わせ', href: '#contact' },
]

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
    transition: { staggerChildren: 0.15 },
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

// Setup steps
const setupSteps = [
  {
    step: '1',
    title: 'セットアップ',
    description: 'プロジェクターを三脚に設置し、電源を入れるだけ。わずか数分で準備完了。特別な測量知識は不要です。',
  },
  {
    step: '2',
    title: '基準点の計測',
    description: '現場の基準点をスキャンして座標系を設定。自動キャリブレーションにより、高精度な位置合わせを実現します。',
  },
  {
    step: '3',
    title: '簡単にレイアウト',
    description: 'CADデータを読み込み、床・壁・天井にフルスケールで投影。ミリ単位の精度でレイアウトが完了します。',
  },
]

// Features with images
const productFeatures = [
  {
    title: 'リアルタイムの投影リアリティ',
    description: 'CADデータをそのまま現場に投影。設計図と実際の施工面を直接比較でき、ミスを未然に防ぎます。',
    image: '/images/floor-layout.png',
  },
  {
    title: '3D映比の投影',
    description: '床面だけでなく、壁や天井にも3Dで投影可能。複数の表面に同時に投影し、複雑なレイアウトも簡単に実現します。',
    image: '/images/track-install.png',
  },
  {
    title: '最適化されたスキャン対応設計',
    description: '内蔵の3Dスキャン機能で表面の高低差を精密にマッピング。品質管理とAs-Built記録を同時に実現します。',
    image: '/images/case-study-1.webp',
  },
  {
    title: '現場で実証済みの優秀性',
    description: '世界中の建設現場で使用され、レイアウト時間を最大50%短縮。確かな実績に裏付けられた信頼性です。',
    image: '/images/case-study-2.webp',
  },
]

// Testimonials
const testimonials = [
  {
    quote: '測量会社として、精度はすべてです。XR Projectorは、これまで以上に正確なレイアウトを迅速に提供する自信を与えてくれました。',
    author: 'Christophe Podevin',
    role: 'Haller Wasser プロジェクトマネージャー',
    image: '/images/case-study-1.webp',
  },
  {
    quote: 'XR Projectorはレイアウト速度を劇的に向上させました。以前は数時間かかった作業が数分で完了し、同じ精度を維持できます。',
    author: 'Frédéric Gauthier',
    role: 'MG Construction CEO',
    image: '/images/case-study-2.webp',
  },
  {
    quote: 'XR Projectorはレイアウト時間を半分に削減するだけでなく、品質管理も向上させ、より早く効果的な自己監視を可能にします。',
    author: 'Samy Merry',
    role: 'VINCI Construction イノベーションマネージャー',
    image: '/images/company-construction.webp',
  },
]

// Contact form options
const employeeOptions = ['24-25', '26-50', '51-100', '101-200', '201-500', '501-1000', '1001-5000', '5000+']
const countryOptions = ['日本', 'カナダ', 'アメリカ合衆国', 'オーストラリア', 'イギリス', 'フランス', 'ドイツ', 'その他']

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    opName: '', firstName: '', lastName: '', email: '', phone: '',
    company: '', website: '', jobPosition: '', employees: '', country: '', details: '',
  })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({ opName: '', firstName: '', lastName: '', email: '', phone: '', company: '', website: '', jobPosition: '', employees: '', country: '', details: '' })
    setAgreed(false)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Navigation ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-center gap-2">
              <img src="/images/logo-mechasys.png" alt="Mechasys" className={`h-8 w-auto transition-all ${isScrolled ? '' : 'brightness-0 invert'}`} />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                <Button size="sm" className="bg-[#0047bb] hover:bg-[#003399] rounded-full">お問い合わせ</Button>
              </a>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-gray-700 hover:text-[#0047bb] font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0047bb]/85 to-[#003399]/75" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            現場を再定義する：日本におけるデジタル墨出しの新たなスタンダード
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            XR Projectorは建設現場のレイアウトを革新し、膨大な時間を大幅に短縮しながら最高精度レベルの施工を実現します。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                お問い合わせ
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== XR Projectorのご紹介 ===== */}
      <section id="product" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              XR Projectorのご紹介
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              XR Projectorは、一貫した精度を保証し、視覚的なワークフローでレイアウト作業の効率を向上させます。床、天井、壁のどの場所でも、その先進的なポジショニング技術により、あらゆる現場に対応する最高クラスの視覚投影を提供します。
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <img src="/images/product-xr-projector.png" alt="XR Projector" className="w-full max-w-md h-auto object-contain" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <img src="/images/floor-layout.png" alt="床面投影" className="w-full h-40 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium text-gray-700">床面への投影</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <img src="/images/track-install.png" alt="トラック設置" className="w-full h-40 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium text-gray-700">壁面への投影</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <img src="/images/case-study-1.webp" alt="現場事例" className="w-full h-40 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium text-gray-700">3Dスキャン機能</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <img src="/images/case-study-2.webp" alt="品質管理" className="w-full h-40 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium text-gray-700">品質管理</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="mt-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: Package, title: 'コンパクトで持ち運びやすい', desc: 'バックパックに収まるサイズ。トータルステーション不要のスタンドアロン設計。' },
                { icon: Scan, title: '3Dスキャン機能', desc: '表面の高低差を精密にマッピングし、品質管理データをエクスポート。' },
                { icon: Layers, title: '2D・3D投影', desc: '床、壁、天井に投影。CADファイルを簡単にインポートして即座に作業開始。' },
                { icon: Target, title: 'ミリ単位の精度', desc: 'すべてのプロジェクトでミリ単位の精度を実現。完璧な施工をサポート。' },
              ].map((feature) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#0047bb]/10 rounded-xl flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-[#0047bb]" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 設定で5分、RPから開始（点）へ ===== */}
      <section className="py-20 lg:py-28 bg-[#0047bb] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              設定で5分RPから開始（点）へ。
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              わずか3ステップで、CADデータを現場にフルスケール投影
            </p>
          </AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {setupSteps.map((step) => (
              <motion.div key={step.step} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Product Features with Images ===== */}
      <section id="industries" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {productFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src={feature.image} alt={feature.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <a href="#product" onClick={(e) => scrollToSection(e, '#product')}>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-[#0047bb] text-[#0047bb] hover:bg-[#0047bb] hover:text-white">
                XR製品の全体を見る
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 導入事例 ===== */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">導入事例</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              世界中の建設現場で信頼されているXR Projector
            </p>
          </AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-[#0047bb]/20 mb-4" />
                    <p className="text-gray-700 leading-relaxed mb-6">「{t.quote}」</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center">
                        <span className="text-[#0047bb] font-bold text-sm">{t.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Mechasysについて + 日本の販売代理店 ===== */}
      <section id="company" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Mechasysについて</h2>
              <div className="rounded-2xl overflow-hidden mb-6">
                <img src="/images/company-team-picture.webp" alt="Mechasys Team" className="w-full h-56 object-cover" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mechasysはカナダ・モントリオールに本社を置く建設テクノロジー企業です。XR Projectorを通じて、世界中の建設現場にデジタル墨出し技術を提供しています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                卓越性、イノベーション、コラボレーションを核心的な価値観とし、建設業界の生産性向上に貢献しています。
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">日本の販売代理店・関連組織</h2>
              <div className="rounded-2xl overflow-hidden mb-6">
                <img src="/images/company-construction.webp" alt="Construction Site" className="w-full h-56 object-cover" />
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                日本市場でのXR Projectorの販売・サポートは、認定された販売代理店ネットワークを通じて行われています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                デモのご依頼、価格のお問い合わせ、技術サポートについては、下記のお問い合わせフォームよりご連絡ください。
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== Contact Form Section ===== */}
      <section id="contact" className="py-20 lg:py-32 bg-[#0047bb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              その機能をぜひ直接ご体験ください
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              XR Projectorに関するご質問は、以下のフォームにご記入ください。担当者より折り返しご連絡いたします。
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">メッセージありがとうございます！</h3>
                    <p className="text-gray-600 mb-6">担当者より折り返しご連絡いたします。</p>
                    <Button onClick={resetForm} variant="outline" className="rounded-full">新しいお問い合わせ</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="opName">担当者名 *</Label>
                      <Input id="opName" name="opName" value={formData.opName} onChange={handleChange} required className="rounded-lg" placeholder="担当者のお名前" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">名 *</Label>
                        <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">姓 *</Label>
                        <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="rounded-lg" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">メールアドレス *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">電話番号</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="rounded-lg" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">会社名 *</Label>
                        <Input id="company" name="company" value={formData.company} onChange={handleChange} required className="rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">ウェブサイト *</Label>
                        <Input id="website" name="website" type="url" value={formData.website} onChange={handleChange} required className="rounded-lg" placeholder="https://" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobPosition">役職 *</Label>
                      <Input id="jobPosition" name="jobPosition" value={formData.jobPosition} onChange={handleChange} required className="rounded-lg" placeholder="例: プロジェクトマネージャー" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="employees">従業員数 *</Label>
                        <select id="employees" name="employees" value={formData.employees} onChange={handleChange} required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                          <option value="">選択してください</option>
                          {employeeOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">国 *</Label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                          <option value="">選択してください</option>
                          {countryOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">詳細</Label>
                      <Textarea id="details" name="details" value={formData.details} onChange={handleChange} rows={4} className="rounded-lg" placeholder="XR Projectorに関するご質問や、活用予定をご記入ください。" />
                    </div>

                    <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                      <p>Mechasysはお客様のプライバシーを重視し、第三者とデータを共有することはありません。詳細は<a href="#" className="text-[#0047bb] hover:underline ml-1">プライバシーポリシー</a>をご参照ください。</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox id="agreed" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                      <Label htmlFor="agreed" className="text-sm text-gray-600 cursor-pointer">Mechasysからの通信を受け取ることに同意します</Label>
                    </div>

                    <Button type="submit" size="lg" disabled={!agreed} className="w-full bg-[#0047bb] hover:bg-[#003399] rounded-full disabled:opacity-50">
                      送信する
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/images/logo-mechasys.png" alt="Mechasys" className="h-10 w-auto mb-6 brightness-0 invert" />
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" />+1 (844) 401-6461</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" />info@mechasys.ca</li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>160 Saint Viateur St. East<br />Suite 702, Montreal, Quebec<br />H2T 1A8</span>
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">サイトマップ</h5>
              <ul className="space-y-3">
                <li><a href="#product" className="text-gray-400 hover:text-white transition-colors">製品紹介</a></li>
                <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">業界</a></li>
                <li><a href="#company" className="text-gray-400 hover:text-white transition-colors">会社案内</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">リソース</h5>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.youtube.com/watch?v=k3x6cFLr0T8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                    <Play className="h-3 w-3" />デモ動画
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">法的情報</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">EULA</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">著作権 ©2025 Mechasys. All Rights Reserved.</p>
              <p className="text-gray-500 text-xs">Powered by XR Projector Technology Suite | Mechasys Canada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
