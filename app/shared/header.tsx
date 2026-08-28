'use client'

import {Group, Button, NavLink, Tabs, useMantineColorScheme, Switch, Highlight} from '@mantine/core';
import {useState} from 'react';
import Link from "next/link";

export default function Header() {
  const {setColorScheme, colorScheme} = useMantineColorScheme();
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    const inverseColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(inverseColorScheme);
  }

  return (
    <>
      <div>&nbsp;</div>
      <Group justify={"flex-end"}>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Investor sentiment</Link>
        <Link href={"#"}>Maps</Link>
        <Switch
          checked={checked}
          onChange={handleChecked}
        />
      </Group>
      <div>&nbsp;</div>
    </>
  );
}