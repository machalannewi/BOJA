import {
  Shield,
  TrendingUp,
  Home,
  BarChart2,
  Sprout,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const SECTIONS = [
  {
    id: "save-protect",
    icon: Shield,
    tag: "Capital Safety",
    title: "Save Protect",
    accent: "#10b981",
    headline: "Your Money, Fortified.",
    sub: "We are please to introduce our Save-Protect Portfolio plan, designed to help you build savings while providing support during emergencies",
    body: "This plan runs for a period of 24 Months. However, after the first 6 Months, clients may access up to 10% of their investment in the event of an emergency. If this 10% emergency access is not utilized in the first 6 Months, it will be paid together with the client's total investment at maturity, along with the 15% ROI at the end of the 24 Months. This portfolio is designed to help our clients maintain financial security while preparing for unforseen circumstances.",
    bullets: [
      "100% principal guarantee on all balances",
      "Runs for a period of 24 Months",
      "15% ROI at the end of duration",
      "Up to 10% Access in the case of emergency",
    ],
    stat: { value: "0%", label: "Historical Capital Loss" },
    bg: "#0b1623",
    card: "#0f2030",
    border: "rgba(16,185,129,0.2)",
  },
  {
    id: "save-earn-fix",
    icon: TrendingUp,
    tag: "Fixed Returns",
    title: "Save and Earn Fix",
    accent: "#f59e0b",
    headline: "Lock In. Earn Up.",
    sub: "We are pleased to introduce our Save & Earn-Fix portfolio, a structured savings plan designed to help clients grow their funds through consistent savings",
    body: "This plans allows clients to save daily, weekly, or monthly through automatic contribution, providing a disciplined approach to saving. Subscribers can earn up to 20% annually on their savings, depending on the selected plan and duration. This portfolio is designed to encourage financial discipline while helping clients grow their wealth overtime",
    bullets: [
      "Save Daily, Weekly or Monthly",
      "Automatic Contribution",
      "Up to 20% Annually on Savings",
    ],
    stat: { value: "20%", label: "Max Annual Return" },
    bg: "#110e00",
    card: "#1c1700",
    border: "rgba(245,158,11,0.2)",
  },
  {
    id: "pay-my-rent",
    icon: Home,
    tag: "Real Estate Returns",
    title: "Pay My Rent",
    accent: "#818cf8",
    headline: "Let Your Savings Pay Your Rent.",
    sub: "Pay My Rent is an investment support portfolio designed by Basco B Special Nig Ltd to help you conveniently meet your rent obligations through structured savings.",
    body: "With this plan, subscribers save monthly with us towards their rent. If there after 7 Month you wish to pay your rent, the company will provide you with the remaining balance as which you can repay for over 5 Months with a 30% interest. Alternatively, if you continue saving with us for 12 Months without obstruction you will receive total savings wiht a 10% ROI. This plan is designed to support our client to acheive financial stability while meeting important obligations such as rent.",
    bullets: [
      "Monthly Rental Savings",
      "Repayment over 5 Months with 30% Interest",
      "10% ROI on 12 Months Dedicated Savings",
    ],
    stat: { value: "30%", label: "Repayment for over 5 Months" },
    bg: "#0d0b1e",
    card: "#14112a",
    border: "rgba(129,140,248,0.2)",
  },
  {
    id: "save-earn-returns",
    icon: BarChart2,
    tag: "Variable Returns",
    title: "Save and Earn Returns",
    accent: "#06b6d4",
    headline: "Grow With the Market.",
    sub: "The Save & Earn-Returns portfolio is a structured short-termm investment plan designed to help clients grow thier funds through consistent and disciplined savings over a period of six (6) Months.",
    body: "Under this plan, clients save a BULK AMOUNT OF 300k UPWARD depending on thier convenience AMOUNT, through an automated savings system. This flexible approach encourages financial discipline while ensuring steady capital growth. At the end of the 6 Months investment period, client will receive their total savings along with their return on investment of under 100k/5k ratio ROI plans, making it an ideal option for individual(s) seeking short-term financial growth and stability. Save & Eran-Returns provides a simple, secure and rewarding way to grow your money within a define time frame",
    bullets: [
      "Save a Bulk of 300K Upward",
      "Automated Savings System",
      "Steady Capital Growth",
      "Short-term financial growth and stability",
    ],
    stat: { value: "300K+", label: "Save Bulk Amount" },
    bg: "#031218",
    card: "#061e2a",
    border: "rgba(6,182,212,0.2)",
  },
  {
    id: "investment-growth",
    icon: Sprout,
    tag: "Long-Term Wealth",
    title: "Investment Growth",
    accent: "#34d399",
    headline: "Plant Today. Harvest Tomorrow.",
    sub: "Investment Growth Portfolio designed by Basco B Special Nig Ltd to support clients in building capital for business start-ups.",
    body: "Wih this plan, clients invest for a duration of 12, 18, 24 Months, depending on their preferred investment period. Subscribers are entitled to a free Enterprenuership training 3 Months into the investment to equip them with the knowledge needed to start and manage thier business. At the end of the selected investment period, clients will receive thier total investment along with a 10% ROI. This portfolio is structured to help our clients grow financially while preparing for successful business ownership.",
    bullets: [
      "Compound reinvestment on all returns",
      "Receive total investment with 10% ROI",
      "Free Enterprenuership Training",
    ],
    stat: { value: "10% ROI", label: "Up to 24-Months Investment Duration" },
    bg: "#011209",
    card: "#041d0f",
    border: "rgba(52,211,153,0.2)",
  },
];

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
      style={{ background: `${color}20`, color }}
    >
      {text}
    </span>
  );
}

function StatCard({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl px-8 py-6 text-center"
      style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}
    >
      <p
        className="text-5xl font-black mb-1"
        style={{ color: accent, fontFamily: "'Cormorant Garamond', serif" }}
      >
        {value}
      </p>
      <p
        className="text-xs tracking-widest uppercase"
        style={{ color: `${accent}99` }}
      >
        {label}
      </p>
    </div>
  );
}

function Section({
  section,
  index,
}: {
  section: (typeof SECTIONS)[0];
  index: number;
}) {
  const Icon = section.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      id={section.id}
      className="relative w-full py-28 px-6 md:px-16 lg:px-28"
      style={{ background: section.bg }}
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: section.accent,
          width: 500,
          height: 500,
          top: isEven ? -100 : "auto",
          bottom: isEven ? "auto" : -100,
          left: isEven ? -150 : "auto",
          right: isEven ? "auto" : -150,
        }}
      />

      <div
        className={`relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}
      >
        {/* Text */}
        <div>
          <Badge text={section.tag} color={section.accent} />
          <div className="flex items-center gap-3 mb-4">
            <Icon size={22} color={section.accent} />
            <h2
              className="text-lg font-semibold tracking-widest uppercase"
              style={{ color: section.accent, letterSpacing: "0.2em" }}
            >
              {section.title}
            </h2>
          </div>
          <h3
            className="text-4xl md:text-5xl font-black leading-tight mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#f1f5f9",
            }}
          >
            {section.headline}
          </h3>
          <p
            className="text-base mb-4 leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            {section.sub}
          </p>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#64748b" }}
          >
            {section.body}
          </p>

          <ul className="space-y-3 mb-10">
            {section.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm"
                style={{ color: "#cbd5e1" }}
              >
                <CheckCircle
                  size={16}
                  color={section.accent}
                  className="mt-0.5 flex-shrink-0"
                />
                {b}
              </li>
            ))}
          </ul>

          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:gap-4"
            style={{
              background: section.accent,
              color: "#000",
            }}
          >
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl p-10 flex flex-col gap-8"
          style={{
            background: section.card,
            border: `1px solid ${section.border}`,
          }}
        >
          <StatCard
            value={section.stat.value}
            label={section.stat.label}
            accent={section.accent}
          />

          <div className="space-y-4">
            {section.bullets.map((b, i) => (
              <div
                key={b}
                className="flex items-center gap-4 rounded-xl px-5 py-4"
                style={{
                  background: `${section.accent}08`,
                  border: `1px solid ${section.accent}15`,
                }}
              >
                <span
                  className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${section.accent}25`,
                    color: section.accent,
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-sm" style={{ color: "#94a3b8" }}>
                  {b}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl px-5 py-4 flex items-center justify-between"
            style={{
              background: `${section.accent}10`,
              border: `1px solid ${section.accent}20`,
            }}
          >
            <span
              className="text-xs tracking-wider uppercase"
              style={{ color: `${section.accent}aa` }}
            >
              Minimum Investment
            </span>
            <span
              className="font-bold text-sm"
              style={{ color: section.accent }}
            >
              ₦10,000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InvestmentPage() {
  return (
    <div
      style={{
        background: "#050d18",
        overflowX: "hidden",
        marginBottom: "-72px",
      }}
    >
      {/* PRODUCT SECTIONS */}
      {SECTIONS.map((section, i) => (
        <Section key={section.id} section={section} index={i} />
      ))}

      {/* CTA FOOTER BAND */}
      <section
        className="py-28 px-6 text-center overflow-x-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #0f2e20 0%, #050d18 70%)",
        }}
      >
        <h2
          className="text-4xl md:text-6xl font-black mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#f1f5f9",
          }}
        >
          Ready to Start Building?
        </h2>
        <p
          className="text-base mb-10 max-w-md mx-auto"
          style={{ color: "#64748b" }}
        >
          Join over 3,000 Nigerians growing their wealth with Basco B Special.
          Open your account in under 5 minutes.
        </p>
        <button
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-bold text-base"
          style={{ background: "#10b981", color: "#000" }}
        >
          Create Free Account <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}
