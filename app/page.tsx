export default function Home() {
  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#000", color: "#fff", minHeight: "100vh" }}>

      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 32px", display: "flex", flexDirection: "column", gap: "48px" }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#111", border: "0.5px solid #333", borderRadius: "20px", padding: "4px 12px", width: "fit-content" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }}></span>
          <span style={{ fontSize: "11px", color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Live practice template</span>
        </div>

        {/* Hero */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ fontSize: "38px", fontWeight: 700, lineHeight: 1.15, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
            You made it.<br />Take a moment<br />to recognize that.
          </h1>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#aaa", maxWidth: "520px", margin: 0 }}>
            What you are looking at is a real, live, working authentication system — built by you, step by step. The{" "}
            <span style={{ color: "#fff", fontWeight: 500 }}>Sign in</span> and{" "}
            <span style={{ color: "#fff", fontWeight: 500 }}>Sign up</span>{" "}
            buttons in the top right corner are not decorations. They work. Real users can create real accounts.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#aaa", maxWidth: "520px", margin: 0 }}>
            Go ahead — test it yourself. Click{" "}
            <span style={{ color: "#22c55e", fontWeight: 500 }}>Sign up</span>{" "}
            in the top right corner right now and create an account. See what happens. That is the whole point.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" as const }}>
            <a
              href="#"
              style={{ padding: "12px 24px", fontSize: "14px", borderRadius: "6px", border: "none", background: "#fff", color: "#000", cursor: "pointer", fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.03em", textDecoration: "none" }}
            >
              Try signing up →
            </a>
            <a
              href="https://github.com/IainAmosMelchizedek/Authorization_Management_Clerk-"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px 24px", fontSize: "14px", borderRadius: "6px", border: "0.5px solid #555", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "'Courier New', monospace", letterSpacing: "0.03em", textDecoration: "none" }}
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Tool cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
          {[
            { label: "Framework", name: "Next.js", desc: "The React framework for the web — fast, flexible, production-ready." },
            { label: "Authentication", name: "Clerk", desc: "Professional authentication and user management. Free to start." },
            { label: "Deployment", name: "Vercel", desc: "From GitHub to live in minutes. Built by the team behind Next.js." },
            { label: "Source code", name: "GitHub", desc: "Where the full walkthrough and code live — open to everyone." },
          ].map(({ label, name, desc }) => (
            <div key={name} style={{ padding: "20px", borderRadius: "10px", border: "0.5px solid #333", background: "#111" }}>
              <p style={{ fontSize: "11px", color: "#666", margin: "0 0 6px", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{label}</p>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#fff", margin: 0 }}>{name}</p>
              <p style={{ fontSize: "13px", color: "#888", margin: "4px 0 0", lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* What this is / The real skill */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", margin: 0 }}>What this is</h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#aaa", margin: 0, maxWidth: "560px" }}>
              This is a practice template — a safe, working example of how to connect a web application to Clerk before you do it on your real app. Walk through the whole process here first. See how the pieces fit together. Then do it with confidence.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", margin: 0 }}>The real skill</h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#aaa", margin: 0, maxWidth: "560px" }}>
              Getting here required attention — not talent, not years of experience. Just the willingness to slow down, read carefully, and try again when something did not work. That is the real skill in development, and you just demonstrated it.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div style={{ borderTop: "0.5px solid #333", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#fff", margin: 0 }}>Running into issues?</h2>
          <p style={{ fontSize: "14px", color: "#888", margin: 0 }}>Reach out — this template was built to help people, and that includes you.</p>
          <div style={{ display: "flex", gap: "24px", marginTop: "6px", flexWrap: "wrap" as const }}>
            <a href="mailto:iain@safe-passage-strategies.com" style={{ fontSize: "13px", color: "#aaa", textDecoration: "underline" }}>iain@safe-passage-strategies.com</a>
            <a href="https://safepassagestrategies.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#aaa", textDecoration: "underline" }}>safepassagestrategies.com</a>
          </div>
        </div>

        {/* Footer */}
        <p style={{ fontSize: "12px", color: "#555", fontStyle: "italic", margin: 0, letterSpacing: "0.02em" }}>
          Built by Safe Passage Strategies — helping people understand technology, one plain language step at a time.
        </p>

      </main>
    </div>
  );
}