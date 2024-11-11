export type City = {
  country: string;
  name: string;
  purchasingPowerIndex?: number;
  netSalary?: number;
}

export type CityStatistics = {
  country: string;
  name: string;
  purchasingPowerIndex?: number;
  netSalary?: number;
  date: Date;
}

export type PPI = {
  name: string;
  country: string;
  purchasingPowerIndex: number;
  date: Date;
};
