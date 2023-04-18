import classNames from "classnames/bind";

import styles from './Col.module.scss'

const cx = classNames.bind(styles)

function Col({l,m,s,mb,children}) {

    const classes = cx('col',{
        [`l-${l}`]:l,
        [`m-${m}`]:m,
        [`s-${s}`]:s,
    })

    return ( 
        <div className={classes} style={{marginBottom:`${mb}px`}}>
            {children}
        </div>
    );
}

export default Col;