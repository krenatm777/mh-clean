export function Contact() {
  return (
    <section className="block contact" id="contact">
      <div className="shell">
        <div className="contact-grid">
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Start a strategic conversation</h2>
            <p className="section-lead">
              We welcome dialogue with asset owners, institutional investors, and
              partners aligned with disciplined, Shariah-compliant participation
            </p>
            <div className="contact-detail">
              <div className="cd-row">
                <div className="k">Email</div>
                <div className="v">
                  <a href="mailto:chairman@musharaqahub.com">
                    chairman@musharaqahub.com
                  </a>
                </div>
              </div>
              <div className="cd-row">
                <div className="k">Location</div>
                <div className="v">
                  Astana International Financial Centre, Kazakhstan
                </div>
              </div>
            </div>
          </div>

          <div className="contact-side reveal d1">
            <h3>What to include</h3>
            <ul>
              <li>Who you are and the nature of your interest</li>
              <li>The asset, mandate, or partnership you have in mind</li>
              <li>Relevant jurisdiction and timeline</li>
            </ul>
            <a href="mailto:chairman@musharaqahub.com" className="btn btn-primary">
              Email our team <span className="arw">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
