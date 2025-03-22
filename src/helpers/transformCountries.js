export const transformCountriesData = (data) => {
  return data.map(({ name: { common }, capital, flags, population, languages }) => ({
    id: common,
    country: common,
    flag: flags?.png || "",
    capital: capital?.[0] || "Невідомо",
    population: population || 0,
    languages: languages ? Object.values(languages) : [],
  }));
};

export const transformCountryData = ({ name, flags, capital, population, languages }) => {
  return {
    id: name?.common || "—",
    countryName: name?.official || "Невідомо",
    flag: flags?.png || "",
    capital: capital?.[0] || "Невідомо",
    population: population || 0,
    languages: languages ? Object.values(languages) : [],
  };
};
