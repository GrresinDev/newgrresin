export interface PartnerModel {
	id: string;
	company_url: string;
	logo: string;
	created: string;
	updated: string;
	collectionId: string;
	collectionName: string;
}

export type PartnerModelWithThumbnail = PartnerModel & {
	thumbnail: string;
};
