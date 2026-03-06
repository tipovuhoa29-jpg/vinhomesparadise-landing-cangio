/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Waves, 
  Trees, 
  Building2, 
  Navigation, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Globe,
  Award,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tổng quan', href: '#overview' },
    { name: 'Vị trí', href: '#location' },
    { name: 'Tiện ích', href: '#amenities' },
    { name: 'Mặt bằng', href: '#masterplan' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-xl",
            isScrolled ? "bg-gold-600 text-white" : "bg-white text-gold-950"
          )}>
            V
          </div>
          <span className={cn(
            "font-serif font-bold text-xl tracking-tight hidden sm:block",
            isScrolled ? "text-gold-950" : "text-white"
          )}>
            VINHOMES CAN GIO
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold-500",
                isScrolled ? "text-gold-950" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className={cn(
              "px-6 py-2 rounded-full text-sm font-semibold transition-all",
              isScrolled 
                ? "bg-gold-600 text-white hover:bg-gold-700" 
                : "bg-white text-gold-950 hover:bg-gold-50"
            )}
          >
            NHẬN BÁO GIÁ
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gold-950" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gold-950" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gold-950 font-serif text-lg border-b border-gold-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gold-600 text-white text-center py-3 rounded-lg font-bold"
            >
              NHẬN BÁO GIÁ NGAY
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cangio-hero/1920/1080" 
          alt="Vinhomes Can Gio Hero" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 luxury-gradient" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-400 font-serif italic text-xl sm:text-2xl mb-4 block tracking-wide">
            Tuyệt tác nghỉ dưỡng lấn biển tầm vóc quốc tế
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
            VINHOMES <br />
            <span className="text-gold-300">GREEN PARADISE</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Khám phá thiên đường sống thượng lưu tại siêu đô thị biển 2.870 ha - 
            Biểu tượng mới của sự thịnh vượng tại Nam Sài Gòn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-gold-500 text-white rounded-full font-bold text-lg hover:bg-gold-600 transition-all shadow-lg hover:shadow-gold-500/20 flex items-center justify-center gap-2"
            >
              Tư vấn ngay <ArrowRight size={20} />
            </a>
            <a 
              href="#overview"
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Khám phá dự án
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Cuộn để khám phá</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="text-center mb-16 px-6">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("uppercase tracking-[0.4em] text-xs font-bold mb-3 block", light ? "text-gold-300" : "text-gold-600")}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={cn("text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight", light ? "text-white" : "text-gold-950")}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className={cn("h-px w-24 mx-auto mt-8 origin-center", light ? "bg-gold-400" : "bg-gold-600")}
    />
  </div>
);

const Overview = () => {
  const stats = [
    { label: 'Quy mô dự án', value: '2.870 ha' },
    { label: 'Vốn đầu tư', value: '10 tỷ USD' },
    { label: 'Đường bờ biển', value: '13 km' },
    { label: 'Mật độ cây xanh', value: '45%' },
  ];

  return (
    <section id="overview" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/overview-1/800/1000" 
                alt="Vinhomes Can Gio Overview" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl hidden md:block border-8 border-white">
              <img 
                src="https://picsum.photos/seed/overview-2/400/400" 
                alt="Vinhomes Can Gio Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 font-serif italic text-xl mb-4 block">Tầm nhìn chiến lược</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gold-950 mb-8 leading-tight">
              Siêu Đô Thị Biển <br /> Đẳng Cấp Thế Giới
            </h2>
            <p className="text-gold-900/70 text-lg mb-8 leading-relaxed">
              Vinhomes Green Paradise Cần Giờ là dự án lấn biển quy mô lớn nhất Việt Nam, 
              được định vị trở thành trung tâm du lịch, nghỉ dưỡng và kinh tế biển hàng đầu khu vực. 
              Với sự kết hợp hoàn hảo giữa thiên nhiên hoang sơ và tiện ích hiện đại, 
              đây chính là nơi khởi đầu cho một phong cách sống thượng lưu hoàn toàn mới.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-serif font-bold text-gold-600 mb-1">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest text-gold-900/50 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-3 text-gold-600 font-bold uppercase tracking-widest text-sm">
              Xem chi tiết dự án <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Highlights = () => {
  const items = [
    {
      icon: <Waves className="text-gold-500" size={32} />,
      title: "Vị thế độc tôn",
      desc: "Dự án lấn biển duy nhất tại TP.HCM với 13km đường bờ biển tuyệt đẹp."
    },
    {
      icon: <Trees className="text-gold-500" size={32} />,
      title: "Lá phổi xanh",
      desc: "Tận hưởng không khí trong lành từ khu dự trữ sinh quyển rừng ngập mặn Cần Giờ."
    },
    {
      icon: <Building2 className="text-gold-500" size={32} />,
      title: "Tiện ích 5 sao",
      desc: "Hệ sinh thái Vingroup: Vinmec, Vinschool, Vincom, VinWonders ngay ngưỡng cửa."
    },
    {
      icon: <Globe className="text-gold-500" size={32} />,
      title: "Kết nối toàn cầu",
      desc: "Cầu Cần Giờ và cảng trung chuyển quốc tế thúc đẩy giá trị bất động sản bền vững."
    }
  ];

  return (
    <section className="py-24 bg-gold-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Giá trị cốt lõi" title="Tại sao nên chọn Vinhomes Cần Giờ?" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gold-200 group"
            >
              <div className="mb-6 p-4 bg-gold-50 rounded-xl w-fit group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(item.icon as React.ReactElement, { 
                  className: "group-hover:text-white transition-colors duration-500" 
                })}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gold-950 mb-4">{item.title}</h3>
              <p className="text-gold-900/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="Vị trí chiến lược" title="Tâm điểm kết nối tương lai" />
            <div className="space-y-8 mt-[-2rem]">
              <p className="text-gold-900/70 text-lg leading-relaxed">
                Tọa lạc tại xã Long Hòa và thị trấn Cần Thạnh, Vinhomes Green Paradise sở hữu vị trí 
                "vàng" khi là cửa ngõ giao thương đường thủy và đường bộ của TP.HCM ra biển Đông.
              </p>
              
              <div className="space-y-6">
                {[
                  { time: '45 Phút', label: 'Đến trung tâm Quận 1 qua cầu Cần Giờ' },
                  { time: '30 Phút', label: 'Đến khu đô thị Phú Mỹ Hưng' },
                  { time: '20 Phút', label: 'Đến sân bay quốc tế Long Thành (tương lai)' },
                  { time: '05 Phút', label: 'Đến khu du lịch sinh thái rừng ngập mặn' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-6 p-4 rounded-xl hover:bg-gold-50 transition-colors border-l-4 border-gold-500">
                    <div className="text-2xl font-serif font-bold text-gold-600 min-w-[100px]">{item.time}</div>
                    <div className="text-gold-950 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]"
          >
            <img 
              src="https://picsum.photos/seed/location-map/1000/1000" 
              alt="Vinhomes Can Gio Location Map" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gold-900/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-75" />
                <div className="relative bg-gold-600 text-white p-4 rounded-full shadow-lg">
                  <MapPin size={32} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Amenities = () => {
  const amenityList = [
    { title: 'Sân Golf 36 Lỗ', img: 'https://picsum.photos/seed/golf/800/600', tag: 'Thể thao' },
    { title: 'Bến Du Thuyền', img: 'https://picsum.photos/seed/marina/800/600', tag: 'Thượng lưu' },
    { title: 'Công Viên VinWonders', img: 'https://picsum.photos/seed/park/800/600', tag: 'Giải trí' },
    { title: 'Bãi Biển Nhân Tạo', img: 'https://picsum.photos/seed/beach/800/600', tag: 'Nghỉ dưỡng' },
    { title: 'Trung Tâm Thương Mại', img: 'https://picsum.photos/seed/mall/800/600', tag: 'Mua sắm' },
    { title: 'Bệnh Viện Vinmec', img: 'https://picsum.photos/seed/hospital/800/600', tag: 'Sức khỏe' },
  ];

  return (
    <section id="amenities" className="py-24 bg-gold-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Tiện ích đặc quyền" title="Thiên đường nghỉ dưỡng đa sắc thái" light />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityList.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.tag}</span>
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <div className="h-1 w-0 bg-gold-500 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MasterPlan = () => {
  return (
    <section id="masterplan" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Quy hoạch tổng thể" title="Phân khu chức năng đa dạng" />
        
        <div className="grid lg:grid-cols-5 gap-4 mb-16">
          {[
            { name: 'Phân khu A', desc: 'Trung tâm hội nghị, khách sạn cao cấp' },
            { name: 'Phân khu B', desc: 'Khu nhà ở, thương mại dịch vụ' },
            { name: 'Phân khu C', desc: 'Khu đô thị cảng, công nghiệp nhẹ' },
            { name: 'Phân khu D', desc: 'Khu nghỉ dưỡng, biệt thự biển' },
            { name: 'Phân khu E', desc: 'Công viên cây xanh, mặt nước' },
          ].map((zone, idx) => (
            <div key={zone.name} className="bg-gold-50 p-6 rounded-xl border border-gold-200 text-center hover:bg-gold-500 hover:text-white transition-all cursor-default group">
              <div className="text-xl font-serif font-bold mb-2">{zone.name}</div>
              <p className="text-xs text-gold-900/60 group-hover:text-white/80">{zone.desc}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gold-100"
        >
          <img 
            src="https://picsum.photos/seed/masterplan/1200/600" 
            alt="Vinhomes Can Gio Master Plan" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', interest: 'Biệt thự' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // URL bạn vừa cung cấp
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzMwPV1Y31CEX6FgyZBTtsrPqubR_Q-AEeYRKBK9RVuAq2MpYWpYMW4T40yr8lsl35x/exec";
    
    try {
      // Sử dụng URLSearchParams để gửi dữ liệu dưới dạng application/x-www-form-urlencoded
      // Điều này giúp Apps Script nhận dữ liệu qua e.parameter dễ dàng hơn
      const params = new URLSearchParams();
      params.append('name', formState.name);
      params.append('phone', formState.phone);
      params.append('email', formState.email);
      params.append('interest', formState.interest);
      params.append('timestamp', new Date().toLocaleString('vi-VN'));

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gold-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gold-950 mb-6 leading-tight">
              Đăng Ký Nhận <br /> Thông Tin Ưu Đãi
            </h2>
            <p className="text-gold-900/70 text-lg mb-10 leading-relaxed">
              Hãy để lại thông tin để nhận bảng giá chi tiết, chính sách bán hàng 
              và tham quan thực tế dự án Vinhomes Green Paradise Cần Giờ.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-200 flex items-center justify-center text-gold-600">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gold-900/50 font-bold uppercase tracking-widest">Hotline 24/7</div>
                  <div className="text-xl font-bold text-gold-950">0356 156 688</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-200 flex items-center justify-center text-gold-600">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gold-900/50 font-bold uppercase tracking-widest">Email</div>
                  <div className="text-xl font-bold text-gold-950">hungnpv@gmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-gold-200"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gold-950 mb-2">Gửi thành công!</h3>
                <p className="text-gold-900/60">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gold-950 uppercase tracking-widest mb-2">Họ và tên</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    placeholder="Nguyễn Văn A"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gold-950 uppercase tracking-widest mb-2">Số điện thoại</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      placeholder="090x xxx xxx"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gold-950 uppercase tracking-widest mb-2">Sản phẩm quan tâm</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all bg-white"
                      value={formState.interest}
                      onChange={(e) => setFormState({...formState, interest: e.target.value})}
                    >
                      <option>Biệt thự biển</option>
                      <option>Shophouse</option>
                      <option>Căn hộ nghỉ dưỡng</option>
                      <option>Condotel</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gold-950 uppercase tracking-widest mb-2">Email (không bắt buộc)</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    placeholder="email@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gold-600 text-white rounded-xl font-bold text-lg hover:bg-gold-700 transition-all shadow-lg shadow-gold-600/20"
                >
                  ĐĂNG KÝ NGAY
                </button>
                <p className="text-center text-xs text-gold-900/40 italic">
                  * Thông tin của quý khách được bảo mật tuyệt đối.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gold-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center font-serif font-bold text-xl text-white">
                V
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">
                VINHOMES CAN GIO
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-6">
              Siêu đô thị lấn biển quy mô 2.870 ha tại Cần Giờ, TP.HCM. 
              Biểu tượng mới của du lịch và nghỉ dưỡng Việt Nam.
            </p>
            <div className="flex gap-4">
              {['facebook', 'youtube', 'instagram'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-600 transition-colors cursor-pointer">
                  <Globe size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-gold-400">Dự án</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#overview" className="hover:text-gold-400 transition-colors">Tổng quan</a></li>
              <li><a href="#location" className="hover:text-gold-400 transition-colors">Vị trí dự án</a></li>
              <li><a href="#amenities" className="hover:text-gold-400 transition-colors">Tiện ích đặc quyền</a></li>
              <li><a href="#masterplan" className="hover:text-gold-400 transition-colors">Mặt bằng phân khu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-gold-400">Pháp lý & Tài liệu</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Quy hoạch 1/500</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Chính sách bán hàng</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Tiến độ thi công</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Brochure dự án</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-gold-400">Văn phòng đại diện</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-gold-500" />
                <span>Số 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP.HCM</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-gold-500" />
                <span>0356 156 688</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-gold-500" />
                <span>hungnpv@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>© 2024 Vinhomes Green Paradise Cần Giờ. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-200 selection:text-gold-900">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Highlights />
        <Location />
        <Amenities />
        <MasterPlan />
        <Contact />
      </main>
      <Footer />

      {/* Floating Action Button */}
      <a 
        href="tel:0356156688"
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gold-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-gold-700 transition-all hover:scale-110 group"
      >
        <Phone size={28} className="group-hover:animate-shake" />
        <span className="absolute right-full mr-4 bg-white text-gold-950 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Gọi ngay: 0356 156 688
        </span>
      </a>
    </div>
  );
}
