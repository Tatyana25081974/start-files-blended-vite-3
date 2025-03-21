import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";

export default function CountryList({ countries }) {
  return (
    <Grid>
      {countries.map((country) => (
        <GridItem key={country.name} country={country} />
      ))}
    </Grid>
  );
}