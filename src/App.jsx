import { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Rocket,
  CheckCircle2,
  ChevronDown,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Zap,
  ShoppingCart,
  LayoutTemplate,
  Wrench,
} from "lucide-react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const buildLines = [
  { text: "$ npm run build", color: "#8B96AB" },
  { text: "✓ compiled em 3.2s", color: "#22C55E" },
  { text: "✓ performance ......... 98/100", color: "#22C55E" },
  { text: "✓ acessibilidade ....... 100/100", color: "#22C55E" },
  { text: "✓ responsivo (mobile) .. pass", color: "#22C55E" },
  { text: "✓ deploy concluído em 15 dias", color: "#F5A623" },
];

function WhatsAppButton() {
  const phone = "5551981273330";
  const message = "Olá! Gostaria de saber mais sobre os serviços";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
      style={{ width: "58px", height: "58px", background: "#25D366" }}
      aria-label="Falar no WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.486 1.34 5.003L2 22l5.117-1.334a9.96 9.96 0 0 0 4.887 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.071a9.933 9.933 0 0 0-7.072-2.875zm0 18.166h-.003a8.2 8.2 0 0 1-4.176-1.144l-.3-.178-3.036.791.81-2.96-.195-.304a8.196 8.196 0 0 1-1.257-4.374c0-4.535 3.69-8.225 8.226-8.225 2.196 0 4.26.857 5.815 2.412a8.166 8.166 0 0 1 2.408 5.816c0 4.535-3.69 8.225-8.225 8.225z" />
      </svg>
    </a>
  );
}

function Logo({ variant = "dark" }) {
  const textColor = variant === "dark" ? "#0F1420" : "#F5F5F3";
  return (
    <div className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="0.5" y="0.5" width="29" height="29" rx="7" fill="#0B1220" stroke="#232D42" />
        <path
          d="M11 10L7 15L11 20"
          stroke="#3B6EF5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 10L23 15L19 20"
          stroke="#3B6EF5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16.5 8.5L13.5 21.5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: textColor }} className="font-semibold text-lg leading-none">
        Design<span style={{ color: "#3B6EF5" }}> Sites</span>
      </span>
    </div>
  );
}

function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= buildLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 550);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div
      className="rounded-lg border overflow-hidden shadow-2xl w-full max-w-md"
      style={{ background: "#0B1220", borderColor: "#232D42" }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: "#232D42", background: "#0F172A" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F5A623" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3B6EF5" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
        <span
          className="ml-3 text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }}
        >
          build.log
        </span>
      </div>
      <div className="p-5 min-h-[220px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {buildLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="text-[13px] leading-7" style={{ color: line.color }}>
            {line.text}
          </div>
        ))}
        {visibleLines < buildLines.length && (
          <span
            className="inline-block w-2 h-4 align-middle animate-pulse"
            style={{ background: "#3B6EF5" }}
          />
        )}
      </div>
    </div>
  );
}

const services = [
  {
    icon: LayoutTemplate,
    name: "Landing Page",
    desc: "Página única de alta conversão para campanhas e lançamentos.",
    price: "a partir de R$ 1.200",
  },
  {
    icon: Zap,
    name: "Site institucional",
    desc: "Presença digital completa: sobre, serviços, blog e contato.",
    price: "a partir de R$ 2.800",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    desc: "Loja completa com catálogo, checkout e integração de pagamento.",
    price: "a partir de R$ 5.500",
  },
  {
    icon: Wrench,
    name: "Manutenção mensal",
    desc: "Atualizações, correções e pequenas melhorias contínuas.",
    price: "a partir de R$ 450/mês",
  },
];

const projects = [
  {
    name: "Vitrine Imobiliária",
    stack: ["React", "Filtros de busca", "WhatsApp"],
    problem: "Protótipo de vitrine virtual para corretores, com imóveis disponíveis, filtros por cidade/bairro/tipo e redirecionamento direto para agendamento via WhatsApp.",
    result: "Catálogo com filtros · contato direto via WhatsApp",
  },
  {
    name: "Catálogo — Loja de Móveis",
    stack: ["React", "Filtros de categoria"],
    problem: "Protótipo de vitrine de produtos com fotos, especificações técnicas e filtros por categoria e faixa de preço.",
    result: "Catálogo por categoria · design responsivo",
  },
  {
    name: "E-commerce",
    stack: ["React", "Carrinho de compras", "Checkout"],
    problem: "Protótipo de loja virtual completa, com carrinho de compras e fluxo de pagamento simulado.",
    result: "Carrinho funcional · checkout simulado",
  },
  {
    name: "Landing Page de Alta Conversão",
    stack: ["React", "Formulário de captura"],
    problem: "Página única (one-page) voltada para campanhas de tráfego pago, focada em geração de leads.",
    result: "Formulário de captura · estrutura otimizada para conversão",
  },
];

const process = [
  { n: "01", title: "Briefing", desc: "Entendo o problema real do seu negócio antes de qualquer linha de código." },
  { n: "02", title: "Protótipo", desc: "Layout navegável para validar estrutura e conteúdo antes de construir." },
  { n: "03", title: "Desenvolvimento", desc: "Código limpo, performático e responsivo, com atualizações semanais." },
  { n: "04", title: "Revisão", desc: "Ajustes finos com base no seu feedback, sem custo extra." },
  { n: "05", title: "Entrega & Deploy", desc: "Site no ar, com domínio, SSL e treinamento básico incluídos." },
];

const faqs = [
  { q: "Qual o prazo médio de entrega?", a: "Entre 10 e 20 dias úteis, dependendo do escopo do projeto. Prazos exatos são definidos no briefing." },
  { q: "Hospedagem e domínio estão inclusos?", a: "Ajudo na configuração de ambos, mas os custos de hospedagem e domínio são pagos diretamente ao provedor, sem intermediação." },
  { q: "Quantas revisões estão inclusas?", a: "Duas rodadas de revisão em cada etapa (protótipo e desenvolvimento) estão inclusas em todos os pacotes." },
  { q: "Como funciona o pagamento?", a: "50% no início do projeto e 50% na entrega. Para pacotes maiores, posso dividir em até 3 etapas." },
  { q: "Você oferece suporte depois da entrega?", a: "Sim, 15 dias de suporte gratuito para correções pós-entrega, e planos de manutenção mensal para o que vier depois." },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b" style={{ borderColor: "#E4E4E0" }}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span
          className="text-base md:text-lg font-medium pr-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#0F1420" }}
        >
          {item.q}
        </span>
        <ChevronDown
          size={20}
          style={{
            color: "#3B6EF5",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
            flexShrink: 0,
          }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p className="pb-5 text-[15px] leading-relaxed" style={{ color: "#555C6B" }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FreelanceDevSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState("idle");

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Processo", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#0F1420", background: "#F5F5F3" }}>
      <style>{FONTS}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(245,245,243,0.85)", borderColor: "#E4E4E0" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo variant="dark" />
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#0F1420" }}>
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="text-sm font-semibold px-4 py-2 rounded-md text-white"
              style={{ background: "#0B1220" }}
            >
              Solicitar orçamento
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t" style={{ borderColor: "#E4E4E0" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium pt-3">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "#0B1220" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="inline-block text-xs px-3 py-1 rounded-full mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22C55E", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
            >
              ● disponível para novos projetos
            </span>
            <h1
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
            >
              Sites rápidos, responsivos e que convertem — entregues em 15 dias.
            </h1>
            <p className="text-base md:text-lg mb-8" style={{ color: "#8B96AB" }}>
              Desenvolvimento web sob medida para negócios que precisam de presença digital de verdade: performance, design e resultado mensurável.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2"
                style={{ background: "#3B6EF5", color: "#fff" }}
              >
                Solicitar orçamento <ArrowUpRight size={16} />
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-md text-sm font-semibold border"
                style={{ borderColor: "#232D42", color: "#F5F5F3" }}
              >
                Ver projetos
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <TerminalPanel />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="max-w-6xl mx-auto px-6 py-20">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// serviços</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-semibold mb-12">
          O que eu construo
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="p-6 rounded-lg border bg-white" style={{ borderColor: "#E4E4E0" }}>
                <Icon size={22} style={{ color: "#3B6EF5" }} className="mb-4" />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-lg mb-2">
                  {s.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#555C6B" }}>
                  {s.desc}
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#0F1420" }} className="text-xs font-medium">
                  {s.price}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20" style={{ background: "#0B1220" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623" }} className="text-xs mb-3">// portfólio</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }} className="text-3xl font-semibold mb-2">
            Protótipos e projetos conceituais
          </h2>
          <p className="text-sm mb-10" style={{ color: "#8B96AB" }}>
            Modelos desenvolvidos para demonstrar capacidade técnica — não representam empresas ou clientes reais.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <div key={p.name} className="p-6 rounded-lg border" style={{ borderColor: "#232D42", background: "#0F172A" }}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className="text-[11px] px-2 py-1 rounded"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623", background: "rgba(245,166,35,0.12)" }}
                  >
                    Protótipo
                  </span>
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5", background: "rgba(59,110,245,0.12)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }} className="font-semibold text-lg mb-2">
                  {p.name}
                </h3>
                <p className="text-sm mb-3" style={{ color: "#8B96AB" }}>
                  {p.problem}
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} style={{ color: "#22C55E" }} />
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22C55E" }} className="text-xs">
                    {p.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="max-w-6xl mx-auto px-6 py-20">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// processo</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-semibold mb-12">
          Como funciona
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {process.map((step) => (
            <div key={step.n}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-2xl font-medium mb-3">
                {step.n}
              </p>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: "#555C6B" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// perguntas frequentes</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-semibold mb-8">
          Dúvidas comuns
        </h2>
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="py-20" style={{ background: "#0B1220" }}>
        <div className="max-w-2xl mx-auto px-6">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623" }} className="text-xs mb-3 text-center">// vamos construir</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }} className="text-3xl font-semibold mb-3 text-center">
            Conte sobre o seu projeto
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: "#8B96AB" }}>
            Respondo em até 24h úteis com uma proposta inicial.
          </p>

          {formStatus === "sent" ? (
            <div className="text-center p-8 rounded-lg border" style={{ borderColor: "#232D42", background: "#0F172A" }}>
              <CheckCircle2 size={28} style={{ color: "#22C55E" }} className="mx-auto mb-3" />
              <p style={{ color: "#F5F5F3" }} className="font-medium">Mensagem enviada. Vou te responder em breve.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormStatus("sent");
              }}
              className="grid gap-4"
            >
              <input
                required
                placeholder="Seu nome"
                className="px-4 py-3 rounded-md text-sm outline-none"
                style={{ background: "#0F172A", border: "1px solid #232D42", color: "#F5F5F3" }}
              />
              <input
                required
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-3 rounded-md text-sm outline-none"
                style={{ background: "#0F172A", border: "1px solid #232D42", color: "#F5F5F3" }}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  required
                  defaultValue=""
                  className="px-4 py-3 rounded-md text-sm outline-none"
                  style={{ background: "#0F172A", border: "1px solid #232D42", color: "#8B96AB" }}
                >
                  <option value="" disabled>Tipo de projeto</option>
                  <option>Landing page</option>
                  <option>Site institucional</option>
                  <option>E-commerce</option>
                  <option>Manutenção</option>
                </select>
                <select
                  required
                  defaultValue=""
                  className="px-4 py-3 rounded-md text-sm outline-none"
                  style={{ background: "#0F172A", border: "1px solid #232D42", color: "#8B96AB" }}
                >
                  <option value="" disabled>Orçamento estimado</option>
                  <option>Até R$ 1.500</option>
                  <option>R$ 1.500 – R$ 3.000</option>
                  <option>R$ 3.000 – R$ 6.000</option>
                  <option>Acima de R$ 6.000</option>
                </select>
              </div>
              <textarea
                required
                placeholder="Conte um pouco sobre o projeto e o prazo desejado"
                rows={4}
                className="px-4 py-3 rounded-md text-sm outline-none resize-none"
                style={{ background: "#0F172A", border: "1px solid #232D42", color: "#F5F5F3" }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2"
                style={{ background: "#3B6EF5", color: "#fff" }}
              >
                Enviar mensagem <Mail size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t" style={{ borderColor: "#E4E4E0" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Logo variant="dark" />
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }} className="text-xs">
            © 2026 Design Sites · desenvolvido com <Rocket size={12} className="inline mb-0.5" style={{ color: "#F5A623" }} /> e café
          </p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}