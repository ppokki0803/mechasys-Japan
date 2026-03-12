'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  ChevronRight,
  Scan,
  MapPin,
  PenTool,
  Layers,
  ShieldCheck,
  Wifi,
  Monitor,
  Users,
  BarChart3,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Download,
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
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

// "We can offer much more" features
const advancedFeatures = [
  {
    icon: Scan,
    title: 'SmartScan技術',
    description: '既存の状況をキャプチャし、モデルジオメトリと比較することで、迅速な品質管理チェックを実現します。',
  },
  {
    icon: MapPin,
    title: '複数の位置決め方法',
    description: 'プロジェクトエリアと施工戦略に合わせて、複数の位置決めワークフローを活用できます。',
  },
  {
    icon: PenTool,
    title: 'CAD設計の迅速な変更',
    description: '修正図面からレイアウトを素早く更新し、チームが常に最新のプロジェクト意図で作業できます。',
  },
  {
    icon: Layers,
    title: 'レイヤーベースの投影制御',
    description: 'レイヤーごとに表示コンテンツを制御し、各工程で必要な情報のみを投影します。',
  },
  {
    icon: ShieldCheck,
    title: '最先端のレーザー安全性',
    description: '現場に特化した操作モードと安全機能により、日常的な使用でもより安全な運用をサポートします。',
  },
  {
    icon: Wifi,
    title: 'グローバルIoT接続',
    description: 'プロジェクトの更新を同期し、プラットフォーム接続を通じて分散チームを連携させます。',
  },
]

// Platform features
const platformFeatures = [
  {
    icon: Monitor,
    title: 'CADビューア',
    description: 'デバイスを問わず、図面とレイアウト意図を明確に可視化します。',
  },
  {
    icon: Users,
    title: 'コラボレーション',
    description: 'コメント、マークアップ、共有プロジェクトコンテンツを通じてチームを連携させます。',
  },
  {
    icon: BarChart3,
    title: 'QC分析',
    description: '現場で取得したデータにより偏差を追跡し、品質保証をサポートします。',
  },
]

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <img src="/images/logo-mechasys.png" alt="Mechasys" className="h-8 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/product" className="text-sm font-medium text-[#0047bb]">製品紹介</Link>
              <Link href="/industries" className="text-sm font-medium text-gray-700 hover:text-[#0047bb] transition-colors">業界</Link>
              <Link href="/company" className="text-sm font-medium text-gray-700 hover:text-[#0047bb] transition-colors">会社案内</Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-[#0047bb] transition-colors">価格</Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#0047bb] transition-colors">お問い合わせ</Link>
            </div>
            <Link href="/contact">
              <Button size="sm" className="bg-[#0047bb] hover:bg-[#003399] rounded-full">
                デモを予約
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark with product images */}
      <section className="relative bg-[#1a1a2e] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                XR Projector<br />
                <span className="text-white/90">精密さを追求した設計</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                比類なきシンプルさで、最先端技術を体験してください。
              </p>
              <Button className="bg-[#0047bb] hover:bg-[#003399] text-white rounded-full px-6">
                <Download className="mr-2 h-4 w-4" />
                データシートをダウンロード
              </Button>
            </AnimatedSection>
            <AnimatedSection className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/product-xr-projector.png"
                  alt="XR Projector"
                  className="w-full h-auto rounded-lg col-span-2"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sub-navigation bar */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            チームとワークフローのライブデモに興味がありますか？
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-sm text-[#0047bb] font-medium hover:underline">
              デモを予約
            </Link>
            <a href="#" className="text-sm text-[#0047bb] font-medium hover:underline">
              パンフレットをダウンロード
            </a>
          </div>
        </div>
      </section>

      {/* Feature 1: Accuracy at its core */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/floor-layout.png"
                  alt="精度の高いレイアウト投影"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  精度を核に
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  XR Projectorは精度を追求して設計されています。床、壁、天井に正確なレーザーレイアウトポイントを投影し、チームが自信を持って迅速に作業を検証できるようサポートします。
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature 2: Designed and built to last */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="lg:order-2 rounded-2xl overflow-hidden">
                <img
                  src="/images/track-install.png"
                  alt="堅牢な設計"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  耐久性を追求した設計
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  堅牢な現場対応ボディと耐久性のあるコンポーネントにより、XR Projectorは内装レイアウトから厳しいプロジェクト環境まで、日常的な建設現場での使用に対応する信頼性を備えています。
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature 3: Compact & portable */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/product-xr-projector.png"
                  alt="コンパクトで持ち運びやすい"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  コンパクト＆ポータブル
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  XR Projectorはタスク間を素早く移動できるほどコンパクトで、セットアップの複雑さを軽減し、稼働中の現場での作業員の生産性を向上させます。
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* We can offer much more */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0047bb] mb-4">
              さらに多くの機能を提供
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              建設ワークフローに最適化された高度な機能をご紹介します。
            </p>
          </AnimatedSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {advancedFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp} className="text-center">
                <div className="w-12 h-12 bg-[#0047bb]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-[#0047bb]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bring your CADs to reality */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-[#0047bb]">CAD</span>を現実に、<br />
                  現実をCADに戻す
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  可視化、コラボレーション、トレーサビリティをサポートするプラットフォームで、設計意図をフィールド施工に接続します。
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0047bb] flex-shrink-0" />
                    <span className="text-gray-700">クロスプラットフォーム</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0047bb] flex-shrink-0" />
                    <span className="text-gray-700">コメント、注釈など</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center text-[#0047bb] font-medium hover:underline">
                  Webプラットフォームを見る <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src="/images/floor-layout.png"
                  alt="Webプラットフォーム"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Features - 3 cards */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-8"
          >
            {platformFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp} className="text-center">
                <div className="w-12 h-12 bg-[#0047bb]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-[#0047bb]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Layout Field App */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="bg-gray-200 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Smartphone className="h-16 w-16 text-[#0047bb] mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">Layout Field&trade; アプリ</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Layout Field&trade; アプリ
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  実用的なモバイルワークフローで、現場から直接レイアウトを計画、調整、実行できます。
                </p>
                <Link href="/contact" className="inline-flex items-center text-[#0047bb] font-medium hover:underline mb-8">
                  フィールドアプリのライセンスについてお問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0047bb] flex-shrink-0" />
                    <span className="text-gray-700">直感的なユーザーインターフェース</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0047bb] flex-shrink-0" />
                    <span className="text-gray-700">現場での変更対応</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA - Case Studies */}
      <section className="py-20 lg:py-28 bg-[#0047bb] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ケーススタディをご覧ください
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              XR Projectorがさまざまな用途や業種の日常業務をどのように向上させるかをご確認ください。
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-[#0047bb]"
              >
                ケーススタディを見る
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
                <li>+1 (844) 401-6461</li>
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
                <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">業界</Link></li>
                <li><Link href="/company" className="text-gray-400 hover:text-white transition-colors">会社案内</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">価格</Link></li>
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
            <p className="text-gray-400 text-sm">著作権 &copy;2025-2026 Mechasys</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
