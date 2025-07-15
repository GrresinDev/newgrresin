export interface ProjectProduct {
	id: string;
	name: string;
	name_ar: string;
	descriptoin: string;
	descriptoin_ar: string;
	image: string;
	tds: string;
	created: string;
	updated: string;
	collectionId: string;
	collectionName: string;
}

export type ProjectProductWithUrl = ProjectProduct & {
	imageUrl: string;
	tdsUrl: string;
};
