import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({to,href,children,primary,small,className,iconLeft,classIcon,iconRight,onClick,...passProps}) {

    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if(to){
        props.to = to
        Comp = Link
    }
    else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',
        {
            [className] : className,
            primary,
            small
        }
    )

    return ( 
        <Comp className={classes} {...props}>
            {iconLeft && <FontAwesomeIcon className={cx('iconLeft')} icon={iconLeft} />}
            <span className={cx('btn__text')}>{children}</span>
            {iconRight && <FontAwesomeIcon className={cx('iconRight')} icon={iconRight} />}
        </Comp>
    );
}

export default Button;