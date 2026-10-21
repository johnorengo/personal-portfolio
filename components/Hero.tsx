"use client";

import Image from "next/image";
import { ArrowRight, Mail, ShieldCheck, Terminal, Server } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";
import RotatingHeadline from "./RotatingHeadline";
import styles from "./Hero.module.css";

const profiles = [
  { label: "GitHub", href: "https://github.com/johnorengo", icon: "/icons/github.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/johnorengo", icon: "/icons/linkedin.svg" },
  { label: "Credly Badges", href: "https://www.credly.com/users/john-orengo", icon: "/icons/credly.svg" },
];
const domains = [
  { Icon: Terminal, title: "Full Stack", tools: "React · Laravel" },
  { Icon: ShieldCheck, title: "Security", tools: "Azure · RBAC" },
  { Icon: Server, title: "Systems", tools: "Linux · Cisco" },
];
const metrics = [
  { value: "20+", label: "Projects Worked On" },
  { value: "4+", label: "Years of Experience" },
  { value: "3+", label: "Cloud Certifications" },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <RotatingHeadline />
          <p className={styles.summary}>
            Full stack software engineer and cybersecurity specialist, turning complex ideas into secure, intuitive digital experiences.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              <span className={styles.longLabel}>Explore Selected Work</span>
              <span className={styles.shortLabel}>View work</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className={styles.secondary}>
              <span className={styles.longLabel}>Discuss an Opportunity</span>
              <span className={styles.shortLabel}>Let&apos;s connect</span>
            </a>
          </div>
          <div className={styles.social}>
            <span className={styles.socialCaption}>Verified Social &amp; Technical Profiles</span>
            <div className={styles.profiles}>
              {profiles.map((profile) => (
                <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer" aria-label={`${profile.label} profile`}>
                  <Image src={profile.icon} alt="" width={16} height={16} />
                  <span>{profile.label}</span>
                </a>
              ))}
              <a href={`mailto:${personalInfo.email}`} aria-label="Email John Orengo">
                <Mail size={16} aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.portraitFrame}>
          <Image
            src="/portraits/john-enhanced.webp"
            alt="John Orengo in a suit with arms crossed"
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 699px) calc(100vw - 32px), (max-aspect-ratio: 1/1) 80vw, 45vw"
            className={styles.portrait}
          />
          </div>
          <div className={styles.domains}>
            {domains.map(({ Icon, title, tools }) => (
              <div key={title}>
                <Icon size={18} aria-hidden="true" />
                <span>{title}</span>
                <small>{tools}</small>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.metrics}>
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
