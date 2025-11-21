import Atropos from 'atropos/react';
import '../styles/components/AtroposBanner.css'

interface AtroposBannerProps {
    mainItem: string;
    background1 ?: string;
    background2 ?: string;
    brandLogo ?: string;
    height ?: number;
    width ?: number;
    vertical ?: boolean
}

const AtroposBanner: React.FC<AtroposBannerProps> = ({ mainItem, background1, background2, brandLogo, height, width, vertical }) => {
    return (
        <div className='banner border border-3 rounded-3 overflow-hidden' style={{height: `${height}px`, width: `${width}px`}}>
            <Atropos {...{ rotateXMax: 5, rotateYMax: 10, shadow: false} as any}>
                 {vertical ?
                    <img src={background1} alt="background1" className='layer bg1-vertical' data-atropos-offset="0"/>
                :
                    <img src={background1} alt="background1" className='layer bg1' data-atropos-offset="0"/>
                 }

                <img src={background2} alt="background2" className='layer bg2' data-atropos-offset="2"/>
                {vertical ?                 
                    <img src={brandLogo} alt="brandLogo-vertical" className="layer brandLogo-vertical" data-atropos-offset="5"/>
                : 
                    <img src={brandLogo} alt="brandLogo" className='layer brandLogo' data-atropos-offset="2"/>
                }
                {vertical ?
                    <img src={mainItem} className='layer main-item' alt='main-item'data-atropos-offset="10"/>
                :
                    <img src={mainItem} className='layer main-item' alt='main-item'data-atropos-offset="3"/>
                }
            </Atropos>
        </div>
    )
}


export default AtroposBanner;