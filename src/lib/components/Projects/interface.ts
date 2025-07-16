export interface ProjectTypeItem {
	id: string;
	types: string;
	types_ar: string;
}

export interface ProjectType {
	items: ProjectTypeItem[];
}

//Project Model
export interface ProjectModel {
	collectionId: string;
	collectionName: string;
	id: string;
	title: string;
	before_images: string[];
	after_images: string[];
	desc: string;
	title_ar: string;
	desc_ar: string;
	created: Date;
	updated: Date;
	slug: string;
	type: string;
}
export type ProjectWithThumbNail = ProjectModel & {
    before_thumbnail: string | null; 
    after_thumbnail: string | null;  
};
