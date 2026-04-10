import './SpecialMenu.css'

import { images, beverajes } from '../../Constants';
import { SubHeading, MenuItem } from '../../Components';
 
const Menu = () => {
    return (
        <div className='app__specialMenu flex__center section__padding' id='menu'>

            <div className="app__specialMenu-title">
                <SubHeading title='Menu that fits you palatte' />
                <h1 className="headtext__cormorant">Today’s Special</h1>
            </div>

            <div className="app__specialMenu-menu">

                {/* wine */}
                <div className="app__specialMenu-menu_wine flex__center">
                    <h3 className="app__specialMenu-menu_heading">
                        Wine & Beers
                    </h3>

                    <div className="app__specialMenu-menu_items">
                        {beverajes.wines.map((wine, index) => (
                            <MenuItem
                                key={wine.title + index}
                                title={wine.title}
                                price={wine.price}
                                tags={wine.tags} />
                        ))}
                    </div>
                </div>

                {/* menu-img */}
                <div className="app__specialMenu-menu_img">
                    <img src={images.menu} alt="menu-img" />
                </div>

                {/* cocktails */}
                <div className="app__specialMenu-menu_cocktails flex__center">
                    <h3 className="app__specialMenu-menu_heading">
                        Cocktails
                    </h3>

                    <div className="app__specialMenu-menu_items">
                        {beverajes.cocktails.map((cocktail, index) => (
                            <MenuItem
                                key={cocktail.title + index}
                                title={cocktail.title}
                                price={cocktail.price}
                                tags={cocktail.tags}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="app__specialMenu-btn"
                style={{ marginTop: '15px' }}>
                <button className="custom__button">View More</button>
            </div>
        </div>
    )
}

export default Menu
