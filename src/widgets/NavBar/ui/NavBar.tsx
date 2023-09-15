import cls from './NavBar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}
                    className={cls.mainLink}
                >Главная</AppLink>
            </div>
        </div>
    )
}