import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
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
  ShieldCheck,
  MessageCircle,
  User,
  MapPin,
  Code2,
  Braces,
  Layers,
  FileCode2,
  Hourglass,
} from "lucide-react";

const FONTS = `
body.custom-cursor-active, body.custom-cursor-active * {
  cursor: none !important;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(2.5deg); }
}
.glass-card {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0px 8px 24px rgba(59, 130, 246, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  z-index: 0;
  pointer-events: none;
}

.hero-glow-bg {
  background-color: #0B1220;
  background-image:
    radial-gradient(circle at 70% 20%, rgba(59,110,245,0.28) 0%, transparent 45%),
    radial-gradient(circle at 10% 90%, rgba(0,0,0,0.6) 0%, transparent 55%);
}

.site-bg-fixed {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: #0B1220;
  background-image:
    radial-gradient(circle at var(--glow-x, 70%) var(--glow-y, 20%), rgba(59,110,245,0.30) 0%, transparent 45%),
    radial-gradient(circle at 15% 85%, rgba(0,0,0,0.55) 0%, transparent 55%),
    linear-gradient(180deg, rgba(11,18,32,0.6), rgba(11,18,32,0.7)),
    url('/images/hero-stars.webp');
  background-size: auto, auto, auto, cover;
  background-position: 0 0, 0 0, 0 0, center;
  background-repeat: no-repeat;
  animation: starDriftContinuous 24s linear infinite alternate;
  pointer-events: none;
}
@keyframes starDriftContinuous {
  0% { background-position: 0 0, 0 0, 0 0, 0% 0%; }
  100% { background-position: 0 0, 0 0, 0 0, 6% 4%; }
}

.sobre-panel {
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.45);
  will-change: transform, opacity;
}

.glow-stat-card {
  background: #FFFFFF;
  box-shadow: 0 0 0 1px rgba(59,110,245,0.15), 0 8px 24px rgba(59,110,245,0.25);
}

.glow-faq-card {
  background: transparent;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 0 24px rgba(255,255,255,0.06);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 18s linear infinite;
}
@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes starDrift {
  0% { background-position: 0% 0%; }
  50% { background-position: 3% 2%; }
  100% { background-position: 0% 0%; }
}
.hero-stars-bg {
  background-image: linear-gradient(180deg, rgba(11,18,32,0.82), rgba(11,18,32,0.9)), url('/images/hero-stars.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: starDrift 40s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(6px); opacity: 1; }
}
.scroll-indicator {
  animation: scrollBounce 1.8s ease-in-out infinite;
}

.portfolio-frame-img {
  transition: transform 0.6s ease;
}
.portfolio-frame-wrap:hover .portfolio-frame-img {
  transform: translateY(-12%);
}

.form-input-wrap {
  position: relative;
  border-radius: 0.375rem;
  padding: 1px;
  background: transparent;
  transition: background 0.25s ease;
}
.form-input-wrap:focus-within {
  background: linear-gradient(90deg, #3B6EF5, #F5A623);
}

@keyframes greenPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
  50% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
}
.pulse-badge {
  animation: greenPulse 2.5s ease-in-out infinite;
}

@keyframes dsExpand {
  0%, 12% { max-width: 0; opacity: 0; }
  30%, 70% { max-width: 180px; opacity: 1; }
  88%, 100% { max-width: 0; opacity: 0; }
}
.ds-collapsible {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: bottom;
  max-width: 0;
  opacity: 0;
  animation: dsExpand 6s ease-in-out infinite;
}
`;

const buildLines = [
  { text: "> npm run build", color: "#8B96AB" },
  { text: "✓ Carregamento em menos de 1s", color: "#22C55E" },
  { text: "✓ 100% otimizado para vendas no Google", color: "#22C55E" },
  { text: "✓ Design responsivo (mobile-first)", color: "#22C55E" },
  { text: "✓ Compiled in 3.2s — pronto para converter", color: "#F5A623" },
];

function ProjectDetailPage({ project }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#0F1420", background: "#F5F5F3", minHeight: "100vh" }}>
      <style>{FONTS}</style>
      <header className="border-b" style={{ borderColor: "#E4E4E0" }}>
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Logo variant="dark" />
          <a href="#/" className="text-sm font-medium underline" style={{ color: "#3B6EF5" }}>
            Voltar para o site
          </a>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <span
            className="text-[11px] px-2 py-1 rounded inline-block mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623", background: "rgba(245,166,35,0.12)" }}
          >
            Protótipo
          </span>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl md:text-4xl font-semibold mb-6">
            {project.name}
          </h1>

          {project.images ? (
            <div className="grid grid-cols-2 gap-3 mb-10">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="portfolio-frame-wrap rounded-lg border overflow-hidden"
                  style={{ borderColor: "#E4E4E0", filter: "drop-shadow(0 12px 24px rgba(11,18,32,0.18))" }}
                >
                  <div
                    className="flex items-center gap-1.5 px-2.5"
                    style={{ height: "22px", background: "#EAEAE6", borderBottom: "1px solid #E4E4E0" }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: "#F5A623" }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: "#3B6EF5" }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
                  </div>
                  <div className="overflow-hidden" style={{ aspectRatio: "16/10", background: "#fff" }}>
                    <img
                      src={src}
                      alt={`${project.name} — tela ${i + 1}`}
                      className="portfolio-frame-img w-full h-full block"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="w-full rounded-lg border flex items-center justify-center mb-10"
              style={{ borderColor: "#E4E4E0", background: "#EAEAE6", aspectRatio: "16/10" }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }} className="text-sm">
                Imagem de exemplo em breve
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5", background: "rgba(59,110,245,0.1)" }}
              >
                {t}
              </span>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-xl font-semibold mb-3">
            Como esse tipo de site é feito
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#333844" }}>
            {project.howItsMade}
          </p>

          <a
            href="#contato-redirect"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
              setTimeout(() => {
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
            className="inline-block px-6 py-3 rounded-md text-sm font-semibold transition-transform hover:scale-[1.03]"
            style={{ background: "#3B6EF5", color: "#fff" }}
          >
            Quero um site assim
          </a>
        </div>
      </section>

      <footer className="py-8 border-t text-center" style={{ borderColor: "#E4E4E0" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }} className="text-xs">
          © 2026 Design Sites
        </p>
      </footer>
    </div>
  );
}

function ExperimentePage() {
  const [demoName, setDemoName] = useState("");

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#0F1420", background: "#F5F5F3", minHeight: "100vh" }}>
      <style>{FONTS}</style>
      <header className="border-b" style={{ borderColor: "#E4E4E0" }}>
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Logo variant="dark" />
          <a href="#/" className="text-sm font-medium underline" style={{ color: "#3B6EF5" }}>
            Voltar para o site
          </a>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3 text-center">// experimente</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-semibold mb-3 text-center">
          Veja seu site nascendo
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: "#555C6B" }}>
          Digite o nome do seu negócio e veja uma prévia se montar em tempo real.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <input
            value={demoName}
            onChange={(e) => setDemoName(e.target.value)}
            placeholder="Digite o nome do seu negócio..."
            className="w-full px-4 py-3 rounded-md text-sm text-center outline-none border"
            style={{ borderColor: demoName ? "#3B6EF5" : "#E4E4E0" }}
          />
        </div>

        <div className="rounded-lg border overflow-hidden shadow-lg" style={{ borderColor: "#E4E4E0" }}>
          <div
            className="flex items-center gap-1.5 px-3"
            style={{ height: "26px", background: "#EAEAE6", borderBottom: "1px solid #E4E4E0" }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F5A623" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3B6EF5" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
          </div>
          <div style={{ background: "#0B1220", minHeight: "420px" }}>
            <div
              className="flex items-center justify-between px-6 py-3"
              style={{
                borderBottom: "1px solid #232D42",
                opacity: demoName ? 1 : 0.15,
                transform: demoName ? "translateY(0)" : "translateY(-6px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }} className="text-sm font-semibold">
                {demoName || "Sua Empresa"}
              </p>
              <div className="hidden sm:flex gap-4">
                <span className="text-xs" style={{ color: "#8B96AB" }}>Início</span>
                <span className="text-xs" style={{ color: "#8B96AB" }}>Serviços</span>
                <span className="text-xs" style={{ color: "#8B96AB" }}>Contato</span>
              </div>
            </div>

            <div className="p-8 md:p-12 pb-6">
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#F5F5F3",
                  opacity: demoName ? 1 : 0.25,
                  transform: demoName ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
                }}
                className="text-2xl md:text-3xl font-semibold mb-3"
              >
                Bem-vindo{demoName ? ` à ${demoName}` : ""}
              </h3>
              <p
                style={{
                  color: "#8B96AB",
                  opacity: demoName ? 1 : 0.2,
                  transform: demoName ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s",
                }}
                className="text-sm mb-6 max-w-md"
              >
                Presença digital profissional, rápida e feita sob medida — pronta para converter visitantes em clientes.
              </p>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "#3B6EF5",
                  color: "#fff",
                  opacity: demoName ? 1 : 0,
                  transform: demoName ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.4s ease 0.45s, transform 0.4s ease 0.45s",
                }}
                className="inline-block px-5 py-2.5 rounded-md text-sm font-semibold"
              >
                Fale Conosco
              </span>
            </div>

            <div
              className="grid grid-cols-3 gap-3 px-8 md:px-12 py-6"
              style={{
                borderTop: "1px solid #232D42",
                opacity: demoName ? 1 : 0,
                transform: demoName ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.4s ease 0.6s, transform 0.4s ease 0.6s",
              }}
            >
              {[
                { Icon: LayoutTemplate, label: "Design sob medida" },
                { Icon: Zap, label: "Carregamento rápido" },
                { Icon: ShoppingCart, label: "Pronto para vender" },
              ].map(({ Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon size={18} style={{ color: "#3B6EF5" }} className="mx-auto mb-2" />
                  <p className="text-[11px]" style={{ color: "#8B96AB" }}>{label}</p>
                </div>
              ))}
            </div>

            <div
              className="px-8 md:px-12 py-4 text-center"
              style={{
                borderTop: "1px solid #232D42",
                opacity: demoName ? 1 : 0,
                transition: "opacity 0.4s ease 0.75s",
              }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#555C6B" }} className="text-[10px]">
                © 2026 {demoName || "Sua Empresa"}
              </p>
            </div>
          </div>
        </div>

        {demoName && (
          <p className="text-center text-xs mt-4" style={{ color: "#8B96AB" }}>
            Gostou do que viu? <a href="#/" className="underline" style={{ color: "#3B6EF5" }}>Vamos criar o de verdade</a>.
          </p>
        )}
      </section>

      <footer className="py-8 border-t text-center" style={{ borderColor: "#E4E4E0" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }} className="text-xs">
          © 2026 Design Sites
        </p>
      </footer>
    </div>
  );
}

function LegalPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#0F1420", background: "#F5F5F3", minHeight: "100vh" }}>
      <style>{FONTS}</style>
      <header className="border-b" style={{ borderColor: "#E4E4E0" }}>
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Logo variant="dark" />
          <a href="#/" className="text-sm font-medium underline" style={{ color: "#3B6EF5" }}>
            Voltar para o site
          </a>
        </div>
      </header>

      <section id="termos-de-uso" className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// termos de uso</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-semibold mb-8">
            Termos de Uso
          </h2>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#333844" }}>
            <p>
              O Design Sites é um serviço independente de desenvolvimento web, atuando a partir de Garopaba/SC. Ao contratar nossos serviços, você concorda com os termos abaixo.
            </p>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Serviços oferecidos</h3>
              <p>Desenvolvimento de landing pages, sites institucionais, e-commerces e o Plano Gestão & Crescimento (manutenção mensal), conforme descrito na seção de Serviços.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Orçamento e pagamento</h3>
              <p>Os projetos são pagos em duas parcelas: 50% no início do projeto e 50% na entrega. Formas de pagamento aceitas: Pix, transferência bancária ou cartão.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Prazos</h3>
              <p>O prazo padrão de entrega é de até 20 dias úteis, podendo variar conforme a complexidade e o escopo definidos no briefing.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Revisões</h3>
              <p>Duas rodadas de revisão estão inclusas em cada etapa do projeto (protótipo e desenvolvimento), conforme descrito na seção de Perguntas Frequentes.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Propriedade do site entregue</h3>
              <p>Após a quitação integral do pagamento, todos os direitos sobre o site desenvolvido são transferidos ao cliente.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Cancelamento</h3>
              <p>Cancelamentos e eventuais reembolsos são tratados caso a caso, por acordo entre as partes, considerando o estágio em que o projeto se encontra.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Foro</h3>
              <p>Fica eleito o foro da comarca de Garopaba/SC para dirimir eventuais controvérsias.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Contato</h3>
              <p>Dúvidas sobre estes termos podem ser enviadas para designsites.digital@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="politica-de-privacidade" className="py-16 border-t" style={{ borderColor: "#E4E4E0" }}>
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// privacidade</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-semibold mb-8">
            Política de Privacidade
          </h2>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#333844" }}>
            <p>
              Esta política explica como o Design Sites coleta, usa e protege os dados fornecidos por você, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Dados coletados</h3>
              <p>Ao preencher o formulário de contato, coletamos nome, e-mail, tipo de projeto, orçamento estimado e a mensagem enviada. Ao usar o WhatsApp, coletamos as informações que você compartilhar na conversa.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Finalidade</h3>
              <p>Os dados são usados exclusivamente para responder solicitações, elaborar orçamentos e dar andamento a projetos contratados.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Onde os dados ficam armazenados</h3>
              <p>Os dados do formulário são processados pelo Formspree, um serviço terceirizado de gerenciamento de formulários. As conversas iniciadas pelo botão de WhatsApp ficam armazenadas no WhatsApp Business. Não utilizamos planilhas, CRMs ou outros sistemas de armazenamento.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Compartilhamento</h3>
              <p>Não compartilhamos, vendemos ou alugamos seus dados a terceiros, além dos serviços mencionados acima, necessários para o funcionamento do formulário de contato.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Cookies</h3>
              <p>Este site não utiliza cookies de rastreamento próprios no momento.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold mb-1">Seus direitos</h3>
              <p>Você pode solicitar a qualquer momento o acesso, a correção ou a exclusão dos seus dados, entrando em contato pelo e-mail designsites.digital@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t text-center" style={{ borderColor: "#E4E4E0" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }} className="text-xs">
          © 2026 Design Sites
        </p>
      </footer>
    </div>
  );
}

function CustomCursor() {
  const dotRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setActive(true);
    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      const target = e.target.closest && e.target.closest("a, button, input, select, textarea");
      setHovering(!!target);
    };
    window.addEventListener("mousemove", onMove);

    let frameId;
    const loop = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.2;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.2;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      frameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!active) return null;

  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: hovering ? "36px" : "18px",
        height: hovering ? "36px" : "18px",
        marginLeft: hovering ? "-18px" : "-9px",
        marginTop: hovering ? "-18px" : "-9px",
        borderRadius: "50%",
        background: hovering ? "rgba(59,110,245,0.15)" : "#3B6EF5",
        border: hovering ? "1.5px solid #3B6EF5" : "none",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.15s ease, height 0.15s ease, margin 0.15s ease, background 0.15s ease",
      }}
    />
  );
}

function WhatsAppButton() {
  const phone = "5551981273330";
  const message = "Olá! Gostaria de saber mais sobre os serviços";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showBubble && (
        <div
          className="relative max-w-[220px] rounded-lg shadow-lg p-4"
          style={{ background: "#fff", border: "1px solid #E4E4E0" }}
        >
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 rounded-full flex items-center justify-center"
            style={{ width: "20px", height: "20px", background: "#0B1220" }}
            aria-label="Fechar"
          >
            <X size={12} color="#fff" />
          </button>
          <p className="text-sm" style={{ color: "#333844" }}>
            Precisa de ajuda? Fale com a gente! 👋
          </p>
        </div>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ width: "58px", height: "58px", background: "#25D366" }}
        aria-label="Falar no WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.486 1.34 5.003L2 22l5.117-1.334a9.96 9.96 0 0 0 4.887 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.071a9.933 9.933 0 0 0-7.072-2.875zm0 18.166h-.003a8.2 8.2 0 0 1-4.176-1.144l-.3-.178-3.036.791.81-2.96-.195-.304a8.196 8.196 0 0 1-1.257-4.374c0-4.535 3.69-8.225 8.226-8.225 2.196 0 4.26.857 5.815 2.412a8.166 8.166 0 0 1 2.408 5.816c0 4.535-3.69 8.225-8.225 8.225z" />
        </svg>
      </a>
    </div>
  );
}

function CountdownTimer() {
  const targetDate = new Date("2026-08-16T23:59:59");

  const computeTimeLeft = () => {
    const diff = targetDate.getTime() - new Date().getTime();
    if (diff <= 0) return null;
    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(computeTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(computeTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { value: timeLeft.d, label: "dias" },
    { value: timeLeft.h, label: "horas" },
    { value: timeLeft.m, label: "min" },
    { value: timeLeft.s, label: "seg" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623" }} className="text-xs">
        Promoção termina em:
      </p>
      <div className="flex items-center gap-2">
        {units.map((u) => (
          <div key={u.label} className="text-center px-2.5 py-1.5 rounded" style={{ background: "#0B1220" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5F5F3" }} className="text-sm font-semibold leading-none">
              {String(u.value).padStart(2, "0")}
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }} className="text-[9px] mt-0.5">
              {u.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Logo({ variant = "dark" }) {
  const textColor = variant === "dark" ? "#0F1420" : "#F5F5F3";
  return (
    <div className="flex items-baseline">
      <span
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }}
        className="font-bold text-xl leading-none"
      >
        &lt;
      </span>
      <span className="ds-collapsible">
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: textColor }}>
          &nbsp;Design
        </span>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#3B6EF5" }}>
          {" "}Sites&nbsp;
        </span>
      </span>
      <span
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623" }}
        className="font-bold text-xl leading-none"
      >
        /&gt;
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
    originalPrice: "R$ 1.200",
    promoPrice: "R$ 1.200",
    discount: null,
    showPromo: false,
    bullets: [
      "Design otimizado para conversão",
      "Formulário de captura de leads",
      "Hospedagem e domínio configurados",
      "Entrega em até 15 dias úteis",
    ],
  },
  {
    icon: Zap,
    name: "Site institucional",
    desc: "Presença digital completa: sobre, serviços, blog e contato.",
    originalPrice: "R$ 2.800",
    promoPrice: "R$ 2.380",
    discount: "-15%",
    showPromo: true,
    bullets: [
      "Páginas: Home, Sobre, Serviços, Contato",
      "Design responsivo (mobile-first)",
      "Otimização básica para Google (SEO)",
      "Formulário de contato integrado",
    ],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    desc: "Loja completa com catálogo, checkout e integração de pagamento.",
    originalPrice: "R$ 5.500",
    promoPrice: "R$ 3.000",
    discount: "-45%",
    showPromo: true,
    bullets: [
      "Catálogo de produtos ilimitado",
      "Carrinho de compras e checkout",
      "Integração com meios de pagamento",
      "Painel para gerenciar pedidos",
    ],
  },
  {
    icon: Wrench,
    name: "Plano Gestão & Crescimento",
    desc: "Seu site nasce pronto para vender. Este plano garante que ele continue no ar, seguro, atualizado e evoluindo.",
    originalPrice: "R$ 450/mês",
    promoPrice: "R$ 250/mês",
    discount: null,
    showPromo: true,
    bullets: [
      "Atualizações e correções contínuas",
      "Backup periódico e segurança",
      "Suporte para dúvidas e ajustes (resposta em até 24h)",
      "4 ajustes/alterações por mês incluso",
    ],
    note: "Disponível apenas junto com um pacote de criação",
  },
];

const projects = [
  {
    slug: "imobiliaria",
    name: "Interface de Altíssima Conversão para Imobiliárias",
    stack: ["React", "Filtros de busca", "WhatsApp"],
    problem: "Protótipo de vitrine virtual para corretores, com imóveis disponíveis, filtros por cidade/bairro/tipo e redirecionamento direto para agendamento via WhatsApp.",
    result: "Catálogo com filtros · contato direto via WhatsApp",
    images: ["/images/corretor-1.webp", "/images/corretor-2.webp", "/images/corretor-3.webp", "/images/corretor-4.webp"],
    howItsMade: "Esse modelo é ideal para qualquer negócio que precise apresentar um catálogo de itens com busca por filtros e fechar contato direto pelo WhatsApp — não só imobiliárias, mas também locadoras, revendas de veículos ou qualquer serviço vendido \"sob consulta\". No exemplo, um buscador filtra imóveis por finalidade, tipo e bairro logo na entrada. Os itens em destaque aparecem em cards com preço, especificações e um botão direto para agendar contato via WhatsApp. Uma seção conta a experiência de quem vende e gera confiança, e depoimentos reforçam a credibilidade — tudo terminando com um convite claro para cadastrar um novo item.",
  },
  {
    slug: "loja-de-moveis",
    name: "Vitrine Virtual de Alta Conversão para Lojas de Móveis",
    stack: ["React", "Filtros de categoria"],
    problem: "Protótipo de vitrine de produtos com fotos, especificações técnicas e filtros por categoria e faixa de preço.",
    result: "Catálogo por categoria · design responsivo",
    images: ["/images/moveis-1.webp", "/images/moveis-2.webp", "/images/moveis-3.webp", "/images/moveis-4.webp"],
    howItsMade: "Esse modelo serve para qualquer negócio que venda produtos ou serviços personalizados de alto padrão — marcenarias, estúdios de design de interiores, ateliês, ou qualquer marca que queira passar sofisticação já na primeira tela, com uma proposta de valor clara logo no topo. Uma seção “Sobre” reforça anos de experiência e mostra depoimentos de clientes. Os projetos recentes aparecem em cards com foto, categoria e descrição, funcionando como portfólio visual. E o passo a passo do processo (do orçamento à entrega) deixa o cliente confiante sobre como o trabalho dele vai acontecer.",
  },
  {
    slug: "e-commerce",
    name: "Loja Virtual Completa para E-commerce",
    stack: ["React", "Carrinho de compras", "Checkout"],
    problem: "Protótipo de loja virtual completa, com carrinho de compras e fluxo de pagamento simulado.",
    result: "Carrinho funcional · checkout simulado",
    images: ["/images/ecommerce-1.webp", "/images/ecommerce-2.webp", "/images/ecommerce-3.webp"],
    howItsMade: "Esse modelo serve para qualquer negócio que venda produtos físicos e queira fechar a venda direto pelo WhatsApp, sem burocracia de checkout complexo — moda, cosméticos, eletrônicos ou qualquer loja com catálogo de produtos. No exemplo, uma faixa de frete grátis e a coleção em destaque já aparecem na primeira tela. Os produtos são organizados por categoria e exibidos com preço promocional riscado, e cada item tem um botão “Comprar no WhatsApp”, levando a conversa direto pro fechamento da venda. Selos de parcelamento, envio rápido e troca sem complicação reforçam a confiança antes da compra.",
  },
  {
    slug: "landing-page",
    name: "Landing Page Otimizada para Geração de Leads",
    stack: ["React", "Formulário de captura"],
    problem: "Página única (one-page) voltada para campanhas de tráfego pago, focada em geração de leads.",
    result: "Formulário de captura · estrutura otimizada para conversão",
    images: ["/images/landing-1.webp", "/images/landing-2.webp", "/images/landing-3.webp"],
    howItsMade: "Esse modelo serve para qualquer profissional ou negócio de serviços que queira transformar visitantes de anúncios em consultas agendadas — advogados, dentistas, consultores, clínicas, entre outros. No exemplo, a proposta de valor já vem acompanhada de uma lista de motivos para agendar e um botão de WhatsApp em destaque, com aviso de resposta rápida para reduzir a hesitação. Números como casos resolvidos e anos de mercado reforçam a autoridade, e as áreas de atuação deixam claro em que o profissional pode ajudar. No fim, um formulário simples capta nome, WhatsApp e a dúvida do visitante, dando duas formas de contato: preencher ou chamar direto.",
  },
];

const process = [
  { n: "01", title: "Briefing", desc: "Você preenche o briefing contando sobre o seu negócio, e envia o material que já tiver (textos, logo, fotos) — o que faltar, a gente ajusta juntos ao longo do processo." },
  { n: "02", title: "Protótipo", desc: "Você recebe um layout navegável pra validar a estrutura e o conteúdo do site antes de qualquer linha de código — assim a gente ajusta o que for preciso sem retrabalho depois." },
  { n: "03", title: "Desenvolvimento", desc: "O site é construído com código limpo, performático e responsivo, e você recebe atualizações semanais de como está o andamento, sem precisar ficar cobrando." },
  { n: "04", title: "Revisão", desc: "Você passa o feedback e a gente faz os ajustes finos necessários, dentro das duas rodadas de revisão já inclusas no pacote. Revisões extras além dessas são orçadas à parte, sob consulta." },
  { n: "05", title: "Entrega & Deploy", desc: "O site vai ao ar de verdade, já configurado com domínio, certificado de segurança (SSL) e um treinamento básico pra você conseguir fazer pequenos ajustes sozinho, se quiser." },
];

const faqs = [
  { q: "Qual o prazo médio de entrega?", a: "Entre 10 e 20 dias úteis, dependendo do escopo do projeto. Prazos exatos são definidos no briefing." },
  { q: "Hospedagem e domínio estão inclusos?", a: "Ajudamos na configuração de ambos, mas os custos de hospedagem e domínio são pagos diretamente ao provedor, sem intermediação." },
  { q: "Quantas revisões estão inclusas?", a: "Duas rodadas de revisão em cada etapa (protótipo e desenvolvimento) estão inclusas em todos os pacotes." },
  { q: "Como funciona o pagamento?", a: "50% no início do projeto e 50% na entrega. Para pacotes maiores, posso dividir em até 3 etapas." },
  { q: "Você oferece suporte depois da entrega?", a: "Sim, 15 dias de suporte gratuito após a entrega do site, para suporte prolongado contrate nosso Plano de Gestão & Crescimento." },
];

function FAQItem({ item, isOpen, onClick, index }) {
  return (
    <motion.div
      className="glow-faq-card px-5 rounded-xl mb-3"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span
          className="text-base md:text-lg font-medium pr-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
        >
          {item.q}
        </span>
        <ChevronDown
          size={20}
          style={{
            color: "#F5F5F3",
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
        <p className="pb-5 text-[15px] leading-relaxed" style={{ color: "#B7BFD1" }}>
          {item.a}
        </p>
      </div>
    </motion.div>
  );
}

export default function FreelanceDevSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState("idle");
  const [route, setRoute] = useState(() => window.location.hash);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const heroRef = useRef(null);
  const terminalLineRefs = useRef([]);
  const portfolioSectionRef = useRef(null);
  const portfolioRowRef = useRef(null);
  const sobrePanelRef = useRef(null);
  const glassCardRefs = useRef([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onGlowScroll = () => {
      const progress = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight || 1), 1);
      const x = 70 - progress * 55;
      const y = 20 + progress * 55;
      document.documentElement.style.setProperty("--glow-x", `${x}%`);
      document.documentElement.style.setProperty("--glow-y", `${y}%`);

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
      glassCardRefs.current.forEach((el, i) => {
        if (!el) return;
        const speed = 0.04 + (i % 3) * 0.02;
        el.style.transform = `translateY(${currentY * speed}px)`;
      });
    };
    window.addEventListener("scroll", onGlowScroll, { passive: true });
    onGlowScroll();
    return () => window.removeEventListener("scroll", onGlowScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollHint(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (route !== "") return;

    let ctx;
    let cancelled = false;

    // gsap + ScrollTrigger só são baixados quando essa seção realmente
    // precisa deles, em vez de irem no bundle inicial da página.
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Portfolio: pin + horizontal scroll on desktop only
          if (window.innerWidth >= 768 && portfolioSectionRef.current && portfolioRowRef.current) {
            const row = portfolioRowRef.current;
            const scrollDistance = () => Math.max(row.scrollWidth - window.innerWidth + 100, 0);
            gsap.to(row, {
              x: () => -scrollDistance(),
              ease: "none",
              scrollTrigger: {
                trigger: portfolioSectionRef.current,
                start: "top top",
                end: () => "+=" + scrollDistance(),
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          }

          // Sobre: overlay panel scales/fades in and out with scroll, reversible both directions
          if (sobrePanelRef.current) {
            gsap.fromTo(
              sobrePanelRef.current,
              { opacity: 0, scale: 0.9, y: 40 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: sobrePanelRef.current,
                  start: "top 90%",
                  end: "top 35%",
                  scrub: true,
                },
              }
            );
          }
        });
      }
    );

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, [route]);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpparweo";

  const handleMagnet = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const resetMagnet = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus("sent");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const navLinks = [
    { label: "Experimente", href: "#/experimente" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Processo", href: "#processo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  if (route === "#/legal") {
    return <LegalPage />;
  }

  if (route === "#/experimente") {
    return <ExperimentePage />;
  }

  if (route.startsWith("#/projeto/")) {
    const slug = route.replace("#/projeto/", "");
    const project = projects.find((p) => p.slug === slug);
    if (project) {
      return <ProjectDetailPage project={project} />;
    }
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#0F1420", background: "transparent" }}>
      <style>{FONTS}</style>
      <div className="site-bg-fixed" aria-hidden="true" />

      {/* MARQUEE */}
      <div className="relative z-50 overflow-hidden" style={{ background: "#0B1220" }}>
        <div className="marquee-track py-1.5">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center">
              {[0, 1, 2, 3].map((n) => (
                <span
                  key={n}
                  className="whitespace-nowrap px-6 text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }}
                >
                  Invista no futuro da sua empresa: crie um site profissional com a gente
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-50" style={{ background: "transparent", marginTop: "30px" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo variant="light" />
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#F5F5F3" }}>
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
              className="text-sm font-semibold px-4 py-2 rounded-md text-white transition-transform"
              style={{ background: "#3B6EF5" }}
            >
              Solicitar orçamento
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#F5F5F3" }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ background: "#0B1220" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium pt-3" style={{ color: "#F5F5F3" }}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* CONTENT LAYER (above floating icons, below header/marquee) */}
      <div className="relative" style={{ zIndex: 2 }}>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ background: "transparent" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center relative" style={{ zIndex: 1 }}>
          <div>
            <span
              className="inline-block text-xs px-3 py-1 rounded-full mb-6 pulse-badge"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22C55E", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
            >
              ● disponível para novos projetos
            </span>
            <h1
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
            >
              Sites rápidos, responsivos e que convertem — no ar em poucas semanas.
            </h1>
            <p className="text-base md:text-lg mb-8" style={{ color: "#8B96AB" }}>
              Desenvolvimento web sob medida para negócios que precisam de presença digital de verdade: performance, design e resultado mensurável.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                onMouseMove={handleMagnet}
                onMouseLeave={resetMagnet}
                className="px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2 transition-transform"
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
        {showScrollHint && (
          <div
            className="hidden md:flex absolute left-1/2 bottom-6 flex-col items-center scroll-indicator"
            style={{ transform: "translateX(-50%)", pointerEvents: "none" }}
          >
            <ChevronDown size={22} style={{ color: "#3B6EF5" }} />
          </div>
        )}
      </section>

      {/* TRUST BADGES */}
      <section className="py-8" style={{ background: "transparent" }}>
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { Icon: ShieldCheck, label: "Pagamento seguro" },
            { Icon: Rocket, label: "Site no ar em poucas semanas" },
            { Icon: MessageCircle, label: "Suporte via WhatsApp" },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center justify-center gap-2.5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Icon size={20} style={{ color: "#3B6EF5" }} />
              <p className="text-sm font-medium" style={{ color: "#F5F5F3" }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="max-w-6xl mx-auto px-6 py-20 relative" style={{ background: "transparent" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// serviços</p>
        <motion.h2
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
          className="text-3xl font-semibold mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          O que nós construímos
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                className="glow-stat-card p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 0 0 1px rgba(59,110,245,0.35), 0 12px 30px rgba(59,110,245,0.3)" }}
              >
                <Icon size={22} style={{ color: "#3B6EF5" }} className="mb-4" />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-lg mb-2">
                  {s.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#555C6B" }}>
                  {s.desc}
                </p>
                {s.showPromo && (
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB", textDecoration: "line-through" }}
                      className="text-xs"
                    >
                      {s.originalPrice}
                    </span>
                    {s.discount && (
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded"
                        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#22C55E", background: "rgba(34,197,94,0.12)" }}
                      >
                        {s.discount}
                      </span>
                    )}
                  </div>
                )}
                <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#0F1420" }} className="text-sm font-semibold">
                  {s.promoPrice}
                </p>
                {s.showPromo && (
                  <p
                    className="text-[10px] mt-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623" }}
                  >
                    Por tempo limitado
                  </p>
                )}
                {s.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-1.5 text-xs" style={{ color: "#555C6B" }}>
                        <CheckCircle2 size={12} style={{ color: "#22C55E", marginTop: "2px", flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && (
                  <p className="text-[10px] mt-3" style={{ color: "#8B96AB" }}>
                    {s.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
        <p
          className="text-xs mt-5 text-center"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }}
        >
          * Descontos válidos para clientes que fecham o pacote de 12 meses com manutenção inclusa
        </p>
        <div className="mt-10">
          <CountdownTimer />
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" ref={portfolioSectionRef} className="py-20 relative overflow-hidden" style={{ background: "transparent" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623" }} className="text-xs mb-3">// portfólio</p>
          <motion.h2
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
            className="text-3xl font-semibold mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Estudos de Caso
          </motion.h2>
          <div ref={portfolioRowRef} className="flex overflow-x-auto md:overflow-visible gap-5 pb-4 md:pb-0">
            {projects.map((p) => (
              <motion.div
                key={p.name}
                className="p-6 rounded-lg border flex-shrink-0"
                style={{ borderColor: "#232D42", background: "#0F172A", width: "min(85vw, 380px)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.3)", borderColor: "#3B6EF5" }}
              >
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
                <a
                  href={`#/projeto/${p.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium mt-4"
                  style={{ color: "#3B6EF5" }}
                >
                  Veja como é <ArrowUpRight size={13} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="max-w-6xl mx-auto px-6 py-20 relative" style={{ background: "transparent" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// processo</p>
        <motion.h2
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
          className="text-3xl font-semibold mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Como funciona
        </motion.h2>
        <div className="grid md:grid-cols-5 gap-6">
          {process.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-2xl font-medium mb-3">
                {step.n}
              </p>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }} className="font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: "#B7BFD1" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24" style={{ background: "transparent" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={sobrePanelRef}
            className="sobre-panel p-8 md:p-12"
            style={{ background: "#101830" }}
          >
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// sobre</p>
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
              className="text-3xl font-semibold mb-6"
            >
              Quem é o Design Sites
            </h2>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#B7BFD1" }}
              >
                O Design Sites nasceu para resolver um problema comum: sites bonitos que não convertem, ou sites baratos que não têm cara de profissional. Aqui, cada projeto é acompanhado de perto, do briefing à entrega — sem processos engessados, sem terceirização, sem intermediários. Mais de 3 anos de experiência em desenvolvimento web sustentam um trabalho com foco em dois pilares: atendimento próximo, com resposta rápida e conversa direta em cada etapa, e qualidade técnica, com sites rápidos, responsivos e pensados para gerar resultado real para o seu negócio.
              </p>
              <div
                className="grid grid-cols-3 md:grid-cols-1 gap-3 flex-shrink-0"
                style={{ minWidth: "180px" }}
              >
                <div className="glow-stat-card px-4 py-3 rounded-lg text-center">
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#3B6EF5" }} className="text-xl font-semibold">
                    +3
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#555C6B" }} className="text-[10px] mt-1">
                    anos de experiência
                  </p>
                </div>
                <div className="glow-stat-card px-4 py-3 rounded-lg text-center">
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#22C55E" }} className="text-xl font-semibold">
                    100%
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#555C6B" }} className="text-[10px] mt-1">
                    nota de velocidade no Google
                  </p>
                </div>
                <div className="glow-stat-card px-4 py-3 rounded-lg text-center">
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5A623" }} className="text-xl font-semibold">
                    &lt;24h
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#555C6B" }} className="text-[10px] mt-1">
                    tempo médio de resposta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20 relative" style={{ background: "transparent" }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#3B6EF5" }} className="text-xs mb-3">// perguntas frequentes</p>
        <motion.h2
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
          className="text-3xl font-semibold mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Dúvidas comuns
        </motion.h2>
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} index={i} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="py-20" style={{ background: "#0B1220" }}>
        <div className="max-w-2xl mx-auto px-6">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#F5A623" }} className="text-xs mb-3 text-center">// vamos construir</p>
          <motion.h2
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F5F5F3" }}
            className="text-3xl font-semibold mb-3 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Conte sobre o seu projeto
          </motion.h2>
          <p className="text-center mb-10 text-sm" style={{ color: "#8B96AB" }}>
            Respondemos em até 24h úteis com uma proposta inicial.
          </p>

          {formStatus === "sent" ? (
            <div className="text-center p-8 rounded-lg border" style={{ borderColor: "#232D42", background: "#0F172A" }}>
              <CheckCircle2 size={28} style={{ color: "#22C55E" }} className="mx-auto mb-3" />
              <p style={{ color: "#F5F5F3" }} className="font-medium">Mensagem enviada. Vamos te responder em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="grid gap-4">
              {formStatus === "error" && (
                <p className="text-sm text-center" style={{ color: "#F87171" }}>
                  Não foi possível enviar agora. Tente novamente em instantes.
                </p>
              )}
              <div className="form-input-wrap">
                <div className="relative">
                  <User size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#4a5169", pointerEvents: "none" }} />
                  <input
                    required
                    name="nome"
                    placeholder="Seu nome"
                    className="w-full pl-10 pr-4 py-3 rounded-md text-sm outline-none"
                    style={{ background: "#0F172A", border: "1px solid #232D42", color: "#F5F5F3" }}
                  />
                </div>
              </div>
              <div className="form-input-wrap">
                <div className="relative">
                  <Mail size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#4a5169", pointerEvents: "none" }} />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    className="w-full pl-10 pr-4 py-3 rounded-md text-sm outline-none"
                    style={{ background: "#0F172A", border: "1px solid #232D42", color: "#F5F5F3" }}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  required
                  name="tipo_de_projeto"
                  defaultValue=""
                  className="px-4 py-3 rounded-md text-sm outline-none"
                  style={{ background: "#0F172A", border: "1px solid #232D42", color: "#8B96AB" }}
                >
                  <option value="" disabled>Tipo de projeto</option>
                  <option>Landing page</option>
                  <option>Site institucional</option>
                  <option>E-commerce</option>
                  <option>Manutenção</option>
                  <option>Ainda não sei / preciso de orientação</option>
                </select>
                <select
                  required
                  name="orcamento_estimado"
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
              <p className="text-xs -mt-1" style={{ color: "#8B96AB" }}>
                Não sabe qual serviço combina com o seu negócio? Sem problema — conte o que você precisa e nós te ajudamos a decidir.
              </p>
              <textarea
                required
                name="mensagem"
                placeholder="Conte um pouco sobre o projeto e o prazo desejado"
                rows={4}
                className="px-4 py-3 rounded-md text-sm outline-none resize-none"
                style={{ background: "#0F172A", border: "1px solid #232D42", color: "#F5F5F3" }}
              />
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="px-6 py-3 rounded-md text-sm font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                style={{ background: "#3B6EF5", color: "#fff", opacity: formStatus === "sending" ? 0.7 : 1 }}
              >
                {formStatus === "sending" ? "Enviando..." : "Enviar mensagem"} <Mail size={16} />
              </button>
              <p className="text-[11px] text-center" style={{ color: "#8B96AB" }}>
                Ao enviar, você concorda com os nossos{" "}
                <a href="#/legal" className="underline">Termos de Uso</a> e{" "}
                <a href="#/legal" className="underline">Política de Privacidade</a>.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "transparent" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
            <Logo variant="light" />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs" style={{ color: "#B7BFD1" }}>
              <span className="flex items-center gap-1.5">
                <Mail size={13} style={{ color: "#3B6EF5" }} />
                designsites.digital@gmail.com
              </span>
              <a href="https://wa.me/5551981273330" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
                <MessageCircle size={13} style={{ color: "#3B6EF5" }} />
                (51) 98127-3330
              </a>
              <a href="https://instagram.com/designsites.digital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
                <User size={13} style={{ color: "#3B6EF5" }} />
                @designsites.digital
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} style={{ color: "#3B6EF5" }} />
                Garopaba/SC
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8B96AB" }} className="text-xs">
              © 2026 Design Sites · desenvolvido com <Rocket size={12} className="inline mb-0.5" style={{ color: "#F5A623" }} /> e café
            </p>
            <div className="flex items-center gap-3">
              <a href="#/legal" className="text-xs underline" style={{ color: "#8B96AB" }}>Termos de Uso</a>
              <a href="#/legal" className="text-xs underline" style={{ color: "#8B96AB" }}>Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
      <div ref={(el) => (glassCardRefs.current[0] = el)} className="fixed hidden md:block" style={{ top: "12vh", left: "38%", zIndex: 0, pointerEvents: "none" }}>
        <div className="glass-card" style={{ position: "static", animationDuration: "3s", animationDelay: "0s" }}>
          <Braces size={26} style={{ color: "#FFFFFF" }} />
        </div>
      </div>
      <div ref={(el) => (glassCardRefs.current[1] = el)} className="fixed hidden md:block" style={{ top: "22vh", left: "3%", zIndex: 0, pointerEvents: "none" }}>
        <div className="glass-card" style={{ position: "static", animationDuration: "4.2s", animationDelay: "-1s" }}>
          <Code2 size={26} style={{ color: "#94A3B8" }} />
        </div>
      </div>
      <div ref={(el) => (glassCardRefs.current[2] = el)} className="fixed hidden md:block" style={{ top: "32vh", right: "2%", zIndex: 0, pointerEvents: "none" }}>
        <div className="glass-card" style={{ position: "static", animationDuration: "3.5s", animationDelay: "-2.2s" }}>
          <Layers size={26} style={{ color: "#FFFFFF" }} />
        </div>
      </div>
      <div ref={(el) => (glassCardRefs.current[3] = el)} className="fixed hidden md:block" style={{ top: "70vh", left: "7%", zIndex: 0, pointerEvents: "none" }}>
        <div className="glass-card" style={{ position: "static", animationDuration: "4.6s", animationDelay: "-0.6s" }}>
          <FileCode2 size={26} style={{ color: "#94A3B8" }} />
        </div>
      </div>
      <div ref={(el) => (glassCardRefs.current[4] = el)} className="fixed hidden md:block" style={{ top: "62vh", left: "40%", zIndex: 0, pointerEvents: "none" }}>
        <div className="glass-card" style={{ position: "static", animationDuration: "3.8s", animationDelay: "-1.8s" }}>
          <Hourglass size={26} style={{ color: "#FFFFFF" }} />
        </div>
      </div>
      <WhatsAppButton />
      <CustomCursor />
    </div>
  );
}