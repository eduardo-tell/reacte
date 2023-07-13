import React from "react";
import { ButtonLink, Count } from './styles.tsx';

export default function ButtonCount(props) {
    return (
      <ButtonLink 
        type="link"
        href={props.url} 
        className={`p-2 dark:text-white`}
      > 
        {props.name} 
        {props.count > 0 && <Count> {props.count} </Count>}
      </ButtonLink>
    )
}