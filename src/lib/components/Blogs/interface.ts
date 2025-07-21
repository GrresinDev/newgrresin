export interface PostModel {
	collectionId: string;
	collectionName: string;
	id: string;
	title: string;
	image: string[];
	desc: string;
	title_ar: string;
	desc_ar: string;
	created: Date;
	updated: Date;
	likes: number;
	slug: string;
	small_desc: string;
	small_desc_ar: string;
}

export type PostWithThumbnail = PostModel & {
	thumbnail: string | null;
};
export interface ImagesModel {
	collectionId: string;
	collectionName: string;
	id: string;
	images: string[];
	name: string;
	created: Date;
	updated: Date;
}
