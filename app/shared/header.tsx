'use client'

import {Group, Button, NavLink, Tabs, useMantineColorScheme, Switch} from '@mantine/core';
import {IconHome2, IconMessageCircle, IconPhoto, IconSettings} from "@tabler/icons-react";
import {useState} from 'react';

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
      <Group justify={"center"}>
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12}/>}>
              Home
            </Tabs.Tab>
            <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12}/>}>
              Investor sentiment
            </Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<IconSettings size={12}/>}>
              Maps
            </Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<IconSettings size={12}/>}>
              Lazy portfolios
            </Tabs.Tab>
            <Tabs.Tab value="settings" leftSection={<IconSettings size={12}/>}>
              ETFs
            </Tabs.Tab>
            <Tabs.Tab value="theme">
              <Switch
                checked={checked}
                onChange={handleChecked}
              />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>
    </>
  );
}