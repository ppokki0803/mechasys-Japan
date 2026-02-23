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
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Play,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  Building,
  Users,
} from 'lucide-react'
import Link from 'next/link'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const countries = [
  { value: 'JP', label: '日本' },
  { value: 'US', label: 'アメリカ合衆国' },
  { value: 'CA', label: 'カナダ' },
  { value: 'GB', label: 'イギリス' },
  { value: 'DE', label: 'ドイツ' },
  { value: 'FR', label: 'フランス' },
  { value: 'AU', label: 'オーストラリア' },
  { value: 'CN', label: '中国' },
  { value: 'KR', label: '韓国' },
  { value: 'SG', label: 'シンガポール' },
  { value: 'TW', label: '台湾' },
  { value: 'HK', label: '香港' },
  { value: 'OTHER', label: 'その他' },
]

const employeeOptions = [
  { value: '1-24', label: '1 - 24名' },
  { value: '25-49', label: '25 - 49名' },
  { value: '50-99', label: '50 - 99名' },
  { value: '100-249', label: '100 - 249名' },
  { value: '250-499', label: '250 - 499名' },
  { value: '500-999', label: '500 - 999名' },
  { value: '1000-4999', label: '1000 - 4999名' },
  { value: '5000+', label: '5000名以上' },
]

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    jobPosition: '',
    employees: '',
    country: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/contact-hero.png" 
            alt="XR Projector" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0047bb]/95 to-[#003399]/90" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
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

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 lg:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        お問い合わせありがとうございます！
                      </h3>
                      <p className="text-gray-600 mb-6">
                        担当者より折り返しご連絡いたします。
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            company: '',
                            website: '',
                            jobPosition: '',
                            employees: '',
                            country: '',
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
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <p className="text-gray-600 mb-6">
                        <span className="text-red-500">*</span> は必須項目です
                      </p>
                      
                      {/* Name Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">名 <span className="text-red-500">*</span></Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                            placeholder="例: 太郎"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">姓 <span className="text-red-500">*</span></Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                            placeholder="例: 山田"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">メールアドレス <span className="text-red-500">*</span></Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                            placeholder="example@company.com"
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
                            placeholder="+81-XX-XXXX-XXXX"
                          />
                        </div>
                      </div>

                      {/* Company & Website */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">会社名 <span className="text-red-500">*</span></Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                            placeholder="株式会社○○"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">ウェブサイト <span className="text-red-500">*</span></Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                            placeholder="https://www.example.com"
                          />
                        </div>
                      </div>

                      {/* Job Position & Employees */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="jobPosition">役職 <span className="text-red-500">*</span></Label>
                          <Input
                            id="jobPosition"
                            name="jobPosition"
                            value={formData.jobPosition}
                            onChange={handleChange}
                            required
                            className="rounded-lg"
                            placeholder="例: プロジェクトマネージャー"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employees">従業員数 <span className="text-red-500">*</span></Label>
                          <select
                            id="employees"
                            name="employees"
                            value={formData.employees}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0047bb] focus:border-transparent"
                          >
                            <option value="">選択してください</option>
                            {employeeOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Country */}
                      <div className="space-y-2">
                        <Label htmlFor="country">国 <span className="text-red-500">*</span></Label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0047bb] focus:border-transparent"
                        >
                          <option value="">選択してください</option>
                          {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">メッセージ</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
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

            {/* Contact Info - Takes 2 columns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                連絡先情報
              </h2>
              
              {/* Company Info Card */}
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
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
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#0047bb]" />
                    <div>
                      <p className="font-medium text-gray-900">ウェブサイト</p>
                      <a href="https://mechasys.ca" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0047bb]">
                        mechasys.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">ソーシャルメディア</h3>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/mechasys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-[#0047bb]" />
                  </a>
                  <a href="https://twitter.com/mechasys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20 transition-colors">
                    <Twitter className="h-5 w-5 text-[#0047bb]" />
                  </a>
                  <a href="https://www.youtube.com/@mechasys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20 transition-colors">
                    <Youtube className="h-5 w-5 text-[#0047bb]" />
                  </a>
                </div>
              </div>

              {/* Demo Video Card */}
              <div className="p-6 bg-gradient-to-br from-[#0047bb] to-[#003399] rounded-2xl text-white">
                <h3 className="text-lg font-bold mb-3">XR Projectorのデモを見る</h3>
                <p className="text-white/80 mb-5 text-sm">
                  実際の現場でどのように動作するかをご覧ください
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=k3x6cFLr0T8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0047bb] px-5 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
                >
                  <Play className="h-4 w-4" />
                  ビデオを見る
                </a>
              </div>

              {/* Office Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/company-montreal.webp" 
                  alt="Mechasys Office" 
                  className="w-full h-48 object-cover"
                />
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
