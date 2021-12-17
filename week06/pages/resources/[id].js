import { getResourceIds, getResourceData } from '../../lib/resources';

//every next.js app that uses dynamic urls must include a getStaticPaths()
export async function getStaticPaths() {
  const paths = await getResourceIds();
  //const itemData = await getResourcesData(params.id)
  return{
    paths,
    fallback: false
  };
}

// returns one documents data for matching id for getStaticPorps()
export async function getStaticProps( {params}) {
  const itemData = await getResourceData(params.id);
  return{
    props:{
      itemData
    }
  };
}


export default function Entry ({ itemData}){
  return(
    <article className="card col-6">
    <div className="card-body">
    <h5 className= "card-title"> {itemData.data.name}</h5>
    <p className="card-text">{itemData.data.phone}</p>
    {itemData.data.url ?
    <a className= "btn-primary" href={itemData.data.id}>Link out</a>
    :null
    }
    </div>
    </article>
  );
}