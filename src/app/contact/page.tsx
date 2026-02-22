'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react'
import Link from 'next/link'

// Office locations
const offices = [
  {
    region: '本社（カナダ）',
    address: '160 Saint Viateur St. East, Suite 702, Montreal, Quebec, H2T 1A8',
    phone: '+1 (844) 401-6461',
    email: 'info@mechasys.ca',
  },
  {
    region: '日本オフィス',
    address: '東京都中央区（詳細はお問い合わせください）',
    phone: '+81 (0)XX-XXXX-XXXX',
    email: 'japan@mechasys.ca',
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
                href="/"
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'
                }`}
              >
                ホーム
              </Link>
              <a
                href="/contact"
                className="text-sm font-medium text-[#0047bb]"
              >
                お問い合わせ
              </a>
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              XR Projectorについてのご質問、デモのご依頼、
              見積もりなど、お気軽にお問い合わせください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        送信完了
                      </h3>
                      <p className="text-gray-600 mb-6">
                        お問い合わせありがとうございます。<br />
                        担当者より2営業日以内にご連絡いたします。
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            company: '',
                            name: '',
                            email: '',
                            phone: '',
                            subject: '',
                            message: '',
                          })
                        }}
                        variant="outline"
                        className="rounded-full"
                      >
                        新しいお問い合わせ
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">会社名 *</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">お名前 *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">メールアドレス *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">電話番号</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">お問い合わせ内容 *</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        >
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="demo">デモのご依頼</SelectItem>
                            <SelectItem value="quote">見積もりのご依頼</SelectItem>
                            <SelectItem value="technical">技術的なご質問</SelectItem>
                            <SelectItem value="partnership">パートナーシップのご相談</SelectItem>
                            <SelectItem value="other">その他</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">メッセージ *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="rounded-lg"
                          placeholder="ご質問やご要望をご記入ください"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#0047bb] hover:bg-[#003399] rounded-full"
                      >
                        送信する
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                連絡先情報
              </h2>
              <div className="space-y-8">
                {offices.map((office) => (
                  <div key={office.region} className="p-6 bg-gray-50 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {office.region}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#0047bb] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-[#0047bb]" />
                        <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-[#0047bb]">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-[#0047bb]" />
                        <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-[#0047bb]">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-[#0047bb]/5 rounded-2xl border border-[#0047bb]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-[#0047bb]" />
                  <h3 className="text-lg font-bold text-gray-900">営業時間</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>月曜日 - 金曜日: 9:00 - 18:00 (JST)</p>
                  <p>土曜日・日曜日・祝日: 休業</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  クイックリンク
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/product"
                    className="flex items-center gap-2 text-[#0047bb] hover:underline"
                  >
                    <ChevronRight className="h-4 w-4" />
                    製品について詳しく見る
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=k3x6cFLr0T8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#0047bb] hover:underline"
                  >
                    <ChevronRight className="h-4 w-4" />
                    デモビデオを見る
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
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
                  <Phone className="h-4 w-4" />
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
