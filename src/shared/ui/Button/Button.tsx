import cls from './Button.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    GHOST = 'ghost',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}