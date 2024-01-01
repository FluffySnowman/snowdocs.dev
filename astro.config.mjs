import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'SnowDocs',
			social: {
        github: 'https://github.com/fluffysnowman',
			},
			sidebar: [
				{
					label: 'Linux',
          autogenerate: { directory: 'linux' },
					// items: [
					// 	{ label: 'Linux', link: '/commands/shit' },
					// ],
				},
        {
          label: 'System Administration',
          autogenerate: { directory: 'sysadmin' },
        },
				{
					label: 'Docker',
					autogenerate: { directory: 'docker' },
				},
			],
		}),
	],
});
