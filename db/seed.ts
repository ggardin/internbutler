import { db, Company, Employee, Project, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Company).values([
		{
			id: 1,
			name: "WAVELOP Srl",
			website: "https://wavelop.com/it/",
			description: "Wavelop è una giovane azienda innovativa specializzata nella consulenza e nello sviluppo di progetti web e mobile per PMI e startup. La nostra sede operativa è a Treviso, a due passi dalla stazione. Lavorando con noi troverai un ambiente dinamico, giovane ed informale. Prediligiamo lo smart working e la flessibilità degli orari. Lo stack di sviluppo principale è Javascript (React, React-native e NodeJS). Il nostro approccio ai progetti è Agile.  Quindi valutiamo positivamente la conoscenza della metodologia Agile, di strumenti di versionamento come Git, TDD, esperienze nello sviluppo web (Javascript, HTML/CSS) ed eventuali progetti universitari e side-projects."
		},
	])
	await db.insert(Employee).values([
		{
			id: 1,
			name: "Matteo Granzotto",
			email: "hr@wavelop.com",
			company: 1
		},
	])
	await db.insert(Project).values([
		{
			id: 1,
			name: "TIMESHEET",
			description: "Il progetto prevede l’analisi, la progettazione e lo sviluppo di una applicazione web interna per lo scheduling e la consuntivazione delle attività lavorative del team. Le tecnologie saranno: React per il front-end; Node.js ed Express per il back-end; database NoSQL MongoDB; Docker; sistema di deployment su AWS.",
			company: 1
		},
	])
	await db.insert(Comment).values([
		{
			id: 1,
			text: "Commento",
			project: 1
		},
	])
}
