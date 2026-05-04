export default function Home() {
  const features = [
    "Run side-by-side prompt experiments with real LLM calls",
    "Statistical significance testing (p-values, confidence intervals)",
    "Track quality metrics: latency, cost, accuracy, user ratings",
    "Visual dashboards with experiment history and trends",
    "Support for OpenAI, Anthropic, and other LLM providers",
    "Team collaboration and experiment sharing"
  ];

  const faqs = [
    {
      q: "How does the A/B testing work?",
      a: "You define two or more prompt variants, set a sample size, and our engine runs both variants against your test cases. We calculate statistical significance so you know when a winner is real, not random noise."
    },
    {
      q: "Which LLM providers are supported?",
      a: "We support OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), and any OpenAI-compatible API. Bring your own API keys — we never store your credentials."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Testing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          A/B Test AI Prompts with{" "}
          <span className="text-[#58a6ff]">Statistical Significance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing which prompt performs better. Run controlled experiments, measure real quality metrics, and ship improvements backed by data.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Testing — $49/mo
        </a>
        <ul className="mt-10 grid sm:grid-cols-2 gap-3 text-left">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#8b949e]">
              <span className="text-[#58a6ff] mt-0.5">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited experiments</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> All LLM providers</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Statistical significance engine</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Team collaboration (up to 5 seats)</li>
            <li className="flex gap-2"><span className="text-[#58a6ff]">✓</span> Priority support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} Prompt A/B Analytics. All rights reserved.
      </footer>
    </main>
  );
}
