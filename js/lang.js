/* Language switch: French by default, English on request.
   English text stays in the HTML; French is applied from the dictionary below.
   Quotes written by other people (testimonials) are left in their original language. */
(function () {
	'use strict';
	var DEFAULT_LANG = 'fr';
	var STORE_KEY = 'tm_lang';
	var FR = {
 "Home": "Accueil",
 "What I do": "Ce que je fais",
 "Experience": "Expérience",
 "Brand Work": "Travaux de marque",
 "Websites": "Sites web",
 "Education": "Formation",
 "Sustainability": "Développement durable",
 "Skills": "Compétences",
 "Creative Work": "Travaux créatifs",
 "Welcome to my portfolio": "Bienvenue sur mon portfolio",
 "Brand & Project Manager": "Responsable de marque et chef de projet",
 "Now:": "Actuellement :",
 "MSc International Management & Sustainability at IAE Dijon · open to internships and alternance in France and Europe": "Master Management international et développement durable à l’IAE Dijon · ouvert aux stages et à l’alternance en France et en Europe",
 "I build brands and deliver projects that last. After five years managing projects and leading brand work, I’m studying International Management and Sustainability, bringing strategy, delivery and design together, from the first brief to the finished brand.": "Je construis des marques et je mène des projets qui durent. Après cinq ans à gérer des projets et à piloter des actions de marque, j’étudie le management international et le développement durable, pour réunir stratégie, exécution et design, du premier brief à la marque finale.",
 "Download CV": "Télécharger mon CV",
 "Let’s talk": "Parlons-en",
 "Strategy, delivery and design under one roof": "Stratégie, exécution et design réunis",
 "Brand Management & Strategy": "Gestion et stratégie de marque",
 "Positioning, identity and campaigns that make a brand easy to recognise and hard to forget.": "Positionnement, identité et campagnes qui rendent une marque facile à reconnaître et difficile à oublier.",
 "See my brand work": "Voir mes travaux de marque",
 "Project Management": "Gestion de projet",
 "Clear scope, realistic plans and teams that deliver on time, from construction sites to brand campaigns.": "Un périmètre clair, des plans réalistes et des équipes qui livrent dans les délais, des chantiers aux campagnes de marque.",
 "See my experience": "Voir mon expérience",
 "Sustainability & ESG": "Développement durable et ESG",
 "Turning sustainability and governance from a report into a strategy, backed by training from IESE, Lund University and IAE Dijon.": "Faire du développement durable et de la gouvernance une vraie stratégie plutôt qu’un simple rapport, grâce à mes formations à l’IESE, à l’université de Lund et à l’IAE Dijon.",
 "Read more": "En savoir plus",
 "Brand Activation & Campaigns": "Activation de marque et campagnes",
 "Events, activations and launches that put a brand in front of people, such as the Golden Penny activation at Davido’s Homecoming concert.": "Événements, activations et lancements qui mettent une marque en contact avec le public, comme l’activation Golden Penny au concert Homecoming de Davido.",
 "See the case studies": "Voir les études de cas",
 "Web & UI/UX Design": "Web design et UI/UX",
 "Websites and interfaces that look sharp, load fast and carry the brand across every screen.": "Des sites et des interfaces soignés et rapides, qui portent la marque sur tous les écrans.",
 "See web work": "Voir les travaux web",
 "Graphic & Motion Design": "Design graphique et motion design",
 "Identity, graphics, motion and video that keep a brand consistent from the plan to every touchpoint.": "Identité, graphisme, animation et vidéo qui gardent une marque cohérente, du plan à chaque point de contact.",
 "See graphics": "Voir les créations graphiques",
 "Where I’ve built and delivered": "Là où j’ai construit et livré",
 "December 2025 - September 2026": "Décembre 2025 - Septembre 2026",
 "Brand Manager": "Responsable de marque",
 "September 2022 - December 2025": "Septembre 2022 - Décembre 2025",
 "Project Manager": "Chef de projet",
 "Triverse Digital, London (Remote)": "Triverse Digital, Londres (à distance)",
 "September 2021 - September 2022": "Septembre 2021 - Septembre 2022",
 "Assistant Project Manager": "Assistant chef de projet",
 "Freelance Brand, Visual & Web Designer": "Designer indépendant : marque, visuel et web",
 "Betaworka, Aurione Technologies, Pay-U Tech and others": "Betaworka, Aurione Technologies, Pay-U Tech et autres",
 "June 2021 - October 2022": "Juin 2021 - Octobre 2022",
 "Graphic Designer (Volunteer)": "Graphiste (bénévole)",
 "United Nations Volunteers": "Volontaires des Nations unies",
 "Brand work": "Travaux de marque",
 "Campaigns I’m proud of": "Des campagnes dont je suis fier",
 "A few of the brand projects I led at Fusion 360.": "Quelques projets de marque que j’ai menés chez Fusion 360.",
 "Brand activation": "Activation de marque",
 "Davido’s Homecoming Concert": "Concert Homecoming de Davido",
 "I set up the Golden Penny activation site at Davido’s Homecoming concert, held at the National Theatre in Lagos to mark his 15 years in the industry, putting the brand in front of one of Nigeria’s biggest live audiences.": "J’ai mis en place le site d’activation Golden Penny lors du concert Homecoming de Davido, organisé au National Theatre de Lagos pour célébrer ses 15 ans de carrière, en plaçant la marque devant l’un des plus grands publics live du Nigeria.",
 "Brand Manager, Fusion 360": "Responsable de marque, Fusion 360",
 "Brand design & management": "Design et gestion de marque",
 "I handled brand design and brand management at the Big Brother Naija reality show, built to turn attention from a huge national audience into revenue.": "J’ai géré le design et la gestion de marque pour l’émission de téléréalité Big Brother Naija, avec l’objectif de transformer l’attention d’un immense public national en chiffre d’affaires.",
 "End-to-end branding": "Branding de bout en bout",
 "From strategy to screen": "De la stratégie à l’écran",
 "I plan the brand and also build it: identity and graphics, motion, and websites. That keeps everything consistent from the first idea to every touchpoint.": "Je planifie la marque et je la construis aussi : identité et graphisme, animation, sites web. Tout reste ainsi cohérent, de la première idée à chaque point de contact.",
 "See the creative portfolio": "Voir le portfolio créatif",
 "Websites I’ve designed and built": "Des sites web que j’ai conçus et développés",
 "A selection of live websites for organisations, companies and events, from first design to launch.": "Une sélection de sites en ligne pour des organisations, des entreprises et des événements, de la conception au lancement.",
 "Non-profit · Membership": "Association · Adhésion",
 "Website for a community development organisation in Nigeria, with membership sign-up, team, achievements, FAQ and contact pages.": "Site d’une organisation de développement communautaire au Nigeria : adhésion, équipe, réalisations, FAQ et contact.",
 "Company website · Careers": "Site d’entreprise · Carrières",
 "Website for a creative human capital solutions firm, with a separate careers site.": "Site d’un cabinet de solutions créatives en capital humain, avec un site carrières dédié.",
 "Event website · Brand": "Site d’événement · Marque",
 "Website, graphics and video for an annual men’s day event in Nigeria.": "Site web, graphisme et vidéo pour un événement annuel dédié à la Journée internationale des hommes, au Nigeria.",
 "Company website": "Site d’entreprise",
 "Website for a shipping and logistics company.": "Site d’une entreprise de transport maritime et de logistique.",
 "Website and digital design for a technology company.": "Site web et design digital pour une entreprise technologique.",
 "Fintech · Insurance": "Fintech · Assurance",
 "Brand graphics and website for a fintech and insurance product.": "Identité graphique et site web pour un produit fintech et d’assurance.",
 "Education & certifications": "Formation et certifications",
 "Always learning": "Toujours en apprentissage",
 "MSc International Management & Sustainability": "Master Management international et développement durable",
 "BTech Architecture": "Licence technologique (BTech) en architecture",
 "Ladoke Akintola University of Technology, Nigeria · CGPA 4.00/5.00": "Ladoke Akintola University of Technology, Nigeria · CGPA 4,00/5,00",
 "August 2025 - June 2026": "Août 2025 - Juin 2026",
 "Strategy and Sustainability": "Stratégie et développement durable",
 "Verify": "Vérifier",
 "January - May 2026": "Janvier - Mai 2026",
 "Professional Skills for International Business": "Compétences professionnelles pour le commerce international",
 "University of London ·": "Université de Londres ·",
 "Sustainable Cities and Communities": "Villes et communautés durables",
 "Lund University": "Université de Lund",
 "Technical training": "Formation technique",
 "CS50 and Front-End Web Development": "CS50 et développement web front-end",
 "Harvard University (CS50) · The Hong Kong University of Science and Technology (React)": "Université Harvard (CS50) · Université des sciences et technologies de Hong Kong (React)",
 "Why it shapes how I work": "Pourquoi cela guide ma façon de travailler",
 "I started in architecture. My BTech thesis looked at how daylighting can improve energy efficiency and comfort in a modern ICT centre in Ibadan. Managing real projects then showed me the gap between strong technical delivery and the strategic, cross-functional management needed to deliver sustainably.": "J’ai commencé par l’architecture. Mon mémoire de licence portait sur la façon dont la lumière naturelle peut améliorer l’efficacité énergétique et le confort d’un centre TIC moderne à Ibadan. En gérant ensuite de vrais projets, j’ai mesuré l’écart entre une exécution technique solide et le management stratégique et transversal nécessaire pour livrer de façon durable.",
 "That is the gap I’m closing.": "C’est cet écart que je comble.",
 "Through IESE (Strategy and Sustainability), Lund University (Sustainable Cities and Communities) and now my Master’s at IAE Dijon, I’m learning to put ESG at the centre of strategy. My thesis explores sustainability strategy in French SMEs.": "Grâce à l’IESE (Stratégie et développement durable), à l’université de Lund (Villes et communautés durables) et maintenant à mon Master à l’IAE Dijon, j’apprends à placer l’ESG au cœur de la stratégie. Mon mémoire explore la stratégie de développement durable dans les PME françaises.",
 "I want to bring this to brand, project and ESG roles in France and across Europe.": "Je veux mettre cela au service de postes en marque, en gestion de projet et en ESG, en France et partout en Europe.",
 "What I bring": "Ce que j’apporte",
 "Brand & Marketing": "Marque et marketing",
 "Brand management": "Gestion de marque",
 "Brand strategy": "Stratégie de marque",
 "Brand identity": "Identité de marque",
 "Campaigns & activations": "Campagnes et activations",
 "Communications": "Communication",
 "Project & Business": "Projet et business",
 "Project management": "Gestion de projet",
 "Client & stakeholder management": "Gestion des clients et des parties prenantes",
 "Team coordination": "Coordination d’équipe",
 "Budgeting & cost estimation": "Budgétisation et estimation des coûts",
 "Business strategy": "Stratégie d’entreprise",
 "International business": "Commerce international",
 "Corporate sustainability & governance": "Développement durable et gouvernance d’entreprise",
 "Sustainable cities": "Villes durables",
 "Sustainable design": "Conception durable",
 "Digital & Creative": "Digital et créatif",
 "Graphic design": "Design graphique",
 "Video editing": "Montage vidéo",
 "UI/UX design": "Design UI/UX",
 "Web development": "Développement web",
 "Languages": "Langues",
 "English (native)": "Anglais (langue maternelle)",
 "French (A2, learning)": "Français (A2, en apprentissage)",
 "Creative & web work": "Travaux créatifs et web",
 "I design and build, too": "Je conçois et je construis aussi",
 "Brand work is better when the person planning it can also make it. Here is a selection of my design and web projects.": "Le travail de marque est meilleur quand la personne qui le planifie peut aussi le réaliser. Voici une sélection de mes projets de design et de web.",
 "UI & Ux": "UI et UX",
 "Website Development": "Développement de sites web",
 "Web Development": "Développement web",
 "Insurance": "Assurance",
 "Creatives": "Créations",
 "Like what you see? Say “Hello”, whether it’s a role, an internship or a project. I don’t bite :)": "Ça vous plaît ? Dites simplement « Bonjour », que ce soit pour un poste, un stage ou un projet. Je ne mords pas :)",
 "Get in touch": "Prenez contact",
 "What people say": "Ce que l’on dit de mon travail",
 "CEO of Trailblazer": "PDG de Trailblazer",
 "Director at Aurione": "Direction, Aurione",
 "People & Culture Leader, Mano Africa": "Responsable People & Culture, Mano Africa",
 "Lawyer, President Tech Savvy Law Club": "Avocat, président du Tech Savvy Law Club",
 "Developer at Edukart": "Développeur chez Edukart",
 "Get in touch with me": "Contactez-moi",
 "I’m open to internships and alternance (work-study) in brand management, marketing and communications, project management, sustainability (ESG) and design, in France and across Europe.": "Je suis ouvert aux stages et à l’alternance en gestion de marque, marketing et communication, gestion de projet, développement durable (ESG) et design, en France et partout en Europe.",
 "Please Fill Required Fields": "Veuillez remplir tous les champs obligatoires",
 "Name": "Nom",
 "Email": "E-mail",
 "Send Message": "Envoyer le message",
 "Phone": "Téléphone",
 "Based in": "Basé à",
 "Office": "Bureau",
 "Clients and partners I’ve worked with": "Clients et partenaires avec lesquels j’ai travaillé",
 "Let’s build something great together": "Construisons quelque chose de grand ensemble",
 "Let’s work together on your next project": "Travaillons ensemble sur votre prochain projet",
 "Copyright 2026 | Segun — Privacy Policy": "Copyright 2026 | Segun — Politique de confidentialité",
 "Few of my Brand Identity Developments": "Quelques-uns de mes projets d’identité de marque",
 "Portfolio / Brand Development": "Portfolio / Identité de marque",
 "Development": "Développement",
 "Portfolio / Graphics Design": "Portfolio / Design graphique",
 "Few of my Graphics Design projects": "Quelques-uns de mes projets de design graphique",
 "Church Posters": "Affiches pour églises",
 "Portfolio / Motion Design & Video Editing": "Portfolio / Motion design et montage vidéo",
 "Few of my Motion Design Projects": "Quelques-uns de mes projets de motion design",
 "Trablazer Prayers": "Trailblazer Prayers",
 "Trailblazer Prayers is the official prayer channel of Trailblazer Christian Broadcasting Network and I helped develop videos which we aim to edify through words that inspire and help our subscribers get closer to God and we do that by making original contents through scripts writings, voice recordings.": "Trailblazer Prayers est la chaîne de prière officielle du Trailblazer Christian Broadcasting Network. J’ai contribué à créer des vidéos qui visent à édifier par des paroles inspirantes et à aider nos abonnés à se rapprocher de Dieu, à partir de contenus originaux : écriture de scripts et enregistrements de voix.",
 "Flex 'n' Learn Teaser": "Teaser Flex ’n’ Learn",
 "Right from the website to the video and design production was done by me. The Flex ‘’n’ Learn 2.0 seeks to bring together men in Nigeria to enjoy practical life learnings from leaders who have walked the path, let loose the boy-child within, win exciting prizes, and laugh with the lads with our annual late not-so-late flex theme.": "Tout, du site web à la vidéo et à la production graphique, a été réalisé par moi. Flex ’n’ Learn 2.0 réunit des hommes au Nigeria pour profiter de leçons de vie pratiques de leaders qui ont tracé leur chemin, libérer le garçon qui sommeille en eux, gagner des prix et rire entre amis, avec notre thème annuel « late not-so-late flex ».",
 "My First Motion Demo": "Ma première démo de motion design",
 "Every coporate company in the market today engage their audience with one motion graphic or the other. Companies like Google, facebook use Motion Design as a startegy in communicating with their audience. I could help you acheive a drastic audience engagement by motion design.": "Aujourd’hui, toutes les grandes entreprises engagent leur public avec une animation ou une autre. Des sociétés comme Google ou Facebook utilisent le motion design comme stratégie pour communiquer avec leur audience. Je peux vous aider à obtenir un engagement spectaculaire de votre public grâce au motion design.",
 "Flex ‘n’ Learn 2.0 is a first of its kind celebration of the international men’s day in Nigeria and it would give you a fine mixture of fun and learning with a collection of the finest crop of corporate leaders, entrepreneurs and other top industry professionals all in one place! As a participant, this event is the perfect chance for you to chill, to enjoy practical life learnings from leaders who have walked the path.": "Flex ’n’ Learn 2.0 est une célébration inédite de la Journée internationale des hommes au Nigeria. Elle offre un beau mélange de détente et d’apprentissage, avec une sélection des meilleurs dirigeants d’entreprise, entrepreneurs et professionnels du secteur réunis au même endroit ! Pour les participants, c’est l’occasion idéale de se détendre et de profiter de leçons de vie pratiques de leaders qui ont tracé leur chemin.",
 "As a participant, this event is the perfect chance for you to chill, to enjoy practical life learnings from leaders who have walked the path, let loose the boy-child within, win exciting prizes, and laugh with the lads with our annual late not-so-late flex theme. At Flex ‘n’ Learn, we want to celebrate your big and small accomplishments as well as prepare you for the unpaved road of personal and professional life.": "Pour les participants, cet événement est l’occasion idéale de se détendre, de profiter de leçons de vie pratiques de leaders qui ont tracé leur chemin, de libérer le garçon qui sommeille en eux, de gagner des prix et de rire entre amis, avec notre thème annuel « late not-so-late flex ». Chez Flex ’n’ Learn, nous voulons célébrer vos réussites, petites et grandes, et vous préparer au chemin non balisé de la vie personnelle et professionnelle.",
 "Snippet Flex'n'Learn": "Extrait Flex’n’Learn",
 "Rapidly growing companies today require agility, accountability and ease of use in order management.": "Les entreprises en forte croissance ont besoin d’agilité, de responsabilité et de simplicité dans la gestion des commandes.",
 "Channetic aims to help these companies with a platform that allows for easier sales growth. Simple & cloud-based, Channetic manages your regular purchases from your vendors (big and small) and your resellers.": "Channetic aide ces entreprises avec une plateforme qui facilite la croissance des ventes. Simple et basée sur le cloud, Channetic gère vos achats réguliers auprès de vos fournisseurs (grands et petits) et de vos revendeurs.",
 "Thank you!": "Merci !",
 "Your form has been successfully submitted.": "Votre formulaire a bien été envoyé.",
 "Feels soo good hearing from you :)": "Ça fait vraiment plaisir d’avoir de vos nouvelles :)",
 "GO back Home": "Retour à l’accueil",
 "Go back home": "Retour à l’accueil",
 "Portfolio / User Interface / User Experience Design": "Portfolio / Design d’interface et d’expérience utilisateur",
 "Few of my UI/UX projects": "Quelques-uns de mes projets UI/UX",
 "User Interface": "Interface utilisateur",
 "HEALTHCARE": "SANTÉ",
 "Portfolio / Web Development": "Portfolio / Développement web",
 "Please, see some of my web dev projects": "Découvrez quelques-uns de mes projets web",
 "E-Commerce Website": "Site e-commerce",
 "Careers at Betaworka": "Carrières chez Betaworka",
 "Printing Press, Nigeria": "Imprimerie, Nigeria",
 "7. www.hexicare.com (Ongoing)": "7. www.hexicare.com (en cours)",
 "8. www.heximultinational.com (Ongoing)": "8. www.heximultinational.com (en cours)",
 "Brand identity & event": "Identité de marque et événement",
 "Flex ’n’ Learn": "Flex ’n’ Learn",
 "I built the brand, graphics, video and website for Flex ’n’ Learn, an annual men’s day event in Nigeria that brings leaders and young men together.": "J’ai créé la marque, les visuels, la vidéo et le site de Flex ’n’ Learn, un événement annuel dédié à la Journée des hommes au Nigeria, qui réunit des leaders et des jeunes hommes.",
 "Brand, design & web": "Marque, design et web",
 "Brand · Project · Sustainability": "Marque · Projet · Développement durable",
 "Brand strategy · Project delivery · ESG · Design · Web": "Stratégie de marque · Gestion de projet · ESG · Design · Web",
 "Scroll": "Défiler",
 "Designs": "Créations"
};
	var META = {
 "index.html": {
  "en": [
   "Segun Emmanuel Oladele | Brand & Project Manager",
   "Segun Emmanuel Oladele: brand and project manager studying International Management and Sustainability at IAE Dijon. Brand, project, web and design work."
  ],
  "fr": [
   "Segun Emmanuel Oladele | Responsable de marque et chef de projet",
   "Segun Emmanuel Oladele : responsable de marque et chef de projet, étudiant en Management international et développement durable à l'IAE Dijon. Marque, gestion de projet, web et design."
  ]
 },
 "web.html": {
  "en": [
   "Web Design Portfolio | Segun Emmanuel Oladele",
   "Web design and development projects by Segun Emmanuel Oladele."
  ],
  "fr": [
   "Portfolio de web design | Segun Emmanuel Oladele",
   "Projets de web design et de développement web de Segun Emmanuel Oladele."
  ]
 },
 "graphics.html": {
  "en": [
   "Graphic Design Portfolio | Segun Emmanuel Oladele",
   "Graphic design projects by Segun Emmanuel Oladele."
  ],
  "fr": [
   "Portfolio de design graphique | Segun Emmanuel Oladele",
   "Projets de design graphique de Segun Emmanuel Oladele."
  ]
 },
 "motion.html": {
  "en": [
   "Motion Design Portfolio | Segun Emmanuel Oladele",
   "Motion design and video editing projects by Segun Emmanuel Oladele."
  ],
  "fr": [
   "Portfolio de motion design | Segun Emmanuel Oladele",
   "Projets de motion design et de montage vidéo de Segun Emmanuel Oladele."
  ]
 },
 "uiux.html": {
  "en": [
   "UI/UX Design Portfolio | Segun Emmanuel Oladele",
   "UI/UX design projects by Segun Emmanuel Oladele."
  ],
  "fr": [
   "Portfolio de design UI/UX | Segun Emmanuel Oladele",
   "Projets de design UI/UX de Segun Emmanuel Oladele."
  ]
 },
 "branding.html": {
  "en": [
   "Branding Portfolio | Segun Emmanuel Oladele",
   "Brand identity projects by Segun Emmanuel Oladele."
  ],
  "fr": [
   "Portfolio d'identité de marque | Segun Emmanuel Oladele",
   "Projets d'identité de marque de Segun Emmanuel Oladele."
  ]
 },
 "thanks.html": {
  "en": [
   "Thank you | Segun Emmanuel Oladele",
   "Thank you for getting in touch."
  ],
  "fr": [
   "Merci | Segun Emmanuel Oladele",
   "Merci de votre message."
  ]
 }
};

	var has = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
	var rev = {};
	Object.keys(FR).forEach(function (k) { if (!has(rev, FR[k])) { rev[FR[k]] = k; } });
	var originals = (typeof WeakMap !== 'undefined') ? new WeakMap() : null;
	var root = document.documentElement;

	function getStored() {
		try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; }
	}
	function setStored(v) {
		try { window.localStorage.setItem(STORE_KEY, v); } catch (e) { /* private mode: ignore */ }
	}
	function initialLang() {
		var q = /[?&]lang=(fr|en)\b/.exec(window.location.search || '');
		if (q) { return q[1]; }
		var s = getStored();
		return (s === 'fr' || s === 'en') ? s : DEFAULT_LANG;
	}

	function translateText(lang) {
		var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
		var node;
		while ((node = walker.nextNode())) {
			var parent = node.parentNode;
			if (!parent) { continue; }
			var tag = parent.nodeName;
			if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') { continue; }
			var orig = originals ? originals.get(node) : undefined;
			if (orig === undefined) {
				orig = node.nodeValue;
				if (originals) { originals.set(node, orig); }
			}
			var norm = orig.replace(/\s+/g, ' ').replace(/^ | $/g, '');
			if (!norm) { continue; }
			var key = null;
			if (has(FR, norm)) { key = norm; } else if (has(rev, norm)) { key = rev[norm]; }
			if (key === null) { continue; }
			var lead = orig.match(/^\s*/)[0];
			var trail = orig.match(/\s*$/)[0];
			if (lang === 'fr') {
				node.nodeValue = lead + FR[key] + trail;
			} else {
				node.nodeValue = (norm === key) ? orig : lead + key + trail;
			}
		}
	}

	function translateAttributes(lang) {
		var els = document.querySelectorAll('[placeholder]');
		for (var i = 0; i < els.length; i++) {
			var el = els[i];
			if (!el.getAttribute('data-ph-en')) { el.setAttribute('data-ph-en', el.getAttribute('placeholder')); }
			var en = el.getAttribute('data-ph-en');
			el.setAttribute('placeholder', (lang === 'fr' && has(FR, en)) ? FR[en] : en);
		}
	}

	function translateHead(lang) {
		var page = (window.location.pathname.split('/').pop() || 'index.html');
		var m = META[page] || META['index.html'];
		var vals = m[lang];
		document.title = vals[0];
		var d = document.querySelector('meta[name="description"]');
		if (d) { d.setAttribute('content', vals[1]); }
		var ogt = document.querySelector('meta[property="og:title"]');
		if (ogt) { ogt.setAttribute('content', vals[0]); }
		var ogd = document.querySelector('meta[property="og:description"]');
		if (ogd) { ogd.setAttribute('content', vals[1]); }
	}

	function markButtons(lang) {
		var btns = document.querySelectorAll('.tm_lang_btn');
		for (var i = 0; i < btns.length; i++) {
			var on = btns[i].getAttribute('data-lang') === lang;
			btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
		}
	}

	function apply(lang) {
		translateText(lang);
		translateAttributes(lang);
		translateHead(lang);
		markButtons(lang);
		var cvs = document.querySelectorAll('a[href$="cv.pdf"], a[href$="cv-fr.pdf"]');
		for (var c = 0; c < cvs.length; c++) { cvs[c].setAttribute('href', 'img/' + (lang === 'fr' ? 'cv-fr.pdf' : 'cv.pdf')); }
		root.setAttribute('lang', lang);
		root.className = root.className.replace(/\s*i18n-pending/, '');
	}

	var current = initialLang();
	apply(current);

	document.addEventListener('click', function (e) {
		var t = e.target;
		while (t && t !== document) {
			if (t.getAttribute && t.getAttribute('data-lang') && /tm_lang_btn/.test(t.className)) {
				var lang = t.getAttribute('data-lang');
				if (lang !== current) { current = lang; setStored(lang); apply(lang); }
				return;
			}
			t = t.parentNode;
		}
	});
})();
