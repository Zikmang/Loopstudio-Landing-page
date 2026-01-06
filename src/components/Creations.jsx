import curiosity from '../images/desktop/image-curiosity.jpg';
import deepEarth from '../images/desktop/image-deep-earth.jpg';
import fishEye from '../images/desktop/image-fisheye.jpg';
import fromAbove from '../images/desktop/image-from-above.jpg';
import grid from '../images/desktop/image-grid.jpg';
import nightArcade from '../images/desktop/image-night-arcade.jpg';
import pocketBorealis from '../images/desktop/image-pocket-borealis.jpg';
import soccerTeam from '../images/desktop/image-soccer-team.jpg';
import curiosityMobile from '../images/mobile/image-curiosity.jpg';
import deepEarthMoblie from '../images/mobile/image-deep-earth.jpg';
import fishEyeMobile from '../images/mobile/image-fisheye.jpg';
import fromAboveMobile from '../images/mobile/image-from-above.jpg';
import gridMobile from '../images/mobile/image-grid.jpg';
import nightArcadeMobile from '../images/mobile/image-night-arcade.jpg';
import pocketBorealisMobile from '../images/mobile/image-pocket-borealis.jpg';
import soccerTeamMobile from '../images/mobile/image-soccer-team.jpg';
import ImageCard from './ImageCard';

import '../App.css'



const Creations = () => {
  return (
    <div className="py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl md:text-4xl font-light tracking-widest uppercase">
            Our Creations
          </h1>
          <button className="hidden md:block border-2 border-black px-10 py-2 hover:bg-black hover:text-white transition-colors tracking-widest uppercase text-sm font-light">
            see all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ImageCard title={'deep earth'} desktopImg={deepEarth} mobileImg={deepEarthMoblie} />
          <ImageCard title={'night arcade'} desktopImg={nightArcade} mobileImg={nightArcadeMobile}/>
          <ImageCard title={'soccer team vr'} desktopImg={soccerTeam} mobileImg={soccerTeamMobile} />
          <ImageCard title={'the grid'} desktopImg={grid} mobileImg={gridMobile}/>
          <ImageCard title={'from up above vr'} desktopImg={fromAbove} mobileImg={fromAboveMobile} />
          <ImageCard title={'pocket borealis'} desktopImg={pocketBorealis} mobileImg={pocketBorealisMobile}/>
          <ImageCard title={'the curiosity'} desktopImg={curiosity} mobileImg={curiosityMobile} />
          <ImageCard title={'make it fisheye'} desktopImg={fishEye} mobileImg={fishEyeMobile} />
        </div>

        <div className="flex justify-center md:hidden">
          <button className="border-2 border-black px-10 py-2 hover:bg-black hover:text-white transition-colors tracking-widest uppercase text-sm font-light">
            see all
          </button>
        </div>
      </div>
    </div>
  )
}

export default Creations
