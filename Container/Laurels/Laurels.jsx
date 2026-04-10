import './Laurels.css';

import { SubHeading } from '../../Components';

import { images, beverajes } from '../../Constants';
 

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="award" />

        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant"
                style={{ color: '#dcca87' }}>
                {title}
            </p>
            <p className="p__opensans"
                style={{ color: '#aaa' }}>
                {subtitle}
            </p>
        </div>
    </div>
)

const Laurels = () => {
    return (
        <div
            className='app__laurels app__wrapper app__bg section__padding'
            id='awards'>

            <div className="app__wrapper_info">
                <SubHeading title='Awards & recognition' />
                <h1 className="headtext__cormorant">Our Laurels</h1>

                <div className="app__laurels_awards">
                    {
                        beverajes.awards.map((award) => (
                            <AwardCard
                                key={award.title}
                                award={award}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="app__wrapper_img">
                <img src={images.laurels} alt="laurel-img" />
            </div>
        </div>
    )
}

export default Laurels
