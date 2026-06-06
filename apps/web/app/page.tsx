export default function Home() {
  return (
    <main className="min-h-screen bg-off-white font-sans">
      {/* NAV */}
      <nav className="bg-navy border-b-4 border-green px-6 py-4 flex items-center justify-between">
        <span className="font-display text-white text-2xl font-black tracking-tight">
          HAUL<span className="text-green">.</span>AI
        </span>
        <div className="flex gap-8 items-center">
          <a href="#features" className="text-white/70 hover:text-white text-sm font-semibold tracking-wide uppercase">Features</a>
          <a href="#pricing" className="text-white/70 hover:text-white text-sm font-semibold tracking-wide uppercase">Pricing</a>
          <a href="#about" className="text-white/70 hover:text-white text-sm font-semibold tracking-wide uppercase">About</a>
          <a href="/pricing" className="bg-green text-white px-5 py-2 text-sm font-bold tracking-wide uppercase hover:bg-green-dk transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* TICKER TAPE */}
      <div className="bg-navy-mid h-8 flex items-center overflow-hidden">
        <div className="whitespace-nowrap text-white/60 text-xs font-mono animate-pulse px-4">
          AI negotiating Detroit → Bessemer · $2,350 counter sent · Broker accepted · Conway → Waco booked at $1,800 · Check call sent to ADL · POD submitted to LogisticsOne ·
        </div>
      </div>

      {/* HERO */}
      <section className="bg-navy px-8 py-24 text-center">
        <p className="text-green text-sm font-bold tracking-widest uppercase mb-4">
          The AI Dispatch Network for Trucking
        </p>
        <h1 className="font-display text-white text-6xl font-black leading-tight mb-6">
          Your AI Dispatcher.<br />Never Sleeps.
        </h1>
        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-4">
          Autonomous load negotiation. Real-time market intelligence.
          Community insights from 609 carriers. 11 intelligence layers.
        </p>
        <p className="text-white/50 text-base max-w-xl mx-auto mb-10">
          Dispatch service costs <span className="text-danger font-bold">$25,000/year</span>.
          Haul.AI costs <span className="text-green font-bold">$1,188/year</span>.
          Payback in 5 days.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/pricing" className="bg-green text-white px-8 py-4 font-bold text-lg uppercase tracking-wide hover:bg-green-dk transition-colors">
            Start Free Trial
          </a>
          <a href="#features" className="border-2 border-white/40 text-white px-8 py-4 font-bold text-lg uppercase tracking-wide hover:border-white transition-colors">
            Watch Demo
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted text-sm font-bold tracking-widest uppercase text-center mb-12">
            The Problem
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { stat: '$25K', label: 'Average annual cost of a dispatch service at 5-8% gross' },
              { stat: '7 hrs', label: 'Hours per day a dispatcher spends on calls and emails' },
              { stat: '$470', label: 'Short-paid by GlobalTranz for missing BOL times — real incident' },
            ].map((item, i) => (
              <div key={i} className="border border-rule p-8 text-center">
                <div className="font-display text-danger text-6xl font-black mb-3">{item.stat}</div>
                <p className="text-muted text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-off-white px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted text-sm font-bold tracking-widest uppercase text-center mb-4">
            11 Intelligence Layers
          </p>
          <h2 className="font-display text-navy text-5xl font-black text-center mb-12">
            Why Carriers Choose Haul.AI
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Cost Intelligence', desc: 'Live EIA fuel prices × exact truck miles. Real floor rate every load. Never lose money again.' },
              { title: 'Market Intelligence', desc: 'DAT RateView + community benchmarks. Know what the market pays before you pick up the phone.' },
              { title: 'Broker Psychology', desc: 'Anonymous community fingerprints. Know how each broker negotiates before the first word is sent.' },
              { title: 'Temporal Intelligence', desc: 'Thursday 3-6PM? Aggressive. Friday after 3PM? Maximum. We know when brokers are desperate.' },
              { title: 'Supply-Demand Micro', desc: 'Lane L/T ratios, weather events, port congestion. What brokers face right now.' },
              { title: 'Autonomous Negotiation', desc: 'Email agent works 24/7. You get notified. No back-and-forth. Smart counteroffers every time.' },
            ].map((f, i) => (
              <div key={i} className="bg-white border border-rule p-6 border-l-4 border-l-green">
                <h3 className="font-display text-navy text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section id="pricing" className="bg-navy px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green text-sm font-bold tracking-widest uppercase mb-4">Simple Pricing</p>
          <h2 className="font-display text-white text-5xl font-black mb-4">No Surprises.</h2>
          <p className="text-white/60 mb-12">Pick a plan. Add your fleet. Start getting smarter rates today.</p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Starter', price: '$99', trucks: '1–3 trucks', popular: false },
              { name: 'Growth', price: '$299', trucks: '4–15 trucks', popular: true },
              { name: 'Fleet', price: '$799', trucks: '16–50 trucks', popular: false },
            ].map((plan, i) => (
              <div key={i} className={`p-8 border-2 ${plan.popular ? 'border-green bg-navy-mid' : 'border-rule/30 bg-navy-lt/30'}`}>
                {plan.popular && <p className="text-green text-xs font-bold tracking-widest uppercase mb-3">Most Popular</p>}
                <div className="font-display text-white text-2xl font-black mb-1">{plan.name}</div>
                <div className="font-display text-green text-5xl font-black">{plan.price}</div>
                <div className="text-white/40 text-sm mb-6">/month · {plan.trucks}</div>
                <a href="/pricing" className={`block py-3 font-bold text-sm uppercase tracking-wide text-center ${plan.popular ? 'bg-green text-white hover:bg-green-dk' : 'border border-white/30 text-white hover:border-white'} transition-colors`}>
                  Start Now
                </a>
              </div>
            ))}
          </div>
          <a href="/pricing" className="text-white/50 text-sm hover:text-white underline">
            View full comparison →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy border-t border-rule/20 px-8 py-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-display text-white text-xl font-black">
            HAUL<span className="text-green">.</span>AI
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-white">Privacy</a>
            <a href="#" className="text-white/40 text-sm hover:text-white">Terms</a>
            <a href="mailto:support@haulai.com" className="text-white/40 text-sm hover:text-white">support@haulai.com</a>
          </div>
          <p className="text-white/30 text-xs">© 2026 Haul Intelligence LLC</p>
        </div>
      </footer>
    </main>
  );
}
