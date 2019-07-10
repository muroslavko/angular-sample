export interface Classifications {
}

export interface Contributor {
    role: string;
    name: string;
}

export interface Identifiers {
    goodreads: string[];
    librarything: string[];
    depósito_legal: string[];
}

export interface Created {
    type: string;
    value: Date;
}

export interface LastModified {
    type: string;
    value: Date;
}

export interface TableOfContent {
    title: string;
    label: string;
    pagenum: string;
    level: number;
}

export interface Work {
    key: string;
}

export interface Type {
    key: string;
}

export interface Language {
    key: string;
}

export interface Author {
    key: string;
}

export interface Description {
    type?: string;
    value: string;
}

export interface Book {
    publishers: string[];
    classifications: Classifications;
    contributors: Contributor[];
    title: string;
    identifiers: Identifiers;
    covers: number[];
    created: Created;
    isbn_13: string[];
    last_modified: LastModified;
    publish_date: Date;
    key: string;
    table_of_contents: TableOfContent[];
    publish_places: string[];
    works: Work[];
    type: Type;
    latest_revision: number;
    revision: number;
    number_of_pages?: number;
    subtitle: string;
    series: string[];
    lc_classifications: string[];
    languages: Language[];
    subjects: string[];
    publish_country: string;
    by_statement: string;
    authors: Author[];
    pagination: string;
    dewey_decimal_class: string[];
    notes: any;
    isbn_10: string[];
    physical_format: string;
    description: Description;
    contributions: string[];
    location: string[];
    other_titles: string[];
    lccn: string[];
    title_prefix: string;
    edition_name: string;
    subject_place: string[];
    source_records: string[];
    oclc_numbers: string[];
    id?: number;
    genres: string[];
}
