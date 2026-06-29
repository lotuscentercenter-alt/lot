import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, MessageCircle, Send, Moon, Sun, MapPin, Phone, ArrowLeft, ArrowRight, Navigation } from "lucide-react";
import { SiVk } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const logoPath = "/logo.png";
const logoHandsPath = "/logo-hands.jpg";

const massageImg = "/service-massage.png";
const meditationImg = "/service-meditation.png";
const reikiImg = "/service-reiki.png";
const buildingImg = "/building.png";

const MAPS_LINK = "https://www.google.com/maps/@56.9040377,59.9561005,3a,75y,196.13h,85.99t/data=!3m7!1e1!3m5!1sFCpxmAYDmCdOzoGaueZcDA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D4.011904295066373%26panoid%3DFCpxmAYDmCdOzoGaueZcDA%26yaw%3D196.13108984826317!7i13312!8i6656!5m2!1e1!1e4";

export default function Home() {
  const [bookingService, setBookingService] = useState<string | null>(null);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const openBooking = (service: string) => setBookingService(service);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground overflow-x-hidden transition-colors duration-500">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoPath} alt="Лотос логотип" className="h-10 w-10 object-contain rounded-lg" />
            <span className="font-serif text-2xl font-bold tracking-wider text-foreground">Лотос</span>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">О нас</a>
            <a href="#contacts" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Контакты</a>
            <a
              href="https://vk.com/club222202742"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-vk-page"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-[#4a76a8] dark:hover:text-[#5b8cc8] transition-colors"
            >
              <SiVk className="h-4 w-4" />
              ВКонтакте
            </a>
            <button
              data-testid="theme-toggle"
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full border border-border/50 hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button
              data-testid="button-navbar-book"
              onClick={() => openBooking("любую услугу")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Запись
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setDark(!dark)} className="p-2 rounded-full border border-border/50 text-foreground/70">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button onClick={() => openBooking("любую услугу")} size="sm" className="bg-primary text-primary-foreground rounded-full">
              Запись
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[92vh]">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(139,92,246,0.25)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.20)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_80%,rgba(245,158,11,0.15)_0%,transparent_50%)]" />
          {/* SVG mandala-like decorative rings */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rings" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
                <circle cx="250" cy="250" r="200" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="250" cy="250" r="150" fill="none" stroke="white" strokeWidth="0.8"/>
                <circle cx="250" cy="250" r="100" fill="none" stroke="white" strokeWidth="0.6"/>
                <circle cx="250" cy="250" r="50" fill="none" stroke="white" strokeWidth="0.4"/>
                <line x1="50" y1="250" x2="450" y2="250" stroke="white" strokeWidth="0.4"/>
                <line x1="250" y1="50" x2="250" y2="450" stroke="white" strokeWidth="0.4"/>
                <line x1="109" y1="109" x2="391" y2="391" stroke="white" strokeWidth="0.3"/>
                <line x1="391" y1="109" x2="109" y2="391" stroke="white" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rings)"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-pink-500/20 to-amber-400/20 blur-3xl rounded-full" />
            <img
              src={logoHandsPath}
              alt="Центр Лотос"
              className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border-2 border-primary/30 shadow-2xl relative z-10"
              style={{ boxShadow: "0 0 60px rgba(139,92,246,0.5), 0 0 120px rgba(139,92,246,0.2)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/30 text-primary text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Центр гармоничного развития
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            Лотос
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-amber-400">
              Первоуральск
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl font-light leading-relaxed"
          >
            Место, где восстанавливается энергия, пробуждается интуиция и обретается глубокая связь с собой.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              data-testid="button-hero-book"
              onClick={() => openBooking("любую услугу")}
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-semibold transition-all hover:scale-105 bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white border-0"
              style={{ boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
            >
              Записаться
            </Button>
            <Button
              data-testid="button-hero-services"
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 py-6 text-lg border-primary/40 text-primary hover:bg-primary/10 hover:border-primary"
            >
              <a href="#services">Наши услуги</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Что мы предлагаем</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Наши Услуги</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Bioenergy Massage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                data-testid="card-service-massage"
                className="h-full border-border/40 overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-card"
                style={{ boxShadow: "0 4px 30px rgba(6,182,212,0.12)" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={massageImg} alt="Биоэнергетический массаж" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                    1 час
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />
                <CardContent className="p-7 flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    Биоэнергетический массаж
                  </h3>
                  <p className="text-foreground/65 leading-relaxed font-light mb-5 text-sm flex-grow">
                    Восстановление энергосистемы, увеличение жизненной силы в теле, глубокое расслабление и пробуждение интуиции.
                  </p>
                  <div className="mb-5 p-4 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-3xl font-bold text-amber-500 dark:text-amber-400 mb-1">3 000 ₽</div>
                    <div className="text-sm text-foreground/50 flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      2 500 ₽ от 3 сеансов
                    </div>
                  </div>
                  <Button
                    data-testid="button-book-massage"
                    onClick={() => openBooking("биоэнергетический массаж")}
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white border-0 rounded-xl"
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service 2: Meditations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card
                data-testid="card-service-meditation"
                className="h-full border-border/40 overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-card"
                style={{ boxShadow: "0 4px 30px rgba(236,72,153,0.12)" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={meditationImg} alt="Медитации" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-pink-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                    Индив. и группа
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400" />
                <CardContent className="p-7 flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    Медитации
                  </h3>
                  <p className="text-foreground/65 leading-relaxed font-light mb-5 text-sm flex-grow">
                    Погружение в тишину ума, снятие стресса и обретение внутреннего баланса через направляемые медитации.
                  </p>
                  <div className="space-y-2.5 mb-5">
                    <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                      <div className="text-xs text-foreground/50 mb-0.5">Индивидуально (1 час)</div>
                      <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">1 800 ₽</div>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                      <div className="text-xs text-foreground/50 mb-0.5">В группе (от 2 человек)</div>
                      <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">500 ₽ <span className="text-sm font-normal text-foreground/50">/ чел.</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      data-testid="button-book-meditation-solo"
                      onClick={() => openBooking("индивидуальную медитацию")}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-400 hover:to-fuchsia-400 text-white border-0 rounded-xl text-sm"
                    >
                      Индив.
                    </Button>
                    <Button
                      data-testid="button-book-meditation-group"
                      onClick={() => openBooking("групповую медитацию")}
                      className="flex-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white border-0 rounded-xl text-sm"
                    >
                      В группе
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service 3: Reiki */}
            <ReikiCard openBooking={openBooking} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">О нас</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Философия Света</h2>
              <div className="space-y-5 text-foreground/70 font-light leading-relaxed">
                <p>
                  Мы верим, что истинное исцеление начинается изнутри. «Лотос» — это сакральное пространство, созданное для того, чтобы вы могли услышать шепот своей души в тишине.
                </p>
                <p>
                  Каждая наша практика направлена на пробуждение вашей природной силы. Мы помогаем очистить энергосистему от блоков, восстановить естественный ток жизненной энергии и открыть доступ к интуиции.
                </p>
                <p className="text-foreground font-medium italic border-l-2 border-primary pl-4">
                  Позвольте себе расцвести, подобно лотосу, поднимаясь из глубины к чистому свету.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: "✦", label: "Биоэнергетика", color: "from-cyan-400 to-teal-400" },
                { icon: "◈", label: "Медитации", color: "from-pink-400 to-fuchsia-400" },
                { icon: "☯", label: "Рэйки", color: "from-amber-400 to-orange-400" },
                { icon: "♾", label: "Гармония", color: "from-violet-400 to-purple-400" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-card border border-border/40 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Find Us Section */}
      <section id="how-to-find" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Как нас найти</p>
            <h2 className="text-4xl font-serif font-bold text-foreground">Как добраться</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl group">
                <img
                  src={buildingImg}
                  alt="Здание Лотос центр, пр.Ильича 24"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-serif text-xl font-bold mb-1">Пр. Ильича 24</div>
                  <div className="text-white/70 text-sm">Подвальное помещение — вход со двора</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4"
            >
              <div className="p-5 rounded-2xl bg-card border border-border/40 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Адрес</div>
                    <div className="text-foreground/70 text-sm leading-relaxed">
                      г. Первоуральск,<br />
                      пр. Ильича, д. 24<br />
                      <span className="text-primary font-medium">Подвальное помещение</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border/40 text-sm text-foreground/70 leading-relaxed">
                <p className="font-medium text-foreground mb-2">Ориентир</p>
                <p>Пятиэтажный жилой дом по пр. Ильича, д. 24. Войдите во двор — мы в подвальном помещении, вход со двора. Ищите вывеску «Лотос центр».</p>
              </div>

              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-google-maps"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white font-semibold transition-all hover:scale-[1.02]"
                style={{ boxShadow: "0 4px 20px rgba(139,92,246,0.4)" }}
              >
                <Navigation className="h-5 w-5" />
                Открыть в Google Картах
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Связаться с нами</p>
            <h2 className="text-4xl font-serif font-bold text-foreground">Контакты</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <motion.a
              href="tel:+79501953382"
              data-testid="link-phone"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white shadow-lg shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-foreground/50 mb-1 uppercase tracking-wide">Телефон</div>
                <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">+7 (950) 195-33-82</div>
              </div>
            </motion.a>

            <motion.div
              data-testid="text-address"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/40 hover:border-pink-400/40 hover:-translate-y-1 transition-all group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-foreground/50 mb-1 uppercase tracking-wide">Адрес</div>
                <div className="text-xl font-bold text-foreground group-hover:text-pink-500 transition-colors">Пр. Ильича 24</div>
                <div className="text-sm text-foreground/50">Первоуральск</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-pink-500/10 to-amber-400/10 border border-primary/20"
          >
            <p className="text-foreground/70 mb-5 font-light text-center">Напишите нам удобным способом</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://web.max.ru/89225050"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-max-contacts"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                МАХ
              </a>
              <a
                href="https://t.me/natalia777777777777777777"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-tg-contacts"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2AABEE] text-white text-sm font-medium hover:bg-[#229ED9] transition-colors"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
              <a
                href="https://vk.com/im/convo/147222622?tab=all"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-vk-record"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4a76a8] text-white text-sm font-medium hover:bg-[#3d6591] transition-colors"
              >
                <SiVk className="h-4 w-4" />
                ВКонтакте
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-10 px-6 mt-auto bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/50 text-sm">
          <div className="flex items-center gap-3">
            <img src={logoPath} alt="Лотос логотип" className="h-8 w-8 object-contain opacity-70" />
            <div>
              <div className="font-serif text-base text-foreground/80 font-semibold">Лотос</div>
              <div className="text-xs">Центр гармоничного развития</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Пр. Ильича 24, Первоуральск
            </div>
            <a href="tel:+79501953382" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="h-3 w-3" />
              +7 (950) 195-33-82
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://t.me/natalia777777777777777777" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
            <a href="https://web.max.ru/89225050" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">МАХ</a>
            <a href="https://vk.com/club222202742" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
              <SiVk className="h-3.5 w-3.5" /> ВК
            </a>
          </div>
        </div>
        <div className="text-center text-foreground/30 text-xs mt-6">
          © {new Date().getFullYear()} Лотос — центр гармоничного развития
        </div>
      </footer>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          data-testid="button-floating-book"
          onClick={() => openBooking("любую услугу")}
          className="h-14 w-14 rounded-full text-white border-0 shadow-xl hover:scale-110 transition-all flex items-center justify-center p-0 bg-gradient-to-br from-primary to-pink-500"
          style={{ boxShadow: "0 0 20px rgba(139,92,246,0.6)" }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal
        service={bookingService}
        isOpen={!!bookingService}
        onClose={() => setBookingService(null)}
      />
    </div>
  );
}

// Reiki Card Component
function ReikiCard({ openBooking }: { openBooking: (s: string) => void }) {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card
        data-testid="card-service-reiki"
        className="h-full border-border/40 overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-card"
        style={{ boxShadow: "0 4px 30px rgba(251,191,36,0.12)" }}
      >
        <div className="relative h-52 overflow-hidden">
          <img src={reikiImg} alt="Рэйки" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-semibold backdrop-blur-sm">
            1–2 ступень
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300" />
        <CardContent className="p-7 flex flex-col">
          <h3 className="text-xl font-serif font-bold text-foreground mb-0.5 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
            Рэйки
          </h3>
          <p className="text-foreground/40 text-xs leading-tight mb-4">Американская федерация мастеров — «Сам себе целитель»</p>

          {/* Step switcher */}
          <div className="flex items-center gap-1.5 mb-4 p-1 rounded-xl bg-muted/50 border border-border/40">
            <button
              data-testid="button-reiki-step1"
              onClick={() => setStep(1)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-sm rounded-lg font-medium transition-all ${
                step === 1 ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-sm" : "text-foreground/50 hover:text-foreground"
              }`}
            >
              <ArrowLeft className={`h-3 w-3 ${step === 1 ? "opacity-100" : "opacity-0 w-0"}`} />
              1 ступень
            </button>
            <button
              data-testid="button-reiki-step2"
              onClick={() => setStep(2)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-sm rounded-lg font-medium transition-all ${
                step === 2 ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-sm" : "text-foreground/50 hover:text-foreground"
              }`}
            >
              2 ступень
              <ArrowRight className={`h-3 w-3 ${step === 2 ? "opacity-100" : "opacity-0 w-0"}`} />
            </button>
          </div>

          <div className="flex-grow">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5"
                >
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">Без отработки</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">10 000 ₽</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">С отработкой</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">15 000 ₽</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5"
                >
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">Без отработки</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">12 000 ₽</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">С отработкой</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">15 000 ₽</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4">
            <Button
              data-testid="button-book-reiki"
              onClick={() => openBooking(`Рэйки ${step} ступень`)}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-400 hover:to-orange-300 text-white border-0 rounded-xl"
            >
              Записаться на {step} ступень
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Booking Modal Component
function BookingModal({ service, isOpen, onClose }: { service: string | null; isOpen: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  if (!service) return null;

  const messageText = `Здравствуйте! Хочу записаться на ${service}`;
  const tgLink = `https://t.me/natalia777777777777777777?text=${encodeURIComponent(messageText)}`;
  const vkMsg = encodeURIComponent(messageText);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-card border-border/50 text-foreground shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-foreground">Как записаться?</DialogTitle>
          <DialogDescription className="text-foreground/60">
            Выберите удобный способ — ответим быстро.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Service tag */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {service.charAt(0).toUpperCase() + service.slice(1)}
          </div>

          {/* Copyable message */}
          <div className="rounded-xl bg-muted/50 border border-border/40 p-3 space-y-2">
            <p className="text-xs text-foreground/50">Готовое сообщение:</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-background rounded-lg px-3 py-2 text-sm text-foreground/80 border border-border/30 font-light">
                {messageText}
              </div>
              <button
                data-testid="button-copy-message"
                onClick={handleCopy}
                className="shrink-0 p-2 rounded-lg border border-border/40 hover:bg-muted transition-colors text-foreground/60 hover:text-foreground"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 gap-2.5">
            <Button asChild className="w-full h-11 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white">
              <a href="https://web.max.ru/89225050" target="_blank" rel="noopener noreferrer" data-testid="button-open-max">
                <MessageCircle className="mr-2 h-4 w-4" />
                Написать в МАХ
              </a>
            </Button>

            <Button asChild className="w-full h-11 bg-[#2AABEE] hover:bg-[#229ED9] text-white">
              <a href={tgLink} target="_blank" rel="noopener noreferrer" data-testid="button-open-telegram">
                <Send className="mr-2 h-4 w-4" />
                Написать в Telegram
              </a>
            </Button>

            <Button asChild className="w-full h-11 bg-[#4a76a8] hover:bg-[#3d6591] text-white">
              <a href="https://vk.com/im/convo/147222622?tab=all" target="_blank" rel="noopener noreferrer" data-testid="button-open-vk">
                <SiVk className="mr-2 h-4 w-4" />
                Записаться через ВКонтакте
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
