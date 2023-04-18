import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

import styles from './Policy.module.scss'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function PolicyCard({data,className}) {
    return ( 
        <Link 
            className={cx('wrapper',{[className]:className})}
            to={data.to}
        >
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={data.icon} />
            </div>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    {data.name}
                </div>
                <div className={cx('desc')}>
                    {data.description}
                </div>
            </div>
        </Link>
    );
}

export default PolicyCard;