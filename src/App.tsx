import imgCanvas from './assets/new3.png';      // Mundo de Valdória canvas
import imgWelcome from './assets/new2.png';     // Boas-vindas
import imgCampaign from './assets/new1.png';    // Selecionar campanha
import imgShare from './assets/new4.png';       // Compartilhar
import imgMorwen from './assets/new5.png';      // Morwen a Arquimaga
import imgTimeline from './assets/timeline.png'; // Linha do tempo

// Simple app-window chrome — no laptop border
function AppWindow({ src, alt, className = '', zoom = false }: {
  src: string; alt: string; className?: string; zoom?: boolean;
}) {
  return (
    <div className={`rounded-xl overflow-hidden border border-gray-200 bg-[#F0F0F2] shadow-xl ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#EBEBED] border-b border-gray-200/80">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[10px] text-gray-400 font-medium tracking-wide">Atium RPG Manager</span>
      </div>
      <div className="overflow-hidden" style={zoom ? { maxHeight: '200px' } : {}}>
        <img
          src={src}
          alt={alt}
          className="w-full block"
          style={zoom ? { objectFit: 'cover', objectPosition: '60% 40%', height: '200px' } : {}}
          draggable={false}
        />
      </div>
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────

const IconDownload = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const IconMap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);

const IconScroll = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconPlay = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="6 3 20 12 6 21 6 3"/>
  </svg>
);

const IconShare = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-[#F8F9FC] min-h-screen overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1E88E5] flex items-center justify-center" style={{ boxShadow: '0 0 16px rgba(30,136,229,0.35)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }} className="text-lg tracking-tight text-[#0D0D0D]">
              Atium <span className="text-[#1E88E5]">RPG</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#recursos" className="hover:text-[#1E88E5] transition-colors">Recursos</a>
            <a href="#como-funciona" className="hover:text-[#1E88E5] transition-colors">Como funciona</a>
          </div>

          <a href="#baixar" className="flex items-center gap-2 bg-[#1E88E5] hover:bg-[#1565C0] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm">
            <IconDownload />
            Baixar grátis
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-20 pb-28 px-6 overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(30,136,229,0.11) 0%, transparent 70%)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1E88E5] opacity-[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-[#1E88E5] opacity-[0.06] blur-[80px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-[#E3F2FD] text-[#1E88E5] px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Sua aventura começa aqui
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center font-black leading-[1.05] text-[#0D0D0D] mx-auto max-w-4xl"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(44px, 7vw, 88px)' }}>
            Organize suas{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#1E88E5]">campanhas</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="7" viewBox="0 0 200 7" preserveAspectRatio="none">
                <path d="M0 5 Q100 0 200 5" stroke="#1E88E5" strokeWidth="2.5" fill="none" opacity="0.4"/>
              </svg>
            </span>
            {' '}de RPG
          </h1>

          <p className="text-center text-gray-500 text-lg md:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
            Crie mundos, gerencie personagens e compartilhe aventuras com seu grupo — tudo em um único lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="#baixar" className="flex items-center gap-2 bg-[#1E88E5] hover:bg-[#1565C0] text-white px-8 py-4 rounded-2xl font-bold text-base transition-all shadow-lg"
              style={{ boxShadow: '0 0 36px rgba(30,136,229,0.28), 0 8px 24px rgba(30,136,229,0.2)' }}>
              <IconDownload />
              Baixar
            </a>
            <a href="#como-funciona" className="text-gray-600 hover:text-[#1E88E5] px-6 py-4 rounded-2xl font-semibold text-base transition-colors border border-gray-200 hover:border-[#1E88E5] bg-white">
              Ver como funciona →
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#1E88E5] px-6 py-4 rounded-2xl font-semibold text-base transition-colors border border-gray-200 hover:border-[#1E88E5] bg-white">
              <IconPlay />
              Ver pitch
            </a>
          </div>

          {/* Hero mockup — canvas map, largest image on the page */}
          <div className="mt-16 relative">
            <div className="absolute inset-x-0 top-8 flex justify-center pointer-events-none">
              <div className="w-[70%] h-48 rounded-full bg-[#1E88E5] opacity-[0.07] blur-[70px]" />
            </div>
            <AppWindow
              src={imgCanvas}
              alt="Mapa do Mundo de Valdória no Atium RPG Manager"
              className="max-w-[1000px] mx-auto relative"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="recursos" className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1E88E5] font-semibold text-sm uppercase tracking-widest">Recursos</span>
            <h2 className="font-black text-[#0D0D0D] mt-3" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)' }}>
              Tudo que sua mesa precisa
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-lg mx-auto">
              Ferramentas pensadas para mestres e jogadores que levam a aventura a sério.
            </p>
          </div>

          {/* 4 feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                icon: <IconMap />,
                title: 'Mapa do mundo',
                desc: 'Monte seu mundo em um canvas visual, escolha um ícone para cada personagem, lugar, item ou evento e conecte tudo.',
              },
              {
                icon: <IconScroll />,
                title: 'Fichas e anotações',
                desc: 'Cada elemento tem sua própria página com descrição, tags e visualização em grafo.',
              },
              {
                icon: <IconClock />,
                title: 'Linha do tempo',
                desc: 'Organize os eventos da campanha em ordem cronológica e acompanhe a história com clareza.',
              },
              {
                icon: <IconShare />,
                title: 'Compartilhamento na rede',
                desc: 'Envie arquivos da campanha para outros dispositivos da mesa.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="w-11 h-11 rounded-xl bg-[#E3F2FD] flex items-center justify-center mb-4 text-[#1E88E5]"
                  style={{ boxShadow: '0 0 16px rgba(30,136,229,0.18)' }}>
                  {icon}
                </div>
                <h3 className="font-bold text-base text-[#0D0D0D] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Screenshot showcase for all 4 image-backed features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mapa do mundo — zoomed in on connections */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#1E88E5] uppercase tracking-wider px-1">Mapa do mundo</p>
              <AppWindow
                src={imgCanvas}
                alt="Canvas do mapa do Mundo de Valdória com conexões entre elementos"
                zoom={true}
                className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              />
            </div>
            {/* Fichas e anotações */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#1E88E5] uppercase tracking-wider px-1">Fichas e anotações</p>
              <AppWindow
                src={imgMorwen}
                alt="Ficha da personagem Morwen a Arquimaga"
                className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              />
            </div>
            {/* Linha do tempo */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#1E88E5] uppercase tracking-wider px-1">Linha do tempo</p>
              <AppWindow
                src={imgTimeline}
                alt="Linha do tempo com eventos da campanha em ordem cronológica"
                className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              />
            </div>
            {/* Compartilhamento */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-[#1E88E5] uppercase tracking-wider px-1">Compartilhamento na rede</p>
              <AppWindow
                src={imgShare}
                alt="Tela de compartilhamento de campanha na rede local"
                className="transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="como-funciona" className="py-24 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1E88E5] font-semibold text-sm uppercase tracking-widest">Como funciona</span>
            <h2 className="font-black text-[#0D0D0D] mt-3" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(32px, 4vw, 48px)' }}>
              Pronto para jogar em minutos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* dashed connector — desktop */}
            <div className="hidden md:block absolute top-[26px] left-[calc(33.3%+24px)] right-[calc(33.3%+24px)] h-px border-t-2 border-dashed border-[#1E88E5] opacity-25" />

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-[#1E88E5] text-white mb-6 shadow-lg"
                style={{ width: 52, height: 52, boxShadow: '0 0 20px rgba(30,136,229,0.3)' }}>
                <span className="font-black text-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>1</span>
              </div>
              <AppWindow src={imgCampaign} alt="Seleção de campanhas" className="w-full mb-5" />
              <h3 className="font-bold text-lg text-[#0D0D0D] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Crie sua campanha</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Dê um nome, escolha uma pasta e comece a construir seu mundo. Suas campanhas anteriores aparecem sempre à mão.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center rounded-2xl bg-[#1E88E5] text-white mb-6 shadow-lg"
                style={{ width: 52, height: 52, boxShadow: '0 0 20px rgba(30,136,229,0.3)' }}>
                <span className="font-black text-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>2</span>
              </div>
              <AppWindow src={imgCanvas} alt="Canvas do mapa do mundo" className="w-full mb-5" />
              <h3 className="font-bold text-lg text-[#0D0D0D] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Monte seu mundo</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Use o canvas visual para adicionar personagens, locais, itens e eventos — e conecte tudo com linhas de narrativa.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center rounded-2xl bg-[#1E88E5] text-white mb-6 shadow-lg"
                style={{ width: 52, height: 52, boxShadow: '0 0 20px rgba(30,136,229,0.3)' }}>
                <span className="font-black text-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>3</span>
              </div>
              <AppWindow src={imgShare} alt="Tela de compartilhamento com a mesa" className="w-full mb-5" />
              <h3 className="font-bold text-lg text-[#0D0D0D] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Compartilhe com a mesa</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Ative o compartilhamento e envie toda a campanha para os outros jogadores na mesma rede.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="baixar" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5] to-[#1565C0]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white opacity-[0.06] blur-[100px]" />

        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text + button */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Gratuito
            </div>
            <h2 className="font-black text-white leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(36px, 5vw, 60px)' }}>
              Pronto para sua próxima aventura?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Baixe o Atium RPG Manager e comece a organizar suas campanhas com o poder que elas merecem.
            </p>
            <a href="#" className="inline-flex items-center gap-3 bg-white text-[#1E88E5] hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl">
              <IconDownload />
              Baixar
            </a>
            <p className="text-blue-200 text-sm mt-4">Windows 10 ou superior / Linux</p>
          </div>

          {/* Welcome screen mockup */}
          <div className="hidden lg:block">
            <AppWindow
              src={imgWelcome}
              alt="Tela de boas-vindas do Atium RPG Manager"
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0D0D0D] text-gray-400 py-12 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1E88E5] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <span className="font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Atium RPG Manager</span>
          </div>

          <p className="text-sm text-center">Feito com ❤️ para mestres e aventureiros · v0.0.3</p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
