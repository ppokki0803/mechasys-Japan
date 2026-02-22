'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Industries data from mechasys.ca
const industries = [
  {
    title: '間仕切り',
    titleEn: 'Partitions',
    description: 'パーティションや間仕切り壁の配置を正確に投影し、作業効率を大幅に向上させます。',
  },
  {
    title: '曲線・楕円',
    titleEn: 'Curves & Ellipses',
    description: '複雑な曲線形状や楕円レイアウトも高精度に投影。建築デザインの自由度を広げます。',
  },
  {
    title: '吸音天井',
    titleEn: 'Acoustical Ceilings',
    description: '天井材の配置を効率的に投影。吸音パネルや照明器具の位置決めも正確に行えます。',
  },
  {
    title: '配管',
    titleEn: 'Plumbing',
    description: '配管ルートを視覚的に確認しながら施工。他の業者との干渉も事前に検出可能です。',
  },
  {
    title: '空調設備',
    titleEn: 'HVAC Systems',
    description: 'ダクトや空調機器の配置を正確に投影。大型プロジェクトでも一貫した精度を実現します。',
  },
  {
    title: '電気設備',
    titleEn: 'Electrical Works',
    description: 'コンセント、照明器具、スイッチの位置決めを効率化。墨出し作業を大幅に短縮します。',
  },
  {
    title: 'タイル工事',
    titleEn: 'Tiling',
    description: 'タイルの配置パターンを直接床や壁に投影。複雑なデザインも正確に再現できます。',
  },
  {
    title: '石積み・ブロック',
    titleEn: 'Masonry',
    description: '石やブロックの配置をガイド。施工精度を高め、材料の無駄を削減します。',
  },
  {
    title: 'プレハブ製造',
    titleEn: 'Prefab Manufacturing',
    description: '工場での組み立て工程にも対応。品質管理と生産効率を向上させます。',
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
      staggerChildren: 0.1,
    },
  },
}

export default function IndustriesPage() {
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
              <Link href="/industries" className="text-sm font-medium text-[#0047bb]">業界</Link>
              <Link href="/company" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>会社案内</Link>
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#0047bb] to-[#003399] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              必要なのは、たった一つのツール
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              あらゆる環境で、様々な用途にプロジェクターをお使いいただけます
            </p>
            <Link href="#industries">
              <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full">
                業界を探す
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0047bb] mb-6">
              一つのツールで、無限の活用シーン
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0047bb] mb-8">
              あなたの用途は？
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              XR Projectorが適用されている様々な活用シーンをご覧ください。
              あなたの用途が見つからない場合は、
              <Link href="/contact" className="text-[#0047bb] font-medium hover:underline ml-1">
                お問い合わせ
              </Link>
              ください。デモをご案内いたします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section id="industries" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              業界
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry) => (
              <motion.div key={industry.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl bg-white transition-all overflow-hidden group cursor-pointer">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0047bb] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{industry.titleEn}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              導入事例
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              最新の導入事例をご覧ください
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0047bb] transition-colors">
                    Egg-Telsla、複雑な建築レイアウトをMechasysのXR Projectorで実現
                  </h3>
                  <p className="text-gray-600 mb-6">
                    複雑な建築デザインも、XR Projectorを使用することで高精度かつ効率的にレイアウト作業を完了。
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-[#0047bb] font-medium hover:underline">
                    詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0047bb] transition-colors">
                    Grondin Acoustique、大規模商業施設でレイアウト速度を5.5倍に向上
                  </h3>
                  <p className="text-gray-600 mb-6">
                    XR Projectorの導入により、大規模プロジェクトでも大幅な効率向上を実現。
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-[#0047bb] font-medium hover:underline">
                    詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              あなたの業務に最適なソリューションを
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              私たちの営業チームが、お客様のニーズに合わせたカスタマイズされたビジネスモデルと価格プランをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full px-8">
                  お問い合わせ
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/product">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-[#0047bb]">
                  製品を見る
                </Button>
              </Link>
            </div>
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
