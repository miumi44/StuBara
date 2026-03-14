// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL || 'https://miumi44.github.io';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'stubara';
const isUserSite = repo === 'miumi44.github.io';
const base = process.env.BASE_PATH || (isUserSite ? '/' : `/${repo}/`);

export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
			title: 'StuBara',
			description: '바라가 정리하는 공부 아카이브',
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#4f46e5',
					},
				},
			],
			sidebar: [
				{
					label: 'Archive',
					items: [
						{ label: 'Home', slug: '' },
						{ label: 'About', slug: 'about' },
						{ label: 'Notes', slug: 'notes' },
						{ label: 'Briefings', slug: 'briefings' },
						{ label: 'StuBara 운영 가이드', slug: 'notes/stubara-roadmap' },
						{ label: '바이오사이언스 산업동향', slug: 'notes/bioscience-industry-trends-2025-2026' },
					],
				},
			],
		}),
	],
});
