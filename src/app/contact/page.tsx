'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Play,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
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
              <Link href="/product" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>製品紹介</Link>
              <Link href="/industries" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>業界</Link>
              <Link href="/company" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0047bb]' : 'text-white/90 hover:text-white'}`}>会社案内</Link>
              <Link href="/contact" className="text-sm font-medium text-[#0047bb]">お問い合わせ</Link>
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

      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/contact-hero.png" 
            alt="XR Projector in action" 
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
              お問い合わせ
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              私たちの技術に関するご質問は、以下のフォームにご記入ください。<br />
              XR Projectorがどのように現場を変革できるか、担当者より折り返しご連絡いたします。
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
                <CardContent className="p-8 lg:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        メッセージありがとうございます！
                      </h3>
                      <p className="text-gray-600 mb-6">
                        担当者より折り返しご連絡いたします。
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            company: '',
                            name: '',
                            email: '',
                            phone: '',
                            message: '',
                          })
                          setAgreed(false)
                        }}
                        variant="outline"
                        className="rounded-full"
                      >
                        新しいお問い合わせ
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <p className="text-gray-600 mb-6">
                        XR Projectorに関するご質問や、活用事例をご記入ください。
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">会社名</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
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
                        <Label htmlFor="message">メッセージ *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="rounded-lg"
                          placeholder="XR Projectorに関するご質問や、活用予定をご記入ください。"
                        />
                      </div>
                      
                      {/* Privacy Notice */}
                      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                        <p>
                          Mechasysはお客様のプライバシーを重視し、第三者とデータを共有することはありません。
                          ご提供いただいた情報は、製品アップデート、イベント詳細、その他のお知らせの送信に使用されます。
                          これらの通信はいつでも配信停止できます。詳細は
                          <a href="#" className="text-[#0047bb] hover:underline ml-1">プライバシーポリシー</a>
                          をご参照ください。
                        </p>
                      </div>

                      {/* Agreement Checkbox */}
                      <div className="flex items-start gap-3">
                        <Checkbox 
                          id="agreed" 
                          checked={agreed} 
                          onCheckedChange={(checked) => setAgreed(checked as boolean)}
                        />
                        <Label htmlFor="agreed" className="text-sm text-gray-600 cursor-pointer">
                          Mechasysからの通信を受け取ることに同意します
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={!agreed}
                        className="w-full bg-[#0047bb] hover:bg-[#003399] rounded-full disabled:opacity-50"
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
              
              {/* Company Info */}
              <div className="p-6 bg-gray-50 rounded-2xl mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/images/logo-mechasys.png" 
                    alt="Mechasys" 
                    className="h-10 w-auto"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#0047bb] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">所在地</p>
                      <p className="text-gray-600">160 Saint Viateur St. East, Suite 702, Montreal, Quebec, H2T 1A8, Canada</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#0047bb]" />
                    <div>
                      <p className="font-medium text-gray-900">電話番号</p>
                      <a href="tel:+18444016461" className="text-gray-600 hover:text-[#0047bb]">
                        +1 (844) 401-6461
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#0047bb]" />
                    <div>
                      <p className="font-medium text-gray-900">メール</p>
                      <a href="mailto:info@mechasys.ca" className="text-gray-600 hover:text-[#0047bb]">
                        info@mechasys.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-6 bg-gray-50 rounded-2xl mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ソーシャルメディア</h3>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-[#0047bb]" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20 transition-colors">
                    <Twitter className="h-5 w-5 text-[#0047bb]" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20 transition-colors">
                    <Youtube className="h-5 w-5 text-[#0047bb]" />
                  </a>
                </div>
              </div>

              {/* Watch Video */}
              <div className="p-6 bg-[#0047bb] rounded-2xl text-white">
                <h3 className="text-lg font-bold mb-4">XR Projectorのデモを見る</h3>
                <p className="text-white/80 mb-6">
                  実際の現場でどのように動作するかをご覧ください
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=k3x6cFLr0T8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0047bb] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <Play className="h-5 w-5" />
                  ビデオを見る
                </a>
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
              <img src="/images/logo-mechasys.png" alt="Mechasys" className="h-10 w-auto mb-6 brightness-0 invert" />
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
