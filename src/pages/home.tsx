import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, MessageCircle, Send, Moon, Sun, MapPin, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import logoPath from "@assets/image_1782656029587.png";
import logoHandsPath from "@assets/VtBOv9A0wX45R-mwXF5QtIBfS6g6oks7Ib0aX18tUMjYAddHABc5xmFaifQtAT_1782656074220.jpg";

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
      <nav className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoPath} alt="Лотос логотип" className="h-10 w-10 object-contain rounded-lg" />
            <span className="font-serif text-2xl font-bold tracking-wider text-foreground">Лотос</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">О нас</a>
            <a href="#contacts" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Контакты</a>
            <button
              data-testid="theme-toggle"
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full border border-border/50 hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
              aria-label="Переключить тему"
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
        {/* Decorative orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 dark:bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/15 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-pink-500/20 to-amber-400/20 blur-3xl rounded-full" />
            <img
              src={logoHandsPath}
              alt="Центр Лотос"
              className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border-2 border-primary/30 shadow-2xl relative z-10"
              style={{ boxShadow: "0 0 60px rgba(139,92,246,0.4), 0 0 120px rgba(139,92,246,0.2)" }}
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
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
                style={{ boxShadow: "0 4px 30px rgba(6,182,212,0.1)" }}
              >
                {/* Colored top bar */}
                <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center mb-4 text-white text-xl shadow-lg shadow-cyan-400/30">
                      ✦
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      Биоэнергетический массаж
                    </h3>
                    <p className="text-foreground/50 text-xs">Длительность: 1 час</p>
                  </div>
                  <p className="text-foreground/70 leading-relaxed font-light mb-6 flex-grow">
                    Восстановление энергосистемы, увеличение жизненной силы в теле, глубокое расслабление и пробуждение интуиции.
                  </p>
                  <div className="mt-auto">
                    <div className="mb-5 p-4 rounded-xl bg-muted/50 border border-border/40">
                      <div className="text-3xl font-bold text-amber-500 dark:text-amber-400 mb-1">3 000 ₽</div>
                      <div className="text-sm text-foreground/50 flex items-center gap-1">
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
                  </div>
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
                style={{ boxShadow: "0 4px 30px rgba(236,72,153,0.1)" }}
              >
                <div className="h-1.5 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400" />
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 flex items-center justify-center mb-4 text-white text-xl shadow-lg shadow-pink-400/30">
                      ◈
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                      Медитации
                    </h3>
                    <p className="text-foreground/50 text-xs">Практики осознанности и покоя</p>
                  </div>
                  <p className="text-foreground/70 leading-relaxed font-light mb-6 flex-grow">
                    Погружение в тишину ума, снятие стресса и обретение внутреннего баланса через направляемые медитации.
                  </p>
                  <div className="mt-auto">
                    <div className="space-y-3 mb-5">
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
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-card border border-border/40 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.label}</span>
                </div>
              ))}
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
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Найдите нас</p>
            <h2 className="text-4xl font-serif font-bold text-foreground">Контакты</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="tel:+79501953382"
              data-testid="link-phone"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/40 hover:border-primary/40 hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center text-white shadow-lg shadow-primary/30 shrink-0">
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
              className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/40 hover:border-pink-400/40 hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-foreground/50 mb-1 uppercase tracking-wide">Адрес</div>
                <div className="text-xl font-bold text-foreground group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                  Пр. Ильича 24
                </div>
                <div className="text-sm text-foreground/50">Первоуральск</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-pink-500/10 to-amber-400/10 border border-primary/20 text-center"
          >
            <p className="text-foreground/70 mb-4 font-light">Напишите нам — и мы подберём удобное время</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://web.max.ru/89225050"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-max-contacts"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Написать в МАХ
              </a>
              <a
                href="https://t.me/natalia777777777777777777"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-tg-contacts"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2AABEE] text-white text-sm font-medium hover:bg-[#229ED9] transition-colors"
              >
                <Send className="h-4 w-4" />
                Написать в Telegram
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
          <div className="flex gap-4">
            <a href="https://t.me/natalia777777777777777777" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
            <a href="https://web.max.ru/89225050" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">МАХ</a>
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

// Reiki Card Component with internal state
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
        style={{ boxShadow: "0 4px 30px rgba(251,191,36,0.1)" }}
      >
        <div className="h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300" />
        <CardContent className="p-8 flex flex-col h-full">
          <div className="mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4 text-white text-xl shadow-lg shadow-amber-400/30">
              ☯
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-0.5 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
              Рэйки
            </h3>
            <p className="text-foreground/40 text-xs leading-tight">Американская федерация мастеров<br />«Сам себе целитель»</p>
          </div>

          {/* Step switcher */}
          <div className="flex items-center gap-2 mb-5 p-1 rounded-xl bg-muted/50 border border-border/40">
            <button
              data-testid="button-reiki-step1"
              onClick={() => setStep(1)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-sm rounded-lg font-medium transition-all ${
                step === 1
                  ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-sm"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              <ArrowLeft className={`h-3.5 w-3.5 ${step === 1 ? "opacity-100" : "opacity-0"}`} />
              1 ступень
            </button>
            <button
              data-testid="button-reiki-step2"
              onClick={() => setStep(2)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-sm rounded-lg font-medium transition-all ${
                step === 2
                  ? "bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-sm"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              2 ступень
              <ArrowRight className={`h-3.5 w-3.5 ${step === 2 ? "opacity-100" : "opacity-0"}`} />
            </button>
          </div>

          <div className="flex-grow">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">Инициация <span className="font-semibold text-foreground/70">без</span> отработки</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">10 000 ₽</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">Инициация <span className="font-semibold text-foreground/70">с</span> отработкой</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">15 000 ₽</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">Инициация <span className="font-semibold text-foreground/70">без</span> отработки</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">12 000 ₽</div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 border border-border/40">
                    <div className="text-xs text-foreground/50 mb-0.5">Инициация <span className="font-semibold text-foreground/70">с</span> отработкой</div>
                    <div className="text-2xl font-bold text-amber-500 dark:text-amber-400">15 000 ₽</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-5 pt-4">
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-card border-border/50 text-foreground shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-foreground">Как записаться?</DialogTitle>
          <DialogDescription className="text-foreground/60">
            Выберите удобный способ — мы ответим быстро.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-2">
          {/* Service tag */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {service.charAt(0).toUpperCase() + service.slice(1)}
          </div>

          {/* Option 1: MAX */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold">1</span>
              Написать в МАХ
            </h4>
            <Button
              data-testid="button-open-max"
              asChild
              className="w-full h-11 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white"
            >
              <a href="https://web.max.ru/89225050" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Открыть чат МАХ
              </a>
            </Button>
            <p className="text-xs text-center text-foreground/40">Напишите нам о желаемой услуге</p>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-border/40" />
            <span className="flex-shrink-0 mx-4 text-foreground/30 text-xs">или</span>
            <div className="flex-grow border-t border-border/40" />
          </div>

          {/* Option 2: Telegram */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#2AABEE]/20 text-[#2AABEE] text-xs font-bold">2</span>
              Написать в Telegram
            </h4>

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
                  title="Скопировать"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              data-testid="button-open-telegram"
              asChild
              className="w-full h-11 bg-[#2AABEE] hover:bg-[#229ED9] text-white shadow-lg shadow-[#2AABEE]/20"
            >
              <a href={tgLink} target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-4 w-4" />
                Открыть Telegram
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
