
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Assiduus=()=>{
  return(<>
        <Grid container>
            <Grid item xs={4} md={2}>
              <Sidebar/>
              </Grid>
              <Grid item xs={8} md={10}>
                <Dashboard/>
              </Grid>
            </Grid>
  </>)
}

export default Assiduus;