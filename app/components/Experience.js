export default function Experience() {
  const timeline = [
    {
      date: 'Feb 2026 \u2014 Present',
      current: true,
      title: 'Software Developer',
      company: 'Spartans \u2014 Dubai, UAE',
      companyLink: null,
      desc: 'Developing enterprise software solutions in Dubai. Working on full-stack applications with modern technologies and cloud-native architectures.',
      tags: ['Spring Boot', 'Angular', 'Kubernetes', 'Docker', 'Microservices'],
    },
    {
      date: '2025 \u2014 Present',
      current: false,
      title: 'Backend Spring Boot Developer',
      company: 'Alet.io',
      companyLink: null,
      companyLabel: 'Alet.io \u2014 Ethio Telecom VAS Partner',
      desc: 'Developing and maintaining critical Value Added Services (VAS) for Ethio Telecom, including Boomplay music streaming, ONE VAS, Teletop, Arada Games, SMS gateways, USSD apps, subscription systems, and content delivery platforms.',
      tags: ['Spring Boot', 'USSD', 'SMS Gateway', 'Microservices', 'PostgreSQL'],
    },
    {
      date: '2022 \u2014 Feb 2026',
      current: false,
      title: 'IT Manager & Software Engineer',
      company: 'Frontieri Consulting',
      companyLink: 'https://frontieri.com',
      companyLinkText: 'frontieri.com',
      desc: 'Led IT operations and software engineering. Built the company website (frontieri.com), capracom.com, vastatalent.com, and multiple international expo websites. Managed technology infrastructure and oversaw web and mobile application projects.',
      tags: ['React', 'WordPress', 'Spring Boot', 'Node.js', 'Android'],
    },
    {
      date: '2018 \u2014 2021',
      current: false,
      title: 'Software Developer',
      company: 'Pulsar Software Company',
      companyLink: null,
      desc: 'Developed custom software solutions including web applications, mobile apps, and enterprise systems. Gained deep expertise in Java/Spring Boot backend development and modern frontend frameworks.',
      tags: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Android'],
    },
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__tag">&lt;experience&gt;</span>
          <h2 className="section__title">Professional <span className="gradient-text">Journey</span></h2>
          <p className="section__subtitle">Building impactful solutions across industries</p>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline__item animate-on-scroll" key={index}>
              <div className="timeline__dot"></div>
              <div className="timeline__content">
                <div className="timeline__header">
                  <span className="timeline__date">{item.date}</span>
                  {item.current && <span className="timeline__badge timeline__badge--current">Current</span>}
                </div>
                <h3 className="timeline__title">{item.title}</h3>
                <h4 className="timeline__company">
                  {item.companyLink ? (
                    <>{item.company} &mdash; <a href={item.companyLink} target="_blank" rel="noopener noreferrer">{item.companyLinkText}</a></>
                  ) : (
                    item.companyLabel || item.company
                  )}
                </h4>
                <p className="timeline__desc">{item.desc}</p>
                <div className="timeline__tags">
                  {item.tags.map((tag) => (
                    <span className="timeline__tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
