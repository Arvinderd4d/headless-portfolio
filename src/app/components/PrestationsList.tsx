import {HomeServicesContent} from '../graphql/home-services.graphql';
import { fetcher } from '@util/index';
import { HomePageServices } from '@type/graphql';

import PrestationItem from './items/PrestationItem';

const getData = (slug:string): Promise<HomePageServices> =>
fetcher(HomeServicesContent, {id:slug});

export default async function PrestationsList() {
  const {data} = await getData("cG9zdDoxMTM=");
  // let count = data.services.edges;
  // console.log(data.page.home, 'this is the count')
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-3 lg:gap-6">
      <PrestationItem
        image={data.page.homeServices.firstServiceIcon.sourceUrl}
        title={data.page.homeServices.firstServiceTitle}
        // link={RouteLink.prestationWeb}
        // linkText="Découvrir mes prestations"
      >
        {data.page.homeServices.firstServiceDescription}
      </PrestationItem>

      <PrestationItem
        image={data.page.homeServices.secondServiceIcon.sourceUrl}
        title={data.page.homeServices.secondServiceTitle}
        // link={RouteLink.prestationWeb}
        // linkText="Découvrir mes prestations"
      >
        {data.page.homeServices.secondServiceDescription}
      </PrestationItem>

      <PrestationItem
        image={data.page.homeServices.thirdServiceIcon.sourceUrl}
        title={data.page.homeServices.thirdServiceTitle}
        // link={RouteLink.prestationWeb}
        // linkText="Découvrir mes prestations"
      >
        {data.page.homeServices.thirdServiceDescription}
      </PrestationItem>
    </div>
  );
}
