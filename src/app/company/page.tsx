'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronRight, Award, Lightbulb, Users } from 'lucide-react'
import Link from 'next/link'

// Values data from mechasys.ca
const values = [
  {
    icon: Award,
    title: '卓越性',
    titleEn: 'Excellence',
    description: '最高のものだけをお届けすることをお約束します。卓越性は私たちの核心的な価値観であり、製品の性能に反映されています。',
    image: '/images/value-excellence.webp',
  },
  {
    icon: Lightbulb,
    title: 'イノベーション',
    titleEn: 'Innovation',
    description: 'イノベーションへの取り組みが、シンプルでアクセスしやすい方法で最先端の技術をユーザーにお届けします。',
    image: '/images/value-innovation.webp',
  },
  {
    icon: Users,
    title: 'コラボレーション',
    titleEn: 'Collaboration',
    description: '設計プロセス全体、そして最終製品そのものにおいて、チームワークを非常に重視しています。',
    image: '/images/value-collaboration.webp',
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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

export default function CompanyPage() {
  const [isScrolled, setIsScrolled] = useState(false)

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
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/images/logo-mechasys.png" 
                alt="Mechasys" 
                className={`h-8 w-auto transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
              />
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/product" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>製品紹介</Link>
              <Link href="/industries" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>業界</Link>
              <Link href="/company" className="text-sm font-medium text-[#0047bb]">会社案内</Link>
              <Link href="/pricing" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>価格</Link>
              <Link href="/contact" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>お問い合わせ</Link>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <Button size="sm" className="bg-[#0047bb] hover:bg-[#003399] rounded-full">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#0047bb] to-[#003399]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Life at Mechasys
              </h1>
              <p className="text-xl text-white/90 mb-8">
                優れた製品は、優れたチームによって生み出されます
              </p>
              <a href="https://mechasys.bamboohr.com/careers" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full">
                  採用情報を見る
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="hidden lg:block"
            >
              <img 
                src="/images/company-employee.jpg" 
                alt="Mechasys Team" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Construction Industry */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="/images/company-construction.webp" 
                alt="Construction Industry" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-sm font-bold text-[#0047bb] mb-2">THE BUILDERS OF TOMORROW</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                建設産業の変革
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                建設業界は大きな変革期にあります。ロボティクスと先進的なレイアウトソリューションは、現場の生産性向上に不可欠な要素となり、作業者に直接最適化されたソリューションを提供しています。今日、建設現場はますます自動化が進み、精密ツールと革新的なソフトウェアが効率性、安全性、品質の向上を推進しています。
              </p>
            </motion.div>
          </div>

          {/* Our Team */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:order-2"
            >
              <img 
                src="/images/company-team.jpg" 
                alt="Our Team" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:order-1"
            >
              <p className="text-sm font-bold text-[#0047bb] mb-2">GREAT MINDS BUILD AWESOMENESS</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                私たちのチーム
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                正しい業界課題を解決するには、経営陣だけでなく、すべてのチームメンバーからの大胆さが必要です。Mechasysでは、XR Projectorの開発に取り組む優秀な人材を誇りに思っています。多様な専門分野、文化、背景を持つチームメンバーが、建設業界の最も複雑な課題に取り組むために、新たなレベルの創造性を解き放っています。
              </p>
            </motion.div>
          </div>

          {/* Montreal */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img 
                src="/images/company-montreal.webp" 
                alt="Montreal" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-sm font-bold text-[#0047bb] mb-2">WHERE IT ALL STARTED</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                モントリオール市
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Mechasysはモントリオールに拠点を置いています。活気ある夏と雪に覆われた冬が文化を形成するこの街は、世界的に有名なベーグルから賑やかな芸術・映画シーンまで、ヨーロッパと北米の影響が融合した忘れられない場所です。完全なバイリンガル都市として、フランス語と英語がシームレスに共存し、どこに行っても象徴的な「Bonjour-Hi!」を耳にすることでしょう。
              </p>
            </motion.div>
          </div>

          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gray-50 rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">会社概要</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-2">会社名</p>
                <p className="text-gray-900 font-medium">Mechasys<br />(9373-6817 Québec inc.)</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">所在地</p>
                <p className="text-gray-900">160 Saint Viateur St. East,<br />Suite 702, Montreal, Quebec,<br />H2T 1A8, Canada</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">電話番号</p>
                <p className="text-gray-900">+1 (844) 401-6461</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">事業内容</p>
                <p className="text-gray-900">建設用レーザーレイアウト投影システムの開発・販売</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              私たちの価値観
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              私たちの原則は、私たちが何をするか、どのように行うかをガイドします
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeInUp} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#0047bb]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-[#0047bb]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{value.titleEn}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              チームの様子
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="/images/team-action-1.jpg" alt="Team" className="w-full h-48 object-cover rounded-xl" />
            <img src="/images/team-action-2.jpg" alt="Team" className="w-full h-48 object-cover rounded-xl" />
            <img src="/images/team-action-3.jpg" alt="Team" className="w-full h-48 object-cover rounded-xl" />
            <img src="/images/team-action-4.jpg" alt="Team" className="w-full h-48 object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="py-20 lg:py-32 bg-[#0047bb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              チームに参加しませんか？
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              イノベーターとリーダーのチームに参加して、産業分野の日常の人々に役立つ実用的な製品で真のインパクトを生み出しましょう。
            </p>
            <a href="https://mechasys.bamboohr.com/careers" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full px-8">
                採用情報を見る
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/images/logo-mechasys.png" alt="Mechasys" className="h-10 w-auto mb-6 brightness-0 invert" />
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <ul className="space-y-3 text-gray-400">
                <li>+1 (844) 401-6461</li>
                <li>160 Saint Viateur St. East<br />Suite 702, Montreal, Quebec<br />H2T 1A8</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">会社情報</h5>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">ホーム</Link></li>
                <li><Link href="/product" className="text-gray-400 hover:text-white transition-colors">製品紹介</Link></li>
                <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">業界</Link></li>
                <li><Link href="/company" className="text-gray-400 hover:text-white transition-colors">会社案内</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">リソース</h5>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">法的情報</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">著作権 ©2025 Mechasys</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
