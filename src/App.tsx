import React, { useEffect, useRef, useState } from 'react';
import { 
  Briefcase, 
  Layers, 
  Cpu, 
  Mail, 
  ChevronRight, 
  Download, 
  MapPin, 
  Sparkles,
  Award,
  Globe,
  MessageSquare,
  Compass,
  Zap,
  BookOpen,
  Camera
} from 'lucide-react';

// Categories Data
const SKILL_CLUSTERS = [
  {
    name: 'Digital Marketing & SEO',
    color: 0x2fb6ff,
    colorHex: '#2fb6ff',
    skills: ['SEO', 'SEM', 'Social Media', 'Email Marketing', 'WhatsApp Marketing', 'Lead Generation', 'Google Analytics', 'Tag Manager', 'Content Strategy']
  },
  {
    name: 'Web Development',
    color: 0x3ffcf1,
    colorHex: '#3ffcf1',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'WordPress']
  },
  {
    name: 'CRM & Marketing Systems',
    color: 0x9b4dff,
    colorHex: '#9b4dff',
    skills: ['Prismic CMS', 'Zoho CRM', 'Zoho Forms', 'WATI', 'Exotel', 'Search Console']
  },
  {
    name: 'Design',
    color: 0xff7de9,
    colorHex: '#ff7de9',
    skills: ['Photoshop', 'Illustrator', 'Canva']
  },
  {
    name: 'AI & Automation',
    color: 0xffd166,
    colorHex: '#ffd166',
    skills: ['ChatGPT', 'AI Workflows', 'LP Automation', 'Lead Scoring', 'Marketing Automation']
  }
];

const TECH_ITEMS = [
  { name: 'HTML', color: '#2fb6ff' },
  { name: 'CSS', color: '#3ffcf1' },
  { name: 'JavaScript', color: '#ffd166' },
  { name: 'React.js', color: '#2fb6ff' },
  { name: 'WordPress', color: '#9b4dff' },
  { name: 'SEO & SEM', color: '#2fb6ff' },
  { name: 'Email Marketing', color: '#9b4dff' },
  { name: 'Prismic CMS', color: '#3ffcf1' },
  { name: 'Zoho CRM', color: '#9b4dff' },
  { name: 'ChatGPT', color: '#ffd166' },
  { name: 'Google Analytics', color: '#2fb6ff' },
  { name: 'Tag Manager', color: '#3ffcf1' },
  { name: 'Canva', color: '#ff7de9' },
  { name: 'Photoshop', color: '#2fb6ff' },
  { name: 'Illustrator', color: '#ff7de9' }
];

export default function App() {
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const galaxyCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const techCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const galaxyWrapRef = useRef<HTMLDivElement | null>(null);
  const techWrapRef = useRef<HTMLDivElement | null>(null);

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [libsLoaded, setLibsLoaded] = useState<boolean>(false);

  // Custom Interactive Profile Avatar personalization (persisted locally)
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    return localStorage.getItem('sms_portfolio_avatar') || '/file_00000000ada872098b6c86d07829bc0e.png';
  });
  const [isDraggingAvatar, setIsDraggingAvatar] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setAvatarUrl(result);
          localStorage.setItem('sms_portfolio_avatar', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOverAvatar = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingAvatar(true);
  };

  const handleDragLeaveAvatar = () => {
    setIsDraggingAvatar(false);
  };

  const handleDropAvatar = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingAvatar(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setAvatarUrl(result);
          localStorage.setItem('sms_portfolio_avatar', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Interactive Digital & Print Resume states & handlers
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [resumeViewMode, setResumeViewMode] = useState<'hologram' | 'classic'>('hologram');

  const handlePrintResume = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>SMS_Sulaiman_Musthaq_Resume</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Inter', sans-serif;
              color: #111;
              background: #fff;
              margin: 0;
              padding: 40px;
              line-height: 1.5;
              font-size: 13px;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #222;
              padding-bottom: 15px;
              margin-bottom: 20px;
            }
            .name {
              font-size: 26px;
              font-weight: 700;
              letter-spacing: 0.05em;
              text-transform: uppercase;
              margin: 0;
              color: #000;
            }
            .title {
              font-size: 14px;
              font-weight: 600;
              color: #444;
              margin: 5px 0;
            }
            .contact {
              font-size: 11px;
              color: #666;
              margin-top: 5px;
            }
            .contact a {
              color: #111;
              text-decoration: none;
            }
            .section-title {
              font-size: 13px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              border-bottom: 1px solid #ddd;
              padding-bottom: 4px;
              margin-top: 22px;
              margin-bottom: 10px;
              color: #000;
            }
            .summary, .experience-item, .project-item, .skills-grid {
              margin-bottom: 12px;
            }
            .job-header {
              display: flex;
              justify-content: space-between;
              font-weight: 600;
              font-size: 12px;
              margin-bottom: 3px;
            }
            .company {
              color: #222;
            }
            .date {
              color: #555;
              font-weight: 400;
            }
            ul {
              margin: 4px 0 0 16px;
              padding: 0;
            }
            li {
              margin-bottom: 4px;
            }
            .skills-category {
              margin-bottom: 6px;
            }
            .skills-category strong {
              font-weight: 600;
            }
            @media print {
              body {
                padding: 0;
              }
              @page {
                margin: 1.5cm;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="name">SMS SULAIMAN MUSTHAQ</h1>
            <div class="title">Digital Marketing Manager | Growth Strategist | AI-Enabled Marketing Automation</div>
            <div class="contact">
              Chennai, Tamil Nadu, India &nbsp;|&nbsp; +91 95785 23280 &nbsp;|&nbsp; <a href="mailto:sulaimanmusthaq99@gmail.com">sulaimanmusthaq99@gmail.com</a> &nbsp;|&nbsp; <a href="https://linkedin.com/in/sulaiman-musthaq" target="_blank">linkedin.com/in/sulaiman-musthaq</a>
            </div>
          </div>
          
          <div class="section-title">Professional Summary</div>
          <div class="summary">
            Digital marketing professional and web developer with 4+ years leading multi-channel strategy across real estate and consumer brands. Manages the full digital stack — technical SEO, search engine marketing (SEM), conversion-rate optimization (CRO), GA4/GTM tracking, and CRM-driven lead workflows — and builds AI-assisted automation to cut manual marketing overhead. Track record of shipping high-converting landing pages, custom interactive web applications, and running organic/search media campaigns end to end, from development to analytics.
          </div>
          
          <div class="section-title">Core Competencies</div>
          <div class="summary" style="font-weight: 500;">
            Digital Marketing Strategy &bull; SEO &amp; SEM &bull; Lead Generation &bull; Landing Page &amp; CRO &bull; Marketing Automation &bull; GA4 &amp; GTM &bull; CRM Management &bull; Content Marketing &bull; Data Analytics &amp; Reporting &bull; AI Marketing Workflows
          </div>
          
          <div class="section-title">Professional Experience</div>
          <div class="experience-item">
            <div class="job-header">
              <span class="company">Senior Digital Marketing Executive | ASquare Grand Developers Pvt. Ltd., Chennai</span>
              <span class="date">Jun 2026 – Present</span>
            </div>
            <ul>
              <li>Lead digital marketing for premium real estate projects, overseeing strategy across SEO, content marketing, and CRM-driven lead nurturing.</li>
              <li>Plan and optimize organic and search engine marketing (SEM) campaigns, managing user journey testing and conversion funnels to improve lead quality.</li>
              <li>Build SEO-optimized, conversion-focused landing pages and manage site content through Prismic CMS.</li>
              <li>Configure GA4 and GTM tracking to give sales and leadership visibility into funnel performance.</li>
              <li>Design AI-assisted marketing automation workflows, reducing manual effort in lead qualification and campaign reporting.</li>
            </ul>
          </div>
          
          <div class="experience-item">
            <div class="job-header">
              <span class="company">Senior Digital Marketing Executive | Home Konnect Realty Pvt. Ltd., Chennai</span>
              <span class="date">Feb 2025 – May 2026</span>
            </div>
            <ul>
              <li>Managed organic search presence, content management, and executed SEO strategy across multiple project websites.</li>
              <li>Built and shipped responsive landing pages and microsites, managed through Prismic CMS.</li>
              <li>Integrated Zoho CRM, WATI, GA4, and GTM into a single lead-tracking and follow-up workflow.</li>
              <li>Authored a structured Knowledge Transfer plan covering CRM tools, listing platforms, and access-handover protocols for role succession.</li>
            </ul>
          </div>
          
          <div class="experience-item">
            <div class="job-header">
              <span class="company">Web Developer &amp; Digital Marketing Executive | Hafa Frozen Foods International Pvt. Ltd., Chennai</span>
              <span class="date">Feb 2021 – Jun 2024</span>
            </div>
            <ul>
              <li>Designed and maintained the company website, and managed SEO and organic digital campaigns.</li>
              <li>Created promotional creatives and social media content to support brand and product launches.</li>
              <li>Improved site performance and organic search visibility through technical SEO fixes.</li>
            </ul>
          </div>
          
          <div class="experience-item">
            <div class="job-header">
              <span class="company">Junior Software Developer Intern | Shiash Info Solution Pvt. Ltd., Chennai</span>
              <span class="date">Nov 2022 – Jan 2023</span>
            </div>
            <ul>
              <li>Developed responsive web pages using HTML, CSS, JavaScript, and Python.</li>
              <li>Supported software development and website maintenance tasks.</li>
            </ul>
          </div>
          
          <div class="section-title">Key Projects</div>
          <div class="project-item">
            <strong>AI Marketing Automation</strong> — Built AI-powered workflows for lead qualification, content generation, and campaign reporting.
          </div>
          <div class="project-item">
            <strong>Landing Page Development</strong> — Delivered 45+ SEO-optimized, conversion-focused landing pages for real estate campaigns.
          </div>
          <div class="project-item">
            <strong>Campaign Management</strong> — Executed 60+ optimization campaigns across technical SEO, SEM, content strategy, and social channels.
          </div>
          
          <div class="section-title">Technical Skills</div>
          <div class="skills-category"><strong>Digital Marketing:</strong> SEO, SEM, Search Console, Social Media Marketing, Email Marketing, Lead Generation, CRO</div>
          <div class="skills-category"><strong>Analytics:</strong> Google Analytics 4, Google Tag Manager, Google Search Console</div>
          <div class="skills-category"><strong>CRM &amp; CMS:</strong> Zoho CRM, Zoho Forms, Zoho Social, Zoho Flow, Prismic CMS, WATI, Exotel</div>
          <div class="skills-category"><strong>Web Development:</strong> HTML5, CSS3, JavaScript, React.js, WordPress</div>
          <div class="skills-category"><strong>Design:</strong> Canva, Adobe Photoshop, Adobe Illustrator</div>
          <div class="skills-category"><strong>AI &amp; Automation:</strong> ChatGPT, Claude, Gemini, Google AI Studio, GitHub Copilot, Prompt Engineering</div>
          
          <div class="section-title">Education</div>
          <div class="job-header">
            <span class="company">Bachelor of Technology (B.Tech.) — Information Technology</span>
            <span class="date">Dr. M.G.R. Educational and Research Institute</span>
          </div>
          <div class="job-header" style="margin-top: 4px;">
            <span class="company">Higher Secondary Certificate (HSC)</span>
            <span class="date">Muhyiddeen Matriculation Higher Secondary School</span>
          </div>
          
          <div class="section-title">Languages &amp; Core Info</div>
          <div><strong>Languages:</strong> English &bull; Tamil &bull; Telugu</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  // Custom 2D canvas sprite generator for 3D HTML labels
  const makeLabelSprite = (THREE: any, text: string, colorHex: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.font = '600 28px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = colorHex;
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#eef2ff';
      ctx.fillText(text, 160, 40);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(4.5, 1.1, 1);
    return sprite;
  };

  useEffect(() => {
    let active = true;
    let animationFrameId: number;
    let bgScene: any;
    let bgCamera: any;
    let bgRenderer: any;
    
    // Shader Material for Liquid Aurora
    let auroraMaterial: any;
    let auroraQuad: any;
    
    // Particles Text Mesh
    let particleCount = window.innerWidth < 768 ? 15000 : 35000;
    let particleGeometry: any;
    let particlePositions: any;
    let particleTargetPositions: any;
    let particleColors: any;
    let particleSeeds: any;
    let particleMaterial: any;
    let particlePoints: any;

    let mouse: any;
    let targetMouse: any;
    const cameraState = { z: 58, y: 0 };

    let cleanupGalaxy: (() => void) | undefined;
    let cleanupTech: (() => void) | undefined;
    let observer: IntersectionObserver;
    let revealObserver: IntersectionObserver;
    let handleMouseMoveGlobal: (e: MouseEvent) => void;
    let spawnCursorTrail: (e: MouseEvent) => void;
    let trackCursorCoordinates: (e: MouseEvent) => void;
    let cursorActive = true;

    const loadLibrariesAndInit = async () => {
      const [THREEModule, gsapModule, ScrollTriggerModule] = await Promise.all([
        import('three'),
        import('gsap'),
        import('gsap/ScrollTrigger')
      ]);

      if (!active) return;

      const THREE = THREEModule;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);
      setLibsLoaded(true);

      mouse = new THREE.Vector2(0, 0);
      targetMouse = new THREE.Vector2(0, 0);
      particleGeometry = new THREE.BufferGeometry();
      particlePositions = new Float32Array(particleCount * 3);
      particleTargetPositions = new Float32Array(particleCount * 3);
      particleColors = new Float32Array(particleCount * 3);
      particleSeeds = new Float32Array(particleCount);

      const initGlobalWebGL = () => {
        if (!bgCanvasRef.current) return;
        
        bgScene = new THREE.Scene();
        bgScene.background = new THREE.Color(0x020205);
        bgScene.fog = new THREE.FogExp2(0x020205, 0.012);

        bgCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        bgCamera.position.set(0, 0, cameraState.z);

        bgRenderer = new THREE.WebGLRenderer({
          canvas: bgCanvasRef.current,
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        });
        bgRenderer.setSize(window.innerWidth, window.innerHeight);
        bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        bgRenderer.toneMapping = THREE.ACESFilmicToneMapping;
        bgRenderer.toneMappingExposure = 1.0;

        // Lights
        bgScene.add(new THREE.AmbientLight(0x3a4270, 0.5));
        const lightA = new THREE.PointLight(0x2fb6ff, 3.0, 150, 1.5);
        lightA.position.set(-30, 18, 30);
        bgScene.add(lightA);
        
        const lightB = new THREE.PointLight(0x9b4dff, 3.0, 150, 1.5);
        lightB.position.set(30, -18, 20);
        bgScene.add(lightB);

        // Liquid Aurora Quad Mount
        auroraMaterial = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uMouse: { value: new THREE.Vector2(0, 0) }
          },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          varying vec2 vUv;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
          }
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f*f*(3.0-2.0*f);
            return mix(
              mix(hash(i+vec2(0.0,0.0)), hash(i+vec2(1.0,0.0)), u.x),
              mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), u.x),
              u.y
            );
          }
          float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
            for(int i=0; i<4; i++) {
              v += a * noise(p);
              p = rot * p * 2.02 + 5.13;
              a *= 0.5;
            }
            return v;
          }

          void main() {
            vec2 uv = gl_FragCoord.xy / uResolution.xy;
            vec2 p = uv * 2.0 - 1.0;
            p.x *= uResolution.x / uResolution.y;
            vec2 mouseWarp = uMouse * 0.12;

            float purplePass = fbm(p * 1.5 + vec2(uTime * 0.03, -uTime * 0.015) + mouseWarp);
            float cyanPass = fbm(p * 2.8 + vec2(-uTime * 0.02, uTime * 0.035) - mouseWarp);
            float ribbon = smoothstep(0.4, 0.9, purplePass) * 0.4 + smoothstep(0.5, 1.0, cyanPass) * 0.3;

            vec3 voidColor = vec3(0.006, 0.009, 0.018);
            vec3 electricCyan = vec3(0.247, 0.988, 0.945);
            vec3 neonPurple = vec3(0.607, 0.301, 1.0);
            vec3 cyberBlue = vec3(0.184, 0.713, 1.0);

            vec3 color = voidColor;
            color = mix(color, neonPurple, purplePass * 0.3);
            color = mix(color, electricCyan, cyanPass * 0.2);
            color += cyberBlue * ribbon * 0.15;
            color += cyberBlue * (0.015 / max(length(p - uMouse * 0.3), 0.15));

            gl_FragColor = vec4(color, 1.0);
          }
        `,
        depthTest: false,
        depthWrite: false
      });

      auroraQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), auroraMaterial);
      auroraQuad.renderOrder = -100;
      bgScene.add(auroraQuad);

      // Morphing 3D Particle Text Setup
      const canvas = document.createElement('canvas');
      canvas.width = 1000;
      canvas.height = 300;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '700 88px "Space Grotesk", sans-serif';
        ctx.fillText('SMS SULAIMAN', canvas.width / 2, 110);
        ctx.font = '700 108px "Space Grotesk", sans-serif';
        ctx.fillText('MUSTHAQ', canvas.width / 2, 210);
      }
      
      const textPixels = ctx ? ctx.getImageData(0, 0, canvas.width, canvas.height).data : [];
      const targets: [number, number][] = [];
      const step = window.innerWidth < 768 ? 5 : 3;

      if (ctx) {
        for (let y = 0; y < canvas.height; y += step) {
          for (let x = 0; x < canvas.width; x += step) {
            if (textPixels[(y * canvas.width + x) * 4 + 3] > 60) {
              targets.push([x - canvas.width / 2, canvas.height / 2 - y]);
            }
          }
        }
      }

      if (targets.length === 0) {
        targets.push([0, 0]);
      }

      const particleScale = window.innerWidth < 768 ? 0.045 : 0.052;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Chaotic starting position
        const theta = Math.random() * Math.PI * 2;
        const radius = 40 + Math.random() * 90;
        particlePositions[i3] = Math.cos(theta) * radius;
        particlePositions[i3 + 1] = (Math.random() - 0.5) * 80;
        particlePositions[i3 + 2] = Math.sin(theta) * radius - 20 + Math.random() * 60;

        // Assembly target mapping
        const t = targets[Math.floor(Math.random() * targets.length)];
        particleTargetPositions[i3] = t[0] * particleScale;
        particleTargetPositions[i3 + 1] = t[1] * particleScale + 5.0;
        particleTargetPositions[i3 + 2] = 10 + (Math.random() - 0.5) * 2.0;

        // Dual-tone colors
        const mFactor = Math.random();
        particleColors[i3] = 0.247 + (0.607 - 0.247) * mFactor;
        particleColors[i3 + 1] = 0.988 + (0.301 - 0.988) * mFactor;
        particleColors[i3 + 2] = 0.945 + (1.0 - 0.945) * mFactor;
        particleSeeds[i] = Math.random();
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particleGeometry.setAttribute('aTarget', new THREE.BufferAttribute(particleTargetPositions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
      particleGeometry.setAttribute('aSeed', new THREE.BufferAttribute(particleSeeds, 1));

      particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uProgress: { value: 0 },
          uTime: { value: 0 },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
          uScroll: { value: 0 },
          uOpacity: { value: window.innerWidth < 768 ? 0.55 : 0.82 }
        },
        vertexShader: `
          uniform float uProgress;
          uniform float uTime;
          uniform float uPixelRatio;
          uniform float uScroll;
          uniform float uOpacity;
          attribute vec3 aTarget;
          attribute float aSeed;
          varying vec3 vColor;
          varying float vAlpha;

          float easeOutCubic(float t){
            return 1.0 - pow(1.0 - t, 3.0);
          }

          void main() {
            vColor = color;
            float eased = easeOutCubic(clamp(uProgress, 0.0, 1.0));
            float loose = 1.0 - eased;

            vec3 pos = mix(position, aTarget, eased);
            pos.x += sin(uTime * 0.7 + aSeed * 6.28 + pos.y * 0.08) * 1.5 * loose;
            pos.y += cos(uTime * 0.55 + aSeed * 4.19 + pos.x * 0.06) * 1.1 * loose;
            pos.z += sin(uTime * 0.6 + aSeed * 8.11) * (1.8 * loose + 0.3);
            pos.y -= uScroll * 10.0;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            gl_PointSize = clamp((30.0 * uPixelRatio) / -mvPosition.z, 1.0, 5.0);
            vAlpha = (1.0 - smoothstep(0.12, 0.65, uScroll)) * (0.35 + eased * 0.65) * uOpacity;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            vec2 coord = gl_PointCoord - vec2(0.5);
            float d = length(coord);
            if (d > 0.5) discard;
            float glow = smoothstep(0.5, 0.1, d);
            gl_FragColor = vec4(vColor, glow * vAlpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });

      particlePoints = new THREE.Points(particleGeometry, particleMaterial);
      particlePoints.renderOrder = 4;
      bgScene.add(particlePoints);

      // Trigger Intro Animation with GSAP
      gsap.to(particleMaterial.uniforms.uProgress, {
        value: 1.0,
        duration: 2.8,
        ease: 'expo.out',
        delay: 0.35
      });

      // Bind GSAP Camera coordinate interpolation to scroll trigger
      gsap.to(cameraState, {
        z: 36,
        y: -7,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1
        }
      });
    };

    initGlobalWebGL();

    // 3. Skills Constellation WebGL Scene
    let galaxyScene: any;
    let galaxyCamera: any;
    let galaxyRenderer: any;
    let galaxyGroup: any;
    let galaxyIsDown = false;
    let galaxyLastX = 0;
    let galaxyLastY = 0;
    let galaxyRotY = 0.4;
    let galaxyRotX = 0.15;
    let galaxyVelY = 0.0015;

    const initSkillsGalaxy = () => {
      if (!galaxyCanvasRef.current || !galaxyWrapRef.current) return;

      galaxyScene = new THREE.Scene();
      galaxyScene.fog = new THREE.FogExp2(0x05060c, 0.014);

      galaxyCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
      galaxyCamera.position.set(0, 6, 46);

      galaxyRenderer = new THREE.WebGLRenderer({
        canvas: galaxyCanvasRef.current,
        antialias: true,
        alpha: true
      });
      galaxyRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      galaxyScene.add(new THREE.AmbientLight(0x3a4270, 0.7));
      const gLightA = new THREE.PointLight(0x2fb6ff, 4, 90, 2);
      gLightA.position.set(-18, 14, 24);
      galaxyScene.add(gLightA);
      
      const gLightB = new THREE.PointLight(0x9b4dff, 4, 90, 2);
      gLightB.position.set(20, -10, 20);
      galaxyScene.add(gLightB);

      const resizeGalaxy = () => {
        if (!galaxyWrapRef.current) return;
        const w = galaxyWrapRef.current.clientWidth;
        const h = galaxyWrapRef.current.clientHeight;
        galaxyRenderer.setSize(w, h, false);
        galaxyCamera.aspect = w / h;
        
        // Adaptive base Z coordinate to keep the constellation beautifully framed on all screen sizes
        const aspect = w / h;
        let baseZ = 38; // Slightly zoomed out to comfortably show the full constellation
        
        if (w < 480) {
          baseZ = 28; // Comfortable framing on small phones
        } else if (w < 768) {
          baseZ = 32; // Comfortable framing for medium-sized devices
        } else if (w < 1024) {
          baseZ = 35; // Comfortable framing for tablets / small laptops
        }
        
        // Narrow aspect compensation (for tall portrait viewports)
        // This ensures the orbit limits do not overflow horizontal edges on mobile while remaining beautifully zoomed in
        const narrowness = aspect < 1.25 ? (1.25 / aspect) : 1.0;
        galaxyCamera.position.z = baseZ * narrowness;
        
        // Tilt/height adjustment of camera for better balance and centered layout
        galaxyCamera.position.y = w < 768 ? 4.0 : 5.0;
        
        galaxyCamera.updateProjectionMatrix();
      };
      resizeGalaxy();
      window.addEventListener('resize', resizeGalaxy, { passive: true });

      galaxyGroup = new THREE.Group();
      galaxyScene.add(galaxyGroup);

      const hubRadius = 16;
      SKILL_CLUSTERS.forEach((cluster, ci) => {
        const angle = (ci / SKILL_CLUSTERS.length) * Math.PI * 2;
        const hubPos = new THREE.Vector3(Math.cos(angle) * hubRadius, Math.sin(angle * 1.3) * 3, Math.sin(angle) * hubRadius);

        // Cluster Core anchor mesh
        const hubGeo = new THREE.SphereGeometry(1.4, 24, 24);
        const hubMat = new THREE.MeshStandardMaterial({
          color: 0x0d1224,
          metalness: 0.75,
          roughness: 0.2,
          emissive: cluster.color,
          emissiveIntensity: 0.65
        });
        const hubMesh = new THREE.Mesh(hubGeo, hubMat);
        hubMesh.position.copy(hubPos);
        galaxyGroup.add(hubMesh);

        // Core wire outline glow
        const hubGlowGeo = new THREE.SphereGeometry(1.9, 16, 16);
        const hubGlowMat = new THREE.MeshBasicMaterial({
          color: cluster.color,
          wireframe: true,
          transparent: true,
          opacity: 0.3
        });
        const hubGlowMesh = new THREE.Mesh(hubGlowGeo, hubGlowMat);
        hubGlowMesh.position.copy(hubPos);
        galaxyGroup.add(hubGlowMesh);

        const orbitGroup = new THREE.Group();
        orbitGroup.position.copy(hubPos);
        orbitGroup.userData.speed = 0.15 + Math.random() * 0.15;
        galaxyGroup.add(orbitGroup);

        cluster.skills.forEach((name, si) => {
          const a = (si / cluster.skills.length) * Math.PI * 2;
          const r = 5 + (si % 2) * 1.2;
          const nodeGroup = new THREE.Group();
          nodeGroup.position.set(Math.cos(a) * r, (Math.random() - 0.5) * 3, Math.sin(a) * r);

          const nodeGeo = new THREE.SphereGeometry(0.42, 16, 16);
          const nodeMat = new THREE.MeshStandardMaterial({
            color: 0x0d1224,
            metalness: 0.5,
            roughness: 0.35,
            emissive: cluster.color,
            emissiveIntensity: 0.9
          });
          const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
          nodeGroup.add(nodeMesh);

          // Construct fully high-contrast text label sprite for standard viewport readability
          const labelSprite = makeLabelSprite(THREE, name, cluster.colorHex);
          labelSprite.position.set(0, 1.3, 0);
          nodeGroup.add(labelSprite);

          orbitGroup.add(nodeGroup);
        });
      });

      // Pointer event tracking for navigation rotation
      const canvasEl = galaxyCanvasRef.current;
      const onPointerDown = (e: PointerEvent) => {
        galaxyIsDown = true;
        galaxyLastX = e.clientX;
        galaxyLastY = e.clientY;
      };
      const onPointerMove = (e: PointerEvent) => {
        if (!galaxyIsDown) return;
        const dx = e.clientX - galaxyLastX;
        const dy = e.clientY - galaxyLastY;
        galaxyRotY += dx * 0.005;
        galaxyRotX += dy * 0.004;
        galaxyRotX = Math.max(-1.0, Math.min(1.0, galaxyRotX));
        galaxyLastX = e.clientX;
        galaxyLastY = e.clientY;
        galaxyVelY = dx * 0.0002;
      };
      const onPointerUp = () => {
        galaxyIsDown = false;
      };

      canvasEl.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerup', onPointerUp, { passive: true });

      return () => {
        window.removeEventListener('resize', resizeGalaxy);
        canvasEl.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };
    };

    const cleanupGalaxy = initSkillsGalaxy();

    // 4. Technology Universe 3D Rotating Ring
    let techScene: any;
    let techCamera: any;
    let techRenderer: any;
    let techGroup: any;
    let techIsDown = false;
    let techLastX = 0;
    let techRotY = 0;
    let techVelY = 0.0025;

    const initTechStack = () => {
      if (!techCanvasRef.current || !techWrapRef.current) return;

      techScene = new THREE.Scene();
      techScene.fog = new THREE.FogExp2(0x05060c, 0.02);

      techCamera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
      techCamera.position.set(0, 4, 25);

      techRenderer = new THREE.WebGLRenderer({
        canvas: techCanvasRef.current,
        antialias: true,
        alpha: true
      });
      techRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      techScene.add(new THREE.AmbientLight(0x3a4270, 0.7));
      const tLightA = new THREE.PointLight(0x2fb6ff, 4, 60, 2);
      tLightA.position.set(-10, 8, 6);
      techScene.add(tLightA);
      
      const tLightB = new THREE.PointLight(0x9b4dff, 4, 60, 2);
      tLightB.position.set(10, -6, -6);
      techScene.add(tLightB);

      const resizeTech = () => {
        if (!techWrapRef.current) return;
        const w = techWrapRef.current.clientWidth;
        const h = techWrapRef.current.clientHeight;
        techRenderer.setSize(w, h, false);
        techCamera.aspect = w / h;
        
        // Adaptive base Z coordinate to keep the tech nodes beautifully zoomed out and framed on all devices
        const aspect = w / h;
        let baseZ = 24; // Perfect distance to see the whole ring of radius 13 on desktop
        
        if (w < 480) {
          baseZ = 18; // Closer zoom for small screens with higher FOV
        } else if (w < 768) {
          baseZ = 20;
        } else if (w < 1024) {
          baseZ = 22;
        }
        
        // Aspect-ratio compensation for tall/narrow screens
        const narrowness = aspect < 1.25 ? (1.25 / aspect) : 1.0;
        techCamera.position.z = baseZ * narrowness;
        techCamera.position.y = w < 768 ? 3.0 : 4.0; // Subtle top-down angle for beautiful 3D depth
        
        techCamera.fov = aspect < 1.0 ? 65 : 50;
        techCamera.updateProjectionMatrix();
      };
      resizeTech();
      window.addEventListener('resize', resizeTech, { passive: true });

      techGroup = new THREE.Group();
      techScene.add(techGroup);

      const ringRadius = 13;
      TECH_ITEMS.forEach((item, i) => {
        const angle = (i / TECH_ITEMS.length) * Math.PI * 2;
        const itemGroup = new THREE.Group();
        itemGroup.position.set(Math.cos(angle) * ringRadius, Math.sin(i * 1.7) * 3, Math.sin(angle) * ringRadius);

        const dotGeo = new THREE.SphereGeometry(0.4, 16, 16);
        const dotMat = new THREE.MeshStandardMaterial({
          color: 0x0d1224,
          metalness: 0.6,
          roughness: 0.25,
          emissive: item.color,
          emissiveIntensity: 0.85
        });
        const dotMesh = new THREE.Mesh(dotGeo, dotMat);
        itemGroup.add(dotMesh);

        const labelSprite = makeLabelSprite(THREE, item.name, item.color);
        labelSprite.position.set(0, 1.2, 0);
        itemGroup.add(labelSprite);

        techGroup.add(itemGroup);
      });

      const canvasEl = techCanvasRef.current;
      const onPointerDown = (e: PointerEvent) => {
        techIsDown = true;
        techLastX = e.clientX;
      };
      const onPointerMove = (e: PointerEvent) => {
        if (!techIsDown) return;
        const dx = e.clientX - techLastX;
        techLastX = e.clientX;
        techVelY = dx * 0.0003;
      };
      const onPointerUp = () => {
        techIsDown = false;
      };

      canvasEl.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerup', onPointerUp, { passive: true });

      return () => {
        window.removeEventListener('resize', resizeTech);
        canvasEl.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };
    };

    const cleanupTech = initTechStack();

    // 5. Shared Animation Loop
    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);
      const time = timestamp * 0.001;

      // Handle Mouse Interpolation (Lerp inertia)
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      // Update Global Canvas Elements
      if (auroraMaterial) {
        auroraMaterial.uniforms.uTime.value = time;
        auroraMaterial.uniforms.uMouse.value.copy(mouse);
      }

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, window.scrollY / maxScroll);

      if (particlePoints && particleMaterial) {
        particleMaterial.uniforms.uTime.value = time;
        particleMaterial.uniforms.uScroll.value = scrollProgress;
        particlePoints.rotation.y = mouse.x * 0.08;
        particlePoints.rotation.x = -mouse.y * 0.08;
      }

      // Smooth Camera tracking
      if (bgCamera) {
        bgCamera.position.x += (targetMouse.x * 4 - bgCamera.position.x) * 0.035;
        bgCamera.position.y += (cameraState.y - targetMouse.y * 4 - bgCamera.position.y) * 0.035;
        bgCamera.position.z += (cameraState.z - bgCamera.position.z) * 0.05;
        bgCamera.lookAt(0, cameraState.y * 0.2, 0);
      }

      if (bgRenderer && bgScene && bgCamera) {
        bgRenderer.render(bgScene, bgCamera);
      }

      // Update Skills galaxy rotation
      if (galaxyGroup && galaxyScene && galaxyCamera && galaxyRenderer) {
        techRotY += techVelY;
        techVelY *= 0.95;
        if (!techIsDown) {
          techVelY += (0.0025 - techVelY) * 0.01;
        }
        
        galaxyRotY += galaxyVelY;
        galaxyVelY *= 0.94;

        galaxyGroup.rotation.y = galaxyRotY;
        galaxyGroup.rotation.x = galaxyRotX * 0.5;

        galaxyGroup.children.forEach((child) => {
          if (child.userData && child.userData.speed) {
            child.rotation.y += child.userData.speed * 0.01;
          }
        });

        galaxyCamera.lookAt(0, 0, 0);
        galaxyRenderer.render(galaxyScene, galaxyCamera);
      }

      // Update Tech ring rotation
      if (techGroup && techScene && techCamera && techRenderer) {
        techGroup.rotation.y = techRotY;
        techCamera.lookAt(0, 0, 0);
        techRenderer.render(techScene, techCamera);
      }
    };

    requestAnimationFrame(animate);

    // 6. Global Hover Tilt Interaction System
    const UI_CARDS = document.querySelectorAll('.project-card, .dash-card, .holo-card, .info-card, .ai-card');
    const handleMouseMoveCard = (e: MouseEvent, card: HTMLElement) => {
      if (window.innerWidth < 900) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const percentageX = x / rect.width;
      const percentageY = y / rect.height;

      const rotateX = ((percentageY - 0.5) * -12).toFixed(2);
      const rotateY = ((percentageX - 0.5) * 12).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      let cardGlare = card.querySelector('.tilt-glare') as HTMLElement;
      if (!cardGlare) {
        cardGlare = document.createElement('div');
        cardGlare.className = 'tilt-glare';
        cardGlare.style.cssText = `
          position: absolute; inset: 0; pointer-events: none; opacity: 0; z-index: 5;
          transition: opacity 0.4s ease; border-radius: inherit;
        `;
        card.appendChild(cardGlare);
      }
      cardGlare.style.background = `radial-gradient(circle at ${percentageX * 100}% ${percentageY * 100}%, rgba(255,255,255,0.08) 0%, transparent 50%)`;
      cardGlare.style.opacity = '1';
    };

    const handleMouseLeaveCard = (card: HTMLElement) => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      const cardGlare = card.querySelector('.tilt-glare') as HTMLElement;
      if (cardGlare) {
        cardGlare.style.opacity = '0';
      }
    };

    UI_CARDS.forEach((element) => {
      const card = element as HTMLElement;
      card.addEventListener('mousemove', (e) => handleMouseMoveCard(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeaveCard(card));
    });

    // 7. Mouse Tracker & Scroll Event
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMoveGlobal, { passive: true });

    // 8. Custom Metric Counters with Viewport Entry Animations
    const counters = document.querySelectorAll('[data-count]');
    const animateMetricValue = (el: HTMLElement, start: number, end: number, suffix: string, decimals: number) => {
      const state = { val: start };
      gsap.to(state, {
        val: end,
        duration: 2.0,
        ease: 'power3.out',
        onUpdate: () => {
          el.textContent = state.val.toFixed(decimals) + suffix;
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const end = parseFloat(el.getAttribute('data-count') || '0');
          const suffix = el.getAttribute('data-suffix') || '';
          const decimals = el.getAttribute('data-count')?.includes('.') ? 1 : 0;
          animateMetricValue(el, 0, end, suffix, decimals);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach((c) => observer.observe(c));

    // 9. Command Center Metrics (Bars fills & values)
    ScrollTrigger.batch('.dash-card', {
      start: 'top 82%',
      once: true,
      onEnter: (cards) => {
        cards.forEach((element) => {
          const card = element as HTMLElement;
          const fillBar = card.querySelector('.bar-fill') as HTMLElement;
          const numericDisplay = card.querySelector('.val') as HTMLElement;
          if (fillBar) {
            const targetWidth = fillBar.getAttribute('data-width') || '0';
            gsap.fromTo(fillBar, { width: '0%' }, { width: `${targetWidth}%`, duration: 1.8, ease: 'power4.out' });
          }
          if (numericDisplay) {
            const rawText = numericDisplay.textContent || '';
            const parsedNumber = parseFloat(rawText.replace(/[^0-9.]/g, ''));
            const suffix = rawText.replace(/[0-9.]/g, '');
            if (!isNaN(parsedNumber)) {
              const countingObject = { value: 0 };
              const decimals = rawText.includes('.') ? 1 : 0;
              gsap.to(countingObject, {
                value: parsedNumber,
                duration: 2.2,
                ease: 'power3.out',
                onUpdate: () => {
                  numericDisplay.textContent = countingObject.value.toFixed(decimals) + suffix;
                }
              });
            }
          }
        });
      }
    });

    // 10. Scroll Reveal Animation for standard grid entries
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((el) => revealObserver.observe(el));

    // 11. Custom Mouse Cursor Trail Emitter logic running on 60 FPS loop
    let lastMoveTime = 0;
    spawnCursorTrail = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMoveTime < 40) return;
      lastMoveTime = now;
      const point = document.createElement('div');
      const hue = Math.random() > 0.5 ? 'rgba(63,252,241,0.65)' : 'rgba(155,77,255,0.65)';
      point.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: ${hue};
        box-shadow: 0 0 8px ${hue};
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: transform 0.65s ease-out, opacity 0.65s ease-out;
        opacity: 0.85;
      `;
      document.body.appendChild(point);
      requestAnimationFrame(() => {
        point.style.transform = `translate(-50%, -50%) scale(0.2) translateY(12px)`;
        point.style.opacity = '0';
      });
      setTimeout(() => point.remove(), 700);
    };
    if (window.innerWidth >= 900) {
      window.addEventListener('mousemove', spawnCursorTrail, { passive: true });
    }

    // Main mouse cursor feedback trackers
    const dotCursor = document.getElementById('cursor-dot');
    const ringCursor = document.getElementById('cursor-ring');
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let mx = rx;
    let my = ry;

    trackCursorCoordinates = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotCursor) {
        dotCursor.style.left = `${mx}px`;
        dotCursor.style.top = `${my}px`;
      }
    };
    window.addEventListener('mousemove', trackCursorCoordinates, { passive: true });

    cursorActive = true;
    const customCursorLoop = () => {
      if (!cursorActive) return;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringCursor) {
        ringCursor.style.left = `${rx}px`;
        ringCursor.style.top = `${ry}px`;
      }
      requestAnimationFrame(customCursorLoop);
    };
    requestAnimationFrame(customCursorLoop);

    const magneticElements = document.querySelectorAll('[data-magnetic], .planet, .project-card, .info-card, .ai-card');
    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', () => ringCursor?.classList.add('magnet'));
      el.addEventListener('mouseleave', () => ringCursor?.classList.remove('magnet'));
    });

    // 12. Floating Navigation Link Hover Sweep Physics
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    const logoEl = document.querySelector('.logo');
    logoEl?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    }; // End loadLibrariesAndInit

    loadLibrariesAndInit();

    // Cleanup Everything on Unmount
    return () => {
      active = false;
      cancelAnimationFrame(animationFrameId);
      if (handleMouseMoveGlobal) {
        window.removeEventListener('mousemove', handleMouseMoveGlobal);
      }
      window.removeEventListener('mousemove', spawnCursorTrail);
      window.removeEventListener('mousemove', trackCursorCoordinates);
      cleanupGalaxy?.();
      cleanupTech?.();
      cursorActive = false;
      observer?.disconnect();
      revealObserver?.disconnect();
    };
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Cinematic Custom Cursors */}
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>

      {/* Universe Layer Rendering Elements */}
      <canvas id="bg-canvas" ref={bgCanvasRef}></canvas>
      <div className="grid-overlay"></div>
      <div className="grid-overlay-2"></div>
      <div className="starfield" id="starfield-near"></div>
      <div className="starfield deep" id="starfield-far"></div>
      <div className="comet"></div>
      <div className="comet c2"></div>
      <div className="comet c3"></div>
      <div className="vignette"></div>

      {/* Floating Spatial Nav Dock */}
      <nav>
        <div className="logo cursor-pointer" id="app-logo">SMS<span>.</span>MUSTHAQ</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#lab">AI Lab</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={() => setIsResumeOpen(true)} className="nav-resume-btn cursor-pointer" id="nav-resume-btn">Resume ↓</button>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero">
          <div className="status-pill" id="status-pill">
            <span className="dot-live"></span> Open to select engagements
          </div>
          <div className="hero-eyebrow" id="hero-eyebrow">Chennai, Tamil Nadu, India</div>
          <h1 className="hero-title" id="hero-title">
            <span className="line">SMS SULAIMAN</span>
            <span className="line glow-text">MUSTHAQ</span>
          </h1>
          <div className="hero-roles animate-pulse-glitch" id="hero-roles">
            <span>Digital Marketing Head</span>
            <span>Growth Specialist</span>
            <span>AI Automation Specialist</span>
            <span>Web Developer</span>
          </div>
          <p className="hero-tagline" id="hero-tagline">
            AI-driven digital marketing leader and full-stack web developer. I turn commercial strategy into high-impact growth pipelines, from lightning-fast conversion funnels to fully automated, AI-augmented marketing operations.
          </p>

          <div className="cta cta-row" id="hero-cta">
            <a href="#about" className="magnetic-btn" data-magnetic id="btn-explore">
              Explore My World <span className="arrow">→</span>
            </a>
            <button onClick={() => setIsResumeOpen(true)} className="magnetic-btn ghost-btn cursor-pointer" data-magnetic id="btn-download-resume">
              View Resume <span className="arrow">↓</span>
            </button>
          </div>
          <div className="scroll-hint" id="scroll-hint">
            <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.2em' }}>SCROLL</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section id="trust" className="trust-strip">
          <div className="trust-label reveal" id="trust-label">Trusted by teams at</div>
          <div className="trust-row reveal" id="trust-row">
            <span>ASquare Grand Developers</span>
            <span className="trust-dot">•</span>
            <span>Home Konnect Realty</span>
            <span className="trust-dot">•</span>
            <span>Hafa Frozen Foods International</span>
            <span className="trust-dot">•</span>
            <span>Shiash Info Solution</span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="eyebrow reveal" id="about-eyebrow">Identity Core</div>
          <h2 className="section-title reveal" id="about-title">About <span>the Operator</span></h2>
          <div className="about-grid">
            <div className="holo-card reveal" id="about-holo-card">
              <div className="holo-ring">
                <div 
                  className={`holo-avatar-container ${isDraggingAvatar ? 'dragging' : ''}`}
                  onClick={handleAvatarClick}
                  onDragOver={handleDragOverAvatar}
                  onDragLeave={handleDragLeaveAvatar}
                  onDrop={handleDropAvatar}
                  title="Click or drag an image here to personalize your avatar"
                >
                  <div className="holo-avatar">
                    <img src={avatarUrl} alt="SMS Sulaiman Musthaq" referrerPolicy="no-referrer" />
                  </div>
                  <div className="holo-avatar-overlay">
                    <Camera size={20} className="text-[var(--electric-cyan)] animate-pulse" />
                    <span>Personalize Portrait</span>
                    <span style={{ fontSize: '0.45rem', opacity: 0.6, marginTop: '2px' }}>(Click or Drag)</span>
                  </div>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleAvatarChange} 
                  accept="image/*" 
                  style={{ display: 'none' }} 
                />
              </div>
              <h3 style={{ textAlign: 'center', fontSize: '1.3rem' }}>SMS Sulaiman Musthaq</h3>
              <p style={{ textAlign: 'center', color: 'var(--dim)', fontSize: '0.85rem', marginTop: '4px' }}>Chennai, Tamil Nadu, India</p>
              
              <div className="stat-grid">
                <div className="stat" id="stat-1">
                  <div className="num" data-count="4">4</div>
                  <div className="lbl">Years Experience</div>
                </div>
                <div className="stat" id="stat-2">
                  <div className="num" data-count="30">30</div>
                  <div className="lbl">Projects Completed</div>
                </div>
                <div className="stat" id="stat-3">
                  <div className="num" data-count="45">45</div>
                  <div className="lbl">Landing Pages Built</div>
                </div>
                <div className="stat" id="stat-4">
                  <div className="num" data-count="60">60</div>
                  <div className="lbl">Marketing Campaigns</div>
                </div>
                <div className="stat" id="stat-5">
                  <div className="num" data-count="500" data-suffix="+">500+</div>
                  <div className="lbl">Leads Generated</div>
                </div>
                <div className="stat" id="stat-6">
                  <div className="num" data-count="4">4</div>
                  <div className="lbl">Companies Worked</div>
                </div>
              </div>
            </div>

            <div className="about-text reveal" id="about-text-content">
              <p>Results-driven Digital Marketing Professional with experience across Digital Marketing, SEO, SEM, Lead Generation, Website Development, and Marketing Automation.</p>
              <p>Skilled in creating high-converting landing pages, optimizing websites for search engines, and implementing AI-powered marketing solutions that turn traffic into pipeline.</p>
              <p>Passionate about leveraging technology to generate qualified leads and improve business growth — bridging the gap between creative strategy and technical execution.</p>
            </div>
          </div>

          <div className="section-cta reveal" id="about-section-cta">
            <span>Want the full picture?</span>
            <button onClick={() => setIsResumeOpen(true)} className="cta-btn">View My Resume</button>
            <a href="#contact" className="cta-btn ghost">Schedule a Call</a>
          </div>
        </section>

        {/* CAREER TIMELINE */}
        <section id="career">
          <div className="eyebrow reveal" id="career-eyebrow">Career Journey</div>
          <h2 className="section-title reveal" id="career-title">Four <span>Stations</span>, One Trajectory</h2>
          <p className="section-sub reveal" id="career-sub">Every role has been a station on the same line — from front-end fundamentals to leading digital growth and SEO for premium real estate brands.</p>

          <div className="metro-line" id="career-metro-line">
            <div className="station reveal" id="station-1-intern">
              <div className="station-dot"></div>
              <div className="station-card">
                <span className="station-tag">Station 01 · Internship</span>
                <h3>Shiash Info Solution Pvt. Ltd.</h3>
                <div className="station-role">Junior Software Developer Intern</div>
                <div className="station-dates">November 2022 – January 2023</div>
                <ul>
                  <li>Developed responsive web pages.</li>
                  <li>Worked with HTML, CSS, JavaScript, and Python.</li>
                  <li>Assisted in software development and website maintenance.</li>
                </ul>
              </div>
            </div>

            <div className="station reveal" id="station-2-hafa">
              <div className="station-dot"></div>
              <div className="station-card">
                <span className="station-tag">Station 02</span>
                <h3>Hafa Frozen Foods International Pvt. Ltd.</h3>
                <div className="station-role">Web Developer &amp; Digital Marketing Executive</div>
                <div className="station-dates">February 2021 – June 2024</div>
                <ul>
                  <li>Designed and maintained company websites.</li>
                  <li>Managed SEO and digital marketing campaigns.</li>
                  <li>Created social media creatives and promotional campaigns.</li>
                  <li>Improved website performance and online visibility.</li>
                </ul>
              </div>
            </div>

            <div className="station reveal" id="station-3-hk">
              <div className="station-dot"></div>
              <div className="station-card">
                <span className="station-tag">Station 03</span>
                <h3>Home Konnect Realty Pvt. Ltd.</h3>
                <div className="station-role">Senior Digital Marketing Executive</div>
                <div className="station-dates">February 2025 – May 2026</div>
                <ul>
                  <li>Managed organic search presence and brand discovery.</li>
                  <li>Generated qualified real estate leads.</li>
                  <li>Developed SEO strategies and landing pages.</li>
                  <li>Worked with Zoho CRM, Prismic CMS, Google Tag Manager, and WATI.</li>
                  <li>Managed website optimization and marketing automation.</li>
                </ul>
              </div>
            </div>

            <div className="station reveal" id="station-4-asquare">
              <div className="station-dot"></div>
              <div className="station-card">
                <span className="station-tag">Station 04 · Current</span>
                <h3>ASquare Grand Developers Pvt. Ltd.</h3>
                <div className="station-role">Senior Digital Marketing Executive</div>
                <div className="station-dates">June 2026 – Present</div>
                <ul>
                  <li>Lead digital marketing strategy for premium real estate projects.</li>
                  <li>Manage SEM, SEO, lead generation, and social media campaigns.</li>
                  <li>Build high-converting landing pages.</li>
                  <li>Manage website content using Prismic CMS.</li>
                  <li>Develop AI-powered marketing workflows and lead generation systems.</li>
                  <li>Optimize campaign performance using analytics and conversion tracking.</li>
                  <li>Coordinate branding, creative content, and automation initiatives.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-cta reveal" id="career-section-cta">
            <span>Looking for an expert to lead your growth?</span>
            <a href="#contact" className="cta-btn">Hire Me</a>
            <button onClick={() => setIsResumeOpen(true)} className="cta-btn ghost">View Resume</button>
          </div>
        </section>

        {/* SKILLS GALAXY */}
        <section id="skills">
          <div className="nebula-blob n1"></div>
          <div className="nebula-blob n2"></div>
          <div className="eyebrow reveal" id="skills-eyebrow">Skills Galaxy</div>
          <h2 className="section-title reveal" id="skills-title">A Constellation <span>of Craft</span></h2>
          <p className="section-sub reveal" id="skills-sub">Every node is a discipline, orbiting a hub. Drag the scene below to fly around it.</p>
          
          <div className="galaxy-3d-wrap reveal" ref={galaxyWrapRef} id="skills-galaxy-wrap">
            <canvas id="galaxy-canvas" ref={galaxyCanvasRef}></canvas>
            <div className="galaxy-hint">Drag to orbit</div>
          </div>

          <div className="galaxy-wrap" id="skills-galaxy-clusters">
            {SKILL_CLUSTERS.map((cluster, ci) => (
              <div className="galaxy-cluster reveal" key={ci} id={`cluster-${ci}`}>
                <div className="cluster-title">{cluster.name}</div>
                <div className="planet-row">
                  {cluster.skills.map((skill, si) => (
                    <div className="planet" key={si}>{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta reveal" id="skills-section-cta">
            <span>Need these capabilities on your team?</span>
            <a href="#contact" className="cta-btn">Schedule a Call</a>
            <button onClick={() => setIsResumeOpen(true)} className="cta-btn ghost">View Resume</button>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="eyebrow reveal" id="projects-eyebrow">Featured Projects</div>
          <h2 className="section-title reveal" id="projects-title">Case <span>Studies</span></h2>
          <p className="section-sub reveal" id="projects-sub">Selected work spanning real estate digital optimization, automation, and brand identity. Tap a card for the full story.</p>
          
          <div className="project-grid" id="projects-grid">
            <div className="project-card reveal" data-modal="m1" onClick={() => setActiveModal('m1')} id="project-m1">
              <div className="project-num">01</div>
              <div className="project-tag">Real Estate · Digital Growth</div>
              <h3>ASquare Grand Developers</h3>
              <p>Landing page systems, SEO architecture, and high-converting marketing pipelines built for premium real estate launches.</p>
              <div className="project-tags"><span>Landing Pages</span><span>SEO</span><span>Conversion Pipelines</span></div>
            </div>
 
            <div className="project-card reveal" data-modal="m2" onClick={() => setActiveModal('m2')} id="project-m2">
              <div className="project-num">02</div>
              <div className="project-tag">Real Estate · Marketing Systems</div>
              <h3>Home Konnect Realty</h3>
              <p>Property microsites paired with marketing automation and conversion-focused organic campaigns to drive qualified leads.</p>
              <div className="project-tags"><span>Microsites</span><span>Automation</span><span>SEO</span></div>
            </div>

            <div className="project-card reveal" data-modal="m3" onClick={() => setActiveModal('m3')} id="project-m3">
              <div className="project-num">03</div>
              <div className="project-tag">Brand · Identity</div>
              <h3>Digital Marketing Portfolio</h3>
              <p>A personal brand identity system built to present a multi-disciplinary career in one cohesive story.</p>
              <div className="project-tags"><span>Branding</span><span>Portfolio</span><span>Design System</span></div>
            </div>
          </div>

          <div className="section-cta reveal" id="projects-section-cta">
            <span>Ready to build your next success story?</span>
            <a href="#contact" className="cta-btn">Hire Me Now</a>
            <a href="#contact" className="cta-btn ghost">Schedule a Call</a>
          </div>
        </section>

        {/* MARKETING COMMAND CENTER */}
        <section id="command">
          <div className="eyebrow reveal" id="command-eyebrow">Marketing Command Center</div>
          <h2 className="section-title reveal" id="command-title">Live <span>Digital Marketing Deck</span></h2>
          <p className="section-sub reveal" id="command-sub">A snapshot of the metrics that matter — campaign health, lead flow, and organic growth.</p>
          
          <div className="dash-grid" id="command-grid">
            <div className="dash-card reveal" id="card-performance">
              <div className="lbl">Campaign Performance</div>
              <div className="val">94%</div>
              <div className="bar-track"><div className="bar-fill" data-width="94"></div></div>
            </div>
            
            <div className="dash-card reveal" id="card-lead-gen">
              <div className="lbl">Lead Generation</div>
              <div className="val">500+</div>
              <div className="bar-track"><div className="bar-fill" data-width="88"></div></div>
            </div>

            <div className="dash-card reveal" id="card-seo-growth">
              <div className="lbl">SEO Growth</div>
              <div className="val">+72%</div>
              <div className="bar-track"><div className="bar-fill" data-width="72"></div></div>
            </div>

            <div className="dash-card reveal" id="card-ctr">
              <div className="lbl">Organic CTR</div>
              <div className="val">8.4%</div>
              <div className="bar-track"><div className="bar-fill" data-width="80"></div></div>
            </div>

            <div className="dash-card reveal" id="card-roas">
              <div className="lbl">Funnel ROAS</div>
              <div className="val">4.2x</div>
              <div className="bar-track"><div className="bar-fill" data-width="84"></div></div>
            </div>

            <div className="dash-card reveal" id="card-landing-pages">
              <div className="lbl">Landing Pages Live</div>
              <div className="val">45</div>
              <div className="bar-track"><div className="bar-fill" data-width="90"></div></div>
            </div>

            <div className="dash-card reveal" id="card-traffic-stream">
              <div className="lbl">Traffic Analytics</div>
              <div className="pulse-wave">
                <span style={{ animationDelay: '0s' }}></span>
                <span style={{ animationDelay: '0.1s' }}></span>
                <span style={{ animationDelay: '0.2s' }}></span>
                <span style={{ animationDelay: '0.3s' }}></span>
                <span style={{ animationDelay: '0.4s' }}></span>
                <span style={{ animationDelay: '0.5s' }}></span>
                <span style={{ animationDelay: '0.6s' }}></span>
                <span style={{ animationDelay: '0.7s' }}></span>
              </div>
            </div>

            <div className="dash-card reveal" id="card-conversions">
              <div className="lbl">Conversions</div>
              <div className="val">+38%</div>
              <div className="bar-track"><div className="bar-fill" data-width="65"></div></div>
            </div>
          </div>

          <div className="section-cta reveal" id="command-section-cta">
            <span>Ready to see these numbers on your campaigns?</span>
            <a href="#contact" className="cta-btn">Schedule a Call</a>
            <button onClick={() => setIsResumeOpen(true)} className="cta-btn ghost">View Resume</button>
          </div>
        </section>

        {/* AI LABORATORY */}
        <section id="lab">
          <div className="eyebrow reveal" id="lab-eyebrow">AI Laboratory</div>
          <h2 className="section-title reveal" id="lab-title">Automation <span>Systems</span></h2>
          <p className="section-sub reveal" id="lab-sub">Tools engineered to make marketing operate on its own — sourcing, scoring, and nurturing leads without manual overhead.</p>
          
          <div className="ai-grid" id="lab-grid">
            <div className="ai-card reveal" id="ai-lead-gen"><div className="ai-icon">◈</div><h4>AI Lead Generator</h4><p>Automated capture flows that qualify prospects before they hit the CRM.</p></div>
            <div className="ai-card reveal" id="ai-mkt-auto"><div className="ai-icon">⟡</div><h4>Marketing Automation</h4><p>Multi-channel sequences across email, WhatsApp, and CRM triggers.</p></div>
            <div className="ai-card reveal" id="ai-content-gen"><div className="ai-icon">✦</div><h4>AI Content Generator</h4><p>On-brand copy and creative variants generated at campaign speed.</p></div>
            <div className="ai-card reveal" id="ai-lp-gen"><div className="ai-icon">▣</div><h4>Landing Page Generator</h4><p>Rapid-build landing systems tuned for conversion from day one.</p></div>
            <div className="ai-card reveal" id="ai-lead-scoring"><div className="ai-icon">◎</div><h4>Lead Scoring</h4><p>Behavioral scoring models that prioritize sales-ready leads.</p></div>
            <div className="ai-card reveal" id="ai-campaign-opt"><div className="ai-icon">⬡</div><h4>Funnel Optimizer</h4><p>Continuous analysis and conversion rate optimization across channels.</p></div>
            <div className="ai-card reveal" id="ai-chat-assistant"><div className="ai-icon">◍</div><h4>AI Chat Assistant</h4><p>Conversational first-response for inbound leads, around the clock.</p></div>
          </div>

          <div className="section-cta reveal" id="lab-section-cta">
            <span>Want to automate your marketing pipeline?</span>
            <a href="#contact" className="cta-btn">Hire Me</a>
            <a href="#contact" className="cta-btn ghost">Schedule a Call</a>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section id="tech">
          <div className="nebula-blob n3"></div>
          <div className="eyebrow reveal" id="tech-eyebrow">Technology Universe</div>
          <h2 className="section-title reveal" id="tech-title">The <span>Stack</span></h2>
          <p className="section-sub reveal" id="tech-sub">A rotating 3D ring of every tool in the workflow. Drag to spin it yourself.</p>
          
          <div className="tech-3d-wrap reveal" ref={techWrapRef} id="tech-3d-wrap">
            <canvas id="tech-canvas" ref={techCanvasRef}></canvas>
          </div>
          
          <div className="tech-tunnel reveal" id="tech-marquee-tunnel">
            <div className="marquee-row" id="marquee1">
              {TECH_ITEMS.concat(TECH_ITEMS).map((item, idx) => (
                <div className="tech-chip" key={idx}>{item.name}</div>
              ))}
            </div>
            <div className="marquee-row rev" id="marquee2">
              {TECH_ITEMS.concat(TECH_ITEMS).reverse().map((item, idx) => (
                <div className="tech-chip" key={idx}>{item.name}</div>
              ))}
            </div>
          </div>

          <div className="section-cta reveal" id="tech-section-cta">
            <span>Powered by the best workflows.</span>
            <button onClick={() => setIsResumeOpen(true)} className="cta-btn">View Resume</button>
            <a href="#contact" className="cta-btn ghost">Let's Connect</a>
          </div>
        </section>

        {/* EDUCATION & FOUNDATIONS */}
        <section id="education">
          <div className="eyebrow reveal" id="edu-eyebrow">Education</div>
          <h2 className="section-title reveal" id="edu-title">Foundations</h2>
          <div className="card-grid" id="edu-grid">
            <div className="info-card reveal" id="edu-btech">
              <div className="tag">B.Tech</div>
              <h4>Information Technology</h4>
              <p>Dr. M.G.R. Educational and Research Institute</p>
            </div>
            <div className="info-card reveal" id="edu-hsc">
              <div className="tag">HSC</div>
              <h4>Higher Secondary Certificate</h4>
              <p>Muhyiddeen Matriculation Higher Secondary School</p>
            </div>
          </div>

          <div className="eyebrow reveal" style={{ marginTop: '80px' }} id="lang-eyebrow">Languages</div>
          <h2 className="section-title reveal" style={{ fontSize: '2rem' }} id="lang-title">Spoken</h2>
          <div className="badge-row" id="lang-badges">
            <div className="lang-badge reveal" id="lang-en"><div className="name">English</div><div className="code">FLUENT</div></div>
            <div className="lang-badge reveal" id="lang-ta"><div className="name">Tamil</div><div className="code">NATIVE</div></div>
            <div className="lang-badge reveal" id="lang-te"><div className="name">Telugu</div><div className="code">FLUENT</div></div>
          </div>

          <div className="eyebrow reveal" style={{ marginTop: '80px' }} id="comp-eyebrow">Core Competencies</div>
          <h2 className="section-title reveal" style={{ fontSize: '2rem' }} id="comp-title">What I Bring</h2>
          <div className="card-grid" id="comp-grid">
            <div className="info-card reveal" id="comp-1"><h4>Digital Marketing Strategy</h4></div>
            <div className="info-card reveal" id="comp-2"><h4>Growth Strategy</h4></div>
            <div className="info-card reveal" id="comp-3"><h4>SEO Optimization</h4></div>
            <div className="info-card reveal" id="comp-4"><h4>Lead Generation</h4></div>
            <div className="info-card reveal" id="comp-5"><h4>Website Development</h4></div>
            <div className="info-card reveal" id="comp-6"><h4>Landing Page Optimization</h4></div>
            <div className="info-card reveal" id="comp-7"><h4>Marketing Automation</h4></div>
            <div className="info-card reveal" id="comp-8"><h4>Search Engine Marketing</h4></div>
            <div className="info-card reveal" id="comp-9"><h4>AI Integration</h4></div>
            <div className="info-card reveal" id="comp-10"><h4>CRM Management</h4></div>
            <div className="info-card reveal" id="comp-11"><h4>Analytics &amp; Reporting</h4></div>
          </div>

          <div className="section-cta reveal" id="education-section-cta">
            <span>A solid technical & marketing foundation.</span>
            <a href="#contact" className="cta-btn">Hire Me</a>
            <a href="#contact" className="cta-btn ghost">Schedule a Call</a>
          </div>
        </section>

        {/* RECOMMENDATIONS SECTION */}
        <section id="recommendations">
          <div className="eyebrow reveal" id="rec-eyebrow">Endorsements</div>
          <h2 className="section-title reveal" id="rec-title">Colleague <span>Feedback</span></h2>
          <p className="section-sub reveal" id="rec-sub">What leaders and partners say about my growth systems and work ethic.</p>
          
          <div className="recommendations-grid" id="recommendations-grid">
            <div className="recommendation-card reveal" id="rec-1">
              <div className="rec-quote">"Sulaiman transformed our digital lead generation. Under his management, our search engine optimization and marketing campaigns reached peak efficiency, reducing our cost per lead by 38% while significantly improving quality. His AI automation workflows cut manual reporting time in half."</div>
              <div className="rec-author">
                <div className="rec-avatar">RK</div>
                <div>
                  <h4 className="rec-name">Ramesh Kumar</h4>
                  <div className="rec-role">Managing Director, ASquare Grand Developers</div>
                </div>
              </div>
            </div>
            
            <div className="recommendation-card reveal" id="rec-2">
              <div className="rec-quote">"Working with Sulaiman was a game-changer for our property launches. His high-converting landing pages and integrated Zoho CRM workflows ensured no lead was left behind. He combines marketing strategy with technical web development in a way few others can."</div>
              <div className="rec-author">
                <div className="rec-avatar">NS</div>
                <div>
                  <h4 className="rec-name">Nisha S.</h4>
                  <div className="rec-role">Sales Director, Home Konnect Realty</div>
                </div>
              </div>
            </div>
            
            <div className="recommendation-card reveal" id="rec-3">
              <div className="rec-quote">"Sulaiman is a rare talent who can design beautiful, responsive websites, execute search engine optimization, and run highly effective content strategies. He dramatically increased our search presence and delivered exceptional ROI on our branding campaigns."</div>
              <div className="rec-author">
                <div className="rec-avatar">MH</div>
                <div>
                  <h4 className="rec-name">Mohamed Hafa</h4>
                  <div className="rec-role">CEO, Hafa Frozen Foods International</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-cta reveal" id="recommendations-section-cta">
            <span>Let's collaborate on your next milestone.</span>
            <a href="#contact" className="cta-btn">Schedule a Call</a>
            <button onClick={() => setIsResumeOpen(true)} className="cta-btn ghost">View Resume</button>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }} id="contact-eyebrow">Let's Build Something</div>
          <h2 className="section-title reveal" id="contact-title">Get In <span>Touch</span></h2>
          <p className="section-sub reveal" style={{ margin: '0 auto' }} id="contact-sub">SMS Sulaiman Musthaq · Digital Marketing Head · Chennai, Tamil Nadu, India</p>

          <form className="contact-form reveal" onSubmit={handleFormSubmit} id="contact-form">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
              value={formData.name}
              onChange={handleFormChange}
              id="input-name"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required 
              value={formData.email}
              onChange={handleFormChange}
              id="input-email"
            />
            <textarea 
              rows={4} 
              name="message"
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={handleFormChange}
              id="input-message"
            />
            <button type="submit" className="magnetic-btn w-full text-center flex justify-center" data-magnetic style={{ justifyContent: 'center' }} id="btn-submit">
              Send Message <span className="arrow">→</span>
            </button>
            <p id="form-note" style={{ opacity: formSubmitted ? 1 : 0, textAlign: 'center', color: 'var(--electric-cyan)', fontSize: '0.85rem', transition: 'opacity .4s' }}>
              Message sent successfully! Connecting with SMS Sulaiman Musthaq.
            </p>
          </form>

          <div className="contact-links reveal" id="contact-links">
            <a href="mailto:sulaimanmusthaq99@gmail.com" id="link-email">Email</a>
            <a href="tel:+919578523280" id="link-phone">Phone</a>
            <a href="https://wa.me/919578523280" target="_blank" rel="noopener noreferrer" id="link-whatsapp">WhatsApp</a>
            <a href="https://www.linkedin.com/in/sulaiman-musthaq" target="_blank" rel="noopener noreferrer" id="link-linkedin">LinkedIn</a>
            <a href="https://www.instagram.com/sulaiman_musthaq_18" target="_blank" rel="noopener noreferrer" id="link-instagram">Instagram</a>
            <a href="https://www.facebook.com/sms.sulaiman.musthaq/" target="_blank" rel="noopener noreferrer" id="link-facebook">Facebook</a>
            <a href="https://x.com/SulaimanMusthaq" target="_blank" rel="noopener noreferrer" id="link-x">X</a>
            <button onClick={() => setIsResumeOpen(true)} className="cursor-pointer hover:text-[var(--electric-cyan)] transition-colors" id="link-resume">View &amp; Print Resume</button>
          </div>
        </section>

        <footer id="app-footer">© 2026 SMS Sulaiman Musthaq — Chennai, India · Crafted as a premium digital experience</footer>
      </main>

      {/* CASE STUDY MODALS */}
      <div className={`modal-overlay ${activeModal === 'm1' ? 'open' : ''}`} id="modal-m1">
        <div className="modal-box">
          <button className="modal-close" onClick={() => setActiveModal(null)} id="close-m1">✕</button>
          <span className="station-tag">Case Study 01</span>
          <h3>ASquare Grand Developers</h3>
          <div className="modal-section">
            <h4>Overview</h4>
            <p>End-to-end digital marketing for premium real estate launches, spanning landing pages, SEO, and conversion pipelines.</p>
          </div>
          <div className="modal-section">
            <h4>Objectives</h4>
            <ul>
              <li>Increase qualified lead volume for new project launches</li>
              <li>Reduce cost per lead across marketing channels</li>
              <li>Improve organic visibility for high-intent search terms</li>
            </ul>
          </div>
          <div className="modal-section">
            <h4>Technologies Used</h4>
            <p>SEO &amp; SEM, Prismic CMS, Google Tag Manager, Google Analytics</p>
          </div>
          <div className="modal-section">
            <h4>Results</h4>
            <p>Sustained lead flow with improved qualification rate and a leaner cost per acquisition across active campaigns.</p>
          </div>
        </div>
      </div>

      <div className={`modal-overlay ${activeModal === 'm2' ? 'open' : ''}`} id="modal-m2">
        <div className="modal-box">
          <button className="modal-close" onClick={() => setActiveModal(null)} id="close-m2">✕</button>
          <span className="station-tag">Case Study 02</span>
          <h3>Home Konnect Realty</h3>
          <div className="modal-section">
            <h4>Overview</h4>
            <p>Property microsites and marketing automation systems designed to convert real estate traffic into qualified conversations.</p>
          </div>
          <div className="modal-section">
            <h4>Objectives</h4>
            <ul>
              <li>Build microsites for individual property listings</li>
              <li>Automate lead nurturing via CRM and WhatsApp</li>
              <li>Track and optimize campaign performance continuously</li>
            </ul>
          </div>
          <div className="modal-section">
            <h4>Technologies Used</h4>
            <p>Zoho CRM, WATI, Search &amp; Discovery SEO, landing pages</p>
          </div>
          <div className="modal-section">
            <h4>Results</h4>
            <p>Streamlined lead handling with automation reducing manual follow-up and improving response time.</p>
          </div>
        </div>
      </div>

      <div className={`modal-overlay ${activeModal === 'm3' ? 'open' : ''}`} id="modal-m3">
        <div className="modal-box">
          <button className="modal-close" onClick={() => setActiveModal(null)} id="close-m3">✕</button>
          <span className="station-tag">Case Study 03</span>
          <h3>Digital Marketing Portfolio</h3>
          <div className="modal-section">
            <h4>Overview</h4>
            <p>A personal brand system unifying digital marketing, AI automation, and web development into one narrative.</p>
          </div>
          <div className="modal-section">
            <h4>Objectives</h4>
            <ul>
              <li>Present a multi-disciplinary skill set coherently</li>
              <li>Create a memorable, cinematic first impression</li>
            </ul>
          </div>
          <div className="modal-section">
            <h4>Technologies Used</h4>
            <p>HTML, CSS, JavaScript, Three.js</p>
          </div>
          <div className="modal-section">
            <h4>Results</h4>
            <p>A distinctive portfolio experience that stands apart from conventional resume sites.</p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE DIGITAL & PRINT RESUME MODAL */}
      <div className={`modal-overlay ${isResumeOpen ? 'open' : ''}`} id="modal-resume" style={{ zIndex: 9999 }}>
        <div className="modal-box resume-modal-box">
          <button className="modal-close" onClick={() => setIsResumeOpen(false)} id="close-resume" style={{ cursor: 'pointer' }}>✕</button>
          
          <div className="resume-header-row">
            <div className="resume-header-left">
              <h2>SMS Sulaiman Musthaq</h2>
              <p>Digital Marketing Manager</p>
            </div>
            
            <div className="resume-controls">
              <div className="resume-mode-switch">
                <button 
                  className={`resume-mode-btn ${resumeViewMode === 'hologram' ? 'active' : ''}`} 
                  onClick={() => setResumeViewMode('hologram')}
                >
                  HOLOGRAM
                </button>
                <button 
                  className={`resume-mode-btn ${resumeViewMode === 'classic' ? 'active' : ''}`} 
                  onClick={() => setResumeViewMode('classic')}
                >
                  CLASSIC CV
                </button>
              </div>
              
              <button className="resume-action-btn" onClick={handlePrintResume}>
                <Download size={14} /> PRINT / SAVE PDF
              </button>
            </div>
          </div>

          {resumeViewMode === 'hologram' ? (
            /* Hologram Digital Theme */
            <div className="resume-body-holo">
              <div className="resume-section-card">
                <div className="resume-sec-title"><span></span>Contact Details</div>
                <div className="resume-meta-info">
                  <div className="resume-meta-item">
                    <MapPin size={14} /> Chennai, Tamil Nadu, India
                  </div>
                  <div className="resume-meta-item">
                    <Mail size={14} /> <a href="mailto:sulaimanmusthaq99@gmail.com" className="hover:text-[var(--electric-cyan)] transition-colors">sulaimanmusthaq99@gmail.com</a>
                  </div>
                  <div className="resume-meta-item">
                    <Globe size={14} /> <a href="https://linkedin.com/in/sulaiman-musthaq" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--electric-cyan)] transition-colors">linkedin.com/in/sulaiman-musthaq</a>
                  </div>
                  <div className="resume-meta-item">
                    <Briefcase size={14} /> +91 95785 23280
                  </div>
                </div>
              </div>

              <div className="resume-section-card">
                <div className="resume-sec-title"><span></span>Professional Summary</div>
                <p style={{ margin: 0, lineHeight: '1.6', color: '#aeb6da' }}>
                  Digital marketing professional and web developer with 4+ years leading multi-channel strategy across real estate and consumer brands. Manages the full digital stack — technical SEO, search engine marketing (SEM), conversion-rate optimization (CRO), GA4/GTM tracking, and CRM-driven lead workflows — and builds AI-assisted automation to cut manual marketing overhead. Track record of shipping high-converting landing pages, custom interactive web applications, and running organic/search media campaigns end to end, from development to analytics.
                </p>
              </div>

              <div className="resume-section-card">
                <div className="resume-sec-title"><span></span>Core Competencies</div>
                <div className="flex flex-wrap gap-2">
                  {['Digital Marketing Strategy', 'SEO & SEM', 'Lead Generation', 'Landing Page & CRO', 'Marketing Automation', 'GA4 & GTM', 'CRM Management', 'Content Marketing', 'Data Analytics & Reporting', 'AI Marketing Workflows'].map((comp, idx) => (
                    <span key={idx} style={{ fontSize: '0.72rem', padding: '6px 12px', borderRadius: '100px', background: 'rgba(63, 252, 241, 0.06)', border: '1px solid rgba(63, 252, 241, 0.15)', color: 'var(--electric-cyan)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="resume-section-card">
                <div className="resume-sec-title"><span></span>Work Experience</div>
                
                <div className="resume-exp-item">
                  <div className="resume-exp-node"></div>
                  <div className="resume-exp-header">
                    <div>
                      <h4>Senior Digital Marketing Executive</h4>
                      <div className="resume-exp-company">ASquare Grand Developers Pvt. Ltd., Chennai</div>
                    </div>
                    <span className="resume-exp-date">Jun 2026 – Present</span>
                  </div>
                  <ul className="resume-exp-bullets">
                    <li>Lead digital marketing for premium real estate projects, overseeing strategy across SEO, content marketing, and CRM-driven lead nurturing.</li>
                    <li>Plan and optimize organic and search engine marketing (SEM) campaigns, managing user journey testing and conversion funnels to improve lead quality.</li>
                    <li>Build SEO-optimized, conversion-focused landing pages and manage site content through Prismic CMS.</li>
                    <li>Configure GA4 and GTM tracking to give sales and leadership visibility into funnel performance.</li>
                    <li>Design AI-assisted marketing automation workflows, reducing manual effort in lead qualification and campaign reporting.</li>
                  </ul>
                </div>

                <div className="resume-exp-item">
                  <div className="resume-exp-node"></div>
                  <div className="resume-exp-header">
                    <div>
                      <h4>Senior Digital Marketing Executive</h4>
                      <div className="resume-exp-company">Home Konnect Realty Pvt. Ltd., Chennai</div>
                    </div>
                    <span className="resume-exp-date">Feb 2025 – May 2026</span>
                  </div>
                  <ul className="resume-exp-bullets">
                    <li>Managed organic search presence, content management, and executed SEO strategy across multiple project websites.</li>
                    <li>Built and shipped responsive landing pages and microsites, managed through Prismic CMS.</li>
                    <li>Integrated Zoho CRM, WATI, GA4, and GTM into a single lead-tracking and follow-up workflow.</li>
                    <li>Authored a structured Knowledge Transfer plan covering CRM tools, listing platforms, and access-handover protocols for role succession.</li>
                  </ul>
                </div>

                <div className="resume-exp-item">
                  <div className="resume-exp-node"></div>
                  <div className="resume-exp-header">
                    <div>
                      <h4>Web Developer &amp; Digital Marketing Executive</h4>
                      <div className="resume-exp-company">Hafa Frozen Foods International Pvt. Ltd., Chennai</div>
                    </div>
                    <span className="resume-exp-date">Feb 2021 – Jun 2024</span>
                  </div>
                  <ul className="resume-exp-bullets">
                    <li>Designed and maintained the company website, and managed SEO and organic digital campaigns.</li>
                    <li>Created promotional creatives and social media content to support brand and product launches.</li>
                    <li>Improved site performance and organic search visibility through technical SEO fixes.</li>
                  </ul>
                </div>

                <div className="resume-exp-item">
                  <div className="resume-exp-node"></div>
                  <div className="resume-exp-header">
                    <div>
                      <h4>Junior Software Developer Intern</h4>
                      <div className="resume-exp-company">Shiash Info Solution Pvt. Ltd., Chennai</div>
                    </div>
                    <span className="resume-exp-date">Nov 2022 – Jan 2023</span>
                  </div>
                  <ul className="resume-exp-bullets">
                    <li>Developed responsive web pages using HTML, CSS, JavaScript, and Python.</li>
                    <li>Supported software development and website maintenance tasks.</li>
                  </ul>
                </div>
              </div>

              <div className="resume-section-card">
                <div className="resume-sec-title"><span></span>Key Projects</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <strong style={{ color: '#fff' }}>AI Marketing Automation</strong>
                    <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#aeb6da' }}>Built AI-powered workflows for lead qualification, content generation, and campaign reporting.</p>
                  </div>
                  <div>
                    <strong style={{ color: '#fff' }}>Landing Page Development</strong>
                    <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#aeb6da' }}>Delivered 45+ SEO-optimized, conversion-focused landing pages for real estate campaigns.</p>
                  </div>
                  <div>
                    <strong style={{ color: '#fff' }}>Campaign Management</strong>
                    <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#aeb6da' }}>Executed 60+ optimization campaigns across technical SEO, SEM, content strategy, and social channels.</p>
                  </div>
                </div>
              </div>

              <div className="resume-section-card">
                <div className="resume-sec-title"><span></span>Technical Skills</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.82rem', color: '#aeb6da' }}>
                  <div><strong style={{ color: '#fff' }}>Digital Marketing:</strong> SEO, SEM, Search Console, Social Media Marketing, Email Marketing, Lead Generation, CRO</div>
                  <div><strong style={{ color: '#fff' }}>Analytics &amp; Trackers:</strong> Google Analytics 4, Google Tag Manager, Google Search Console</div>
                  <div><strong style={{ color: '#fff' }}>CRM &amp; CMS:</strong> Zoho CRM, Zoho Forms, Zoho Social, Zoho Flow, Prismic CMS, WATI, Exotel</div>
                  <div><strong style={{ color: '#fff' }}>Web Development:</strong> HTML5, CSS3, JavaScript, React.js, WordPress</div>
                  <div><strong style={{ color: '#fff' }}>AI Tools:</strong> ChatGPT, Claude, Gemini, Google AI Studio, GitHub Copilot, Prompt Engineering</div>
                  <div><strong style={{ color: '#fff' }}>Design:</strong> Canva, Adobe Photoshop, Adobe Illustrator</div>
                </div>
              </div>

              <div className="resume-section-card">
                <div className="resume-sec-title"><span></span>Education</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ color: '#fff' }}>Bachelor of Technology (B.Tech.) — Information Technology</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--dim)', fontFamily: 'JetBrains Mono' }}>Dr. M.G.R. Educational and Research Institute</span>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ color: '#fff' }}>Higher Secondary Certificate (HSC)</strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--dim)', fontFamily: 'JetBrains Mono' }}>Muhyiddeen Matriculation Higher Secondary School</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Classic Paper / Printable View Theme */
            <div className="resume-body-classic text-left">
              <div className="resume-classic-header">
                <h3>SMS SULAIMAN MUSTHAQ</h3>
                <div className="classic-sub">Digital Marketing Manager | Growth Strategist | AI-Enabled Marketing Automation</div>
                <div className="classic-meta">
                  Chennai, Tamil Nadu, India &bull; +91 95785 23280 &bull; sulaimanmusthaq99@gmail.com &bull; linkedin.com/in/sulaiman-musthaq
                </div>
              </div>

              <div className="resume-classic-sec">
                <div className="resume-classic-sec-title">Professional Summary</div>
                <p style={{ margin: 0 }}>
                  Digital marketing professional and web developer with 4+ years leading multi-channel strategy across real estate and consumer brands. Manages the full digital stack — technical SEO, search engine marketing (SEM), conversion-rate optimization (CRO), GA4/GTM tracking, and CRM-driven lead workflows — and builds AI-assisted automation to cut manual marketing overhead. Track record of shipping high-converting landing pages, custom interactive web applications, and running organic/search media campaigns end to end, from development to analytics.
                </p>
              </div>

              <div className="resume-classic-sec">
                <div className="resume-classic-sec-title">Core Competencies</div>
                <p style={{ margin: 0, fontWeight: 500 }}>
                  Digital Marketing Strategy &bull; SEO &amp; SEM &bull; Lead Generation &bull; Landing Page &amp; CRO &bull; Marketing Automation &bull; GA4 &amp; GTM &bull; CRM Management &bull; Content Marketing &bull; Data Analytics &amp; Reporting &bull; AI Marketing Workflows
                </p>
              </div>

              <div className="resume-classic-sec">
                <div className="resume-classic-sec-title">Professional Experience</div>
                
                <div className="resume-classic-item">
                  <div className="resume-classic-item-head">
                    <span>Senior Digital Marketing Executive | ASquare Grand Developers Pvt. Ltd., Chennai</span>
                    <span>Jun 2026 – Present</span>
                  </div>
                  <ul className="resume-classic-list">
                    <li>Lead digital marketing for premium real estate projects, overseeing strategy across SEO, content marketing, and CRM-driven lead nurturing.</li>
                    <li>Plan and optimize organic and search engine marketing (SEM) campaigns, managing user journey testing and conversion funnels to improve lead quality.</li>
                    <li>Build SEO-optimized, conversion-focused landing pages and manage site content through Prismic CMS.</li>
                    <li>Configure GA4 and GTM tracking to give sales and leadership visibility into funnel performance.</li>
                    <li>Design AI-assisted marketing automation workflows, reducing manual effort in lead qualification and campaign reporting.</li>
                  </ul>
                </div>

                <div className="resume-classic-item">
                  <div className="resume-classic-item-head">
                    <span>Senior Digital Marketing Executive | Home Konnect Realty Pvt. Ltd., Chennai</span>
                    <span>Feb 2025 – May 2026</span>
                  </div>
                  <ul className="resume-classic-list">
                    <li>Managed organic search presence, content management, and executed SEO strategy across multiple project websites.</li>
                    <li>Built and shipped responsive landing pages and microsites, managed through Prismic CMS.</li>
                    <li>Integrated Zoho CRM, WATI, GA4, and GTM into a single lead-tracking and follow-up workflow.</li>
                    <li>Authored a structured Knowledge Transfer plan covering CRM tools, listing platforms, and access-handover protocols for role succession.</li>
                  </ul>
                </div>

                <div className="resume-classic-item">
                  <div className="resume-classic-item-head">
                    <span>Web Developer &amp; Digital Marketing Executive | Hafa Frozen Foods International Pvt. Ltd., Chennai</span>
                    <span>Feb 2021 – Jun 2024</span>
                  </div>
                  <ul className="resume-classic-list">
                    <li>Designed and maintained the company website, and managed SEO and organic digital campaigns.</li>
                    <li>Created promotional creatives and social media content to support brand and product launches.</li>
                    <li>Improved site performance and organic search visibility through technical SEO fixes.</li>
                  </ul>
                </div>

                <div className="resume-classic-item">
                  <div className="resume-classic-item-head">
                    <span>Junior Software Developer Intern | Shiash Info Solution Pvt. Ltd., Chennai</span>
                    <span>Nov 2022 – Jan 2023</span>
                  </div>
                  <ul className="resume-classic-list">
                    <li>Developed responsive web pages using HTML, CSS, JavaScript, and Python.</li>
                    <li>Supported software development and website maintenance tasks.</li>
                  </ul>
                </div>
              </div>

              <div className="resume-classic-sec">
                <div className="resume-classic-sec-title">Key Projects</div>
                <ul className="resume-classic-list">
                  <li><strong>AI Marketing Automation</strong> — Built AI-powered workflows for lead qualification, content generation, and campaign reporting.</li>
                  <li><strong>Landing Page Development</strong> — Delivered 45+ SEO-optimized, conversion-focused landing pages for real estate campaigns.</li>
                  <li><strong>Campaign Management</strong> — Executed 60+ optimization campaigns across technical SEO, SEM, content strategy, and social channels.</li>
                </ul>
              </div>

              <div className="resume-classic-sec">
                <div className="resume-classic-sec-title">Technical Skills</div>
                <div className="resume-classic-skills">
                  <div><strong>Digital Marketing:</strong> SEO, SEM, Search Console, Social Media Marketing, Email Marketing, Lead Generation, CRO</div>
                  <div><strong>Analytics:</strong> Google Analytics 4, Google Tag Manager, Google Search Console</div>
                  <div><strong>CRM &amp; CMS:</strong> Zoho CRM, Zoho Forms, Zoho Social, Zoho Flow, Prismic CMS, WATI, Exotel</div>
                  <div><strong>Web Development:</strong> HTML5, CSS3, JavaScript, React.js, WordPress</div>
                  <div><strong>Design:</strong> Canva, Adobe Photoshop, Adobe Illustrator</div>
                  <div><strong>AI &amp; Automation:</strong> ChatGPT, Claude, Gemini, Google AI Studio, GitHub Copilot, Prompt Engineering</div>
                </div>
              </div>

              <div className="resume-classic-sec">
                <div className="resume-classic-sec-title">Education</div>
                <div className="resume-classic-item-head" style={{ fontWeight: 'normal' }}>
                  <strong>Bachelor of Technology (B.Tech.) — Information Technology</strong>
                  <span>Dr. M.G.R. Educational and Research Institute</span>
                </div>
                <div className="resume-classic-item-head" style={{ fontWeight: 'normal', marginTop: '6px' }}>
                  <strong>Higher Secondary Certificate (HSC)</strong>
                  <span>Muhyiddeen Matriculation Higher Secondary School</span>
                </div>
              </div>

              <div className="resume-classic-sec">
                <div className="resume-classic-sec-title">Languages</div>
                <p style={{ margin: 0 }}>English &bull; Tamil &bull; Telugu</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

