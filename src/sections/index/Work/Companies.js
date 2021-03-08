import CompanyLogo from "./CompanyLogo";
import { Grid } from "@material-ui/core";
import useSx from "./useCompaniesSx";

const Companies = () => {
  const sx = useSx();

  return (
    <Grid sx={sx.root} container spacing={6}>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo company="ha" />
      </Grid>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo company="hku" />
      </Grid>
      <Grid item sm='auto' xs={12}>
        <CompanyLogo company="versitech" />
      </Grid>
    </Grid>
  );
};

Companies.whyDidYouRender = true;

export default Companies;