interface ICity {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}

interface ICountry {
  emoji: string;
  country: string;
}

export type { ICity, ICountry };
