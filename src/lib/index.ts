export type SeoPage = 'home' | 'about' | 'projects' | 'blog' | 'careers' | 'sales' | 'order';

export type SeoData = {
	title: string;
	description: string;
	image: string;
	keywords: string;
};

export type SeoConfig = Record<SeoPage, SeoData>;

export const seo: Record<"ar"|"en", SeoConfig> = {
	en: {
		home: {
			title: 'Graffiti Resin | Art, Resin & Flooring Solutions in Saudi Arabia',
			description:
				'Graffiti Resin specializes in high-quality resin products, artistic silicone rubbers, and custom flooring solutions across Saudi Arabia.',
			image: '/og/logo.png',
			keywords:
				'Graffiti Resin, resin art Saudi Arabia, flooring resin, epoxy, silicone rubber, KSA resin manufacturer, art supplies KSA, custom flooring'
		},
		about: {
			title: 'About Us | Graffiti Resin – Resin & Flooring Experts in KSA',
			description:
				"Learn about Graffiti Resin's mission, vision, and experience in producing high-quality resin products and delivering art and flooring projects in Saudi Arabia.",
			image: '/og/logo.png',
			keywords:
				'About Graffiti Resin, resin company Saudi Arabia, flooring company KSA, resin manufacturer, epoxy experts, Saudi art flooring'
		},
		projects: {
			title: 'Projects | Graffiti Resin – Innovative Flooring & Resin Applications',
			description:
				"Explore Graffiti Resin's impressive projects featuring advanced resin applications for art, flooring, and protective coatings across Saudi Arabia.",
			image: '/og/logo.png',
			keywords:
				'Graffiti Resin projects, resin flooring projects, artistic resin applications, KSA flooring portfolio, epoxy flooring examples'
		},
		blog: {
			title: 'Blog | Resin Tips, Flooring Insights & Artistic Inspiration',
			description:
				'Stay updated with the latest resin techniques, flooring trends, and creative applications through the Graffiti Resin blog.',
			image: '/og/logo.png',
			keywords:
				'resin blog, flooring advice, resin tutorials, epoxy guides, artistic resin tips, Graffiti Resin blog, resin knowledge base'
		},
		careers: {
			title: 'Careers | Join Graffiti Resin in Shaping Resin Innovation',
			description:
				'Join the creative and technical team at Graffiti Resin. Apply now and become part of a leading resin and flooring company in Saudi Arabia.',
			image: '/og/logo.png',

			keywords:
				'careers at Graffiti Resin, jobs resin company, Saudi Arabia jobs, KSA hiring, resin jobs, flooring careers, work in art and resin'
		},
		sales: {
			title: 'Sales Point | Shop High-Quality Resin Products in Saudi Arabia',
			description:
				'Browse and purchase premium resin products, silicone rubbers, and art materials directly from Graffiti Resin’s online sales platform.',
			image: '/og/logo.png',

			keywords:
				'buy resin Saudi Arabia, resin sales KSA, silicone rubber products, epoxy, art supplies shop, graffiti resin online store'
		},
		order: {
			title: 'Order a Floor | Custom Resin Flooring by Graffiti Resin',
			description:
				'Request a custom resin flooring solution for your space. Graffiti Resin offers premium design, installation, and resin application services in KSA.',
			image: '/og/logo.png',

			keywords:
				'resin floor order, epoxy flooring Saudi Arabia, flooring service KSA, order resin floor, Graffiti Resin request service'
		}
	},
	ar: {
		home: {
			title: 'جرافيتي ريزن | حلول فنية و ريزن وأرضيات في السعودية',
			description:
				'تختص جرافيتي ريزن في منتجات ريزن عالية الجودة، السيليكون الفني، وحلول الأرضيات المخصصة في جميع أنحاء السعودية.',
			image: '/og/home.png',

			keywords:
				'جرافيتي ريزن, فن ريزن, أرضيات راتنجية, إيبوكسي, مطاط سيليكون, مصنع راتنج السعودية, مستلزمات فنية السعودية, أرضيات مخصصة'
		},
		about: {
			title: 'من نحن | جرافيتي ريزن – خبراء ريزن والأرضيات في السعودية',
			description:
				'تعرف على مهمة ورؤية وخبرة جرافيتي ريزن في إنتاج ريزن عالي الجودة وتنفيذ المشاريع الفنية وحلول الأرضيات.',
			image: '/og/about.png',

			keywords:
				'من نحن جرافيتي ريزن, شركة راتنج السعودية, شركة أرضيات السعودية, مصنع إيبوكسي, خبراء ريزن, فن الأرضيات السعودي'
		},
		projects: {
			title: 'المشاريع | جرافيتي ريزن – تطبيقات مبتكرة للراتنج والأرضيات',
			description:
				'استكشف مشاريع جرافيتي ريزن المذهلة التي تشمل تطبيقات فنية وأرضيات احترافية باستخدام ريزن في جميع أنحاء السعودية.',
			image: '/og/projects.png',

			keywords:
				'مشاريع جرافيتي ريزن, أرضيات راتنجية, تطبيقات فنية راتنجية, محفظة مشاريع السعودية, أمثلة أرضيات إيبوكسي'
		},
		blog: {
			title: 'المدونة | نصائح ريزن واتجاهات الأرضيات وإلهام فني',
			description:
				'ابقَ مطلعًا على أحدث تقنيات ريزن، واتجاهات الأرضيات، والتطبيقات الفنية المبتكرة من خلال مدونة جرافيتي ريزن.',
			image: '/og/blog.png',

			keywords:
				'مدونة ريزن, نصائح الأرضيات, دروس ريزن, أدلة إيبوكسي, نصائح فنية, مدونة جرافيتي ريزن, قاعدة معرفة ريزن'
		},
		careers: {
			title: 'الوظائف | انضم إلى جرافيتي ريزن في ابتكار عالم ريزن',
			description:
				'انضم إلى فريق جرافيتي ريزن الإبداعي والتقني. قدم الآن وكن جزءًا من شركة رائدة في مجال ريزن والأرضيات في السعودية.',
			image: '/og/logo.png',

			keywords:
				'وظائف جرافيتي ريزن, وظائف شركة راتنج, وظائف السعودية, توظيف KSA, فرص عمل راتنج, وظائف الأرضيات, العمل في الفن وريزن'
		},
		sales: {
			title: 'نقطة البيع | تسوق منتجات ريزن عالية الجودة في السعودية',
			description:
				'تصفح واشتري منتجات ريزن المتميزة، المطاط السيليكوني، والمواد الفنية مباشرةً من منصة جرافيتي ريزن.',
			image: '/og/logo.png',

			keywords:
				'شراء راتنج السعودية, مبيعات ريزن السعودية, منتجات السيليكون, إيبوكسي, متجر المستلزمات الفنية, متجر جرافيتي ريزن'
		},
		order: {
			title: 'اطلب أرضية | حلول أرضيات راتنجية مخصصة من جرافيتي ريزن',
			description:
				'اطلب الآن حلول أرضيات راتنجية مخصصة لمساحتك. تقدم جرافيتي ريزن تصميمًا احترافيًا وخدمات تركيب وتطبيق ريزن في السعودية.',
			image: '/og/logo.png',
			keywords:
				'طلب أرضية راتنجية, أرضيات إيبوكسي السعودية, خدمات الأرضيات السعودية, طلب أرضية راتنج, جرافيتي ريزن خدمات'
		}
	}
};
