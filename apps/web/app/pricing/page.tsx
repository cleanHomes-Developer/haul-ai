export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-rule px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-display font-black text-navy">haul.ai</a>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/" className="text-navy hover:text-green">Home</a>
            <a href="/#features" className="text-navy hover:text-green">Features</a>
            <a href="/pricing" className="text-green font-semibold">Pricing</a>
          </nav>
          <a href="/app" className="px-4 py-2 bg-navy text-white text-sm rounded-sm hover:bg-opacity-90">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-16 bg-white border-b border-rule">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-display font-black text-navy mb-4">
            Pricing Made Simple
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Pick a plan based on your fleet size. Upgrade anytime. No contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="flex flex-col p-6 border border-rule rounded-sm hover:border-green transition-colors">
              <h3 className="text-lg font-display font-bold text-navy mb-2">Starter</h3>
              <div className="text-4xl font-display font-black text-navy mb-1">$99</div>
              <p className="text-sm text-muted mb-1">/month</p>
              <p className="text-xs text-muted mb-8">1–3 trucks</p>

              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Email Negotiation Agent</div>
                    <div className="text-xs text-muted">24/7 autonomous load negotiation</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Load Scoring</div>
                    <div className="text-xs text-muted">Cost intelligence + market rates</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">DAT Access</div>
                    <div className="text-xs text-muted">7 & 30-day rate data</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Community Read</div>
                    <div className="text-xs text-muted">Broker insights (anonymized)</div>
                  </div>
                </div>
              </div>

              <a href="/app" className="w-full px-4 py-2 bg-navy text-white rounded-sm text-sm font-semibold hover:bg-opacity-90 text-center">
                Start Now
              </a>
            </div>

            {/* Growth — Popular */}
            <div className="flex flex-col p-6 border-2 border-green rounded-sm ring-1 ring-green ring-opacity-10">
              <div className="inline-block w-fit px-2 py-1 bg-green text-white text-xs font-bold rounded-sm mb-3">
                Most Popular
              </div>
              <h3 className="text-lg font-display font-bold text-navy mb-2">Growth</h3>
              <div className="text-4xl font-display font-black text-navy mb-1">$299</div>
              <p className="text-sm text-muted mb-1">/month</p>
              <p className="text-xs text-muted mb-8">4–15 trucks</p>

              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Everything in Starter</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Voice Negotiation Agent</div>
                    <div className="text-xs text-muted">Bland.ai + Vapi backup</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Document Parsing</div>
                    <div className="text-xs text-muted">Rate confirmations, BOL, POD</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">ELD + Driver Data</div>
                    <div className="text-xs text-muted">Samsara & Motive integration</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Check Calls</div>
                    <div className="text-xs text-muted">Factoring + reference calls</div>
                  </div>
                </div>
              </div>

              <a href="/app" className="w-full px-4 py-2 bg-green text-white rounded-sm text-sm font-semibold hover:bg-opacity-90 text-center">
                Start Now
              </a>
            </div>

            {/* Fleet */}
            <div className="flex flex-col p-6 border border-rule rounded-sm hover:border-green transition-colors">
              <h3 className="text-lg font-display font-bold text-navy mb-2">Fleet</h3>
              <div className="text-4xl font-display font-black text-navy mb-1">$799</div>
              <p className="text-sm text-muted mb-1">/month</p>
              <p className="text-xs text-muted mb-8">16–50 trucks</p>

              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Everything in Growth</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Driver Mobile App</div>
                    <div className="text-xs text-muted">Real-time load visibility</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Factoring Platform</div>
                    <div className="text-xs text-muted">RTS Financial + OTR Solutions</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Analytics Dashboard</div>
                    <div className="text-xs text-muted">Rate trends, margins, performance</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">API Access</div>
                    <div className="text-xs text-muted">Custom integrations allowed</div>
                  </div>
                </div>
              </div>

              <a href="/app" className="w-full px-4 py-2 bg-navy text-white rounded-sm text-sm font-semibold hover:bg-opacity-90 text-center">
                Start Now
              </a>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col p-6 border border-rule rounded-sm hover:border-green transition-colors">
              <h3 className="text-lg font-display font-bold text-navy mb-2">Enterprise</h3>
              <div className="text-2xl font-display font-bold text-navy mb-4">Custom</div>
              <p className="text-xs text-muted mb-8">50+ trucks or<br />dispatch services</p>

              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Dispatch Service Co.</div>
                    <div className="text-xs text-muted">White-label solution</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Custom Integrations</div>
                    <div className="text-xs text-muted">Unlimited API calls</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Dedicated Support</div>
                    <div className="text-xs text-muted">Slack channel + 48-hour SLA</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green font-bold mt-1">✓</span>
                  <div className="text-sm text-navy">
                    <div className="font-semibold">Training & Onboarding</div>
                    <div className="text-xs text-muted">Team calls included</div>
                  </div>
                </div>
              </div>

              <a href="mailto:hello@haulai.com" className="w-full px-4 py-2 bg-navy text-white rounded-sm text-sm font-semibold hover:bg-opacity-90 text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Member Note */}
      <section className="px-4 py-16 bg-off-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-6 bg-white border-l-3 border-green rounded-sm">
            <h3 className="text-lg font-display font-bold text-navy mb-2">Founding Member Special</h3>
            <p className="text-muted mb-0">
              First 50 carriers get <span className="font-semibold text-navy">30% off forever</span>. This pricing is locked in for life. No increases. Ever.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-black text-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-navy mb-2">Can I switch plans?</h3>
              <p className="text-muted text-sm">Yes. Change anytime. We'll prorate the difference. No questions asked.</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy mb-2">What if I cancel?</h3>
              <p className="text-muted text-sm">You keep your data. Export anytime. No exit fees. Your choice, your data.</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy mb-2">Do you offer custom pricing?</h3>
              <p className="text-muted text-sm">Yes, for dispatch service companies and carriers 50+ trucks. Email hello@haulai.com to discuss.</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy mb-2">Is there a setup fee?</h3>
              <p className="text-muted text-sm">No setup fee. No hidden fees. Just the monthly plan. Simple.</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy mb-2">What happens with my historical data?</h3>
              <p className="text-muted text-sm">We retain your negotiation history forever. You own it. Use it for analysis, arbitration, anything.</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy mb-2">Do you offer annual discounts?</h3>
              <p className="text-muted text-sm">Not yet. Pay monthly for now. We may offer annual options at 10% discount in Q3 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-black mb-4">
            Ready to Get Smarter Rates?
          </h2>
          <p className="text-lg text-off-white mb-8">
            Start your free trial. No credit card required. 14 days, full access.
          </p>
          <a href="/app" className="inline-block px-8 py-4 bg-green text-white font-semibold rounded-sm text-lg hover:bg-opacity-90">
            Start Free Trial
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
