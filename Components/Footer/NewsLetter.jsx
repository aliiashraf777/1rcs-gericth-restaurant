import './NewsLetter.css';

import SubHeading from '../SubHeading/SubHeading';
 
const NewsLetter = () => {
    return (
        <div className='app__newsletter'>
            <div className="app__newsletter-heading">
                <SubHeading title='Newsletter' />
                <h1 className="headtext__cormorant">
                    Subscribe To Our Newsletter
                </h1>
                <p className="p__opensans">
                    And never miss latest Updates!
                </p>
            </div>
            <div className="app__newsletter-input flex__center">
                <input type="text" placeholder='Enter you e-mail address' />
                <button className="custom__button">Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
