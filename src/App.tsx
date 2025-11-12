import React, { useState } from 'react';

const Header: React.FC = () => (
  <header className="bg-brand-dark text-center py-4 shadow-md">
    <div className="container mx-auto">
       <h1 className="text-white text-3xl font-bold tracking-wider">Coach Consultoria</h1>
       <p className="text-gray-300 text-sm opacity-80">Transformando negócios, construindo futuro!</p>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <div className="bg-brand-dark text-white py-12 px-5 text-center">
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl mx-auto leading-tight">
        Curso Prático: Domine a Emissão de NFS-e no Portal Nacional
      </h1>
      <p className="max-w-3xl mx-auto mb-8 text-gray-200 text-lg">
        Um passo a passo direto ao ponto para você emitir suas notas sem erros, evitar multas e destravar seus pagamentos.
      </p>
      <div className="bg-white text-brand-text-main rounded-2xl p-6 max-w-md mx-auto shadow-2xl text-center">
        <p className="text-xs uppercase text-brand-text-muted font-semibold tracking-widest">INVESTIMENTO ÚNICO</p>
        <div className="text-6xl font-black my-2 text-brand-dark">R$ 97,00</div>
        <p className="mb-4 text-brand-text-muted">Acesso imediato, vitalício e com certificado de conclusão.</p>
        <a
            href="https://seu-link-de-checkout.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-accent text-white rounded-xl py-4 px-8 font-bold cursor-pointer transition-transform duration-150 ease-out hover:scale-105 shadow-lg text-lg w-full">
          Quero Emitir Minha NFS-e Agora
        </a>
        <p className="text-sm text-brand-text-muted mt-4">
          Pagamento seguro. Acesso liberado na hora.
        </p>
      </div>
    </div>
  </div>
);

const VSLSection: React.FC = () => {
    const videoId = "TB47nc-mzvM";
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayClick = () => {
        setShowVideo(true);
    };

    return (
        <section className="py-12 md:py-16 bg-brand-light">
            <div className="container mx-auto px-5 text-center">
                 <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Veja como é simples destravar a emissão de notas</h2>
                 <p className="max-w-2xl mx-auto text-brand-text-muted mb-8">Neste vídeo, nossa especialista explica o caminho para você dominar o Portal Nacional de NFS-e de uma vez por todas.</p>

                {/* Player Vertical para YouTube Shorts */}
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-[360px] mx-auto" style={{ aspectRatio: '9/16' }}>
                        <div className="absolute inset-0 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                            {showVideo ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&controls=1&modestbranding=1`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube Shorts video player"
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            ) : (
                                <div className="absolute inset-0 w-full h-full">
                                    {/* Thumbnail do vídeo */}
                                    <div
                                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)` }}
                                    ></div>

                                    {/* Overlay escuro */}
                                    <div className="absolute inset-0 bg-brand-dark bg-opacity-50"></div>

                                    {/* Botão de Play centralizado */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={handlePlayClick}
                                            className="group relative"
                                            aria-label="Reproduzir vídeo"
                                        >
                                            {/* Círculo do botão */}
                                            <div className="relative bg-white rounded-full p-6 shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-accent">
                                                {/* Ícone de Play */}
                                                <svg
                                                    className="w-12 h-12 text-brand-dark group-hover:text-white transition-colors"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                                                </svg>

                                                {/* Pulso animado */}
                                                <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
                                            </div>

                                            {/* Texto abaixo do botão */}
                                            <p className="mt-4 text-white font-bold text-sm tracking-wide uppercase">
                                                Assistir agora
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MentorSection: React.FC = () => (
    <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-8 text-center">Conheça sua mentora, Elisangela Nilo</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/3 text-center">
                    <img src="https://picsum.photos/seed/elisangela/400/400" alt="Foto de Elisangela Nilo" className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover shadow-xl border-4 border-brand-primary"/>
                </div>
                <div className="md:w-2/3">
                    <p className="text-brand-text-main mb-4 text-lg">
                        Com mais de 15 anos de experiência em consultoria fiscal e contábil, <strong>Elisangela Nilo</strong> é uma autoridade quando o assunto é simplificar a burocracia tributária no Brasil.
                    </p>
                    <p className="text-brand-text-main mb-4">
                        Sua paixão é traduzir o "contabilês" para uma linguagem que qualquer empreendedor possa entender e aplicar, evitando multas e otimizando processos.
                    </p>
                    <p className="text-brand-text-muted italic bg-brand-light p-4 rounded-lg border-l-4 border-brand-secondary">
                        "Meu objetivo é dar autonomia para que você resolva as questões fiscais do dia a dia com segurança e agilidade, sem depender de consultores para cada pequena dúvida."
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({ id, title, children, className = 'bg-white' }) => (
  <section id={id} className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-5">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center">{title}</h2>
      {children}
    </div>
  </section>
);

const Card: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white border border-gray-200/50 rounded-xl p-6 shadow-sm transition-shadow hover:shadow-lg text-center">
    <div className="flex justify-center mb-4">
        <div className="bg-brand-primary text-white rounded-full p-3">
            {icon}
        </div>
    </div>
    <h3 className="font-bold text-lg text-brand-dark mb-2">{title}</h3>
    <p className="text-brand-text-muted">{children}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-white text-brand-text-main font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <VSLSection />

        <Section id="carta" title="Cansado de travar na hora de emitir notas?">
          <div className="prose max-w-3xl mx-auto text-brand-text-main text-center">
            <p className="text-lg">
              Se o Portal Nacional parece um labirinto, você se perde nos campos novos, teme a Reforma Tributária ou já ouviu frases como "O portal não deixa emitir!" ou "Onde baixo o XML?", <strong>este curso é a sua saída.</strong>
            </p>
          </div>
        </Section>

        <MentorSection />

        <Section id="conteudo" title="O que você vai aprender na prática" className="bg-brand-light">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card title="Portal Nacional da NFS-e" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}>
              Acesso, configurações iniciais e visão geral do sistema.
            </Card>
            <Card title="Emissão Correta (Simples Nacional)" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
              Passo a passo completo para emitir no modelo nacional sem erros.
            </Card>
            <Card title="Conferência, DANFE e XML" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>}>
              Como gerar o PDF, baixar o XML e enviar ao cliente corretamente.
            </Card>
            <Card title="Cancelamento e Retificação" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
              Aprenda a corrigir notas emitidas e quando é possível cancelar.
            </Card>
          </div>
        </Section>

        <Section id="resultado" title="Com este curso, você vai:">
            <div className="max-w-2xl mx-auto">
                <ul className="space-y-4">
                    <li className="flex items-start"><span className="text-brand-accent mr-3 mt-1">✔</span>Emitir e conferir notas fiscais de serviço <strong>sem depender de ninguém</strong>.</li>
                    <li className="flex items-start"><span className="text-brand-accent mr-3 mt-1">✔</span>Evitar erros que <strong>travam o recebimento</strong> junto ao seu cliente.</li>
                    <li className="flex items-start"><span className="text-brand-accent mr-3 mt-1">✔</span>Garantir que sua empresa esteja <strong>100% adaptada à Reforma Tributária</strong>.</li>
                    <li className="flex items-start"><span className="text-brand-accent mr-3 mt-1">✔</span><strong>Economizar tempo e dinheiro</strong> ao resolver problemas de emissão por conta própria.</li>
                </ul>
            </div>
             <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-primary">
                <p className="text-lg italic text-brand-text-main">
                  "Aprendi em menos de 30 minutos a emitir notas corretas pelo Portal Nacional. Simples, direto e 100% aplicável!"
                </p>
                <p className="text-right font-bold text-brand-text-muted mt-2">- Joana S., Gerente Financeira</p>
            </div>
        </Section>


        <Section id="comprar" className="bg-brand-dark text-center">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para destravar suas notas fiscais?</h2>
            <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg">Faça sua inscrição agora e tenha acesso imediato ao treinamento completo.</p>
            <a
              href="https://seu-link-de-checkout.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-accent text-white rounded-xl py-4 px-10 font-bold cursor-pointer transition-transform duration-150 ease-out hover:scale-105 shadow-xl text-xl">
              COMPRAR AGORA POR R$ 97,00
            </a>
            <p className="text-xs text-gray-400 mt-4">
              Pagamento seguro | 7 dias de garantia | Acesso vitalício
            </p>
          </div>
        </Section>
      </main>

      <footer className="bg-brand-dark text-gray-300 text-center py-8 px-5 border-t border-white/10">
        Coach Consultoria Empresarial — Transformando negócios, construindo futuro!
      </footer>
    </div>
  );
};

export default App;
