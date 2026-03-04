'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  ChevronDown,
  ChevronUp,
  Shield,
  CreditCard,
  Cloud,
  HeadphonesIcon,
  Phone,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const features = [
  {
    icon: Shield,
    title: '1年間のメーカー保証',
    description: '製品の欠陥に対する安心の保証。お客様の投資を守ります。',
  },
  {
    icon: CreditCard,
    title: 'ファイナンス・レンタルオプション',
    description: '購入またはリースからお選びいただけます。柔軟なお支払い方法をご用意しています。',
  },
  {
    icon: Cloud,
    title: 'Layout Cloud™ オプション',
    description: 'CADファイルの管理と現場データの収集を一元化。クラウドで現場をつなぎます。',
  },
  {
    icon: HeadphonesIcon,
    title: 'カスタマーケアパッケージ',
    description: '現場サービスから機器のメンテナンスまで、充実したサポート体制でお客様を支援します。',
  },
]

const boxItems = [
  {
    name: 'XR Projector',
    description: 'Class 3R認証レーザー搭載。ミリ単位の精度で現場にデジタルレイアウトを投影します。',
    image: 'https://mechasys.ca/web/image/22776-b8957ca5/WhatsInTheBox-XRProjector.png',
  },
  {
    name: '軽量三脚',
    description: '現場での安定した設置を実現する頑丈な軽量三脚。持ち運びも簡単です。',
    image: 'https://mechasys.ca/web/image/22772-cf153c3c/WhatsInTheBox-Tripod.png',
  },
  {
    name: '堅牢タブレット',
    description: 'Layout Fieldアプリで直感的に操作。過酷な現場環境にも対応した堅牢設計です。',
    image: 'https://mechasys.ca/web/image/22775-56b4ce2e/LayoutFieldApp_FrontBack-ScreenCapture_Mechasys.png',
  },
  {
    name: 'ハードケース',
    description: 'すべての構成品を安全に収納・保護する専用ハードケース。移動もスムーズです。',
    image: 'https://mechasys.ca/web/image/22774-3f82e27c/WhatsInTheBox-Hardcase.png',
  },
]

const faqs = [
  {
    question: '購入前にXR Projectorを試せますか？',
    answer: 'はい、可能です。現場でのデモンストレーションを承っております。実際の作業環境でXR Projectorの性能をご確認いただけます。詳しくはお問い合わせください。',
  },
  {
    question: 'プロジェクターのレーザーは安全ですか？',
    answer: 'XR ProjectorはClass 3R認証レーザーを使用しており、適切に使用した場合は安全です。さらに、追加の安全機能も搭載されており、現場での安心してお使いいただけます。',
  },
  {
    question: '現場の状況が図面と異なる場合はどうすればよいですか？',
    answer: '30日間の返品ポリシーをご用意しています。お客様のニーズに合わない場合は、安心してご返品いただけます。また、現場状況に応じたサポートも行っておりますので、お気軽にご相談ください。',
  },
  {
    question: 'BIMとの互換性はありますか？',
    answer: 'はい、対応しています。.dwgおよび.dxfファイル形式に対応しており、主要なBIMソフトウェアとシームレスに連携できます。',
  },
  {
    question: '屋外でレーザーは見えますか？',
    answer: '環境条件によって視認性が異なります。明るい日差しの下では見えにくい場合がありますので、日除けの使用をお勧めします。曇天や屋内環境では良好な視認性が得られます。',
  },
  {
    question: 'キャリブレーションはどのくらいの頻度で必要ですか？',
    answer: '2,000時間の使用後、または年1回の定期キャリブレーションをお勧めします。また、強い衝撃を受けた後も再キャリブレーションをお勧めします。',
  },
]

export default function PricingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              <Link href="/company" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>会社案内</Link>
              <Link href="/pricing" className="text-sm font-medium text-[#0047bb]">価格</Link>
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.webp"
            alt="XR Projector"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0047bb]/90 to-[#003399]/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              XR Projectorのご購入
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              正確な価格はお問い合わせください。<br />
              地域によって価格が異なる場合があります。
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full px-10 font-semibold">
                価格をお問い合わせ
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              すべての購入に含まれる特典
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              XR Projectorのご購入には、充実したサポートとサービスが含まれています。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
                }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0047bb]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-[#0047bb]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the Box */}
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
              同梱内容
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              すぐに現場で活躍できる、すべてが揃っています。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boxItems.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
                }}
                className="text-center"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              よくあるご質問
            </h2>
            <p className="text-lg text-gray-600">
              お客様からよくいただくご質問にお答えします。
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.05 } },
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#0047bb] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#0047bb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              他にご質問はありますか？
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              専門スタッフが丁寧にご対応いたします。お気軽にお問い合わせください。
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0047bb] hover:bg-gray-100 rounded-full px-10 font-semibold">
                営業担当に連絡する
              </Button>
            </Link>
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
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +1 (844) 401-6461
                </li>
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
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">価格</Link></li>
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
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">著作権 ©2025 Mechasys</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
