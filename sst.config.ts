import type { SSTConfig } from 'sst';
import { SvelteKitSite } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'kodeifyai',
			region: 'eu-north-1',
			profile: _input.stage === 'production' ? 'Elvin-Baloku-productions' : 'Elvin-Baloku-dev'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new SvelteKitSite(stack, 'site');
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
