import './SubHeading.css';

import { images } from '../../Constants';

const SubHeading = ({ title }) => {
    return (
        <div style={{ marginBottom: '1.6rem' }}>
            <p className="p__cormorant">{title}</p>
            <img className='spoon_img' src={images.spoon} alt="spoon" />
        </div>
    )
}

export default SubHeading
