import React from "react";
import { ButtonLink, Count } from './styles.tsx';

export default function ButtonCount(props) {
    return (
      <ButtonLink href={props.url} className={`p-2 dark:text-white`}> {props.name} <Count> {props.count} </Count> </ButtonLink>
    )
}