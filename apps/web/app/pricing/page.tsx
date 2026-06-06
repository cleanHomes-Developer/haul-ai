"use client";

const N = {
  navy:"#1B2A4A", navyMid:"#243552", navyLt:"#2D4066",
  green:"#1B5E20", greenLt:"#2E7D32", greenBg:"#E8F5E9",
  amber:"#7B4000", red:"#B71C1C", white:"#FFFFFF",
  offWhite:"#F5F7FA", faint:"#E8EDF4", rule:"#C9D3E0",
  muted:"#536B8A", body:"#1B2A4A",
};

export default function PricingPage() {
  return (
    <div style={{fontFamily:"'Libre Franklin',sans-serif",background:N.white,color:N.body,minHeight:"100vh"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Libre+Franklin:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        a{text-decoration:none;}
        .btn-primary{display:inline-block;background:${N.greenLt};color:${N.white};padding:16px 36px;font-family:'Libre Franklin',sans-serif;font-weight:700;font-size:15px;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;border:none;transition:opacity 0.15s;}
        .btn-primary:hover{opacity:0.88;}
        .btn-secondary{display:inline-block;background:${N.navy};color:${N.white};padding:16px 36px;font-family:'Libre Franklin',sans-serif;font-weight:700;font-size:15px;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;border:none;transition:opacity 0.15s;}
        .btn-secondary:hover{opacity:0.88;}
        .nav-link{color:rgba(255,255,255,0.6);font-size:14px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;transition:color 0.15s;}
        .nav-link:hover{color:${N.white};}
        .plan-card{border:1px solid ${N.rule};padding:36px;background:${N.white};}
        .plan-card.popular{border:2px solid ${N.greenLt};background:${N.white};}
        table{width:100%;border-collapse:collapse;font-size:14px;}
        th{background:${N.faint};border:1px solid ${N.rule};padding:14px;text-align:left;font-weight:700;color:${N.navy};}
        td{border:1px solid ${N.rule};padding:14px;color:${N.muted};}
        td.checkmark{color:${N.greenLt};font-weight:700;text-align:center;}
        .faq-item{border-bottom:1px solid ${N.rule};padding:24px 0;}
        .faq-item:last-child{border-bottom:none;}
      `}</style>

      {/* NAV */}
      <nav style={{background:N.navy,borderBottom:`4px solid ${N.greenLt}`,padding:"0 48px",height:68,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"baseline",gap:0}}>
          <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:30,color:N.white}}>HAUL</span>
          <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:30,color:N.greenLt}}>.</span>
          <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:30,color:N.white}}>AI</span>
        </div>
        <div style={{display:"flex",gap:36,alignItems:"center"}}>
          <a href="/" className="nav-link">Home</a>
          <a href="/#features" className="nav-link">Features</a>
          <a href="/pricing" className="nav-link" style={{color:N.white,fontWeight:700}}>Pricing</a>
          <a href="/dashboard" className="btn-primary" style={{padding:"10px 24px",fontSize:13}}>View Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{background:N.navy,padding:"80px 48px",textAlign:"center"}}>
        <h1 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:64,color:N.white,lineHeight:1.1,marginBottom:16}}>
          Simple Pricing.
        </h1>
        <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:64,color:N.greenLt,lineHeight:1.1,marginBottom:24}}>
          No Surprises.
        </h2>
        <p style={{color:"rgba(255,255,255,0.6)",fontSize:18,maxWidth:640,margin:"0 auto"}}>
          Pick a plan based on your fleet size. Upgrade anytime. No contracts. Cancel anytime.
        </p>
      </section>

      {/* PLANS */}
      <section style={{background:N.white,padding:"80px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
            {[
              {name:"Starter",price:"$99",trucks:"1–3 trucks",popular:false,features:["Email negotiation 24/7","Load scoring","DAT integration","Community intelligence"]},
              {name:"Growth",price:"$299",trucks:"4–15 trucks",popular:true,features:["Everything in Starter","Voice agent","ELD integration","Automated check calls","Document parsing"]},
              {name:"Fleet",price:"$799",trucks:"16–50 trucks",popular:false,features:["Everything in Growth","Driver mobile app","Factoring integration","Revenue analytics","API access"]},
              {name:"Enterprise",price:"Custom",trucks:"50+ trucks or dispatch services",popular:false,features:["Everything in Fleet","White-label solution","Unlimited API calls","Dedicated support"]},
            ].map((plan,i)=>(
              <div key={i} className={`plan-card ${plan.popular?"popular":""}`}>
                {plan.popular&&<p style={{color:N.greenLt,fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:16}}>Most Popular</p>}
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:26,color:N.navy,marginBottom:4}}>{plan.name}</div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:52,color:plan.popular?N.greenLt:N.navy,lineHeight:1,marginBottom:4}}>{plan.price}</div>
                <div style={{color:N.muted,fontSize:14,marginBottom:28}}>/month · {plan.trucks}</div>
                <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:32}}>
                  {plan.features.map((f,j)=>(
                    <div key={j} style={{display:"flex",alignItems:"flex-start",gap:10}}>
                      <span style={{color:N.greenLt,fontWeight:700,fontSize:16,flexShrink:0}}>✓</span>
                      <span style={{color:N.body,fontSize:14,lineHeight:1.5}}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href={plan.price==="Custom"?"mailto:hello@haulai.com":"/dashboard"} style={{display:"block",width:"100%",padding:"14px",textAlign:"center",background:plan.popular?N.greenLt:N.navy,color:N.white,fontFamily:"'Libre Franklin',sans-serif",fontWeight:700,fontSize:14,letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer",border:"none",transition:"opacity 0.15s"}}>
                  {plan.price==="Custom"?"Contact Sales":"Start Now"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING MEMBER CALLOUT */}
      <section style={{background:N.offWhite,padding:"60px 48px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{border:`3px solid ${N.greenLt}`,borderLeft:`4px solid ${N.greenLt}`,padding:"32px",background:N.white}}>
            <h3 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:26,color:N.navy,marginBottom:8}}>Founding Member Special</h3>
            <p style={{color:N.muted,fontSize:16,lineHeight:1.6}}>
              First 50 carriers get <span style={{fontWeight:700,color:N.navy}}>30% off forever</span>. This pricing is locked in for life. No increases. Ever.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON TABLE */}
      <section style={{background:N.white,padding:"80px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <p style={{color:N.muted,fontSize:12,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",textAlign:"center",marginBottom:48}}>Feature Comparison</p>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:48,color:N.navy,textAlign:"center",marginBottom:48}}>See What's Included</h2>

          <table>
            <thead>
              <tr>
                <th style={{textAlign:"left"}}>Feature</th>
                <th>Starter</th>
                <th>Growth</th>
                <th>Fleet</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>AI Email Agent</strong></td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Voice Agent</strong></td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Cost Intelligence</strong></td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Load Scoring</strong></td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>DAT Integration</strong></td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Community Intelligence</strong></td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Document Parsing</strong></td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>ELD Integration</strong></td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Driver Mobile App</strong></td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Factoring Platform</strong></td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Analytics Dashboard</strong></td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>API Access</strong></td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>White-Label Option</strong></td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td></tr>
              <tr><td><strong>Dedicated Support</strong></td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td style={{color:"#999"}}>—</td><td className="checkmark">✓</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section style={{background:N.offWhite,padding:"80px 48px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <p style={{color:N.muted,fontSize:12,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",textAlign:"center",marginBottom:48}}>Questions?</p>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:48,color:N.navy,textAlign:"center",marginBottom:48}}>Frequently Asked</h2>

          <div style={{background:N.white,padding:"48px"}}>
            {[
              {q:"Can I switch plans anytime?",a:"Yes. Change plans instantly. We'll prorate the difference. No contracts, no penalties."},
              {q:"What happens if I cancel?",a:"You keep your data forever. Export anytime. No exit fees. Your data, your choice."},
              {q:"Is my data kept private?",a:"Yes. All carrier data is encrypted at rest and in transit. We use row-level security so you only see your loads. Community intelligence is anonymized with SHA256 hashing."},
              {q:"Do you offer custom pricing?",a:"Yes, for dispatch service companies and carriers with 50+ trucks. Email hello@haulai.com for a quote."},
              {q:"Is there a setup fee?",a:"No setup fee. No hidden fees. No credit card required for the 14-day free trial. Just honest pricing."},
              {q:"What about annual discounts?",a:"Not yet, but we're considering 10% annual discounts in Q3 2026. Pay monthly for now."},
            ].map((item,i)=>(
              <div key={i} className="faq-item">
                <h3 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:18,color:N.navy,marginBottom:12}}>{item.q}</h3>
                <p style={{color:N.muted,fontSize:15,lineHeight:1.7}}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE CTA */}
      <section style={{background:N.navy,padding:"80px 48px",textAlign:"center"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:56,color:N.white,marginBottom:20}}>Enterprise Solutions</h2>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:18,marginBottom:20,lineHeight:1.6}}>
            Need white-label? Custom integrations? Dedicated support? Let's talk.
          </p>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:16,marginBottom:40}}>
            hello@haulai.com | 307-312-6777
          </p>
          <a href="mailto:hello@haulai.com" className="btn-primary">Schedule a Call</a>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{background:N.offWhite,padding:"60px 48px",textAlign:"center"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:42,color:N.navy,marginBottom:16}}>Ready to Get Smarter Rates?</h2>
          <p style={{color:N.muted,fontSize:16,marginBottom:32}}>
            Start your free trial today. No credit card required. Full access for 14 days.
          </p>
          <a href="/dashboard" className="btn-primary">Start Free Trial</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:N.navyMid,borderTop:`1px solid rgba(255,255,255,0.1)`,padding:"36px 48px"}}>
        <div style={{maxWidth:960,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"baseline"}}>
            <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:24,color:N.white}}>HAUL</span>
            <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:24,color:N.greenLt}}>.</span>
            <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:24,color:N.white}}>AI</span>
          </div>
          <div style={{display:"flex",gap:32}}>
            <a href="/" style={{color:"rgba(255,255,255,0.4)",fontSize:14,fontWeight:600}}>Home</a>
            <a href="/dashboard" style={{color:"rgba(255,255,255,0.4)",fontSize:14,fontWeight:600}}>Demo</a>
            <a href="mailto:support@haulai.com" style={{color:"rgba(255,255,255,0.4)",fontSize:14,fontWeight:600}}>support@haulai.com</a>
          </div>
          <p style={{color:"rgba(255,255,255,0.25)",fontSize:13}}>© 2026 Haul Intelligence LLC</p>
        </div>
      </footer>
    </div>
  );
}
