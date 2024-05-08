import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import TopSellingProduct from 'components/sections/dashboard/Home/TopSellingProduct';
import WebsiteVisitors from 'components/sections/dashboard/Home/WebsiteVisitors';
import BuyersProfile from 'components/sections/dashboard/Home/BuyersProfile';
import NewCustomers from 'components/sections/dashboard/Home/NewCustomers';
import SaleInfo from 'components/sections/dashboard/Home/SaleInfo';
import Revenue from 'components/sections/dashboard/Home/Revenue';

import avgRevenue from 'assets/sale-info/avg-revenue.png';
import customers from 'assets/sale-info/customers.png';
import sales from 'assets/sale-info/sales.png';
import { drawerWidth } from 'layouts/main-layout';

const Sales = () => {
  return (
    <Grid
      container
      component="main"
      columns={12}
      spacing={3.75}
      flexGrow={1}
      mt="85.125px"
      pt={4.375}
      pr={1.875}
      pb={1.875}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        pl: { xs: 3.75, md: 0 },
      }}
    >
      <Grid xs={12} sm={6} md={4} lg={4}>
        <SaleInfo image={sales} title="Sales" subtitle="230,220" sales={55} />
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <SaleInfo image={customers} title="Customers" subtitle="3,200" sales={12} />
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <SaleInfo image={avgRevenue} title="Avg Revenue" subtitle="2,300" sales={210} />
      </Grid>
      <Grid xs={12} md={8}>
        <Revenue />
      </Grid>
      <Grid xs={12} md={4}>
        <WebsiteVisitors />
      </Grid>
      <Grid xs={12} md={8} height="690px">
        <TopSellingProduct />
      </Grid>
      <Grid xs={12} md={4}>
        <Stack direction="column" gap="30px">
          <NewCustomers />
          <BuyersProfile />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Sales;