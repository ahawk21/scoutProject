import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles/Home.module.css'

const Background = () => (
  <div>
    <ViewSource pathname="pages/background.js" />
    <div className={bgWrap}>
      <Image
        alt="Inventory"
        src="/images/scoutTemplate.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={bgText}>
      {/* Test2 */}
    </p>
  </div>
)

export default Background