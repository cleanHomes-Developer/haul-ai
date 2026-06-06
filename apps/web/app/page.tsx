"use client";

const N = {
  navy:"#1B2A4A", navyMid:"#243552", navyLt:"#2D4066",
  green:"#1B5E20", greenLt:"#2E7D32", greenBg:"#E8F5E9",
  amber:"#7B4000", red:"#B71C1C", white:"#FFFFFF",
  offWhite:"#F5F7FA", faint:"#E8EDF4", rule:"#C9D3E0",
  muted:"#536B8A", body:"#1B2A4A",
};

export default function Landing() {
  return (
    <div style={{fontFamily:"'Libre Franklin',sans-serif",background:N.white,color:N.body,minHeight:"100vh"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Libre+Franklin:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        a{text-decoration:none;}
        .btn-primary{display:inline-block;background:${N.greenLt};color:${N.white};padding:16px 36px;font-family:'Libre Franklin',sans-serif;font-weight:700;font-size:15px;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;border:none;transition:opacity 0.15s;}
        .btn-primary:hover{opacity:0.88;}
        .btn-ghost{display:inline-block;border:2px solid rgba(255,255,255,0.4);color:${N.white};padding:16px 36px;font-family:'Libre Franklin',sans-serif;font-weight:700;font-size:15px;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;background:none;transition:border-color 0.15s;}
        .btn-ghost:hover{border-color:${N.white};}
        .feature-card{background:${N.white};border:1px solid ${N.rule};border-left:4px solid ${N.greenLt};padding:28px;}
        .plan-card{border:2px solid rgba(255,255,255,0.15);padding:36px;}
        .plan-card.popular{border-color:${N.greenLt};background:${N.navyMid};}
        .nav-link{color:rgba(255,255,255,0.6);font-size:14px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;transition:color 0.15s;}
        .nav-link:hover{color:${N.white};}
      `}</style>

      {/* NAV */}
      <nav style={{background:N.navy,borderBottom:`4px solid ${N.greenLt}`,padding:"0 48px",height:68,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"baseline",gap:0}}>
          <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:30,color:N.white}}>HAUL</span>
          <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:30,color:N.greenLt}}>.</span>
          <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:30,color:N.white}}>AI</span>
        </div>
        <div style={{display:"flex",gap:36,alignItems:"center"}}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="/pricing" className="nav-link">Compare Plans</a>
          <a href="/dashboard" className="btn-primary" style={{padding:"10px 24px",fontSize:13}}>View Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{background:N.navy,padding:"100px 48px",textAlign:"center"}}>
        <p style={{color:N.greenLt,fontSize:13,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:20}}>
          The AI Dispatch Network for Trucking
        </p>
        <h1 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:76,color:N.white,lineHeight:1.05,marginBottom:24}}>
          Your AI Dispatcher.<br/>Never Sleeps.
        </h1>
        <p style={{color:"rgba(255,255,255,0.65)",fontSize:20,maxWidth:640,margin:"0 auto 16px",lineHeight:1.6}}>
          Autonomous load negotiation. Real-time market intelligence.
          Community insights from 609 carriers. 11 intelligence layers.
        </p>
        <p style={{color:"rgba(255,255,255,0.4)",fontSize:16,marginBottom:44}}>
          Dispatch service costs{" "}
          <span style={{color:"#EF4444",fontWeight:700}}>$25,000/year</span>.
          {" "}Haul.AI costs{" "}
          <span style={{color:N.greenLt,fontWeight:700}}>$1,188/year</span>.
          {" "}Payback in 5 days.
        </p>
        <div style={{display:"flex",gap:16,justifyContent:"center"}}>
          <a href="/pricing" className="btn-primary">Start Free Trial</a>
          <a href="/dashboard" className="btn-ghost">Watch Demo →</a>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{background:N.navyMid,padding:"28px 48px"}}>
        <div style={{maxWidth:960,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0}}>
          {[
            {val:"609",label:"Carriers on Platform"},
            {val:"$0.18",label:"Avg Rate/Mi Improvement"},
            {val:"24/7",label:"Autonomous Operation"},
            {val:"11",label:"Intelligence Layers"},
          ].map((s,i)=>(
            <div key={i} style={{textAlign:"center",padding:"16px 0",borderRight:i<3?`1px solid rgba(255,255,255,0.1)`:"none"}}>
              <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:42,color:N.greenLt,lineHeight:1}}>{s.val}</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.5)",marginTop:6,fontWeight:600,letterSpacing:"0.04em"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{background:N.offWhite,padding:"80px 48px"}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <p style={{color:N.muted,fontSize:12,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",textAlign:"center",marginBottom:48}}>The Problem We Solve</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
            {[
              {stat:"$25K",color:N.red,label:"Average annual cost of a dispatch service at 5-8% of gross revenue"},
              {stat:"7 hrs",color:N.amber,label:"Hours per day a dispatcher spends on broker calls and emails"},
              {stat:"$470",color:N.red,label:"Short-paid by GlobalTranz for missing BOL handwritten times — real incident"},
            ].map((item,i)=>(
              <div key={i} style={{background:N.white,border:`1px solid ${N.rule}`,padding:"36px",textAlign:"center"}}>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:64,fontWeight:900,color:item.color,lineHeight:1,marginBottom:16}}>{item.stat}</div>
                <p style={{color:N.muted,fontSize:15,lineHeight:1.6}}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{background:N.white,padding:"80px 48px"}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <p style={{color:N.muted,fontSize:12,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",textAlign:"center",marginBottom:12}}>11 Intelligence Layers</p>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:52,color:N.navy,textAlign:"center",marginBottom:48}}>Why Carriers Choose Haul.AI</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {[
              {title:"Cost Intelligence",desc:"Live EIA fuel × exact truck miles / MPG + tolls + driver + overhead. Real floor rate every load. Never lose money again."},
              {title:"Market Intelligence",desc:"DAT RateView + community benchmarks. Know what the market pays before you counter. Anchor at market, not hope."},
              {title:"Broker Psychology",desc:"Anonymous community fingerprints from 609 carriers. Know how each broker negotiates before the first word is sent."},
              {title:"Temporal Intelligence",desc:"Thursday 3-6PM? Aggressive. Friday after 3PM? Maximum. We know when brokers are desperate and use it."},
              {title:"Supply-Demand Micro",desc:"Lane L/T ratios, weather events, port congestion. Real-time intelligence on what brokers face right now."},
              {title:"Autonomous Negotiation",desc:"Email agent works 24/7. You get notified. No back-and-forth. Smart counteroffers using firm statement language."},
            ].map((f,i)=>(
              <div key={i} className="feature-card">
                <h3 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:22,color:N.navy,marginBottom:12}}>{f.title}</h3>
                <p style={{color:N.muted,fontSize:15,lineHeight:1.7}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{background:N.offWhite,padding:"80px 48px"}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <p style={{color:N.muted,fontSize:12,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",textAlign:"center",marginBottom:48}}>Real Results From Real Carriers</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
            {[
              {quote:"The AI countered Echo Global twice and got us $3.20/mile on Chicago-Dallas. I was asleep when it happened.",name:"ILoad Logistics LLC",trucks:"2 trucks"},
              {quote:"Saved $23,000 in the first year. That is what we were paying our dispatch service. The math is obvious.",name:"Carrier Beta Tester",trucks:"4 trucks"},
              {quote:"It knows Christian Garza at ADL sends a question mark when he does not get updates. It sends ETAs before he asks.",name:"ILoad Logistics LLC",trucks:"2 trucks"},
            ].map((t,i)=>(
              <div key={i} style={{background:N.white,border:`1px solid ${N.rule}`,borderTop:`4px solid ${N.greenLt}`,padding:"32px"}}>
                <p style={{color:N.body,fontSize:16,lineHeight:1.7,marginBottom:24,fontStyle:"italic"}}>"{t.quote}"</p>
                <div style={{borderTop:`1px solid ${N.rule}`,paddingTop:16}}>
                  <div style={{fontWeight:700,fontSize:15,color:N.navy}}>{t.name}</div>
                  <div style={{fontSize:13,color:N.muted,marginTop:4}}>{t.trucks}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section id="pricing" style={{background:N.navy,padding:"80px 48px"}}>
        <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
          <p style={{color:N.greenLt,fontSize:12,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:12}}>Simple Pricing</p>
          <h2 style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:52,color:N.white,marginBottom:12}}>No Surprises.</h2>
          <p style={{color:"rgba(255,255,255,0.5)",fontSize:16,marginBottom:52}}>Pick a plan. Add your fleet. Start getting smarter rates today.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginBottom:32}}>
            {[
              {name:"Starter",price:"$99",trucks:"1–3 trucks",popular:false,features:["Email negotiation 24/7","Load scoring","DAT integration","Community intelligence"]},
              {name:"Growth",price:"$299",trucks:"4–15 trucks",popular:true,features:["Everything in Starter","Voice agent","ELD integration","Automated check calls"]},
              {name:"Fleet",price:"$799",trucks:"16–50 trucks",popular:false,features:["Everything in Growth","Driver mobile app","Factoring integration","Revenue analytics"]},
            ].map((plan,i)=>(
              <div key={i} className={`plan-card ${plan.popular?"popular":""}`}>
                {plan.popular&&<p style={{color:N.greenLt,fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12}}>Most Popular</p>}
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:26,color:N.white,marginBottom:4}}>{plan.name}</div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:52,color:N.greenLt,lineHeight:1}}>{plan.price}</div>
                <div style={{color:"rgba(255,255,255,0.4)",fontSize:14,marginBottom:28}}>/month · {plan.trucks}</div>
                <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
                  {plan.features.map((f,j)=>(
                    <div key={j} style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{color:N.greenLt,fontWeight:700,fontSize:16}}>✓</span>
                      <span style={{color:"rgba(255,255,255,0.7)",fontSize:14}}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="/pricing" style={{display:"block",padding:"14px",fontFamily:"'Libre Franklin',sans-serif",fontWeight:700,fontSize:14,letterSpacing:"0.06em",textTransform:"uppercase",textAlign:"center",background:plan.popular?N.greenLt:"none",color:N.white,border:plan.popular?"none":`1px solid rgba(255,255,255,0.3)`,cursor:"pointer",transition:"opacity 0.15s"}}>
                  Start Now
                </a>
              </div>
            ))}
          </div>
          <a href="/pricing" style={{color:"rgba(255,255,255,0.4)",fontSize:14,textDecoration:"underline"}}>View full feature comparison →</a>
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
            <a href="/pricing" style={{color:"rgba(255,255,255,0.4)",fontSize:14,fontWeight:600}}>Pricing</a>
            <a href="/dashboard" style={{color:"rgba(255,255,255,0.4)",fontSize:14,fontWeight:600}}>Demo</a>
            <a href="mailto:support@haulai.com" style={{color:"rgba(255,255,255,0.4)",fontSize:14,fontWeight:600}}>support@haulai.com</a>
          </div>
          <p style={{color:"rgba(255,255,255,0.25)",fontSize:13}}>© 2026 Haul Intelligence LLC</p>
        </div>
      </footer>
    </div>
  );
}
