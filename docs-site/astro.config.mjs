// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'http://127.0.0.1:4321',
	integrations: [
		starlight({
			title: 'Miumi Archive',
			description: '바라가 정리한 리서치와 메모를 담는 세련된 문서 아카이브',
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
						{ label: 'Notes', slug: 'notes' },
						{ label: '바이오사이언스 산업동향', slug: 'notes/bioscience-industry-trends-2025-2026' },
					],
				},
			],
		}),
	],
});
