(function(){const a={business:{name:"Solar Surf Board Repairs",rating:"5.0",reviewCount:"23",description:"Quality surfboard repairs in Mount Maunganui. Fast, professional, affordable — since 1974."},services:[{name:"Ding Repairs",description:"Dings, gauges, punctures, slices — any damage your board's taken."},{name:"All Board Types",description:"Surfboards, SUPs, fibreglass watercraft — we work on them all."},{name:"Full Restorations",description:"Major damage or botched repairs cleaned up. Boards look like new again."},{name:"Fast Turnaround",description:"Same-day and overnight repairs available. We quote before we start — no surprises."}],contact:{address:"Unit 8, 21 MacDonald Street, Mount Maunganui 3116",phone:"027 5888 082",email:"mountmaunganui@me.com",hours:"Monday to Friday: 9:30am – 1pm"},location:"Unit 8, 21 MacDonald Street, Mount Maunganui 3116. About 5 minutes from Omanu Beach.",story:"In 1974, the Mount's very first surfshop — Solar Surfshop — opened its doors. Mike shaped the boards, Mum made Balinese clothes, and a legacy was born. Today, CJ and Mike carry on that tradition — a father-and-son operation with decades of experience. CJ was the first person to run a Mount Maunganui surf school, and he's been fixing boards for over 20 years. When you bring your board to Solar Surf, you're putting it in the hands of people who live and breathe the Mount surf culture.",prices:"We quote before we start work — no surprises. Pricing varies depending on damage type, board size, and complexity. Give us a call at 027 5888 082 or swing by with your board for a free quote. Same-day and overnight repairs available.",reviews:[{text:'"Dropped my board off at 9am and it was done by 1pm. Fantastic job."',author:"— Sean Collins"},{text:'"Excellent repair without any traces of a repair. They even covered other little scratches with paint."',author:"— Fionn Gartlan"},{text:'"CJ is super friendly and nothing is a problem. He cleaned up bad epoxy work. The board looks like new again."',author:"— Clous"},{text:`"Unreal service, professional repair and 24hr turn around! Don't get that with other ding repairs."`,author:"— Lee Williamson"},{text:'"Awesome service. My longboard looks like new now and stronger. They perfectly matched the colours as well."',author:"— Sol Almonacid"},{text:'"Speedy, professional and friendly! Dropped it off in the morning and by mid-afternoon I had my board back, looking mint."',author:"— Shirley Ewing"}],instagram:"@solarsurfnz",usefulLinks:[{name:"Sunshine Healing Physiotherapy",desc:"Surf-informed physio focused on movement, strength, and flow.",url:"https://sunshinehealing.co.nz/"},{name:"Surfline",desc:"Surf reports, forecasts, and cam feeds.",url:"https://www.surfline.com"},{name:"MetService Tides — Mount Maunganui",desc:"Tide times for the Mount.",url:"https://www.metservice.com/marine/tides/mount-maunganui"},{name:"MetService Marine Forecast",desc:"Bay of Plenty marine forecast.",url:"https://www.metservice.com/marine/marine-forecasts/bay-of-plenty"}]};function f(e){return e.toLowerCase().replace(/[^a-z0-9\s]/g,"").replace(/\s+/g," ").trim()}function g(e){const s=f(e),n=[{keywords:["hour","open","time","when","close","9:30","1pm"],answer:()=>`**Hours:** ${a.contact.hours}

**Pickups & Drop-offs:** Available 7 days to Mike in Unit 9, 9:30am – 4pm (call to check if the surf's up 🏄♂️)

We always quote before starting work — no surprises!`},{keywords:["where","address","location","find","map","directions","macdonald","unit"],answer:()=>`📍 **Address:** ${a.location}

We're about 5 minutes from Omanu Beach. Easy walk or drive from the Mount surf breaks.

📞 Call 027 5888 082 if you need help finding us.`},{keywords:["phone","call","number","contact","027","reach"],answer:()=>`📞 **Call or text:** 027 5888 082

Or email: ${a.contact.email}

We're happy to answer questions over the phone. Swing by with your board for a free quote!`},{keywords:["service","fix","repair","ding","restore","offer","do you","what can"],answer:()=>`**What We Fix:**

${a.services.map(o=>`• **${o.name}** — ${o.description}`).join(`

`)}

We work on surfboards, SUPs, fibreglass watercraft, and more. Fast turnaround — same-day available!`},{keywords:["price","cost","how much","fee","cheap","expensive","pricing","quote","pay"],answer:()=>`**Pricing:** ${a.prices}

We always quote before starting work — no surprises, no hidden fees. Same-day and overnight repairs available at no extra rush charge.`},{keywords:["story","history","who","start","1974","legacy","begin","found","father","son","c j","mike","family"],answer:()=>`**Our Story:**

${a.story}`},{keywords:["review","rating","google","stars","people say","testimonial","what do customer","what people","is it good"],answer:()=>`**⭐⭐⭐⭐⭐ ${a.business.rating} from ${a.business.reviewCount} Google reviews**

Here's what customers say:

${a.reviews.slice(0,3).map(o=>`${o.text}
${o.author}`).join(`

`)}

[See all reviews on Google →](https://www.google.com/maps/place/Solar+Surf+Board+Repairs/@-37.6487,176.1625)`},{keywords:["instagram","social","photo","follow","@"],answer:()=>`Follow us on Instagram: **${a.instagram}**

We post repair work, before/after shots, and Mount surf culture. DM us about your board!`},{keywords:["how long","turnaround","same day","overnight","fast","quick","speed","day","when ready"],answer:()=>`**Turnaround:** Fast! Most repairs are done same-day or overnight.

• Small dings: often ready in a few hours
• Larger repairs: typically 24-48 hours
• Big restorations: ask for a timeframe

We quote before we start and tell you exactly when it'll be ready.`},{keywords:["surfboard","sup","stand up","longboard","shortboard","foam","epoxy","fiberglass","fibreglass","type of board","all board"],answer:()=>`**Boards we work on:**

• Surfboards (shortboards, longboards, funboards, mini-mals)
• SUPs (stand up paddle boards)
• Fibreglass watercraft
• Epoxy and polyester resin boards

If it floats and you surf it, we can probably fix it. Bring it in and we'll take a look!`},{keywords:["link","recommend","physio","healing","surfline","tide","weather","forecast","sunshine"],answer:()=>`**Useful Links:**

${a.usefulLinks.map(o=>`• [${o.name}](${o.url}) — ${o.desc}`).join(`
`)}

See all links at [solarsurf.co.nz/links](http://192.168.68.57:8080/links/)`},{keywords:["email","message","get in touch"],answer:()=>`📍 **Address:** ${a.contact.address}
📞 **Phone:** ${a.contact.phone}
✉️ **Email:** ${a.contact.email}
🕐 **Hours:** ${a.contact.hours}

We always quote before starting work. Drop off your board, give us a call, or send an email!`}];let c=null,m=0;for(const o of n){let i=0;for(const d of o.keywords)s.includes(d)&&i++;i>0&&(o.keywords.some(d=>s.includes(d)&&d.length>4)&&(i+=.5),i>m&&(m=i,c=o))}if(c)return c.answer();const p=[`Hmm, I'm not sure about that specifically. Here's what I can tell you about Solar Surf:

${a.business.description}

📍 ${a.location}
📞 ${a.contact.phone}
🕐 ${a.contact.hours}

Try asking about services, pricing, hours, or our story!`,`I don't have that info handy, but here's what I do know:

**${a.business.name}** — ${a.business.description}

📍 ${a.location}
📞 ${a.contact.phone}

Feel free to give us a call for anything specific!`,`Good question! I'm not 100% sure on that one. Here's what I can help with:

• Services & repairs
• Hours & location
• Pricing & quotes
• Our story & reviews
• Turnaround times

Or give CJ a call at **027 5888 082** — he'll sort you out!`];return p[Math.floor(Math.random()*p.length)]}const t=document.getElementById("chat-messages"),r=document.getElementById("chat-input"),l=document.getElementById("chat-send"),y=document.getElementById("chat-clear");function h(e,s=!1){const n=document.createElement("div");n.className=`message ${s?"user":"bot"}`,n.innerHTML=`
          <div class="message-avatar">${s?"👤":"🏄"}</div>
          <div class="message-content">${e}</div>
        `,t.appendChild(n),t.scrollTop=t.scrollHeight}function w(){const e=document.createElement("div");e.className="message bot",e.id="typing-indicator",e.innerHTML=`
          <div class="message-avatar">🏄</div>
          <div class="message-content">
            <div class="typing-indicator">
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
              <div class="typing-dot"></div>
            </div>
          </div>
        `,t.appendChild(e),t.scrollTop=t.scrollHeight}function b(){const e=document.getElementById("typing-indicator");e&&e.remove()}function u(e){if(!e.trim())return;h(e,!0),r.value="",r.disabled=!0,l.disabled=!0,w();const s=600+Math.random()*800;setTimeout(()=>{b();const n=g(e);h(n),r.disabled=!1,l.disabled=!1,r.focus()},s)}r.addEventListener("keydown",e=>{e.key==="Enter"&&u(r.value)}),l.addEventListener("click",()=>u(r.value)),y.addEventListener("click",()=>{t.innerHTML="";const e=document.createElement("div");e.className="message bot",e.innerHTML=`
          <div class="message-avatar">🏄</div>
          <div class="message-content">
            <p>Hey! 👋 I'm the Solar Surf AI assistant. Ask me anything about our board repairs, hours, pricing, or story. Here's some things you can ask:</p>
            <div class="suggestions">
              <button class="suggestion-chip" data-q="What are your hours?">What are your hours?</button>
              <button class="suggestion-chip" data-q="Where are you located?">Where are you located?</button>
              <button class="suggestion-chip" data-q="What services do you offer?">What services do you offer?</button>
              <button class="suggestion-chip" data-q="How much do repairs cost?">How much do repairs cost?</button>
              <button class="suggestion-chip" data-q="Tell me the story of Solar Surf">Tell me the story</button>
              <button class="suggestion-chip" data-q="What do customers say?">What do customers say?</button>
            </div>
          </div>
        `,t.appendChild(e),r.focus()}),t.addEventListener("click",e=>{const s=e.target.closest(".suggestion-chip");s&&u(s.dataset.q)}),r.focus()})();
