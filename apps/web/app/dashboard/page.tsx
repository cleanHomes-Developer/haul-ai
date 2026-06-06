"use client";
import { useState, useEffect, useRef } from "react";

const N = {
  navy:"#1B2A4A",navyMid:"#243552",navyLt:"#2D4066",
  rule:"#C9D3E0",ruleHvy:"#8FA3BF",white:"#FFFFFF",
  offWhite:"#F5F7FA",bodyTxt:"#1B2A4A",mutedTxt:"#536B8A",
  faint:"#E8EDF4",green:"#1B5E20",greenLt:"#2E7D32",
  greenBg:"#E8F5E9",amber:"#7B4000",amberBg:"#FFF3E0",
  red:"#B71C1C",redBg:"#FFEBEE",
};

const LOADS = [
  {id:"2401",origin:"Chicago, IL",dest:"Dallas, TX",miles:921,rate:2950,rpm:3.20,broker:"Echo Global",bScore:94,equip:"Dry Van",pickup:"Jun 5 06:00",status:"negotiating",action:"Counter #2 → $3.20/mi",deadhead:12,score:91,mktRate:3.08},
  {id:"2402",origin:"Atlanta, GA",dest:"Miami, FL",miles:663,rate:2100,rpm:3.17,broker:"Coyote",bScore:88,equip:"Reefer",pickup:"Jun 5 08:00",status:"pending",action:"Evaluating",deadhead:8,score:87,mktRate:3.12},
  {id:"2403",origin:"Los Angeles, CA",dest:"Phoenix, AZ",miles:370,rate:1480,rpm:4.00,broker:"CH Robinson",bScore:97,equip:"Dry Van",pickup:"Jun 6 07:00",status:"booked",action:"Auto-booked ✓",deadhead:3,score:96,mktRate:3.45},
  {id:"2404",origin:"Denver, CO",dest:"Salt Lake City, UT",miles:525,rate:1470,rpm:2.80,broker:"Transplace",bScore:71,equip:"Flatbed",pickup:"Jun 6 09:00",status:"declined",action:"Below floor",deadhead:22,score:44,mktRate:3.10},
  {id:"2405",origin:"Memphis, TN",dest:"Charlotte, NC",miles:639,rate:2175,rpm:3.40,broker:"XPO Logistics",bScore:92,equip:"Dry Van",pickup:"Jun 7 05:00",status:"booked",action:"Won @ $3.40/mi ✓",deadhead:6,score:93,mktRate:3.22},
  {id:"2406",origin:"Houston, TX",dest:"Nashville, TN",miles:898,rate:2600,rpm:2.90,broker:"Arrive",bScore:85,equip:"Dry Van",pickup:"Jun 7 07:00",status:"negotiating",action:"Counter #1 → $3.15/mi",deadhead:15,score:72,mktRate:3.05},
];

const TRUCKS = [
  {id:"T-101",driver:"Marcus Johnson",status:"In Transit",location:"Barstow, CA",load:"2403",eta:"4h 20m",hos:"8:42",rpm:4.00,fuel:68},
  {id:"T-102",driver:"Ray Dominguez",status:"Available",location:"Kansas City, MO",load:null,eta:"—",hos:"11:00",rpm:null,fuel:44},
  {id:"T-103",driver:"Leila Martinez",status:"At Pickup",location:"Chicago, IL",load:"2402",eta:"Loading",hos:"9:15",rpm:3.17,fuel:81},
  {id:"T-104",driver:"Damon Keys",status:"Available",location:"Dallas, TX",load:null,eta:"—",hos:"10:30",rpm:null,fuel:22},
  {id:"T-105",driver:"Sandra Wu",status:"In Transit",location:"Memphis, TN",load:"2405",eta:"7h 10m",hos:"9:45",rpm:3.40,fuel:76},
];

const TICKER_ITEMS = [
  "AI booked CHI→DAL @ $3.20/mi — Echo Global — T-101",
  "Counter sent MEM→CLT $3.40 — XPO Logistics awaiting",
  "Auto check call sent — T-101 Barstow CA → Phoenix ETA 2:45 PM",
  "Rate con parsed — CH Robinson L-2403 — $1,480 confirmed",
  "Invoice INV-2847 sent — CH Robinson — $1,480",
  "AI declined DEN→SLC $2.80/mi — below carrier floor",
  "Broker vetting complete — Arrive Logistics score 85 — approved",
  "Detention clock started — T-103 Chicago shipper — broker notified",
];

const NEG_THREAD = [
  {from:"broker",text:"Hi — dry van CHI to DAL, 921 miles, $2,850. Pickup 6 AM tomorrow. Interest?"},
  {from:"ai",text:"Thanks Sarah. $2,850 is $3.09/mi — our floor on this corridor is $3.20. Can you do $2,950? We'll confirm your 6 AM window."},
  {from:"broker",text:"Best I have today is $2,900. Market's soft."},
  {from:"ai",text:"DAT RateView shows $3.08 avg on this lane today — $2,950 is right at market. Can we meet there? That's our best number."},
];

function Chip({s}:{s:string}) {
  const map:Record<string,{bg:string,c:string,label:string}> = {
    negotiating:{bg:N.amberBg,c:N.amber,label:"Negotiating"},
    pending:{bg:N.faint,c:N.mutedTxt,label:"Pending"},
    booked:{bg:N.greenBg,c:N.green,label:"Booked"},
    declined:{bg:N.redBg,c:N.red,label:"Declined"},
    awaiting:{bg:N.faint,c:N.mutedTxt,label:"Awaiting"},
    won:{bg:N.greenBg,c:N.green,label:"Won"},
  };
  const {bg,c,label} = map[s]||map.pending;
  return <span style={{display:"inline-block",padding:"2px 10px",borderRadius:2,background:bg,color:c,fontSize:17,fontWeight:700,fontFamily:"'Libre Franklin',sans-serif",letterSpacing:"0.04em",textTransform:"uppercase"}}>{label}</span>;
}

function RateNum({rpm,mkt}:{rpm:number,mkt?:number}) {
  const diff = mkt ? rpm-mkt : 0;
  const color = rpm>=3.20?N.greenLt:rpm>=2.90?N.amber:N.red;
  return (
    <div>
      <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color,lineHeight:1}}>${rpm.toFixed(2)}</div>
      {mkt&&<div style={{fontSize:10,color:diff>=0?N.greenLt:N.red,fontFamily:"'Libre Franklin',sans-serif",marginTop:1}}>{diff>=0?"+":""}{diff.toFixed(2)} vs mkt</div>}
    </div>
  );
}

function ScoreBar({score}:{score:number}) {
  const color = score>=80?N.greenLt:score>=60?N.amber:N.red;
  return (
    <div style={{display:"flex",alignItems:"center",gap:8}}>
      <div style={{width:48,height:4,background:N.faint}}>
        <div style={{width:`${score}%`,height:"100%",background:color}}/>
      </div>
      <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:17,fontWeight:700,color}}>{score}</span>
    </div>
  );
}

export default function Dashboard() {
  const [section,setSection] = useState("loads");
  const [selLoad,setSelLoad] = useState<typeof LOADS[0]|null>(null);
  const [selTruck,setSelTruck] = useState<typeof TRUCKS[0]|null>(null);
  const [filterStatus,setFilterStatus] = useState("all");
  const [aiCount,setAiCount] = useState(247);
  const [toast,setToast] = useState<string|null>(null);
  const [negOpen,setNegOpen] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const el = tickerRef.current; if(!el) return;
    let pos=0;
    const step=()=>{pos-=0.6;if(Math.abs(pos)>el.scrollWidth/2)pos=0;el.style.transform=`translateX(${pos}px)`;requestAnimationFrame(step);};
    const raf=requestAnimationFrame(step);
    return()=>cancelAnimationFrame(raf);
  },[]);

  useEffect(()=>{
    const t=setInterval(()=>setAiCount(n=>n+Math.floor(Math.random()*2)),4000);
    return()=>clearInterval(t);
  },[]);

  const notify=(msg:string)=>{setToast(msg);setTimeout(()=>setToast(null),2600);};
  const visibleLoads=filterStatus==="all"?LOADS:LOADS.filter(l=>l.status===filterStatus);

  return (
    <div style={{fontFamily:"'Libre Franklin',sans-serif",background:N.white,minHeight:"100vh",color:N.bodyTxt,display:"flex",flexDirection:"column"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Libre+Franklin:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;height:4px;}
        ::-webkit-scrollbar-thumb{background:${N.rule};}
        .load-row{cursor:pointer;border-bottom:1px solid ${N.faint};transition:background 0.1s;}
        .load-row:hover{background:${N.offWhite};}
        .nav-btn{cursor:pointer;font-family:'Libre Franklin',sans-serif;font-size:13px;font-weight:600;color:rgba(255,255,255,0.55);padding:0 0 14px 0;border:none;border-bottom:3px solid transparent;background:none;transition:all 0.15s;letter-spacing:0.02em;}
        .nav-btn:hover{color:white;}
        .nav-btn.active{color:white;border-bottom:3px solid white;}
        .filter-btn{cursor:pointer;font-family:'Libre Franklin',sans-serif;font-size:11px;font-weight:700;padding:5px 12px;border:1px solid ${N.rule};background:${N.white};color:${N.mutedTxt};letter-spacing:0.06em;text-transform:uppercase;transition:all 0.15s;}
        .filter-btn:hover{background:${N.faint};}
        .filter-btn.active{background:${N.navy};color:${N.white};border-color:${N.navy};}
        .action-btn{cursor:pointer;border:none;font-family:'Libre Franklin',sans-serif;font-weight:700;transition:opacity 0.15s;}
        .action-btn:hover{opacity:0.85;}
        .truck-row{cursor:pointer;padding:14px 20px;border-bottom:1px solid ${N.faint};display:grid;grid-template-columns:80px 1fr 120px 120px 90px 90px 90px;align-items:center;transition:background 0.1s;}
        .truck-row:hover{background:${N.offWhite};}
        .detail-label{font-size:10px;font-weight:700;color:${N.mutedTxt};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;}
        .neg-bubble-ai{background:${N.navy};color:${N.white};padding:12px 16px;max-width:82%;border-radius:0 10px 10px 10px;font-size:13px;line-height:1.6;}
        .neg-bubble-broker{background:${N.faint};color:${N.bodyTxt};padding:12px 16px;max-width:82%;border-radius:10px 0 10px 10px;font-size:13px;line-height:1.6;}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        .pulse{animation:pulse 2s ease-in-out infinite;}
        @keyframes slideRight{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
        .anim-right{animation:slideRight 0.3s cubic-bezier(0.16,1,0.3,1) forwards;}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .anim-fade{animation:fadeIn 0.2s ease forwards;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .cursor{animation:blink 1s step-end infinite;display:inline-block;}
      `}</style>

      {/* TICKER */}
      <div style={{background:N.navy,height:34,overflow:"hidden",display:"flex",alignItems:"center",flexShrink:0,position:"relative"}}>
        <div style={{position:"absolute",left:0,top:0,bottom:0,width:80,background:`linear-gradient(90deg,${N.navy},transparent)`,zIndex:2}}/>
        <div style={{position:"absolute",right:0,top:0,bottom:0,width:80,background:`linear-gradient(270deg,${N.navy},transparent)`,zIndex:2}}/>
        <div ref={tickerRef} style={{display:"flex",whiteSpace:"nowrap",willChange:"transform"}}>
          {[...TICKER_ITEMS,...TICKER_ITEMS].map((item,i)=>(
            <span key={i} style={{fontFamily:"'Libre Franklin',sans-serif",fontSize:17,color:"rgba(255,255,255,0.75)",padding:"0 32px",borderRight:`1px solid rgba(255,255,255,0.15)`}}>
              <span style={{color:"rgba(255,255,255,0.4)",marginRight:8}}>●</span>{item}
            </span>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header style={{background:N.navy,borderBottom:`4px solid ${N.greenLt}`,padding:"0 32px",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",height:60,gap:0}}>
          <div style={{display:"flex",alignItems:"baseline",marginRight:48}}>
            <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:26,color:N.white}}>HAUL</span>
            <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:26,color:N.greenLt}}>.</span>
            <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:26,color:N.white}}>AI</span>
            <span style={{fontFamily:"'Libre Franklin',sans-serif",fontSize:10,color:"rgba(255,255,255,0.4)",marginLeft:12,letterSpacing:"0.12em",fontWeight:600,alignSelf:"center"}}>DISPATCH PLATFORM</span>
          </div>
          <nav style={{display:"flex",gap:28,alignItems:"stretch",height:"100%"}}>
            {[["loads","Loads"],["fleet","Fleet"],["negotiations","Negotiations"],["analytics","Analytics"]].map(([id,label])=>(
              <button key={id} className={`nav-btn ${section===id?"active":""}`} onClick={()=>{setSection(id);setSelLoad(null);setSelTruck(null);}} style={{display:"flex",alignItems:"flex-end",paddingBottom:14}}>{label}</button>
            ))}
          </nav>
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:20}}>
            <div style={{display:"flex",alignItems:"center",gap:8,borderLeft:`1px solid rgba(255,255,255,0.15)`,paddingLeft:20}}>
              <span className="pulse" style={{width:7,height:7,borderRadius:"50%",background:N.greenLt,boxShadow:`0 0 6px ${N.greenLt}`}}/>
              <div>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.45)",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase"}}>AI Active</div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.white,lineHeight:1}}>{aiCount} actions today</div>
              </div>
            </div>
            <div style={{borderLeft:`1px solid rgba(255,255,255,0.15)`,paddingLeft:20}}>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.45)",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase"}}>Week Revenue</div>
              <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.greenLt,lineHeight:1}}>$47,200</div>
            </div>
          </div>
        </div>
      </header>

      {toast&&<div className="anim-right" style={{position:"fixed",top:112,right:24,background:N.navy,color:N.white,padding:"10px 18px",fontSize:16,fontWeight:600,zIndex:1000,borderLeft:`4px solid ${N.greenLt}`,fontFamily:"'Libre Franklin',sans-serif"}}>✓ {toast}</div>}

      <div style={{flex:1,display:"flex",overflow:"hidden"}}>

        {/* LOADS */}
        {section==="loads"&&(
          <div className="anim-fade" style={{flex:1,display:"flex",overflow:"hidden"}}>
            <div style={{flex:1,overflow:"auto",display:"flex",flexDirection:"column"}}>
              <div style={{padding:"16px 24px",borderBottom:`1px solid ${N.rule}`,display:"flex",alignItems:"center",gap:16,background:N.white,position:"sticky",top:0,zIndex:10}}>
                <div>
                  <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:27,color:N.navy}}>LOAD BOARD</div>
                  <div style={{fontSize:17,color:N.mutedTxt,marginTop:1}}>AI searching DAT · Truckstop · RXO in real time</div>
                </div>
                <div style={{marginLeft:"auto",display:"flex",gap:4}}>
                  {["all","negotiating","booked","pending","declined"].map(f=>(
                    <button key={f} className={`filter-btn ${filterStatus===f?"active":""}`} onClick={()=>setFilterStatus(f)}>{f==="all"?"All":f}</button>
                  ))}
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"72px 1fr 1fr 68px 96px 100px 110px 1fr 100px",padding:"8px 24px",background:N.offWhite,borderBottom:`1px solid ${N.rule}`}}>
                {["ID","LANE","BROKER","MI","RATE","$/MI","STATUS","AI ACTION","SCORE"].map(h=>(
                  <div key={h} style={{fontSize:10,fontWeight:700,color:N.mutedTxt,letterSpacing:"0.1em",fontFamily:"'Libre Franklin',sans-serif"}}>{h}</div>
                ))}
              </div>
              {visibleLoads.map(l=>(
                <div key={l.id} className="load-row" onClick={()=>setSelLoad(selLoad?.id===l.id?null:l)}
                  style={{display:"grid",gridTemplateColumns:"72px 1fr 1fr 68px 96px 100px 110px 1fr 100px",padding:"14px 24px",alignItems:"center",borderLeft:selLoad?.id===l.id?`3px solid ${N.navy}`:"3px solid transparent",background:selLoad?.id===l.id?N.faint:undefined}}>
                  <div style={{fontFamily:"monospace",fontSize:17,color:N.mutedTxt,fontWeight:600}}>#{l.id}</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:17,color:N.navy}}>{l.origin}</div>
                    <div style={{fontSize:15,color:N.mutedTxt,marginTop:2}}>→ {l.dest}</div>
                  </div>
                  <div>
                    <div style={{fontSize:16,fontWeight:600,color:N.bodyTxt}}>{l.broker}</div>
                    <div style={{fontSize:17,color:l.bScore>=90?N.greenLt:l.bScore>=75?N.amber:N.red,fontWeight:700,marginTop:2}}>Score {l.bScore}</div>
                  </div>
                  <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:16,fontWeight:600,color:N.mutedTxt}}>{l.miles}</div>
                  <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:29,fontWeight:700,color:N.navy}}>${l.rate.toLocaleString()}</div>
                  <RateNum rpm={l.rpm} mkt={l.mktRate}/>
                  <Chip s={l.status}/>
                  <div style={{fontSize:17,color:N.mutedTxt,fontStyle:"italic",paddingRight:8}}>{l.action}</div>
                  <ScoreBar score={l.score}/>
                </div>
              ))}
            </div>
            {selLoad&&(
              <div className="anim-right" style={{width:340,borderLeft:`1px solid ${N.rule}`,background:N.white,overflow:"auto",flexShrink:0}}>
                <div style={{background:N.navy,padding:"20px 24px"}}>
                  <div style={{fontSize:10,color:"rgba(255,255,255,0.5)",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6}}>Load #{selLoad.id}</div>
                  <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:29,color:N.white}}>{selLoad.origin}</div>
                  <div style={{fontSize:16,color:"rgba(255,255,255,0.5)",margin:"4px 0"}}>→ {selLoad.miles} miles</div>
                  <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:29,color:N.white}}>{selLoad.dest}</div>
                  <div style={{marginTop:14}}><Chip s={selLoad.status}/></div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:`1px solid ${N.rule}`}}>
                  {[
                    {label:"Total Rate",val:`$${selLoad.rate.toLocaleString()}`,big:true},
                    {label:"Rate / Mile",val:`$${selLoad.rpm.toFixed(2)}`,color:selLoad.rpm>=3.20?N.greenLt:selLoad.rpm>=2.90?N.amber:N.red,big:true},
                    {label:"Market Avg",val:`$${selLoad.mktRate}/mi`,color:N.mutedTxt},
                    {label:"Deadhead",val:`${selLoad.deadhead} mi`},
                    {label:"Weight",val:"42,000 lbs"},
                    {label:"Equipment",val:selLoad.equip},
                    {label:"Pickup",val:selLoad.pickup},
                    {label:"Broker Score",val:`${selLoad.bScore}/100`,color:selLoad.bScore>=90?N.greenLt:N.amber},
                  ].map((f,i)=>(
                    <div key={i} style={{padding:"14px 20px",borderRight:i%2===0?`1px solid ${N.rule}`:"none",borderBottom:`1px solid ${N.rule}`}}>
                      <div className="detail-label">{f.label}</div>
                      {f.big
                        ?<div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:29,fontWeight:800,color:f.color||N.navy,lineHeight:1}}>{f.val}</div>
                        :<div style={{fontFamily:"'Libre Franklin',sans-serif",fontSize:17,fontWeight:600,color:f.color||N.navy}}>{f.val}</div>
                      }
                    </div>
                  ))}
                </div>
                <div style={{padding:"16px 20px",borderBottom:`1px solid ${N.rule}`,background:N.offWhite}}>
                  <div className="detail-label" style={{color:N.navy,marginBottom:6}}>AI Status</div>
                  <div style={{fontSize:16,color:N.navy,fontWeight:600}}>{selLoad.action}</div>
                </div>
                <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:8}}>
                  <button className="action-btn" onClick={()=>{notify("Load accepted");setSelLoad(null);}} style={{background:N.green,color:N.white,padding:"13px",fontSize:16,fontWeight:700,width:"100%",letterSpacing:"0.04em"}}>ACCEPT LOAD</button>
                  <button className="action-btn" onClick={()=>setNegOpen(true)} style={{background:N.navy,color:N.white,padding:"11px",fontSize:16,fontWeight:600,width:"100%",letterSpacing:"0.04em"}}>VIEW NEGOTIATION</button>
                  <button className="action-btn" onClick={()=>{notify("Load declined");setSelLoad(null);}} style={{background:N.white,color:N.red,padding:"11px",fontSize:16,fontWeight:600,width:"100%",border:`1px solid ${N.red}`,letterSpacing:"0.04em"}}>DECLINE</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* FLEET */}
        {section==="fleet"&&(
          <div className="anim-fade" style={{flex:1,display:"flex",overflow:"hidden"}}>
            <div style={{flex:1,overflow:"auto"}}>
              <div style={{padding:"16px 24px 12px",borderBottom:`1px solid ${N.rule}`,background:N.white}}>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:27,color:N.navy}}>FLEET STATUS</div>
                <div style={{fontSize:17,color:N.mutedTxt,marginTop:1}}>Live ELD sync · Auto check calls · 5 trucks</div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"80px 1fr 120px 120px 90px 90px 90px",padding:"8px 24px",background:N.offWhite,borderBottom:`1px solid ${N.rule}`}}>
                {["TRUCK","DRIVER","STATUS","LOCATION","ETA","HOS","FUEL"].map(h=>(
                  <div key={h} style={{fontSize:10,fontWeight:700,color:N.mutedTxt,letterSpacing:"0.1em"}}>{h}</div>
                ))}
              </div>
              {TRUCKS.map(t=>{
                const sc=t.status==="In Transit"?N.greenLt:t.status==="At Pickup"?N.navy:N.mutedTxt;
                return(
                  <div key={t.id} className="truck-row" onClick={()=>setSelTruck(selTruck?.id===t.id?null:t)}
                    style={{borderLeft:selTruck?.id===t.id?`3px solid ${N.navy}`:"3px solid transparent",background:selTruck?.id===t.id?N.faint:undefined}}>
                    <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.navy}}>{t.id}</div>
                    <div>
                      <div style={{fontWeight:600,fontSize:17,color:N.navy}}>{t.driver}</div>
                      {t.load&&<div style={{fontSize:17,color:N.mutedTxt,marginTop:2}}>Load #{t.load}</div>}
                    </div>
                    <div style={{fontSize:15,fontWeight:700,color:sc}}>{t.status}</div>
                    <div style={{fontSize:15,color:N.bodyTxt}}>{t.location}</div>
                    <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:16,fontWeight:700,color:N.navy}}>{t.eta}</div>
                    <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:16,fontWeight:700,color:parseInt(t.hos)<4?N.red:N.navy}}>{t.hos}</div>
                    <div>
                      <div style={{width:52,height:6,background:N.faint}}>
                        <div style={{width:`${t.fuel}%`,height:"100%",background:t.fuel<30?N.red:t.fuel<50?N.amber:N.greenLt}}/>
                      </div>
                      <div style={{fontSize:10,color:N.mutedTxt,marginTop:2,fontWeight:600}}>{t.fuel}%</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {selTruck&&(
              <div className="anim-right" style={{width:300,borderLeft:`1px solid ${N.rule}`,background:N.white,overflow:"auto",flexShrink:0}}>
                <div style={{background:N.navy,padding:"20px 24px"}}>
                  <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:50,color:N.white,lineHeight:1}}>{selTruck.id}</div>
                  <div style={{fontSize:17,fontWeight:600,color:"rgba(255,255,255,0.7)",marginTop:4}}>{selTruck.driver}</div>
                </div>
                <div style={{padding:"20px 24px",display:"flex",flexDirection:"column",gap:16}}>
                  {[
                    {l:"Status",v:selTruck.status},
                    {l:"Location",v:selTruck.location},
                    {l:"ETA",v:selTruck.eta},
                    {l:"HOS Remaining",v:selTruck.hos,c:parseInt(selTruck.hos)<4?N.red:N.navy},
                    {l:"Fuel",v:`${selTruck.fuel}%`,c:selTruck.fuel<30?N.red:N.greenLt},
                    {l:"Active Load",v:selTruck.load?`#${selTruck.load}`:"None"},
                    {l:"Rate/Mile",v:selTruck.rpm?`$${selTruck.rpm.toFixed(2)}`:"—",c:N.greenLt},
                  ].map((f,i)=>(
                    <div key={i} style={{borderBottom:`1px solid ${N.faint}`,paddingBottom:14}}>
                      <div className="detail-label">{f.l}</div>
                      <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:f.c||N.navy,lineHeight:1,marginTop:4}}>{f.v}</div>
                    </div>
                  ))}
                  <button className="action-btn" onClick={()=>notify(`Check call sent for ${selTruck.id}`)} style={{background:N.navy,color:N.white,padding:"13px",fontSize:16,fontWeight:700,width:"100%",letterSpacing:"0.04em",marginTop:4}}>SEND CHECK CALL</button>
                  {selTruck.status==="Available"&&(
                    <button className="action-btn" onClick={()=>notify(`Searching loads near ${selTruck.location}`)} style={{background:N.greenLt,color:N.white,padding:"11px",fontSize:16,fontWeight:700,width:"100%",letterSpacing:"0.04em"}}>FIND NEXT LOAD</button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* NEGOTIATIONS */}
        {section==="negotiations"&&(
          <div className="anim-fade" style={{flex:1,overflow:"auto",padding:"24px 32px"}}>
            <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:27,color:N.navy,marginBottom:4}}>NEGOTIATION ENGINE</div>
            <div style={{fontSize:17,color:N.mutedTxt,marginBottom:24}}>AI managing 2 active threads — 1 won this session</div>
            <div style={{display:"grid",gridTemplateColumns:"360px 1fr",gap:24}}>
              <div style={{display:"flex",flexDirection:"column",border:`1px solid ${N.rule}`}}>
                {[
                  {broker:"Echo Global",lane:"CHI → DAL",channel:"EMAIL",round:2,status:"awaiting",our:"$3.20/mi",their:"$2.95/mi",time:"3m ago"},
                  {broker:"XPO Logistics",lane:"MEM → CLT",channel:"VOICE",round:3,status:"won",our:"$3.40/mi",their:"$3.29/mi",time:"22m ago"},
                  {broker:"Arrive Logistics",lane:"HOU → NSH",channel:"EMAIL",round:1,status:"awaiting",our:"$3.15/mi",their:"$2.90/mi",time:"1h ago"},
                ].map((n,i)=>(
                  <div key={i} style={{padding:"16px 20px",borderBottom:`1px solid ${N.rule}`,background:i===0?N.offWhite:N.white,cursor:"pointer",borderLeft:i===0?`3px solid ${N.navy}`:"3px solid transparent"}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                      <div style={{fontWeight:700,fontSize:17,color:N.navy}}>{n.broker}</div>
                      <div style={{display:"flex",gap:6}}>
                        <span style={{fontSize:9,fontWeight:700,letterSpacing:"0.08em",padding:"2px 7px",background:n.channel==="EMAIL"?N.faint:"#EDE9FE",color:n.channel==="EMAIL"?N.navy:"#4C1D95"}}>{n.channel}</span>
                        <Chip s={n.status}/>
                      </div>
                    </div>
                    <div style={{fontSize:17,color:N.mutedTxt,marginBottom:10}}>{n.lane} · Round {n.round} · {n.time}</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                      <div style={{borderLeft:`2px solid ${N.greenLt}`,paddingLeft:8}}>
                        <div style={{fontSize:9,color:N.mutedTxt,fontWeight:700,letterSpacing:"0.06em"}}>OUR OFFER</div>
                        <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.greenLt}}>{n.our}</div>
                      </div>
                      <div style={{borderLeft:`2px solid ${N.amber}`,paddingLeft:8}}>
                        <div style={{fontSize:9,color:N.mutedTxt,fontWeight:700,letterSpacing:"0.06em"}}>THEIR OFFER</div>
                        <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.amber}}>{n.their}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{border:`1px solid ${N.rule}`,display:"flex",flexDirection:"column"}}>
                <div style={{background:N.offWhite,borderBottom:`1px solid ${N.rule}`,padding:"14px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:27,color:N.navy}}>Echo Global — CHI → DAL</div>
                    <div style={{fontSize:17,color:N.mutedTxt,marginTop:2}}>Email thread · Round 2</div>
                  </div>
                  <div style={{display:"flex",gap:8}}>
                    <button className="action-btn" onClick={()=>notify("Accepted")} style={{background:N.green,color:N.white,padding:"8px 16px",fontSize:15,fontWeight:700,letterSpacing:"0.04em"}}>ACCEPT</button>
                    <button className="action-btn" onClick={()=>notify("Declined")} style={{background:N.white,color:N.red,padding:"8px 16px",fontSize:15,fontWeight:600,border:`1px solid ${N.red}`,letterSpacing:"0.04em"}}>DECLINE</button>
                  </div>
                </div>
                <div style={{flex:1,padding:"20px",overflow:"auto",display:"flex",flexDirection:"column",gap:16}}>
                  {NEG_THREAD.map((m,i)=>(
                    <div key={i} style={{display:"flex",flexDirection:"column",alignItems:m.from==="ai"?"flex-end":"flex-start"}}>
                      <div style={{fontSize:10,color:N.mutedTxt,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:5}}>{m.from==="ai"?"Haul.AI Agent":"Broker (Sarah M.)"}</div>
                      <div className={m.from==="ai"?"neg-bubble-ai":"neg-bubble-broker"}>{m.text}</div>
                    </div>
                  ))}
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                    <div style={{fontSize:10,color:N.mutedTxt,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:5}}>Broker (Sarah M.)</div>
                    <div className="neg-bubble-broker" style={{color:N.mutedTxt}}>Typing<span className="cursor">▌</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ANALYTICS */}
        {section==="analytics"&&(
          <div className="anim-fade" style={{flex:1,overflow:"auto",padding:"24px 32px"}}>
            <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:27,color:N.navy,marginBottom:4}}>REVENUE INTELLIGENCE</div>
            <div style={{fontSize:17,color:N.mutedTxt,marginBottom:24}}>June 2026 · 5 trucks · 58 loads</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:`3px solid ${N.navy}`,marginBottom:32}}>
              {[
                {label:"Monthly Revenue",val:"$189,400",sub:"↑ 19% vs May",c:N.navy},
                {label:"Net Profit",val:"$52,400",sub:"27.7% margin",c:N.greenLt},
                {label:"Fleet Avg Rate/Mi",val:"$3.24",sub:"↑ $0.11 AI improvement",c:N.greenLt},
                {label:"AI Actions / Week",val:"247",sub:"≈ 31 hrs saved",c:N.navy},
              ].map((s,i)=>(
                <div key={i} style={{padding:"20px 24px 16px",borderRight:i<3?`1px solid ${N.rule}`:"none"}}>
                  <div style={{fontSize:10,fontWeight:700,color:N.mutedTxt,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>{s.label}</div>
                  <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:900,fontSize:50,color:s.c,lineHeight:1}}>{s.val}</div>
                  <div style={{fontSize:17,color:N.greenLt,fontWeight:600,marginTop:6}}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div style={{marginBottom:12,paddingBottom:10,borderBottom:`2px solid ${N.navy}`}}>
              <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:17,color:N.navy}}>LANE PROFITABILITY</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1.4fr 80px 100px 80px 100px 180px 70px",padding:"8px 0",borderBottom:`1px solid ${N.rule}`}}>
              {["LANE","LOADS","AVG $/MI","MARGIN","REVENUE","PROFITABILITY","TREND"].map(h=>(
                <div key={h} style={{fontSize:10,fontWeight:700,color:N.mutedTxt,letterSpacing:"0.1em"}}>{h}</div>
              ))}
            </div>
            {[
              {lane:"Chicago → Dallas",loads:22,rpm:3.24,margin:31,rev:18420,trend:8},
              {lane:"Memphis → Charlotte",loads:14,rpm:3.40,margin:33,rev:12880,trend:11},
              {lane:"Los Angeles → Phoenix",loads:10,rpm:4.00,margin:38,rev:8800,trend:2},
              {lane:"Atlanta → Miami",loads:8,rpm:3.17,margin:28,rev:6340,trend:4},
              {lane:"Houston → Nashville",loads:6,rpm:2.90,margin:18,rev:4680,trend:-3},
            ].map((l,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1.4fr 80px 100px 80px 100px 180px 70px",padding:"14px 0",borderBottom:`1px solid ${N.faint}`,alignItems:"center"}}>
                <div style={{fontWeight:600,fontSize:17,color:N.navy}}>{l.lane}</div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.navy}}>{l.loads}</div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:29,fontWeight:700,color:l.rpm>=3.20?N.greenLt:l.rpm>=2.90?N.amber:N.red}}>${l.rpm.toFixed(2)}</div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.navy}}>{l.margin}%</div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:N.navy}}>${(l.rev/1000).toFixed(1)}K</div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{flex:1,height:6,background:N.faint}}>
                    <div style={{width:`${l.margin*2.5}%`,height:"100%",background:l.margin>=30?N.greenLt:l.margin>=20?N.amber:N.red}}/>
                  </div>
                  <span style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:17,fontWeight:700,color:N.mutedTxt,minWidth:28}}>{l.margin}%</span>
                </div>
                <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontSize:27,fontWeight:700,color:l.trend>0?N.greenLt:N.red}}>{l.trend>0?"+":""}{l.trend}%</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {negOpen&&(
        <div style={{position:"fixed",inset:0,background:"rgba(27,42,74,0.6)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setNegOpen(false)}>
          <div style={{background:N.white,width:560,maxHeight:"80vh",overflow:"auto",borderTop:`4px solid ${N.greenLt}`}} onClick={e=>e.stopPropagation()}>
            <div style={{background:N.navy,padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontFamily:"'Big Shoulders Display',sans-serif",fontWeight:800,fontSize:29,color:N.white}}>Echo Global — CHI → DAL</div>
              <button onClick={()=>setNegOpen(false)} style={{background:"none",border:"1px solid rgba(255,255,255,0.3)",color:"rgba(255,255,255,0.7)",padding:"4px 12px",cursor:"pointer",fontSize:15,fontFamily:"'Libre Franklin',sans-serif"}}>CLOSE</button>
            </div>
            <div style={{padding:"20px 24px",display:"flex",flexDirection:"column",gap:14}}>
              {NEG_THREAD.map((m,i)=>(
                <div key={i} style={{display:"flex",flexDirection:"column",alignItems:m.from==="ai"?"flex-end":"flex-start"}}>
                  <div style={{fontSize:10,color:N.mutedTxt,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:5}}>{m.from==="ai"?"Haul.AI Agent":"Broker (Sarah M.)"}</div>
                  <div className={m.from==="ai"?"neg-bubble-ai":"neg-bubble-broker"}>{m.text}</div>
                </div>
              ))}
            </div>
            <div style={{padding:"16px 24px",borderTop:`1px solid ${N.rule}`,display:"flex",gap:10}}>
              <button className="action-btn" onClick={()=>{notify("Accepted");setNegOpen(false);}} style={{background:N.green,color:N.white,padding:"11px 24px",fontSize:16,fontWeight:700,letterSpacing:"0.04em",flex:1}}>ACCEPT</button>
              <button className="action-btn" onClick={()=>{notify("Declined");setNegOpen(false);}} style={{background:N.white,color:N.red,padding:"11px 24px",fontSize:16,fontWeight:600,border:`1px solid ${N.red}`,letterSpacing:"0.04em",flex:1}}>DECLINE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
