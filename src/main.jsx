import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, CheckCircle2, ChevronDown, Facebook, Mail, MapPin,
  Menu, MessageCircle, Phone, X, Truck, BrickWall, ShieldCheck
} from "lucide-react";
import "./styles.css";

const PHONE_1 = "077 280 4327";
const PHONE_2 = "078 932 9252";
const PHONE_3 = "077 877 3136";
const EMAIL = "prosperdumbamarume@gmail.com";
const WHATSAPP = "263772804327";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState(null);

  const whatsapp = (message = "Hello Social Blue Construction, I would like to enquire about your bricks.") =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  const nav = [
    ["Home", "#home"],
    ["Products", "#products"],
    ["Delivery", "#delivery"],
    ["About", "#about"],
    ["Contact", "#contact"]
  ];

  const faqs = [
    ["How do I get a price?", "Contact Social Blue Construction directly for current brick pricing and availability."],
    ["Do you deliver?", "Their social posts state that bricks can be delivered to customers. Contact the team to discuss your location and transport."],
    ["Where are you based?", "The Facebook page lists 5136 Tynwald, Harare, Zimbabwe."],
    ["Can I order foundation bricks?", "Customers on the page ask about foundation bricks and different brick grades. Contact the team for the current options available."]
  ];

  return (
    <div className="site">
      <div className="topbar">
        <div>QUALITY BRICKS • HARARE</div>
        <div className="top-contact">
          <a href={whatsapp()}>WhatsApp {PHONE_1}</a>
          <span>•</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>

      <header className="nav">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><i></i><i></i><i></i><i></i></span>
          <span>
            <strong>SOCIAL BLUE</strong>
            <small>CONSTRUCTION</small>
          </span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={23}/> : <Menu size={23}/>}
        </button>

        <nav className={`links ${menuOpen ? "open" : ""}`}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href={whatsapp("Hello Social Blue Construction, I would like to get a quote.")}>
            Get a Quote <ArrowRight size={15}/>
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid"></div>
          <div className="hero-copy">
            <div className="eyebrow"><span></span> BUILD WITH CONFIDENCE</div>
            <h1>Strong bricks.<br/><em>Solid foundations.</em></h1>
            <p className="hero-lead">
              Quality bricks supplied from Harare, with delivery options available for customers who need materials brought to them.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={whatsapp("Hello Social Blue Construction, I need bricks for a building project. Please assist me with availability and pricing.")}>
                WhatsApp Us <MessageCircle size={18}/>
              </a>
              <a className="btn secondary" href="#products">
                View Products <ArrowRight size={18}/>
              </a>
            </div>
            <div className="hero-points">
              <span><CheckCircle2 size={16}/> Quality-focused</span>
              <span><CheckCircle2 size={16}/> Harare based</span>
              <span><CheckCircle2 size={16}/> Delivery enquiries</span>
            </div>
          </div>

          <div className="brick-visual" aria-label="Brick pattern illustration">
            <div className="visual-badge">
              <BrickWall size={20}/>
              <div><strong>BRICK SUPPLIER</strong><span>Social Blue Construction</span></div>
            </div>
            <div className="wall">
              {Array.from({length: 72}).map((_, i) => <span key={i}></span>)}
            </div>
            <div className="wall-caption">
              <span>BUILT FOR THE JOB</span>
              <strong>Strong &amp; quality bricks</strong>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div><strong>5136</strong><span>Tynwald, Harare</span></div>
          <div><strong>077 280 4327</strong><span>Primary mobile contact</span></div>
          <div><strong>3</strong><span>Contact numbers listed</span></div>
          <div><strong>24/7</strong><span>Send an enquiry anytime</span></div>
        </section>

        <section id="products" className="section products">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span></span> WHAT THEY SUPPLY</div>
              <h2>Building materials<br/><em>for your next project.</em></h2>
            </div>
            <p>
              The Social Blue Construction page is positioned around brick supply. Customers ask about grades, quantities, foundation bricks and delivery.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-card featured">
              <div className="product-icon"><BrickWall size={30}/></div>
              <div>
                <span className="tag">CORE PRODUCT</span>
                <h3>Quality Bricks</h3>
                <p>Bricks supplied for construction projects. Ask the team about current grades, quantities and availability.</p>
              </div>
              <a href={whatsapp("Hello, I would like to enquire about your available bricks and current prices.")}>Enquire <ArrowRight size={16}/></a>
            </article>

            <article className="product-card">
              <div className="product-icon"><ShieldCheck size={30}/></div>
              <div>
                <span className="tag">PROJECT NEED</span>
                <h3>Foundation Bricks</h3>
                <p>Customers specifically enquire about bricks for foundations. Contact the supplier for current options.</p>
              </div>
              <a href={whatsapp("Hello, I need bricks for a foundation. Please advise what you currently have available.")}>Ask about this <ArrowRight size={16}/></a>
            </article>

            <article className="product-card">
              <div className="product-icon"><Truck size={30}/></div>
              <div>
                <span className="tag">DELIVERY</span>
                <h3>Brick Delivery</h3>
                <p>The page promotes bringing bricks to customers. Share your location and order requirements for a delivery enquiry.</p>
              </div>
              <a href={whatsapp("Hello, I need brick delivery. My location is ____. Please advise on availability and transport.")}>Discuss delivery <ArrowRight size={16}/></a>
            </article>
          </div>
        </section>

        <section id="delivery" className="delivery">
          <div className="delivery-pattern"></div>
          <div className="delivery-content">
            <div className="eyebrow light"><span></span> FROM SUPPLIER TO SITE</div>
            <h2>Need bricks at<br/><em>your location?</em></h2>
            <p>
              Social Blue Construction's posts state that customers can have bricks brought to them. Tell the team where you are building and what you need.
            </p>
            <a className="btn white" href={whatsapp("Hello Social Blue Construction, I would like to arrange brick delivery. My location is ____ and I need approximately ____ bricks.")}>
              Enquire About Delivery <Truck size={18}/>
            </a>
          </div>
          <div className="delivery-card">
            <div className="card-icon"><MapPin size={24}/></div>
            <span>BASED IN</span>
            <strong>5136 Tynwald</strong>
            <p>Harare, Zimbabwe</p>
            <div className="card-rule"></div>
            <span>DELIVERY ENQUIRIES</span>
            <strong>WhatsApp / Call</strong>
            <p>{PHONE_1}</p>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-visual">
            <div className="blue-block">
              <div className="mini-bricks">{Array.from({length: 18}).map((_,i)=><i key={i}></i>)}</div>
              <strong>QUALITY<br/>IS THE<br/>PRIORITY.</strong>
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span></span> ABOUT SOCIAL BLUE</div>
            <h2>A practical supplier<br/><em>for builders.</em></h2>
            <p>
              Social Blue Construction is listed as a building materials business in Harare. Its public page focuses on supplying bricks and helping customers get materials where they need them.
            </p>
            <div className="facts">
              <div><MapPin size={19}/><span><strong>Location</strong>5136 Tynwald, Harare</span></div>
              <div><Phone size={19}/><span><strong>Call / WhatsApp</strong>{PHONE_1} · {PHONE_2}</span></div>
              <div><Mail size={19}/><span><strong>Email</strong>{EMAIL}</span></div>
            </div>
          </div>
        </section>

        <section className="faq section">
          <div className="section-head compact">
            <div>
              <div className="eyebrow"><span></span> COMMON QUESTIONS</div>
              <h2>Before you<br/><em>place an order.</em></h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map(([q,a], i) => (
              <button className={`faq-row ${faq === i ? "active":""}`} key={q} onClick={() => setFaq(faq === i ? null : i)}>
                <span>{q}</span>
                <ChevronDown size={20}/>
                {faq === i && <p>{a}</p>}
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-inner">
            <div>
              <div className="eyebrow light"><span></span> START YOUR ENQUIRY</div>
              <h2>Tell us what<br/><em>you need.</em></h2>
              <p>For current pricing, brick grades, quantities and delivery, contact Social Blue Construction directly.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-btn" href={whatsapp()}><MessageCircle size={21}/><span><small>WHATSAPP</small>{PHONE_1}</span></a>
              <a className="contact-btn" href={`tel:${PHONE_2.replace(/\s/g,"")}`}><Phone size={21}/><span><small>CALL</small>{PHONE_2}</span></a>
              <a className="contact-btn" href={`mailto:${EMAIL}`}><Mail size={21}/><span><small>EMAIL</small>{EMAIL}</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand dark" href="#home">
            <span className="brand-mark"><i></i><i></i><i></i><i></i></span>
            <span><strong>SOCIAL BLUE</strong><small>CONSTRUCTION</small></span>
          </a>
          <p>Quality bricks and building material enquiries in Harare.</p>
        </div>
        <div className="footer-links">
          <a href="#products">Products</a>
          <a href="#delivery">Delivery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18}/></a>
          <a href={whatsapp()} aria-label="WhatsApp"><MessageCircle size={18}/></a>
        </div>
        <div className="copyright">© 2026 Social Blue Construction. All enquiries subject to current availability.</div>
      </footer>

      <a className="float-wa" href={whatsapp()} aria-label="WhatsApp Social Blue Construction"><MessageCircle size={25}/></a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
