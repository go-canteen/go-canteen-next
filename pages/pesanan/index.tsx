import type { ReactElement } from 'react';
import Layout from '../../components/layout';
import type { NextPageWithLayout } from '../_app';


const Page: NextPageWithLayout = () => {
    return <h1>Daftar Pesanan</h1>
  }

  Page.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default Page;
