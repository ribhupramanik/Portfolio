import Portfolio from './portfolio';
import {validTrack} from './profiles';
export default async function Home({searchParams}:{searchParams:Promise<{track?:string}>}){const params=await searchParams;return <Portfolio initialTrack={validTrack(params?.track)}/>;}
