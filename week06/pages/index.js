import Head from 'next/head';
import Link from 'next/link';
import {getSortedList} from '../lib/data';
import Layout from '../components/layout';



export default function Home({allData}){
  return(
   
    <Layout home>
   
    <h1>List of Names</h1>

    <Link  href = "=../../../resources/5F8r20olzB8LtEDcn6lj">
    <a href="">jane doe</a>
    </Link>
    <p></p>
    <Link  href = "=../../../resources/DCbsbtUlfyOFzp3oRV9M">
    <a href="/">joseph doe</a>
   
    </Link>
    <p></p>
  
    </Layout>
  );
}