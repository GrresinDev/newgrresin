export interface ArtProduct {
	id: string;
	name: string;
	name_ar: string;
	description: string;
	description_ar: string;
	image: string;
	shop: string;
	created: string; 
	updated: string;
	collectionId: string;
	collectionName: string;
}

export type ArtProductWithUrl = ArtProduct & {
	imageUrl: string;
};