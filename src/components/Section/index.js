import classNames from 'classnames/bind'

import styles from './Section.module.scss'

const cx = classNames.bind(styles)

function Section({children,className}) {
    return ( 
        <div className={cx('wrapper',{[className]:className})}>
            {children}
        </div>
    );
}

export const SectionTitle = ({children}) => {
    return (
        <div className={cx('title')}>
            {children}
        </div>
    )
}

export const SectionBody = ({children,className}) => {
    return (
        <div className={cx('body',{[className]:className})}>
            {children}
        </div>
    )
}

export default Section;