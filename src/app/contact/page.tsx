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
  Linkedin,
  Globe,
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const countries = [
  '日本', 'アメリカ合衆国', 'カナダ', 'イギリス', 'ドイツ', 'フランス', 
  'オーストラリア', '中国', '韓国', 'シンガポール', '台湾', '香港', 
  'インド', 'ブラジル', 'メキシコ', 'その他'
]

const employeeOptions = [
  '24名以下', '25 - 49名', '50 - 99名', '100 - 249名', 
  '250 - 499名', '500 - 999名', '1000 - 4999名', '5000名以上'
]

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo-mechasys.png" alt="Mechasys" className="h-8 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/product" className="text-sm font-medium text-gray-700 hover:text-[#0047bb]">製品紹介</Link>
              <Link href="/industries" className="text-sm font-medium text-gray-700 hover:text-[#0047bb]">業界</Link>
              <Link href="/company" className="text-sm font-medium text-gray-700 hover:text-[#0047bb]">会社案内</Link>
              <Link href="/contact" className="text-sm font-medium text-[#0047bb]">お問い合わせ</Link>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <Button size="sm" className="bg-[#0047bb] hover:bg-[#003399] rounded">お問い合わせ</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - mechasys.ca style */}
      <section className="pt-24 pb-8 bg-gradient-to-r from-[#0047bb] to-[#003d9f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              お問い合わせ
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - mechasys.ca style */}
      <section className="py-12 bg-[#F0F4F8] relative">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230047bb' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-7 gap-8">
            {/* Form Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせありがとうございます！</h3>
                      <p className="text-gray-600">担当者より折り返しご連絡いたします。</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <p className="text-gray-700 mb-6">
                        XR Projectorに関するご質問は、以下のフォームにご記入ください。担当者が折り返しご連絡し、Projected Realityの力をお客様の現場にお届けいたします。
                      </p>

                      {/* First Name / Last Name */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">名 <span className="text-red-500">*</span></Label>
                          <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">姓 <span className="text-red-500">*</span></Label>
                          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1" />
                        </div>
                      </div>

                      {/* Email / Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">メール <span className="text-red-500">*</span></Label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="phone">電話番号</Label>
                          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-1" />
                        </div>
                      </div>

                      {/* Company / Website */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">会社名 <span className="text-red-500">*</span></Label>
                          <Input id="company" name="company" value={formData.company} onChange={handleChange} required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="website">ウェブサイト <span className="text-red-500">*</span></Label>
                          <Input id="website" name="website" type="url" value={formData.website} onChange={handleChange} required className="mt-1" placeholder="https://" />
                        </div>
                      </div>

                      {/* Job Position / Employees */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="jobPosition">役職 <span className="text-red-500">*</span></Label>
                          <Input id="jobPosition" name="jobPosition" value={formData.jobPosition} onChange={handleChange} required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="employees">従業員数 <span className="text-red-500">*</span></Label>
                          <select id="employees" name="employees" value={formData.employees} onChange={handleChange} required className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0047bb]">
                            <option value="">選択してください</option>
                            {employeeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Country */}
                      <div>
                        <Label htmlFor="country">国 <span className="text-red-500">*</span></Label>
                        <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0047bb]">
                          <option value="">選択してください</option>
                          {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">メッセージ</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="mt-1" />
                      </div>

                      {/* Agreement */}
                      <div className="flex items-start gap-3 py-4">
                        <Checkbox id="agreed" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                        <Label htmlFor="agreed" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                          Mechasysからの製品アップデート、イベント情報、その他のお知らせを受け取ることに同意します。
                        </Label>
                      </div>

                      <Button type="submit" size="lg" disabled={!agreed || isLoading} className="w-full bg-[#0047bb] hover:bg-[#003399] rounded disabled:opacity-50">
                        {isLoading ? '送信中...' : '送信する'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="lg:col-span-3 space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <img src="/images/logo-mechasys.png" alt="Mechasys" className="h-8 w-auto" />
                    <span className="font-bold text-gray-900">Mechasys</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#0047bb] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">所在地</p>
                        <p className="text-gray-600 text-sm">160 Saint Viateur St. East, Suite 702, Montreal, Quebec, H2T 1A8, Canada</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#0047bb]" />
                      <div>
                        <p className="font-medium text-gray-900">電話番号</p>
                        <a href="tel:+18444016461" className="text-gray-600 hover:text-[#0047bb]">+1 (844) 401-6461</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#0047bb]" />
                      <div>
                        <p className="font-medium text-gray-900">メール</p>
                        <a href="mailto:info@mechasys.ca" className="text-gray-600 hover:text-[#0047bb]">info@mechasys.ca</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-[#0047bb]" />
                      <div>
                        <p className="font-medium text-gray-900">ウェブサイト</p>
                        <a href="https://mechasys.ca" target="_blank" className="text-gray-600 hover:text-[#0047bb]">mechasys.ca</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">ソーシャルメディア</h3>
                  <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/company/mechasys" target="_blank" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20">
                      <Linkedin className="h-5 w-5 text-[#0047bb]" />
                    </a>
                    <a href="https://twitter.com/mechasys" target="_blank" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20">
                      <svg className="h-5 w-5 text-[#0047bb]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.youtube.com/@mechasys" target="_blank" className="w-10 h-10 bg-[#0047bb]/10 rounded-full flex items-center justify-center hover:bg-[#0047bb]/20">
                      <svg className="h-5 w-5 text-[#0047bb]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/images/company-montreal.webp" alt="Mechasys Montreal Office" className="w-full h-40 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/logo-mechasys.png" alt="Mechasys" className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm">+1 (844) 401-6461</p>
              <p className="text-gray-400 text-sm">160 Saint Viateur St. East, Suite 702, Montreal, Quebec, H2T 1A8</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">会社情報</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-white">ホーム</Link></li>
                <li><Link href="/product" className="text-gray-400 hover:text-white">製品紹介</Link></li>
                <li><Link href="/industries" className="text-gray-400 hover:text-white">業界</Link></li>
                <li><Link href="/company" className="text-gray-400 hover:text-white">会社案内</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">リソース</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover:text-white">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">法的情報</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">プライバシーポリシー</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            著作権 ©2025 Mechasys
          </div>
        </div>
      </footer>
    </div>
  )
}
