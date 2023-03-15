
export interface ISpecialties {
  id: number;
  attributes: ISpecialtiesAttribute;
}
export interface ISpecialtiesAttribute {
  Categorie: string;
  Description: string;
  locale: string;
  Slug: string;
  Illustration: IImageData;
  resultats: IResults[];
}

export interface IResults {
  id: number;
  attributes: IResultsAttribute;
}

export interface IResultsAttribute {
  Nom: string;
  Prix: number;
  locale: string;
  Illustration: IImageData;
  Epoque: string;
  Description: string;
}

export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        medium: {
          url: string;
        };
      };
    };
  };
}
