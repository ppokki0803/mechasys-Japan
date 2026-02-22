'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ChevronRight,
  Package,
  Scan,
  Layers,
  Target,
  Zap,
  Settings,
  Trophy,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

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

// Specifications data
const specifications = [
  { label: '投影方式', value: 'レーザー投影 + LED補助' },
  { label: '投影精度', value: '±2mm @ 10m' },
  { label: '投影範囲', value: '最大360°' },
  { label: 'バッテリー駆動時間', value: '約8時間' },
  { label: '重量', value: '約15kg（フルセット）' },
  { label: '対応ファイル形式', value: 'DWG, DXF, IFC, RVT' },
  { label: '3Dスキャン', value: 'LiDAR搭載' },
  { label: '通信', value: 'Wi-Fi 6, Bluetooth 5.0' },
]

// Use cases data
const useCases = [
  {
    title: '床レイアウト',
    description: '配管、電気配線、間仕切りの位置を直接床に投影。墨出し作業を大幅に短縮します。',
    image: '/images/floor-layout.png',
  },
  {
    title: '壁・天井投影',
    description: '壁や天井への投影も可能。コンセント位置、照明器具、空調ダクトの配置に最適です。',
    image: '/images/track-install.png',
  },
  {
    title: '品質管理',
    description: '施工後のスキャンデータと設計図の比較をリアルタイムで実施。手戻りを最小限に抑えます。',
    image: '/images/product-xr-projector.png',
  },
]

// Package contents
const packageContents = [
  'XR Projector 本体',
  '専用三脚',
  'コントロールタブレット',
  '充電ユニット',
  '輸送用ケース',
  'セットアップガイド',
  'オンライントレーニングプログラム',
  '1年間保証',
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

export default function ProductPage() {
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
              <Link
                href="/product"
                className="text-sm font-medium text-[#0047bb]"
              >
                製品
              </Link>
              <a
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'
                }`}
              >
                お問い合わせ
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Button size="sm" className="bg-[#0047bb] hover:bg-[#003399] rounded-full">
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0047bb] to-[#003399] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
                次世代レイアウト技術
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                XR Projector
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                建設現場のレイアウト作業を革新するプロジェクション技術。
                デジタルデータをミリ単位の精度で現場に直接投影し、
                作業効率と精度を劇的に向上させます。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full px-8">
                    お問い合わせ
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/10">
                  デモを予約
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-8">
                <img 
                  src="/images/product-xr-projector.png" 
                  alt="XR Projector" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
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

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              活用シーン
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              様々な建設現場で活用できる柔軟性
            </p>
          </AnimatedSection>
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase.title}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {useCase.description}
                    </p>
                    <Link href="/contact" className="inline-flex items-center text-[#0047bb] font-medium hover:underline">
                      詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={useCase.image} 
                        alt={useCase.title}
                        className="w-full h-auto max-h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                仕様
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                XR Projectorは、建設現場の厳しい環境でも安定した性能を発揮するよう設計されています。
              </p>
              <div className="space-y-4">
                {specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                パッケージ内容
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                すぐに現場で使用できる完全なキットをご提供します。
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {packageContents.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-[#0047bb] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
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
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              デモをお試しください
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              XR Projectorがどのように現場を変革できるか、実際に体験してみませんか？
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-[#0047bb]"
              >
                お問い合わせ
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <img 
                src="/images/logo-mechasys.png" 
                alt="Mechasys" 
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  +1 (844) 401-6461
                </li>
                <li>
                  160 Saint Viateur St. East<br />
                  Suite 702, Montreal, Quebec<br />
                  H2T 1A8
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">会社情報</h5>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">ホーム</Link></li>
                <li><Link href="/product" className="text-gray-400 hover:text-white transition-colors">製品</Link></li>
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
            <p className="text-gray-400 text-sm">
              著作権 ©2025 Mechasys
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
