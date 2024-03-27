import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import OpenAI from 'openai';

const openai = new OpenAI();

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const selectedTech = formData.get('selectedTech');

		const thread = await openai.beta.threads.create();
		const message = await openai.beta.threads.messages.create(thread.id, {
			role: 'user',
			content: 'Tell me about ' + selectedTech + '.'
		});

		let run = await openai.beta.threads.runs.create(thread.id, {
			assistant_id: 'asst_Gp8iSMVnJHYDvACcORFgNoDX',
			instructions: 'Please address the user as Elvinos.'
		});

		while (['queued', 'in_progress', 'cancelling'].includes(run.status)) {
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
			run = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);
		}

		if (run.status === 'completed') {
			const messages = await openai.beta.threads.messages.list(run.thread_id);
			for (const message of messages.data.reverse()) {
				console.log(`${message.role} > ${message.content[0].text.value}`);
			}

			return { success: true };
		} else {
			console.log(run.status);
			return { failure: true };
		}
	}
} satisfies Actions;
