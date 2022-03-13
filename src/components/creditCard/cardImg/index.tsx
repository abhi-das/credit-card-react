import { useState } from "react";
import useFetchData from "../../../utils/hooks/useFetchData";

export interface CardImgDefaultProps {
    src: string;
    alt: string;
    icon: boolean;
    id?: string;
    title?: string;
    classes?: string;
}

const CardImg = (props: CardImgDefaultProps) => {
    const {src, alt, title, classes, icon} = props;
    const [isIcon] = useState<boolean>(icon);
    const { apiData } = useFetchData(src, icon);
    return <>
        {(!isIcon && apiData) && <div className="svg-container" dangerouslySetInnerHTML={{ __html: apiData}}/> }
        {isIcon && <img src={src} alt={alt} title={title} className={classes} />}
    </>
}
export default CardImg;