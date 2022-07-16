export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-a9bfc895.js","imports":["immutable/start-a9bfc895.js","immutable/chunks/index-0c810e59.js","immutable/chunks/index-4f730b79.js","immutable/chunks/preload-helper-4c397a37.js","immutable/chunks/singletons-cdeec3fd.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/27.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/25.js'),
			() => import('../output/server/nodes/26.js'),
			() => import('../output/server/nodes/28.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js'),
			() => import('../output/server/nodes/21.js'),
			() => import('../output/server/nodes/22.js'),
			() => import('../output/server/nodes/23.js'),
			() => import('../output/server/nodes/24.js')
		],
		routes: [
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "profile",
				pattern: /^\/profile\/?$/,
				names: [],
				types: [],
				path: "/profile",
				shadow: () => import('../output/server/entries/endpoints/profile/index.js'),
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "survey",
				pattern: /^\/survey\/?$/,
				names: [],
				types: [],
				path: "/survey",
				shadow: () => import('../output/server/entries/endpoints/survey/index.js'),
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/checkyouremail",
				pattern: /^\/auth\/checkyouremail\/?$/,
				names: [],
				types: [],
				path: "/auth/checkyouremail",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/redirect",
				pattern: /^\/auth\/redirect\/?$/,
				names: [],
				types: [],
				path: "/auth/redirect",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/requestresetpassword",
				pattern: /^\/auth\/requestresetpassword\/?$/,
				names: [],
				types: [],
				path: "/auth/requestresetpassword",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/signin",
				pattern: /^\/auth\/signin\/?$/,
				names: [],
				types: [],
				path: "/auth/signin",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/signout",
				pattern: /^\/auth\/signout\/?$/,
				names: [],
				types: [],
				path: "/auth/signout",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/updateuser",
				pattern: /^\/auth\/updateuser\/?$/,
				names: [],
				types: [],
				path: "/auth/updateuser",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "error/network",
				pattern: /^\/error\/network\/?$/,
				names: [],
				types: [],
				path: "/error/network",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "policies/privacy",
				pattern: /^\/policies\/privacy\/?$/,
				names: [],
				types: [],
				path: "/policies/privacy",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "policies/termsofservice",
				pattern: /^\/policies\/termsofservice\/?$/,
				names: [],
				types: [],
				path: "/policies/termsofservice",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/aboutme",
				pattern: /^\/profile\/aboutme\/?$/,
				names: [],
				types: [],
				path: "/profile/aboutme",
				shadow: () => import('../output/server/entries/endpoints/profile/aboutme/index.js'),
				a: [0,3,15],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/map",
				pattern: /^\/profile\/map\/?$/,
				names: [],
				types: [],
				path: "/profile/map",
				shadow: null,
				a: [0,3,16],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/mycommunity",
				pattern: /^\/profile\/mycommunity\/?$/,
				names: [],
				types: [],
				path: "/profile/mycommunity",
				shadow: () => import('../output/server/entries/endpoints/profile/mycommunity/index.js'),
				a: [0,3,17],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/myplace",
				pattern: /^\/profile\/myplace\/?$/,
				names: [],
				types: [],
				path: "/profile/myplace",
				shadow: () => import('../output/server/entries/endpoints/profile/myplace/index.js'),
				a: [0,3,18],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/settings",
				pattern: /^\/profile\/settings\/?$/,
				names: [],
				types: [],
				path: "/profile/settings",
				shadow: () => import('../output/server/entries/endpoints/profile/settings/index.js'),
				a: [0,3,19],
				b: [1]
			},
			{
				type: 'page',
				id: "survey/pagefuture",
				pattern: /^\/survey\/pagefuture\/?$/,
				names: [],
				types: [],
				path: "/survey/pagefuture",
				shadow: null,
				a: [0,20],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/data/propertyNSWSS",
				pattern: /^\/api\/data\/propertyNSWSS\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/data/propertyNSWSS.js')
			},
			{
				type: 'endpoint',
				id: "api/auth/user",
				pattern: /^\/api\/auth\/user\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/auth/user.js')
			},
			{
				type: 'endpoint',
				id: "api/auth/updateuser",
				pattern: /^\/api\/auth\/updateuser\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/auth/updateuser.js')
			},
			{
				type: 'endpoint',
				id: "api/auth/signin",
				pattern: /^\/api\/auth\/signin\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/auth/signin.js')
			},
			{
				type: 'endpoint',
				id: "api/auth/callback",
				pattern: /^\/api\/auth\/callback\/?$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/auth/callback.js')
			},
			{
				type: 'page',
				id: "profile/mycommunity/information",
				pattern: /^\/profile\/mycommunity\/information\/?$/,
				names: [],
				types: [],
				path: "/profile/mycommunity/information",
				shadow: () => import('../output/server/entries/endpoints/profile/mycommunity/information/index.js'),
				a: [0,3,21],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/mycommunity/meetings",
				pattern: /^\/profile\/mycommunity\/meetings\/?$/,
				names: [],
				types: [],
				path: "/profile/mycommunity/meetings",
				shadow: () => import('../output/server/entries/endpoints/profile/mycommunity/meetings/index.js'),
				a: [0,3,22],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/mycommunity/workshops",
				pattern: /^\/profile\/mycommunity\/workshops\/?$/,
				names: [],
				types: [],
				path: "/profile/mycommunity/workshops",
				shadow: () => import('../output/server/entries/endpoints/profile/mycommunity/workshops/index.js'),
				a: [0,3,23],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/myplace/animals",
				pattern: /^\/profile\/myplace\/animals\/?$/,
				names: [],
				types: [],
				path: "/profile/myplace/animals",
				shadow: () => import('../output/server/entries/endpoints/profile/myplace/animals/index.js'),
				a: [0,3,24],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/myplace/assets",
				pattern: /^\/profile\/myplace\/assets\/?$/,
				names: [],
				types: [],
				path: "/profile/myplace/assets",
				shadow: () => import('../output/server/entries/endpoints/profile/myplace/assets/index.js'),
				a: [0,3,25],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/myplace/hazards",
				pattern: /^\/profile\/myplace\/hazards\/?$/,
				names: [],
				types: [],
				path: "/profile/myplace/hazards",
				shadow: () => import('../output/server/entries/endpoints/profile/myplace/hazards/index.js'),
				a: [0,3,26],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
