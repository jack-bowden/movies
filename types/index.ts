export interface Result {
	id: number | string;
	clerkUserId?: string;
	original_title?: string | null;
	overview?: string | null;
	media_type?: string | null;
	adult?: boolean | null;
	backdrop_path: string;
	title?: string | null;
	name?: string | null;
	poster_path: string;
	release_date?: string | null;
	first_air_date?: string | null;
	vote_average: number;
	vote_count: number;
	favoriteId?: number | string;
}

export interface TMDBProps {
	page: number;
	results: Result[];
	total_pages: number;
	total_results: number;
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface IndividualMedia {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: null | unknown;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date?: string;
	first_air_date?: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title?: string;
	name?: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	number_of_episodes?: number;
	number_of_seasons?: number;
	episode_run_time?: number;
}

export interface CastMember {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
	department: string;
	job: string;
}

export interface Cast {
	id: number;
	cast: CastMember[];
}

export interface Person {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	homepage: string | null;
	id: number;
	imdb_id: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string;
}
