import {Badge, NumberFormatter} from "@mantine/core";
import {JSX} from "react";

export type PerformanceBadgeProps = {
  value: number;
}

export default function PerformanceBadge({value}: PerformanceBadgeProps): JSX.Element {
  return (
    <Badge variant="light" color={value > 0 ? "green" : "orange"} size="sm">
      <NumberFormatter value={value} decimalScale={2} suffix={"%"}/>
    </Badge>
  )
}