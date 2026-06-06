export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="border-b border-rule px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-display font-black text-navy">haul.ai</div>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#features" className="text-navy hover:text-green">Features</a>
            <a href="#pricing" className="text-navy hover:text-green">Pricing</a>
            <a href="#" className="text-muted hover:text-navy">About</a>
          </nav>
          <a href="/app" className="px-4 py-2 bg-navy text-white text-sm rounded-sm hover:bg-opacity-90">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 px-4 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-display font-black text-navy leading-tight mb-4">
              The AI Dispatch Network for Trucking
            </h1>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              Autonomous load negotiation. Real-time market intelligence. Community insights from 609 carriers. 11 intelligence layers. Zero latency.
            </p>
            <div className="flex gap-4">
              <a href="/app" className="px-6 py-3 bg-green text-white font-semibold rounded-sm hover:bg-opacity-90">
                Start Free Trial
              </a>
              <a href="#" className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded-sm hover:bg-off-white">
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4 py-24 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-black text-navy mb-16">
            Why Carriers Choose Haul.AI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white border-l-3 border-green">
              <h3 className="text-xl font-display font-bold text-navy mb-2">Cost Intelligence</h3>
              <p className="text-muted text-sm leading-relaxed">
                Live fuel costs, tolls, driver rates. Real margins every load. Never lose money again.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white border-l-3 border-green">
              <h3 className="text-xl font-display font-bold text-navy mb-2">Market Intelligence</h3>
              <p className="text-muted text-sm leading-relaxed">
                DAT rates, community benchmarks, broker pricing patterns. Anchor at market, not hope.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white border-l-3 border-green">
              <h3 className="text-xl font-display font-bold text-navy mb-2">Broker Psychology</h3>
              <p className="text-muted text-sm leading-relaxed">
                Anonymous community fingerprint. Know how each broker negotiates before you call.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-white border-l-3 border-amber">
              <h3 className="text-xl font-display font-bold text-navy mb-2">Temporal Intelligence</h3>
              <p className="text-muted text-sm leading-relaxed">
                Thursday 3-6PM? Aggressive. Friday after 3PM? Maximum. Broker desperation timing.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-white border-l-3 border-amber">
              <h3 className="text-xl font-display font-bold text-navy mb-2">Supply-Demand Micro</h3>
              <p className="text-muted text-sm leading-relaxed">
                Lane L/T ratios, weather events, port congestion. What brokers face right now.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-white border-l-3 border-amber">
              <h3 className="text-xl font-display font-bold text-navy mb-2">Autonomous Negotiation</h3>
              <p className="text-muted text-sm leading-relaxed">
                Email agent works 24/7. You get notified. No back-and-forth. Smart counteroffers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="px-4 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-black text-navy mb-4">
            Simple Pricing. No Surprises.
          </h2>
          <p className="text-lg text-muted mb-12">
            Pick a plan. Add your fleet. Start getting smarter rates today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="p-6 border border-rule rounded-sm">
              <h3 className="text-lg font-display font-bold text-navy mb-2">Starter</h3>
              <div className="text-3xl font-display font-black text-navy mb-1">$99</div>
              <p className="text-sm text-muted mb-4">/month</p>
              <p className="text-xs text-muted mb-4">1–3 trucks</p>
              <ul className="space-y-2 text-sm text-navy mb-6">
                <li>✓ Email negotiation</li>
                <li>✓ Load scoring</li>
                <li>✓ DAT access</li>
                <li>✓ Community read</li>
              </ul>
              <a href="/app" className="block text-center px-4 py-2 bg-navy text-white rounded-sm text-sm font-semibold hover:bg-opacity-90">
                Start Now
              </a>
            </div>

            {/* Growth */}
            <div className="p-6 border-2 border-green rounded-sm ring-1 ring-green ring-opacity-10">
              <div className="mb-4">
                <span className="inline-block px-2 py-1 bg-green text-white text-xs font-bold rounded-sm">Popular</span>
              </div>
              <h3 className="text-lg font-display font-bold text-navy mb-2">Growth</h3>
              <div className="text-3xl font-display font-black text-navy mb-1">$299</div>
              <p className="text-sm text-muted mb-4">/month</p>
              <p className="text-xs text-muted mb-4">4–15 trucks</p>
              <ul className="space-y-2 text-sm text-navy mb-6">
                <li>✓ Everything in Starter</li>
                <li>✓ Voice agent</li>
                <li>✓ Document parsing</li>
                <li>✓ ELD + driver data</li>
                <li>✓ Check calls</li>
              </ul>
              <a href="/app" className="block text-center px-4 py-2 bg-green text-white rounded-sm text-sm font-semibold hover:bg-opacity-90">
                Start Now
              </a>
            </div>

            {/* Fleet */}
            <div className="p-6 border border-rule rounded-sm">
              <h3 className="text-lg font-display font-bold text-navy mb-2">Fleet</h3>
              <div className="text-3xl font-display font-black text-navy mb-1">$799</div>
              <p className="text-sm text-muted mb-4">/month</p>
              <p className="text-xs text-muted mb-4">16–50 trucks</p>
              <ul className="space-y-2 text-sm text-navy mb-6">
                <li>✓ Everything in Growth</li>
                <li>✓ Driver app</li>
                <li>✓ Factoring platform</li>
                <li>✓ Analytics</li>
                <li>✓ API access</li>
              </ul>
              <a href="/app" className="block text-center px-4 py-2 bg-navy text-white rounded-sm text-sm font-semibold hover:bg-opacity-90">
                Start Now
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-6 border border-rule rounded-sm">
              <h3 className="text-lg font-display font-bold text-navy mb-2">Enterprise</h3>
              <div className="text-xl font-display font-bold text-navy mb-4">Custom pricing</div>
              <p className="text-xs text-muted mb-4">50+ trucks or white-label</p>
              <ul className="space-y-2 text-sm text-navy mb-6">
                <li>✓ Dispatch service co.</li>
                <li>✓ White-label solution</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom integrations</li>
                <li>✓ SLA guarantee</li>
              </ul>
              <a href="mailto:hello@haulai.com" className="block text-center px-4 py-2 bg-navy text-white rounded-sm text-sm font-semibold hover:bg-opacity-90">
                Contact Sales
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-muted mt-8">
            First 50 carriers: <span className="font-semibold text-navy">30% off forever</span>. Founding member pricing locked in.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-black mb-4">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-lg text-off-white mb-8">
            Every carrier in the top 1% uses market data. Haul.AI gives you 11 layers. Start your free trial today.
          </p>
          <a href="/app" className="inline-block px-8 py-4 bg-green text-white font-semibold rounded-sm text-lg hover:bg-opacity-90">
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-rule bg-off-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-muted">
          <div className="text-navy font-semibold">haul.ai</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy">Privacy</a>
            <a href="#" className="hover:text-navy">Terms</a>
            <a href="mailto:support@haulai.com" className="hover:text-navy">Support</a>
          </div>
          <div>© 2026 Haul Intelligence LLC</div>
        </div>
      </footer>
    </div>
  );
}
